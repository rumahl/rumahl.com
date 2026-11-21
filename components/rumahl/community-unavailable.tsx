import {ArrowUpRight, CloudOff} from 'lucide-react';

/**
 * Shown when the community (Discourse) is configured but cannot be reached.
 * Deliberately not a 404: the content exists, it just cannot be loaded right
 * now — so we point people straight at the community.
 */
export function CommunityUnavailable({url}: {url: string}) {
  let host = 'community.rumahl.com';
  try {
    host = new URL(url).host;
  } catch {
    // keep the default
  }

  return (
    <section className="community-unavailable" aria-live="polite">
      <span className="community-unavailable-icon">
        <CloudOff size={30} />
      </span>
      <h2>Community is temporarily unavailable.</h2>
      <p>
        Some community features can&apos;t be loaded right now. The articles, releases and discussions all live in our
        community — please visit us there.
      </p>
      <a className="button" href={url} target="_blank" rel="noreferrer">
        Go to {host} <ArrowUpRight size={15} />
      </a>
    </section>
  );
}
