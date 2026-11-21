'use client';
import {ArticleTools} from '@/components/rumahl/article-tools';
import {ApiDiagram, Callout, Checklist, EndpointGroup} from './content-elements';
import {useEffect, useId, useMemo, useRef, useState} from 'react';
import {useRouter} from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Blocks,
  BookOpen,
  Bot,
  Cable,
  CalendarDays,
  CheckCircle2,
  CircleCheck,
  CircleDashed,
  CircleX,
  Clock,
  Code2,
  FileText,
  House,
  KeyRound,
  LifeBuoy,
  ListTree,
  Mail,
  MessagesSquare,
  MonitorPlay,
  PackageCheck,
  Palette,
  RotateCcw,
  Search,
  Server,
  Terminal,
  Waypoints,
  Wrench,
  X,
} from 'lucide-react';
import {docs, help, faqs, docQuickLinks, helpPopular, helpChannels, type Article} from './knowledge';
import {developerDocs, developerQuickLinks, developerFeatured} from './developer-docs';
import {designDocs} from '@/components/design/design-docs';
import {posts} from '@/lib/blog';
import {releases} from '@/lib/releases';
import {cn} from '@/lib/utils';
import {Navigation} from './navigation';
import {ScrollMotion} from './motion';
import {Footer} from './sections';
import {useLang} from './language';
import {RichMarkdown,MarkdownCode} from './rich-markdown';
import {ArticleToc} from './article-toc';
import {useArticleWidth, ArticleWidthToggle} from './article-width';
import {DocsCard, docsAreaCover as areaCover} from '@/components/rwds/docs-card';
import {DocsSidebar} from '@/components/rwds/docs-sidebar';
import {groupArticles} from '@/components/rwds/docs-utils';

type PortalKind = 'docs' | 'help' | 'developers' | 'design';

const portalBase = (kind: PortalKind) => (kind === 'design' ? '/design/docs' : '/' + kind);
const articleHref = (kind: PortalKind, slug: string) => portalBase(kind) + '/' + slug;

type Item = {title: string; summary: string; href: string; area: string; group: string; body?:string};
const toItem = (a: Article, kind: PortalKind): Item => ({
  title: a.title,
  summary: a.summary,
  href: kind === 'design' ? '/design/docs/' + a.slug : '/' + kind + '/' + a.slug,
  area: a.area,
  group: a.group,
  body:a.sections.map(section=>[section.title,section.text,section.markdown,...(section.list||[]),...(section.steps||[]),section.code?.content].filter(Boolean).join(' ')).join(' '),
});
const docsPool: Item[] = docs.map((a) => toItem(a, 'docs'));
const helpPool: Item[] = help.map((a) => toItem(a, 'help'));
const developerPool: Item[] = developerDocs.map((a) => toItem(a, 'developers'));
const extraPool: Item[] = [
  {title: 'About the project', summary: 'An independent open-source project, its direction and its name.', href: '/about', area: 'rumahl', group: 'Project'},
  {title: 'Security', summary: 'Report a vulnerability, severity scoring and disclosure.', href: '/security', area: 'Security', group: 'Community'},
  {title: 'Releases', summary: 'Every rumahl OS release with highlights and changelog.', href: '/releases', area: 'Releases', group: 'Releases'},
  {title: 'Apps', summary: 'Apps live in the public repository and are submitted via pull request.', href: '/legal/apps', area: 'Community', group: 'Community'},
  {title: 'Contributing', summary: 'How to report bugs, propose features and submit pull requests.', href: '/legal/contributing', area: 'Community', group: 'Community'},
  {title: 'Code of Conduct', summary: 'How we treat each other across all projects.', href: '/legal/code-of-conduct', area: 'Community', group: 'Community'},
  {title: 'Trademark Policy', summary: 'How the rumahl name and logo may be used.', href: '/legal/trademark', area: 'Community', group: 'Community'},
  {title: 'Legal', summary: 'All policies and terms in one place.', href: '/legal', area: 'Legal', group: 'Legal'},
  ...posts.map((p) => ({title: p.title, summary: p.excerpt, href: '/blog/' + p.slug, area: p.category, group: 'Blog'})),
  ...releases.map((r) => ({title: `rumahl OS ${r.version}${r.name ? ` “${r.name}”` : ''}`, summary: r.summary, href: '/releases', area: 'Releases', group: 'Releases'})),
];
const combinedPool: Item[] = [...docsPool, ...helpPool, ...extraPool];

