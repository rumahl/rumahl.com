import type {BlogPost, BlogPostMeta} from './blog';
import {posts as localPosts, postMetas as localMetas} from './blog';

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  DISCOURSE
 * ─────────────────────────────────────────────────────────────────────────────
 *  The rumahl community runs on a self-hosted Discourse at community.rumahl.com.
 *  Blog articles, releases and announcements are authored there and rendered on
 *  this website in its own design. Content is fetched server-side at request
 *  time (with caching), so new topics appear without a redeploy.
 *
 *  Configure via environment variables (in a `.env` file, which the vinext
 *  runtime loads — shell environment variables are not picked up):
 *    DISCOURSE_URL               e.g. https://community.rumahl.com
 *    DISCOURSE_API_KEY           optional (private instance / rate limits)
 *    DISCOURSE_API_USERNAME      optional (defaults to "system")
 *    DISCOURSE_BLOG_CATEGORY     category slug for /blog      (default: blog)
 *    DISCOURSE_RELEASES_CATEGORY category slug for releases   (default: releases)
 *    DISCOURSE_REVALIDATE        cache seconds                (default: 300)
 *
 *  When Discourse is not configured, the local Markdown articles in content/blog
 *  are used. When it is configured but unreachable, the blog shows an
 *  "unavailable" notice instead (see CommunityStatus).
 * ─────────────────────────────────────────────────────────────────────────────
 */
const base = (process.env.DISCOURSE_URL ?? '').replace(/\/+$/, '');
const apiKey = process.env.DISCOURSE_API_KEY ?? '';
const apiUser = process.env.DISCOURSE_API_USERNAME ?? 'system';
const blogCategory = process.env.DISCOURSE_BLOG_CATEGORY ?? 'blog';
const releasesCategory = process.env.DISCOURSE_RELEASES_CATEGORY ?? 'releases';
const revalidate = Number(process.env.DISCOURSE_REVALIDATE ?? 300) || 300;

export const discourseUrl = base;
export const discourseConfigured = Boolean(base);
export const communityUrl = base || 'https://community.rumahl.com';

/**
 * - `local`       — Discourse is not configured; local Markdown is shown.
 * - `available`   — Discourse responded; its content is shown.
 * - `unavailable` — Discourse is configured but could not be reached.
 */
export type CommunityStatus = 'local' | 'available' | 'unavailable';

type DiscourseUser = {
  id: number;
  username: string;
  name?: string;
  avatar_template?: string;
};

type DiscourseTopic = {
  id: number;
  title: string;
  slug: string;
  created_at: string;
  excerpt?: string;
  image_url?: string;
  tags?: string[];
  posts_count?: number;
  reply_count?: number;
  category_id?: number;
  posters?: {user_id: number; description?: string}[];
};

type DiscoursePost = {
  id: number;
  topic_id: number;
  post_number: number;
  username: string;
  name?: string;
  created_at: string;
  raw?: string;
  cooked?: string;
  avatar_template?: string;
};

type CategoryResponse = {
  topic_list?: {topics?: DiscourseTopic[]};
  users?: DiscourseUser[];
};

type TopicResponse = {
  id: number;
  title: string;
  slug: string;
  created_at: string;
  category_id?: number;
  tags?: string[];
  posts_count?: number;
  post_stream?: {posts?: DiscoursePost[]};
  details?: {participants?: DiscourseUser[]};
};

export type DiscourseComment = {
  id: number;
  author: string;
  authorUrl?: string;
  avatar?: string;
  date: string;
  body: string;
};

export type DiscourseThread = {
  post: BlogPost;
  comments: DiscourseComment[];
  topicUrl: string;
};

/** Returns null when the request could not be completed (unreachable / error). */
async function api<T>(path: string): Promise<T | null> {
  if (!base) return null;
  try {
    const response = await fetch(base + path, {
      headers: {
        Accept: 'application/json',
        ...(apiKey ? {'Api-Key': apiKey, 'Api-Username': apiUser} : {}),
      },
      next: {revalidate, tags: ['discourse']},
    });
    if (!response.ok) return null;
    return (await response.json()) as T;
  } catch {
    return null;
  }
}

function profileUrl(username: string | undefined): string | undefined {
  return base && username ? `${base}/u/${username}` : undefined;
}

