import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import {BrandIcon, BrandLogo} from './brand';
import {LanguageSwitch} from './language-switch';
import {LiveDemo} from './live-demo';

const REPO_URL = 'https://github.com/rumahl/rumahl';
const APPS_REPO = 'https://github.com/rumahl/apps';
const COMMUNITY_URL = 'https://community.rumahl.com';

export function News() {
  return (
    <section className="section news" id="latest">
      <div className="section-heading">
        <h2>
          Latest from the project<span className="accent-dot">.</span>
        </h2>
        <span className="eyebrow muted">BUILT IN THE OPEN</span>
      </div>
      <div className="news-layout">
        <a className="featured-story" href={REPO_URL} target="_blank" rel="noreferrer">
          <div className="story-art">
            <BrandIcon />
            <span>
              Built in
              <br />
              the open.
            </span>
          </div>
          <div className="story-info">
            <div>
              <span className="eyebrow">APACHE-2.0 · SOURCE AVAILABLE</span>
              <h3>Read the code, shape the system.</h3>
            </div>
            <ArrowUpRight />
          </div>
        </a>
        <div className="story-list">
          <Link href="/releases">
            <span className="story-number">01</span>
            <div>
              <span className="eyebrow muted">RELEASES</span>
              <h3>A platform taking shape.</h3>
              <p>Follow milestones and changelogs.</p>
            </div>
            <ArrowUpRight />
          </Link>
          <Link href="/developers/architecture">
            <span className="story-number">02</span>
            <div>
              <span className="eyebrow muted">ARCHITECTURE</span>
              <h3>See how it fits together.</h3>
              <p>Core, capabilities and identity.</p>
            </div>
            <ArrowUpRight />
          </Link>
          <a href={APPS_REPO} target="_blank" rel="noreferrer">
            <span className="story-number">03</span>
            <div>
              <span className="eyebrow muted">INTEGRATIONS</span>
              <h3>Bring another system home.</h3>
              <p>Write a connector or provider in the open.</p>
            </div>
            <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}

export function OS() {
  return (
    <section id="os" className="os-demo-section">
      <div className="center-title">
        <span className="eyebrow muted">LIVE DEMO</span>
        <h2>Try rumahl OS.</h2>
        <p>Explore the shell, apps and widgets directly in your browser.</p>
      </div>
      <div className="os-demo" id="demo">
        <LiveDemo />
      </div>
    </section>
  );
}

const footerColumns: {title: string; links: {label: string; href: string; external?: boolean}[]}[] = [
  {
    title: 'Project',
    links: [
      {label: 'rumahl OS', href: '/os'},
      {label: 'Integrations', href: '/integrations'},
      {label: 'Design', href: '/design'},
      {label: 'Brand guidelines', href: '/brand'},
      {label: 'Live demo', href: '/demo'},
      {label: 'Releases', href: '/releases'},
      {label: 'Get rumahl', href: '/get-rumahl'},
    ],
  },
  {
    title: 'Docs & Developers',
    links: [
      {label: 'Documentation', href: '/docs'},
      {label: 'Getting started', href: '/docs/quick-start'},
      {label: 'Integrations', href: '/docs/integrations'},
      {label: 'Architecture', href: '/developers/architecture'},
      {label: 'Developer documentation', href: '/developers'},
      {label: 'API reference', href: '/developers/api'},
      {label: 'Build an app', href: '/developers/build-app'},
      {label: 'App packages', href: '/developers/app-packages'},
      {label: 'HTTP API', href: '/developers/http-api'},
      {label: 'Design documentation', href: '/design/docs'},
      {label: 'Design Storybook', href: '/design/storybook'},
      {label: 'Help center', href: '/help'},
      {label: 'Documentation for AI', href: '/docs/llms.txt'},
      {label: 'All content for AI', href: '/llms.txt'},
    ],
  },
  {
    title: 'Community',
    links: [
      {label: 'GitHub', href: REPO_URL, external: true},
      {label: 'Forum', href: COMMUNITY_URL, external: true},
      {label: 'Blog', href: '/blog'},
      {label: 'Discussions', href: REPO_URL + '/discussions', external: true},
      {label: 'Issues', href: REPO_URL + '/issues', external: true},
      {label: 'Apps repository', href: APPS_REPO, external: true},
      {label: 'Contributing', href: '/legal/contributing'},
      {label: 'Code of Conduct', href: '/legal/code-of-conduct'},
      {label: 'Security', href: '/security'},
      {label: 'About', href: '/about'},
      {label: 'Photography & credits', href: '/photography'},
    ],
  },
  {
    title: 'Legal',
    links: [
      {label: 'Legal overview', href: '/legal'},
      {label: 'Privacy', href: '/legal/privacy'},
      {label: 'Terms', href: '/legal/tos'},
      {label: 'Imprint', href: '/legal/impressum'},
      {label: 'Cookies', href: '/legal/cookies'},
      {label: 'Trademark', href: '/legal/trademark'},
    ],
  },
];


export function Footer() {
  return (
    <footer className="section footer" id="help">
      <div className="footer-watermark" aria-hidden="true">
        <BrandLogo />
      </div>
      <div className="footer-top">
        <Link className="footer-brand" href="/">
          <BrandLogo />
        </Link>
        <p>An independent open-source project.</p>
        <div>
          <a href={REPO_URL} target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight size={14} />
          </a>
          <a href={APPS_REPO} target="_blank" rel="noreferrer">
            Apps <ArrowUpRight size={14} />
          </a>
          <Link href="/demo">
            Live demo <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
      <div className="footer-columns">
        {footerColumns.map((column) => (
          <div className="footer-column" key={column.title}>
            <h2>{column.title}</h2>
            {column.links.map((link) =>
              link.external ? (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ) : (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              )
            )}
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} rumahl</span>
        <span>Apache-2.0 · Developed in public</span>
        <LanguageSwitch />
        <Link href="/help">
          Help &amp; community <ArrowUpRight size={14} />
        </Link>
      </div>
    </footer>
  );
}