export function PortalShell({kind, children}: {kind: PortalKind; children: React.ReactNode}) {
  return (
    <div data-portal={kind} data-section={kind}>
      <a href="#portal-content" className="skip-link">
        Skip to content
      </a>
      <Navigation />

      <main id="portal-content" className="portal-scope content-main">
        {children}
      </main>
      <Footer /><ScrollMotion/>
    </div>
  );
}

export function DocsFrame({children}: {children: React.ReactNode}) {
  return <>{children}</>;
}

function SearchDropdown({pool, placeholder}: {pool: Item[]; placeholder: string}) {
  const router = useRouter();
  const resultId=useId();
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return pool.filter((item) => (item.title + ' ' + item.summary + ' ' + item.area + ' ' + item.group + ' ' + (item.body||'')).toLowerCase().includes(q)).slice(0, 8);
  }, [query, pool]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        inputRef.current?.focus();
      }
      if (event.key === 'Escape') {
        setOpen(false);
        inputRef.current?.blur();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const visible = open && query.trim().length > 0;

  return (
    <div className="content-search">
      <Search size={19} />
      <input
        ref={inputRef}
        value={query}
        onChange={(event) => {
          setQuery(event.target.value);
          setActive(0);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => window.setTimeout(() => setOpen(false), 150)}
        onKeyDown={(event) => {
          if (event.key === 'ArrowDown') {
            event.preventDefault();
            setActive((v) => Math.max(0,Math.min(v + 1, results.length - 1)));
          } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            setActive((v) => Math.max(v - 1, 0));
          } else if (event.key === 'Enter' && results[active]) {
            router.push(results[active].href);
            setOpen(false);
          }
        }}
        placeholder={placeholder}
        aria-label="Search"
        role="combobox"
        aria-autocomplete="list"
        aria-expanded={visible}
        aria-controls={visible?resultId:undefined}
        aria-activedescendant={visible&&results[active]?resultId+'-'+active:undefined}
        autoComplete="off"
      />
      {query ? (
        <button onClick={() => setQuery('')} aria-label="Clear search" type="button">
          <X size={16} />
        </button>
      ) : (
        <kbd>Ctrl K</kbd>
      )}
      {visible && (
        <div className="content-search-drop" id={resultId} role="listbox" aria-label="Search results">
          {results.length === 0 ? (
            <p style={{padding: '18px 16px', fontSize: 14, color: 'var(--foreground-muted)'}}>No results for “{query}”.</p>
          ) : (
            results.map((item, index) => (
              <Link key={item.href} href={item.href} id={resultId+'-'+index} role="option" aria-selected={index===active} data-active={index === active} onMouseEnter={() => setActive(index)}>
                <span>
                  <strong>{item.title}</strong>
                  <small>{item.summary}</small>
                </span>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}

function QuickPills({links, prefix}: {links: {label: string; slug: string}[]; prefix: string}) {
  return (
    <div className="content-pills">
      {links.map((link) => (
        <Link key={link.slug} href={prefix + link.slug} className="content-pill">
          <ArrowRight size={13} />
          {link.label}
        </Link>
      ))}
    </div>
  );
}

function FeaturedCards({articles, kind, slugs}: {articles: Article[]; kind: PortalKind; slugs: string[]}) {
  return (
    <div className="content-grid">
      {slugs.map((slug) => {
        const article = articles.find((item) => item.slug === slug);
        if (!article) return null;
        return <DocsCard key={slug} article={article} href={articleHref(kind, slug)} />;
      })}
    </div>
  );
}

function BrowseArticles({articles, kind}: {articles: Article[]; kind: PortalKind}) {
  const [filter, setFilter] = useState('All');
  const areaFilters = ['All', ...Array.from(new Set(articles.map((article) => article.group)))];
  const shown = filter === 'All' ? articles : articles.filter((a) => a.group === filter);
  const groups = groupArticles(shown);
  return (
    <div>
      <div className="content-filters">
        {areaFilters
          .filter((f) => f === 'All' || articles.some((a) => a.group === f))
          .map((f) => (
            <button key={f} type="button" onClick={() => setFilter(f)} data-active={filter === f}>
              {f}
            </button>
          ))}
      </div>
      <div className="content-browse">
        {groups.map((group) => (
          <section key={group.group}>
            <h3>{group.group}</h3>
            <div className="content-browse-grid">
              {group.areas.map((area) => (
                <div key={area.area}>
                  <p className="content-area-label">{area.area}</p>
                  <ul>
                    {area.items.map((article) => (
                      <li key={article.slug}>
                        <Link href={articleHref(kind, article.slug)}>
                          <span className={cn('content-bar', areaCover[article.area] ?? 'cover-blue')} />
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
        ))}
      </div>
    </div>
  );
}

export function DocsHome() {
  const {lang} = useLang();
  return (
    <>
      <section className="content-hero">
        <div className="content-hero-inner">
          <span className="content-eyebrow">
            <BookOpen size={13} /> {lang === 'de' ? 'Dokumentation' : 'Documentation'}
          </span>
          <h1>
            Understand and<br/><span className="gradient-text">try rumahl.</span>
          </h1>
          <p className="lead">
            Start with what works today, try the browser demo, then follow the local development setup. rumahl OS is
            under active development; hardware installation and production use are not available yet.
          </p>
          <div className="content-pills docs-role-switch" aria-label="Documentation audience">
            <Link href="/docs" className="content-pill" data-active="true"><House size={13} /> Using rumahl</Link>
            <Link href="/developers" className="content-pill"><Code2 size={13} /> Building for rumahl <ArrowUpRight size={13} /></Link>
            <Link href="/help" className="content-pill"><LifeBuoy size={13} /> Need help</Link>
          </div>
          <SearchDropdown pool={combinedPool} placeholder="Search the documentation…" />
          <QuickPills links={docQuickLinks} prefix="/docs/" />
        </div>
      </section>

      <section className="content-section" id="start-paths">
        <div className="content-head">
          <div>
            <h2>Start where you are</h2>
            <p>Three ways into rumahl, depending on what you want to do today.</p>
          </div>
        </div>
        <div className="docs-path-grid">
          <Link className="docs-path" href="/demo">
            <span className="docs-path-icon"><MonitorPlay size={21} /></span>
            <h3>Look around first</h3>
            <p>Open the browser demo and explore the shell, apps and widgets with sample data. No account and no home connection are needed.</p>
            <span className="docs-path-link">Open the demo <ArrowRight size={14} /></span>
          </Link>
          <Link className="docs-path" href="/docs/quick-start">
            <span className="docs-path-icon"><Terminal size={21} /></span>
            <h3>Run it locally</h3>
            <p>Start the developer server on Linux or WSL2, or boot the Buildroot QEMU image. Both are development and testing environments.</p>
            <span className="docs-path-link">Read the quick start <ArrowRight size={14} /></span>
          </Link>
          <Link className="docs-path" href="/docs/external-integrations">
            <span className="docs-path-icon"><Cable size={21} /></span>
            <h3>Connect a service</h3>
            <p>Bring a NAS, private cloud or smart-home system alongside rumahl. The service keeps its own data, accounts and lifecycle.</p>
            <span className="docs-path-link">See integration paths <ArrowRight size={14} /></span>
          </Link>
        </div>
      </section>

      <section className="content-section" id="status">
        <div className="content-head">
          <div>
            <h2>What works today</h2>
            <p>Implemented, in development and not available yet — so you can judge a guide before following it.</p>
          </div>
        </div>
        <div className="docs-status">
          <ul className="docs-status-list">
            <li>
              <span className="docs-status-name"><MonitorPlay size={17} /> Browser demo</span>
              <span className="docs-status-badge" data-tone="ok"><CircleCheck size={12} /> Available</span>
              <span className="docs-status-note">An interface tour with sample data. It does not connect to your home services.</span>
            </li>
            <li>
              <span className="docs-status-name"><Terminal size={17} /> Developer server</span>
              <span className="docs-status-badge" data-tone="ok"><CircleCheck size={12} /> Available for testing</span>
              <span className="docs-status-note">Rust platform, local SQLite accounts and the React shell on Linux or WSL2.</span>
            </li>
            <li>
              <span className="docs-status-name"><Server size={17} /> Buildroot QEMU image</span>
              <span className="docs-status-badge" data-tone="ok"><CircleCheck size={12} /> Available for testing</span>
              <span className="docs-status-note">A separate image for acceptance. It is not a general hardware installation.</span>
            </li>
            <li>
              <span className="docs-status-name"><PackageCheck size={17} /> Signed hardware installer</span>
              <span className="docs-status-badge" data-tone="no"><CircleX size={12} /> Not available</span>
              <span className="docs-status-note">There is no public signed installer or supported consumer device list yet.</span>
            </li>
            <li>
              <span className="docs-status-name"><Cable size={17} /> Service integrations</span>
              <span className="docs-status-badge" data-tone="wip"><CircleDashed size={12} /> In development</span>
              <span className="docs-status-note">The integration model is documented; provider support varies and is not general availability.</span>
            </li>
            <li>
              <span className="docs-status-name"><Blocks size={17} /> App catalog and install</span>
              <span className="docs-status-badge" data-tone="wip"><CircleDashed size={12} /> In development</span>
              <span className="docs-status-note">Package, capability and hosting foundations exist. A polished public catalog is not released.</span>
            </li>
            <li>
              <span className="docs-status-name"><RotateCcw size={17} /> Updates and rollback</span>
              <span className="docs-status-badge" data-tone="no"><CircleX size={12} /> Not available</span>
              <span className="docs-status-note">No stable update channel or user-facing rollback workflow is available yet.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="content-section" id="how-it-fits">
        <div className="content-head">
          <div>
            <h2>How it fits together</h2>
            <p>rumahl sits between the hardware you own and the services you already use. It connects them; it does not have to replace them.</p>
          </div>
        </div>
        <div className="docs-map" aria-label="Your home hardware runs rumahl OS, which connects to your existing services.">
          <div className="docs-map-node">
            <span className="docs-map-icon"><House size={19} /></span>
            <strong>Your home</strong>
            <span>Hardware and network you control</span>
          </div>
          <span className="docs-map-connector" aria-hidden="true">→</span>
          <div className="docs-map-core">
            <span className="docs-map-icon"><Server size={19} /></span>
            <strong>rumahl OS</strong>
            <span>Local accounts, the shell, apps and integration contracts</span>
            <div className="docs-map-tags"><span>Local accounts</span><span>App catalog</span><span>Capabilities</span></div>
          </div>
          <span className="docs-map-connector" aria-hidden="true">↔</span>
          <div className="docs-map-node">
            <span className="docs-map-icon"><Cable size={19} /></span>
            <strong>Your services</strong>
            <span>NAS, private cloud and smart home stay independent</span>
          </div>
        </div>
      </section>

      <section className="content-section" id="ai-agents">
        <div className="docs-ai-panel">
          <span className="docs-ai-icon"><Bot size={22} /></span>
          <div className="docs-ai-copy">
            <h2>For AI agents</h2>
            <p>A direct Markdown entry point with the current status, answering rules and links to every article. Use the compact index for discovery or the full text for retrieval.</p>
          </div>
          <div className="docs-ai-actions">
            <a className="button small" href="/docs/ai.md"><FileText size={14} /> Open ai.md</a>
            <a className="text-link" href="/docs/llms.txt">Compact index <ArrowRight size={15} /></a>
            <a className="text-link" href="/docs/llms-full.txt">Full text <ArrowRight size={15} /></a>
          </div>
        </div>
      </section>

      <section className="content-section" id="featured">
        <div className="content-head">
          <div>
            <h2>
              Featured <span className="gradient-text">documentation</span>
            </h2>
            <p>A reading path through setup, everyday concepts and the current integration model.</p>
          </div>
        </div>
        <FeaturedCards articles={docs} kind="docs" slugs={docs.filter((a) => a.featured).map((a) => a.slug)} />
      </section>

      <section className="content-section" id="all">
        <div className="content-head">
          <div>
            <h2>
              All <span className="gradient-text">documentation</span>
            </h2>
            <p>Current setup, platform concepts, integrations, security and privacy — with planned work labelled clearly.</p>
          </div>
        </div>
        <BrowseArticles articles={docs} kind="docs" />
      </section>

      <section className="content-section" id="more">
        <div className="content-cta">
          <Link href="/help">
            <LifeBuoy size={22} />
            <h2>Looking for help?</h2>
            <p>The support center has friendly guides, a FAQ and direct contact — for the moments you just want a quick answer.</p>
            <b>
              Visit Support <ArrowRight size={15} />
            </b>
          </Link>
          <Link href="/developers">
            <Wrench size={22} />
            <h2>Building for rumahl?</h2>
            <p>Developer documentation is kept separate: API reference, architecture, app packages, capabilities, OIDC and Storybook.</p>
            <b>
              Open developer docs <ArrowRight size={15} />
            </b>
          </Link>
        </div>
      </section>
    </>
  );
}

export function HelpHome() {
  const {lang} = useLang();
  return (
    <>
      <section className="content-hero">
        <div className="content-hero-inner">
          <span className="content-eyebrow">
            <LifeBuoy size={13} /> {lang === 'de' ? 'Hilfe' : 'Support'}
          </span>
          <h1>
            A little help.<br/><span className="gradient-text">A clear next step.</span>
          </h1>
          <p className="lead">Setup, current limitations and troubleshooting for the development build — all in one place.</p>
          <SearchDropdown pool={combinedPool} placeholder="What can we help you with?" />
          <QuickPills links={helpPopular} prefix="/help/" />
        </div>
      </section>

      <section className="content-section" id="featured">
        <div className="content-head">
          <div>
            <h2>
              Featured <span className="gradient-text">guides</span>
            </h2>
            <p>The best starting points for the current development build and QEMU image.</p>
          </div>
        </div>
        <FeaturedCards articles={help} kind="help" slugs={help.filter((a) => a.featured).map((a) => a.slug)} />
      </section>

      <section className="content-section" id="browse">
        <div className="content-head">
          <div>
            <h2>
              Browse all <span className="gradient-text">articles</span>
            </h2>
            <p>Current guidance and clearly labelled previews of planned workflows.</p>
          </div>
        </div>
        <BrowseArticles articles={help} kind="help" />
      </section>

      <section className="content-section" id="faq">
        <div className="content-head">
          <div>
            <h2>
              Frequently asked <span className="gradient-text">questions</span>
            </h2>
            <p>The things everyone asks — answered honestly.</p>
          </div>
        </div>
        <div style={{maxWidth: 760, display: 'flex', flexDirection: 'column', gap: 10}}>
          {faqs.map((item) => (
            <details key={item.q} className="faq-item">
              <summary>
                <span>{item.q}</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M8 2v12M2 8h12" />
                </svg>
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="content-section" id="contact">
        <div className="content-cta support-channels">
          {helpChannels.map((channel) => {
            const Icon = channel.href.startsWith('mailto') ? Mail : channel.href.includes('github') ? MessagesSquare : House;
            return (
              <a key={channel.title} href={channel.href} target={channel.href.startsWith('http') ? '_blank' : undefined} rel={channel.href.startsWith('http') ? 'noreferrer' : undefined}>
                <Icon size={20} />
                <h2>{channel.title}</h2>
                <p>{channel.text}</p>
                <b>
                  {channel.label} <ArrowRight size={14} />
                </b>
              </a>
            );
          })}
        </div>
      </section>
    </>
  );
}

export function DeveloperHome() {
  return (
    <>
      <section className="content-hero">
        <div className="content-hero-inner">
          <span className="content-eyebrow">
            <Code2 size={13} /> Developer documentation
          </span>
          <h1>
            Build for<br/><span className="gradient-text">rumahl.</span>
          </h1>
          <p className="lead">
            The developer documentation is separate from the user documentation. It covers the real Rust platform,
            signed app packages, capabilities, OIDC, the HTTP API, shell contracts and the Storybook design system.
          </p>
          <div className="content-pills docs-role-switch" aria-label="Documentation audience">
            <Link href="/docs" className="content-pill"><House size={13} /> Using rumahl</Link>
            <Link href="/developers" className="content-pill" data-active="true"><Code2 size={13} /> Building for rumahl</Link>
            <Link href="/design" className="content-pill"><Palette size={13} /> Design systems</Link>
            <a href="https://github.com/rumahl/rumahl" className="content-pill" target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight size={13} />
            </a>
            {process.env.NEXT_PUBLIC_STORYBOOK_URL && (
              <a href={process.env.NEXT_PUBLIC_STORYBOOK_URL} className="content-pill" target="_blank" rel="noreferrer">
                Hosted Storybook
              </a>
            )}
          </div>
          <SearchDropdown pool={developerPool} placeholder="Search the developer documentation…" />
          <QuickPills links={developerQuickLinks} prefix="/developers/" />
        </div>
      </section>

      <section className="content-section" id="api">
        <div className="content-head">
          <div>
            <h2>
              APIs and <span className="gradient-text">contracts</span>
            </h2>
            <p>The HTTP routes, bridge methods, package contract and identity surface you build against.</p>
          </div>
          <Link href="/developers/api" className="text-link">Full API reference <ArrowRight size={15} /></Link>
        </div>
        <div className="dev-api-grid">
          <Link className="dev-api-card" data-primary="true" href="/developers/api">
            <span className="dev-api-icon"><Waypoints size={22} /></span>
            <h3>API reference</h3>
            <p>Shell, app, stream, workspace, OIDC and recovery boundaries in one place.</p>
            <b>Open the reference <ArrowRight size={14} /></b>
          </Link>
          <Link className="dev-api-card" href="/developers/build-app">
            <span className="dev-api-icon"><PackageCheck size={22} /></span>
            <h3>Build an app</h3>
            <p>From a signed package to a hosted app with a bridge connection and declared capabilities.</p>
            <b>Start building <ArrowRight size={14} /></b>
          </Link>
          <Link className="dev-api-card" href="/developers/app-hosting">
            <span className="dev-api-icon"><Cable size={22} /></span>
            <h3>Hosting and bridge</h3>
            <p>Catalog, launch leases, isolated app origins and the postMessage bridge.</p>
            <b>Read the hosting contract <ArrowRight size={14} /></b>
          </Link>
          <Link className="dev-api-card" href="/developers/identity-oidc">
            <span className="dev-api-icon"><KeyRound size={22} /></span>
            <h3>Identity and OIDC</h3>
            <p>Local accounts and the OpenID Provider used by installed applications.</p>
            <b>Read the identity model <ArrowRight size={14} /></b>
          </Link>
        </div>
        <div className="dev-path">
          <h3>Build an app in four steps</h3>
          <p>Each step links to the contract that explains the boundary.</p>
          <ol className="dev-path-steps">
            <li>
              <strong>Package</strong>
              <span>Describe the app, runtime and requested permissions.</span>
              <Link href="/developers/app-packages">Manifest contract →</Link>
            </li>
            <li>
              <strong>Sign</strong>
              <span>Sign the manifest and authenticate every payload file.</span>
              <Link href="/developers/app-packages">Signing CLI →</Link>
            </li>
            <li>
              <strong>Host</strong>
              <span>Import, authorize launch and connect through the bridge.</span>
              <Link href="/developers/app-hosting">Hosting and bridge →</Link>
            </li>
            <li>
              <strong>Verify</strong>
              <span>Test permissions, denial, persistence and release checks.</span>
              <Link href="/developers/testing-release">Release checks →</Link>
            </li>
          </ol>
        </div>
      </section>

      <section className="content-section" id="featured">
        <div className="content-head">
          <div>
            <h2>
              Start with the <span className="gradient-text">platform</span>
            </h2>
            <p>The current implementation, its boundaries and the contracts you build against.</p>
          </div>
        </div>
        <FeaturedCards articles={developerDocs} kind="developers" slugs={developerFeatured} />
      </section>

      <section className="content-section" id="design-system">
        <div className="content-cta">
          <Link href="/developers/storybook">
            <Palette size={22} />
            <h2>Storybook &amp; RUI</h2>
            <p>The living reference for @rumahl/ui (RUI), the OS design system. RWDS, the website system, lives under /design.</p>
            <b>
              Open the Storybook guide <ArrowRight size={15} />
            </b>
          </Link>
          <Link href="/developers/app-packages">
            <Blocks size={22} />
            <h2>Signed app packages</h2>
            <p>The manifest, runtime kinds, permissions, capabilities, connectors and the rumahl-package CLI.</p>
            <b>
              Read the package contract <ArrowRight size={15} />
            </b>
          </Link>
          <a href="https://github.com/rumahl/rumahl" target="_blank" rel="noreferrer">
            <BookOpen size={22} />
            <h2>Source &amp; architecture docs</h2>
            <p>Read the repository, the subsystem architecture documents and the contribution rules.</p>
            <b>
              Open GitHub <ArrowRight size={15} />
            </b>
          </a>
        </div>
      </section>

      <section className="content-section" id="all">
        <div className="content-head">
          <div>
            <h2>
              All developer <span className="gradient-text">documentation</span>
            </h2>
            <p>Start, build apps, platform, frontend and reference — kept out of the user docs on purpose.</p>
          </div>
        </div>
        <BrowseArticles articles={developerDocs} kind="developers" />
      </section>
    </>
  );
}

export function ArticleView({article, kind}: {article: Article; kind: PortalKind}) {
  const list = kind === 'docs' ? docs : kind === 'help' ? help : kind === 'design' ? designDocs : developerDocs;
  const index = list.findIndex((a) => a.slug === article.slug);
  const prev = index > 0 ? list[index - 1] : undefined;
  const next = index < list.length - 1 ? list[index + 1] : undefined;
  const sections = article.sections.map((section, i) => ({id: 'section-' + i, label: section.title}));
  const {wide, toggle} = useArticleWidth();

  return (
    <div className="content-layout" data-width={wide ? 'wide' : undefined}>
      <DocsSidebar key={article.slug} articles={list} currentSlug={article.slug} hrefFor={(slug) => articleHref(kind, slug)} />

      <div className="content-mobile-nav">
        <details>
          <summary style={{cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600, color: 'var(--foreground)'}}>
            <ListTree size={15} /> All articles
          </summary>
          <div style={{marginTop: 16}}>
            <DocsSidebar key={article.slug} articles={list} currentSlug={article.slug} hrefFor={(slug) => articleHref(kind, slug)} />
          </div>
        </details>
      </div>

      <article className="content-article">
        <Link
          href={portalBase(kind)}
          style={{display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--foreground-muted)', marginBottom: 26}}
        >
          <ArrowLeft size={16} />
          {kind === 'docs' ? 'Back to Docs' : kind === 'help' ? 'Back to Support' : kind === 'design' ? 'Back to Design docs' : 'Back to Developers'}
        </Link>
        <header>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', marginBottom: 16}}>
            <span className="content-eyebrow">{article.area}</span>
            <ArticleWidthToggle wide={wide} onToggle={toggle} />
          </div>
          <h1>{article.title}</h1>
          <p className="lead">{article.summary}</p>
          <div className="meta">
            <span>
              <Clock size={14} /> {article.readTime} min read
            </span>
            <span>
              <CalendarDays size={14} /> Updated: {article.updated}
            </span>
          </div>
          <ArticleTools markdownHref={articleHref(kind, article.slug) + '.md'}/>
        </header>

        <div className="content-prose">
          {article.sections.map((section, i) => (
            <section key={section.title}>
              <h2 id={'section-' + i} data-article-section className="scroll-mt-28">
                {section.title}
              </h2>
              {section.text && <RichMarkdown prefix={article.slug+"-"+i}>{section.text}</RichMarkdown>}
              {section.markdown && <RichMarkdown prefix={article.slug+"-extra-"+i}>{section.markdown}</RichMarkdown>}
              {section.list && (
                <ul>
                  {section.list.map((item) => (
                    <li key={item}><RichMarkdown inline>{item}</RichMarkdown></li>
                  ))}
                </ul>
              )}
              {section.steps && (
                <ol>
                  {section.steps.map((step) => (
                    <li key={step}><RichMarkdown inline>{step}</RichMarkdown></li>
                  ))}
                </ol>
              )}
              {section.diagram && <ApiDiagram kind={section.diagram} />}
              {section.endpoints && <EndpointGroup group={section.endpoints} />}
              {section.code && <MarkdownCode language={section.code.language} content={section.code.content}/>}
              {section.callout && <Callout tone={section.callout.tone} title={section.callout.title} text={section.callout.text}/>}
              {section.checklist && <Checklist id={section.checklist.id ?? article.slug+'-'+i} title={section.checklist.title} items={section.checklist.items}/>}
              {section.table && (
                <div className="rich-table">
                  <table>
                    <thead>
                      <tr>
                        {section.table.columns.map((column) => (
                          <th key={column}>{column}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row) => (
                        <tr key={row.join('-')}>
                          {row.map((cell, cellIndex) => (
                            <td key={cell + cellIndex}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}
        </div>

        {(prev || next) && (
          <nav aria-label="Article navigation" className="mt-14 grid gap-3 sm:grid-cols-2">
            {prev ? (
              <Link href={articleHref(kind, prev.slug)} className="surface-card-interactive group p-5">
                <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">← Previous</p>
                <p className="text-[13px] font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">{prev.title}</p>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link href={articleHref(kind, next.slug)} className="surface-card-interactive group p-5 sm:text-right">
                <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Next →</p>
                <p className="text-[13px] font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">{next.title}</p>
              </Link>
            ) : (
              <span />
            )}
          </nav>
        )}

        <div className="mt-10 rounded-2xl border border-border/50 bg-surface/50 p-6 text-center">
          <CheckCircle2 className="mx-auto mb-2 h-6 w-6 text-teal" strokeWidth={1.8} />
          <p className="text-[13px] text-muted-foreground">
            {kind === 'developers' ? (
              <>
                Need more context?{' '}
                <a href="https://github.com/rumahl/rumahl" className="text-primary hover:underline" target="_blank" rel="noreferrer">
                  Read the source
                </a>{' '}
                or open a discussion with the project.
              </>
            ) : kind === 'design' ? (
              <>
                Need the implementation? Open the{' '}
                <Link href="/design/resources" className="text-primary hover:underline">
                  design resources
                </Link>{' '}
                or the{' '}
                <a href="https://github.com/rumahl/rumahl" className="text-primary hover:underline" target="_blank" rel="noreferrer">
                  source repository
                </a>.
              </>
            ) : (
              <>
                Didn&rsquo;t solve your problem?{' '}
                <Link href="/help" className="text-primary hover:underline">
                  Contact us
                </Link>{' '}
                — we&rsquo;re happy to help.
              </>
            )}
          </p>
        </div>
      </article>

      <ArticleToc items={sections} />
    </div>
  );
}