function resolveAvatar(template: string | undefined, size = 48): string | undefined {
  if (!template) return undefined;
  const withSize = template.replace('{size}', String(size));
  if (/^https?:\/\//.test(withSize)) return withSize;
  if (withSize.startsWith('//')) return `https:${withSize}`;
  return `${base}${withSize.startsWith('/') ? '' : '/'}${withSize}`;
}

function stripMarkdown(value: string): string {
  return value
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_`~|-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function estimateReadTime(body: string): number {
  return Math.max(1, Math.round(stripMarkdown(body).split(' ').filter(Boolean).length / 200));
}

function excerptFrom(body: string): string {
  const text = stripMarkdown(body);
  return text.length <= 180 ? text : text.slice(0, 177).trimEnd() + '…';
}

function authorOf(post: DiscoursePost | undefined): string {
  return post?.name?.trim() || post?.username || 'rumahl';
}

function replyCountOf(topic: {posts_count?: number; reply_count?: number}, fallback = 1): number {
  if (typeof topic.reply_count === 'number') return Math.max(0, topic.reply_count);
  return Math.max(0, (topic.posts_count ?? fallback) - 1);
}

function topicToMeta(topic: DiscourseTopic, category: string, users: Map<number, DiscourseUser>): BlogPostMeta {
  const originalPoster = topic.posters?.[0];
  const user = originalPoster ? users.get(originalPoster.user_id) : undefined;
  return {
    slug: topic.slug,
    title: topic.title,
    excerpt: topic.excerpt ? excerptFrom(topic.excerpt) : '',
    category,
    date: topic.created_at,
    author: user?.name?.trim() || user?.username || 'rumahl',
    authorAvatar: resolveAvatar(user?.avatar_template, 48),
    authorUrl: profileUrl(user?.username),
    readTime: 0,
    cover: topic.image_url,
    coverClass: undefined,
    tags: topic.tags ?? [],
    featured: false,
    replyCount: replyCountOf(topic),
  };
}

function topicToPost(topic: TopicResponse, category: string): BlogPost {
  const first = topic.post_stream?.posts?.[0];
  const participant = topic.details?.participants?.find((entry) => entry.username === first?.username);
  const body = first?.raw ?? '';
  return {
    slug: topic.slug,
    title: topic.title,
    excerpt: excerptFrom(body),
    category,
    date: topic.created_at,
    author: authorOf(first),
    authorAvatar: resolveAvatar(first?.avatar_template ?? participant?.avatar_template, 96),
    authorUrl: profileUrl(first?.username),
    readTime: estimateReadTime(body),
    cover: undefined,
    coverClass: undefined,
    tags: topic.tags ?? [],
    featured: false,
    body,
    replyCount: replyCountOf(topic),
  };
}

const categories: readonly (readonly [string, string])[] = [
  [blogCategory, 'Blog'],
  [releasesCategory, 'Release'],
];

async function fetchCategory(
  slug: string,
  label: string
): Promise<{posts: BlogPostMeta[]; ok: boolean}> {
  const data = await api<CategoryResponse>(`/c/${encodeURIComponent(slug)}.json`);
  if (!data) return {posts: [], ok: false};
  const users = new Map<number, DiscourseUser>((data.users ?? []).map((user) => [user.id, user]));
  return {posts: (data.topic_list?.topics ?? []).map((topic) => topicToMeta(topic, label, users)), ok: true};
}

function localList(kind: 'blog' | 'releases' | 'all'): BlogPostMeta[] {
  if (kind === 'releases') return localMetas.filter((post) => post.category === 'Release');
  if (kind === 'blog') return localMetas.filter((post) => post.category !== 'Release');
  return localMetas;
}

/**
 * Blog and/or release metas. `status` tells callers whether the content is the
 * local fallback, live from Discourse, or unavailable.
 */
export async function getBlogPosts(
  kind: 'blog' | 'releases' | 'all' = 'all'
): Promise<{posts: BlogPostMeta[]; status: CommunityStatus}> {
  if (!discourseConfigured) {
    return {posts: localList(kind), status: 'local'};
  }

  const wanted = categories.filter(([slug]) => kind === 'all' || slug === (kind === 'releases' ? releasesCategory : blogCategory));
  const results = await Promise.all(wanted.map(([slug, label]) => fetchCategory(slug, label)));

  const posts = results.flatMap((result) => result.posts);
  const anyFailed = results.some((result) => !result.ok);

  if (anyFailed && posts.length === 0) {
    return {posts: [], status: 'unavailable'};
  }
  return {
    posts: posts.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0)),
    status: 'available',
  };
}

/** The article plus its Discourse replies (inline comments). */
export async function getBlogThread(
  slug: string
): Promise<{thread?: DiscourseThread; status: CommunityStatus}> {
  if (!discourseConfigured) {
    const local = localPosts.find((post) => post.slug === slug);
    if (!local) return {status: 'local'};
    return {
      thread: {
        post: local,
        comments: [],
        topicUrl: `${communityUrl}/search?q=${encodeURIComponent(local.title)}`,
      },
      status: 'local',
    };
  }

  let anyFailed = false;
  for (const [categorySlug, label] of categories) {
    const data = await api<CategoryResponse>(`/c/${encodeURIComponent(categorySlug)}.json`);
    if (!data) {
      anyFailed = true;
      continue;
    }
    const topics = data.topic_list?.topics ?? [];
    const match = topics.find((topic) => topic.slug === slug);
    if (!match) continue;

    const topic = await api<TopicResponse>(`/t/${match.id}.json`);
    if (!topic) {
      anyFailed = true;
      continue;
    }

    const participants = new Map((topic.details?.participants ?? []).map((user) => [user.username, user]));
    const comments: DiscourseComment[] = (topic.post_stream?.posts ?? [])
      .filter((post) => post.post_number > 1)
      .map((post) => ({
        id: post.id,
        author: authorOf(post),
        authorUrl: profileUrl(post.username),
        avatar: resolveAvatar(post.avatar_template ?? participants.get(post.username)?.avatar_template, 48),
        date: post.created_at,
        body: post.raw ?? '',
      }));

    return {
      thread: {
        post: topicToPost(topic, label),
        comments,
        topicUrl: `${base}/t/${topic.slug}/${topic.id}`,
      },
      status: 'available',
    };
  }

  // Reachable, but no topic with that slug (or a request failed mid-way).
  return {status: anyFailed ? 'unavailable' : 'available'};
}

export async function getRelatedPosts(slug: string, limit = 3): Promise<BlogPostMeta[]> {
  const {posts} = await getBlogPosts('all');
  return posts.filter((post) => post.slug !== slug).slice(0, limit);
}
