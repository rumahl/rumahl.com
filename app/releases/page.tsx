import type {Metadata} from 'next';
import {ArrowUpRight, Download} from 'lucide-react';
import {Navigation} from '@/components/rumahl/navigation';
import {Footer} from '@/components/rumahl/sections';
import {releases, formatReleaseDate} from '@/lib/releases';

export const metadata: Metadata = {
  title: 'Releases — rumahl',
  description: 'Every rumahl OS release with highlights and a full changelog.',
  alternates: {canonical: '/releases', types: {'text/markdown': '/releases.md'}},
};

export default function ReleasesPage() {
  return (
    <>
      <Navigation />
      <main className="portal-scope">
        <section className="release-hero">
          <span className="blog-eyebrow">Releases</span>
          <h1>
            Every <span className="gradient-text">release</span>.
          </h1>
          <p>
            rumahl OS is in development. Here is every milestone so far — with the highlights and a full changelog.
          </p>
          <div className="release-actions">
            <a className="button" href="https://github.com/rumahl/rumahl/releases">
              Download latest <Download size={16} />
            </a>
            <a className="text-link" href="https://github.com/rumahl/rumahl/releases">
              All releases on GitHub <ArrowUpRight size={16} />
            </a>
          </div>
        </section>

        <section className="release-timeline">
          {releases.map((release, index) => (
            <article className="release-item" data-type={release.type} key={release.version}>
              <div className="release-head">
                <span className="release-version">{release.version}</span>
                {release.name && <span className="release-name">{release.name}</span>}
                <span className="release-badge" data-type={release.type}>
                  {release.type}
                </span>
                {index === 0 && <span className="release-latest">● Latest</span>}
                <span className="release-date">{formatReleaseDate(release.date)}</span>
              </div>
              <p className="release-summary">{release.summary}</p>
              {release.highlights && release.highlights.length > 0 && (
                <div className="release-highlights">
                  {release.highlights.map((highlight) => (
                    <span key={highlight}>{highlight}</span>
                  ))}
                </div>
              )}
              {release.changelog && release.changelog.length > 0 && (
                <div className="release-changelog">
                  {release.changelog.map((group) => (
                    <div className="release-group" key={group.type}>
                      <strong>{group.type}</strong>
                      <ul>
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
