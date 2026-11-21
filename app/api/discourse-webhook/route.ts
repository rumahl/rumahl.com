export const dynamic = 'force-dynamic';

/**
 * Discourse → website cache invalidation.
 *
 * Create a webhook in Discourse (Admin → API → Webhooks) that fires on topic
 * and post events to:
 *
 *   https://<website>/api/discourse-webhook?token=<DISCOURSE_WEBHOOK_SECRET>
 *
 * When it fires, the cached Discourse content is revalidated so new articles and
 * comments appear immediately instead of waiting for DISCOURSE_REVALIDATE.
 *
 * Revalidation is best-effort: if the runtime does not support it, the periodic
 * cache still applies and the webhook simply acknowledges the event.
 */
export async function POST(request: Request) {
  const secret = process.env.DISCOURSE_WEBHOOK_SECRET ?? '';
  const url = new URL(request.url);
  const provided =
    url.searchParams.get('token') ?? request.headers.get('x-rumahl-webhook-secret') ?? '';

  if (secret && provided !== secret) {
    return Response.json({error: 'unauthorized'}, {status: 401});
  }

  let revalidated = false;
  try {
    const {revalidatePath, updateTag} = await import('next/cache');
    updateTag('discourse');
    revalidatePath('/blog');
    revalidatePath('/');
    revalidated = true;
  } catch {
    // Not fatal — the periodic DISCOURSE_REVALIDATE cache still applies.
  }

  return Response.json({ok: true, revalidated, at: new Date().toISOString()});
}
