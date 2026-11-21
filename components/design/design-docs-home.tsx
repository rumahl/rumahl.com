'use client';
import Link from 'next/link';
import {useMemo, useState} from 'react';
import {ArrowRight, BookOpen, Search, X} from 'lucide-react';
import {designDocs, designDocQuickLinks} from './design-docs';

const coverByArea: Record<string, string> = {
  Overview: 'cover-blue',
  'Web design system': 'cover-teal',
  'OS design system': 'cover-indigo',
  Tooling: 'cover-amber',
  Process: 'cover-green',
};

const groups = ['Start here', 'RWDS', 'RUI', 'Process'];

export function DesignDocsHome() {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return designDocs
      .filter((article) =>
        [article.title, article.summary, article.area, article.group]
          .join(' ')
          .toLowerCase()
          .includes(q)
      )
      .slice(0, 8);
  }, [query]);

  const featured = designDocs.filter((article) => article.featured);

  return (
    <div className="portal-scope content-main" style={{'--content-accent': 'var(--design-accent)'} as React.CSSProperties}>
      <section className="content-hero">
        <div className="content-hero-inner">
          <span className="content-eyebrow">
            <BookOpen size={13} /> Design documentation
          </span>
          <h1>
            RWDS and RUI,<br /><span className="gradient-text">documented.</span>
          </h1>
          <p className="lead">
            Reference documentation for the two rumahl design systems: tokens, components, theming,
            adoption, versioning and contribution. Separate from the user docs and the platform developer docs.
          </p>
          <div className="content-search" style={{position: 'relative', marginTop: 28}}>
            <Search size={19} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search the design documentation…"
              aria-label="Search the design documentation"
            />
            {query ? (
              <button type="button" onClick={() => setQuery('')} aria-label="Clear search">
                <X size={16} />
              </button>
            ) : (
              <kbd>Ctrl K</kbd>
            )}
            {query && (
              <div className="content-search-drop">
                {results.length === 0 ? (
                  <p style={{padding: '18px 16px', fontSize: 14, color: 'var(--foreground-muted)'}}>
                    No results for “{query}”.
                  </p>
                ) : (
                  results.map((article) => (
                    <Link key={article.slug} href={'/design/docs/' + article.slug}>
                      <span>
                        <strong>{article.title}</strong>
                        <small>{article.summary}</small>
                      </span>
                    </Link>
                  ))
                )}
              </div>
            )}
          </div>
          <div className="content-pills">
            {designDocQuickLinks.map((link) => (
              <Link key={link.slug} href={'/design/docs/' + link.slug} className="content-pill">
                <ArrowRight size={13} /> {link.label}
              </Link>
            ))}
          </div>
          <div className="content-pills" style={{marginTop: 10}}>
            <Link className="content-pill" href="/design/storybook">Storybook builds</Link>
            <Link className="content-pill" href="/design/glossary">Glossary</Link>
            <Link className="content-pill" href="/design/resources">Adoption &amp; source</Link>
            <Link className="content-pill" href="/docs">User documentation</Link>
            <Link className="content-pill" href="/developers">Developer documentation</Link>
          </div>
        </div>
      </section>

      <section className="content-section" id="featured">
        <div className="content-head">
          <div>
            <h2>Featured <span className="gradient-text">documentation</span></h2>
            <p>Start with the system model, then open the reference for the surface you are working on.</p>
          </div>
        </div>
        <div className="content-grid">
          {featured.map((article) => (
            <Link key={article.slug} href={'/design/docs/' + article.slug} className="content-card">
              <div className={'content-card-cover ' + (coverByArea[article.area] ?? 'cover-blue')}>
                <span>{article.area}</span>
                <em><ArrowRight size={20} /></em>
              </div>
              <div className="content-card-body">
                <h3>{article.title}</h3>
                <p>{article.summary}</p>
                <div className="content-card-meta">
                  <span>{article.readTime} min</span>
                  <b>Read <ArrowRight size={14} /></b>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="content-section" id="all">
        <div className="content-head">
          <div>
            <h2>All <span className="gradient-text">design documentation</span></h2>
            <p>Grouped by system and process. Every article is maintained with the implementation it documents.</p>
          </div>
        </div>
        <div className="content-browse">
          {groups.map((group) => {
            const articles = designDocs.filter((article) => article.group === group);
            if (!articles.length) return null;
            const areas = Array.from(new Set(articles.map((article) => article.area)));
            return (
              <section key={group}>
                <h3>{group}</h3>
                <div className="content-browse-grid">
                  {areas.map((area) => (
                    <div key={area}>
                      <p className="content-area-label">{area}</p>
                      <ul>
                        {articles.filter((article) => article.area === area).map((article) => (
                          <li key={article.slug}>
                            <Link href={'/design/docs/' + article.slug}>
                              <span className={'content-bar ' + (coverByArea[area] ?? 'cover-blue')} />
                              <span>
                                <strong>{article.title}</strong>
                                <small>{article.summary}</small>
                              </span>
                              <em>{article.readTime} min</em>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <section className="content-section" id="more">
        <div className="content-cta">
          <Link href="/design/storybook">
            <BookOpen size={22} />
            <h2>Storybook</h2>
            <p>Open the RUI Storybook from rumahl/rumahl or the RWDS Storybook for the website design system.</p>
            <b>Open Storybook <ArrowRight size={15} /></b>
          </Link>
          <Link href="/design/systems">
            <Search size={22} />
            <h2>Which system applies?</h2>
            <p>Compare RWDS and RUI, check the shared constraints and read the boundary rules.</p>
            <b>Open comparison <ArrowRight size={15} /></b>
          </Link>
        </div>
      </section>
    </div>
  );
}
