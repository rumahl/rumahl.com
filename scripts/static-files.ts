import {mkdir, writeFile} from 'node:fs/promises';
import {dirname, join} from 'node:path';
import {docs, help} from '@/components/rumahl/knowledge';
import {developerDocs} from '@/components/rumahl/developer-docs';
import {designDocs} from '@/components/design/design-docs';
import {postMetas} from '@/lib/blog';
import {docsAgentMarkdown, docsLlmsFullTxt, docsLlmsTxt, llmsFullTxt, llmsTxt, resolveMarkdown} from '@/lib/markdown';
import sitemap from '@/app/sitemap';

const SITE = 'https://rumahl.com';

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

async function write(outDir: string, path: string, body: string) {
  const file = join(outDir, path);
  await mkdir(dirname(file), {recursive: true});
  await writeFile(file, body, 'utf8');
}

function sitemapXml(entries: ReturnType<typeof sitemap>) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (entry) => `  <url>
    <loc>${escapeXml(entry.url)}</loc>
    <lastmod>${new Date(entry.lastModified ?? Date.now()).toISOString()}</lastmod>
    <changefreq>${entry.changeFrequency ?? 'monthly'}</changefreq>
    <priority>${entry.priority ?? 0.5}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;
}

function rssXml() {
  const items = [...postMetas].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  const lastBuildDate = items[0] ? new Date(items[0].date).toUTCString() : new Date().toUTCString();
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>rumahl</title>
    <link>${SITE}</link>
    <description>Releases and articles from rumahl — a local-first, open-source operating system for the home.</description>
    <language>en</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml" />
${items
  .map(
    (item) => `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${SITE}/blog/${item.slug}</link>
      <guid isPermaLink="true">${SITE}/blog/${item.slug}</guid>
      <category>${escapeXml(item.category)}</category>
      <description>${escapeXml(item.excerpt)}</description>
      <pubDate>${new Date(item.date).toUTCString()}</pubDate>
    </item>`
  )
  .join('\n')}
  </channel>
</rss>
`;
}

export async function runStaticExport(outDir: string) {
  const entries = sitemap();
  const markdownPaths = new Set<string>(entries.map((entry) => new URL(entry.url).pathname));

  // Documentation directories that are not separate sitemap entries.
  for (const article of docs) markdownPaths.add('/docs/' + article.slug);
  for (const article of help) markdownPaths.add('/help/' + article.slug);
  for (const article of developerDocs) markdownPaths.add('/developers/' + article.slug);
  for (const article of designDocs) markdownPaths.add('/design/docs/' + article.slug);
  for (const post of postMetas) markdownPaths.add('/blog/' + post.slug);

  for (const path of markdownPaths) {
    const clean = path.replace(/^\/+|\/+$/g, '');
    const segments = clean ? clean.split('/') : [];
    const doc = resolveMarkdown(segments);
    if (!doc) continue;
    const target = clean ? clean + '.md' : 'index.md';
    await write(outDir, target, doc.body);
  }

  await write(outDir, 'docs/ai.md', docsAgentMarkdown());
  await write(outDir, 'docs/llms.txt', docsLlmsTxt());
  await write(outDir, 'docs/llms-full.txt', docsLlmsFullTxt());
  await write(outDir, 'llms.txt', llmsTxt());
  await write(outDir, 'llms-full.txt', llmsFullTxt());
  await write(outDir, 'rss.xml', rssXml());
  await write(outDir, 'sitemap.xml', sitemapXml(entries));
  await write(outDir, 'robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);

  console.log(`Static extras written to ${outDir}: markdown, llms.txt, sitemap.xml, rss.xml, robots.txt`);
}
