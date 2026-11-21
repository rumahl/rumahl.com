import {llmsFullTxt} from '@/lib/markdown';

export const dynamic = 'force-dynamic';

export function GET() {
  return new Response(llmsFullTxt(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
