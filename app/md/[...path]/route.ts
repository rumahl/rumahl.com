import {getBlogThread} from '@/lib/discourse';
import {blogMarkdown, markdownHeaders, resolveMarkdown} from '@/lib/markdown';

export const dynamic = 'force-dynamic';

type Context = {params: Promise<{path: string[]}>};

/**
 * Blog posts can be authored in Discourse after the local fallback was
 * committed. Prefer the live thread when one is available so the Markdown view
 * stays in step with the HTML article.
 */
async function liveBlogMarkdown(path: string[]) {
  if (path[0] !== 'blog' || path.length !== 2) return null;
  try {
    const {thread, status} = await getBlogThread(path[1]);
    if (status === 'unavailable' || !thread) return null;
    const {post} = thread;
    return {
      path: '/blog/' + post.slug,
      title: post.title,
      description: post.excerpt,
      updated: post.date,
      body: blogMarkdown(post),
    };
  } catch {
    return null;
  }
}

export async function GET(_request: Request, {params}: Context) {
  const {path} = await params;
  const doc = (await liveBlogMarkdown(path)) ?? resolveMarkdown(path);
  if (!doc) {
    return new Response(`# Not found\n\nNo Markdown representation exists for /${path.join('/')}.\n`, {
      status: 404,
      headers: {'Content-Type': 'text/markdown; charset=utf-8'},
    });
  }
  return new Response(doc.body, {headers: markdownHeaders(doc)});
}
