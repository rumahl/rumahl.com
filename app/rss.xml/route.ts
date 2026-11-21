import {postMetas} from '@/lib/blog';

export const dynamic = 'force-static';

const site = 'https://rumahl.com';

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function toRfc822(iso: string): string {
  const date = new Date(iso);
  return Number.isNaN(date.getTime()) ? new Date().toUTCString() : date.toUTCString();
}

export function GET() {
  const items = [...postMetas].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  const lastBuildDate = items[0] ? toRfc822(items[0].date) : new Date().toUTCString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>rumahl</title>
    <link>${site}</link>
    <description>Releases and articles from rumahl — a local-first, open-source operating system for the home.</description>
    <language>en</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${site}/rss.xml" rel="self" type="application/rss+xml" />
${items
  .map(
    (item) => `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${site}/blog/${item.slug}</link>
      <guid isPermaLink="true">${site}/blog/${item.slug}</guid>
      <category>${escapeXml(item.category)}</category>
      <description>${escapeXml(item.excerpt)}</description>
      <pubDate>${toRfc822(item.date)}</pubDate>
    </item>`
  )
  .join('\n')}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {'Content-Type': 'application/rss+xml; charset=utf-8'},
  });
}
