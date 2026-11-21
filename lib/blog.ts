/// <reference types="vite/client" />

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  BLOG / ARTICLES
 * ─────────────────────────────────────────────────────────────────────────────
 *  Articles are plain Markdown files with YAML frontmatter, discovered at build
 *  time from `content/blog/*.md`. Drop a new file in and it appears in the index,
 *  the sitemap and the RSS feed automatically. Release notes are just articles
 *  in the `Release` category.
 *
 *  Supported frontmatter:
 *    title, slug, excerpt, category, date (YYYY-MM-DD), author,
 *    readTime (optional — computed from the body otherwise),
 *    cover (image path) | coverClass ("cover-green"), tags: [...], featured: true
 * ─────────────────────────────────────────────────────────────────────────────
 */
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  readTime: number;
  cover?: string;
  coverClass?: string;
  tags: string[];
  featured?: boolean;
  body: string;
  /** Author avatar (from Discourse when available). */
  authorAvatar?: string;
  /** Link to the author's Discourse profile (when available). */
  authorUrl?: string;
  /** Number of replies / comments (from Discourse when available). */
  replyCount?: number;
};

export type BlogPostMeta = Omit<BlogPost, 'body'>;

type FrontmatterValue = string | string[] | boolean | number;

const sources = import.meta.glob('../content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

function unquote(value: string): string {
  const trimmed = value.trim();
  if (trimmed.startsWith('"') && trimmed.endsWith('"')) {
    try {
      return JSON.parse(trimmed);
    } catch {
      return trimmed.slice(1, -1);
    }
  }
  if (trimmed.startsWith("'") && trimmed.endsWith("'")) return trimmed.slice(1, -1);
  return trimmed;
}

function parseList(value: string): string[] {
  const inner = value.trim().replace(/^\[/, '').replace(/\]$/, '');
  return inner
    .split(',')
    .map((item) => unquote(item))
    .filter(Boolean);
}

function parseFrontmatter(raw: string): {data: Record<string, FrontmatterValue>; body: string} {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(raw);
  if (!match) return {data: {}, body: raw};

  const data: Record<string, FrontmatterValue> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const entry = /^([A-Za-z0-9_-]+):\s*(.*)$/.exec(line.trim());
    if (!entry) continue;
    const [, key, value] = entry;
    if (value.startsWith('[')) data[key] = parseList(value);
    else if (value === 'true' || value === 'false') data[key] = value === 'true';
    else if (value !== '' && !Number.isNaN(Number(value))) data[key] = Number(value);
    else data[key] = unquote(value);
  }
  return {data, body: raw.slice(match[0].length)};
}

function asString(value: FrontmatterValue | undefined, fallback = ''): string {
  return typeof value === 'string' ? value : fallback;
}

function asStringArray(value: FrontmatterValue | undefined): string[] {
  if (Array.isArray(value)) return value.map(String);
  if (typeof value === 'string' && value) return [value];
  return [];
}

function estimateReadTime(body: string, explicit: FrontmatterValue | undefined): number {
  if (typeof explicit === 'number' && explicit > 0) return explicit;
  const words = body
    .replace(/```[\s\S]*?```/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function toPost(filePath: string, raw: string): BlogPost {
  const fallbackSlug = filePath.split('/').pop()!.replace(/\.md$/, '');
  const {data, body} = parseFrontmatter(raw);
  const trimmedBody = body.trim();
  return {
    slug: asString(data.slug, fallbackSlug),
    title: asString(data.title, fallbackSlug),
    excerpt: asString(data.excerpt),
    category: asString(data.category, 'Article'),
    date: asString(data.date),
    author: asString(data.author, 'The rumahl team'),
    readTime: estimateReadTime(trimmedBody, data.readTime),
    cover: data.cover ? asString(data.cover) : undefined,
    coverClass: data.coverClass ? asString(data.coverClass) : undefined,
    tags: asStringArray(data.tags),
    featured: data.featured === true,
    body: trimmedBody,
  };
}

export const posts: BlogPost[] = Object.entries(sources)
  .map(([filePath, raw]) => toPost(filePath, raw))
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

/** Metadata only — safe to use in listings and search without pulling bodies. */
export const postMetas: BlogPostMeta[] = posts.map((post) => ({
  slug: post.slug,
  title: post.title,
  excerpt: post.excerpt,
  category: post.category,
  date: post.date,
  author: post.author,
  readTime: post.readTime,
  cover: post.cover,
  coverClass: post.coverClass,
  tags: post.tags,
  featured: post.featured,
}));

export const categories = Array.from(new Set(posts.map((post) => post.category))).sort();

export const allTags = Array.from(new Set(posts.flatMap((post) => post.tags))).sort();

export function postsByCategory(category: string): BlogPostMeta[] {
  return postMetas.filter((post) => post.category.toLowerCase() === category.toLowerCase());
}

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function relatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPost(slug);
  if (!current) return posts.slice(0, limit);
  const scored = posts
    .filter((post) => post.slug !== slug)
    .map((post) => ({
      post,
      score: post.tags.filter((tag) => current.tags.includes(tag)).length + (post.category === current.category ? 1 : 0),
    }))
    .sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((entry) => entry.post);
}

export function formatPostDate(iso: string, lang: 'en' | 'de' = 'en'): string {
  try {
    return new Date(iso).toLocaleDateString(lang === 'de' ? 'de-DE' : 'en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  } catch {
    return iso;
  }
}
