import {markdownHeaders, resolveMarkdown} from '@/lib/markdown';

export const dynamic = 'force-dynamic';

export function GET() {
  const doc = resolveMarkdown([]);
  if (!doc) {
    return new Response('# Not found\n', {
      status: 404,
      headers: {'Content-Type': 'text/markdown; charset=utf-8'},
    });
  }
  return new Response(doc.body, {headers: markdownHeaders(doc)});
}
