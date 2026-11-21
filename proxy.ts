import {NextResponse, type NextRequest} from 'next/server';

const STATIC_EXTENSION = /\.(?:css|js|mjs|cjs|map|png|jpe?g|gif|webp|avif|svg|ico|woff2?|ttf|otf|eot|xml|txt|json|zip|pdf|mp4|webm|wav|mp3)$/i;

function shouldSkip(pathname: string): boolean {
  return (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/md') ||
    pathname.startsWith('/llms') ||
    pathname === '/rss.xml' ||
    pathname === '/sitemap.xml' ||
    pathname === '/robots.txt'
  );
}

function acceptsMarkdown(request: NextRequest): boolean {
  const header = request.headers.get('accept') ?? '';
  return header
    .split(',')
    .map((part) => part.split(';')[0]?.trim().toLowerCase())
    .includes('text/markdown');
}

export function proxy(request: NextRequest) {
  if (request.method !== 'GET' && request.method !== 'HEAD') return NextResponse.next();

  const {pathname, searchParams} = request.nextUrl;
  if (shouldSkip(pathname)) return NextResponse.next();

  const hasMarkdownExtension = pathname.endsWith('.md');
  if (!hasMarkdownExtension && STATIC_EXTENSION.test(pathname)) return NextResponse.next();

  const wantsMarkdown = hasMarkdownExtension || searchParams.get('format') === 'md' || acceptsMarkdown(request);
  if (!wantsMarkdown) return NextResponse.next();

  let htmlPath = pathname;
  if (hasMarkdownExtension) htmlPath = htmlPath.slice(0, -3);
  if (!htmlPath.startsWith('/')) htmlPath = '/' + htmlPath;
  if (htmlPath === '/') {
    return NextResponse.rewrite(new URL('/md', request.url));
  }

  const target = new URL('/md' + htmlPath, request.url);
  target.search = '';
  return NextResponse.rewrite(target);
}
