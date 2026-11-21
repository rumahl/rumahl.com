'use client';
import {useEffect, useState} from 'react';
import {usePathname} from 'next/navigation';
import Link from 'next/link';
import {Menu, X, ArrowUpRight, Search, ChevronDown} from 'lucide-react';
import {ThemeSwitch} from './theme-switch';
import {BrandLogo} from './brand';
import {navLinks, navPanels, type NavPanel} from './catalog';
import {useSearch, NavSearch} from './search';

export function Navigation({minimal = false}: {minimal?: boolean}) {
  const path = usePathname();
  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const {open: openSearch} = useSearch();

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActive(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const closeMenus = () => {
    setActive(null);
    setMobileOpen(false);
  };

  const activePanel = navPanels.find((panel) => panel.id === active) ?? null;

  return (
    <header
      className={'navigation' + (minimal ? ' navigation-minimal' : '')}
      onMouseLeave={() => setActive(null)}
      data-menu-open={activePanel ? 'true' : undefined}
    >
      <Link href="/" className="brand" aria-label="rumahl home">
        <span className="brand-wordmark">
          <BrandLogo />
        </span>
      </Link>

      <nav aria-label="Main navigation" className="desktop-nav">
        {navPanels.map((panel) => (
          <div className="mega-item" key={panel.id} onMouseEnter={() => setActive(panel.id)}>
            <Link
              href={panel.href}
              className="mega-trigger"
              aria-haspopup="true"
              aria-expanded={active === panel.id}
              aria-controls={'mega-' + panel.id}
              aria-current={path === panel.href ? 'page' : undefined}
              onFocus={() => setActive(panel.id)}
              onClick={closeMenus}
            >
              {panel.label}
              <ChevronDown size={13} className="mega-chevron" />
            </Link>
          </div>
        ))}
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="mega-trigger"
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            aria-current={path === link.href ? 'page' : undefined}
            onMouseEnter={() => setActive(null)}
            onFocus={() => setActive(null)}
            onClick={closeMenus}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="nav-actions">
        <button
          className="icon-button search-button"
          onClick={() => {
            closeMenus();
            openSearch();
          }}
          aria-label="Search rumahl"
        >
          <Search size={18} />
        </button>
        <ThemeSwitch />
        {!minimal && (
          <>
            <Link className="button small" href="/get-rumahl">
              Get rumahl <ArrowUpRight size={14} />
            </Link>
          </>
        )}
        <button
          className="icon-button mobile-toggle"
          aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {activePanel && (
        <div id={'mega-' + activePanel.id} className="mega-panel" onMouseEnter={() => setActive(activePanel.id)}>
          <div className="mega-panel-inner">
            <div className="mega-columns">
              {activePanel.columns.map((column) => (
                <div className="mega-column" key={column.title}>
                  <span className="eyebrow muted">{column.title}</span>
                  {column.links.map((link) =>
                    link.href.startsWith('http') ? (
                      <a
                        key={link.label}
                        href={link.href}
                        className="mega-link"
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => setActive(null)}
                      >
                        <strong>{link.label}</strong>
                        {link.description && <span>{link.description}</span>}
                      </a>
                    ) : (
                      <Link key={link.label} href={link.href} className="mega-link" onClick={() => setActive(null)}>
                        <strong>{link.label}</strong>
                        {link.description && <span>{link.description}</span>}
                      </Link>
                    )
                  )}
                </div>
              ))}
            </div>
            {activePanel.featured && (
              <a
                href={activePanel.featured.href}
                className="mega-featured"
                onClick={() => setActive(null)}
                {...(activePanel.featured.href.startsWith('http')
                  ? {target: '_blank', rel: 'noreferrer'}
                  : {})}
              >
                <span className="mega-featured-icon">
                  <activePanel.featured.icon size={22} />
                </span>
                <span className="eyebrow">{activePanel.featured.eyebrow}</span>
                <strong>{activePanel.featured.title}</strong>
                <span className="mega-featured-text">{activePanel.featured.text}</span>
                <span className="mega-featured-cta">
                  Learn more <ArrowUpRight size={14} />
                </span>
              </a>
            )}
          </div>
        </div>
      )}

      {mobileOpen && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">
          {navPanels.map((panel) => (
            <MobileGroup key={panel.id} panel={panel} onNavigate={() => setMobileOpen(false)} />
          ))}
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              {link.label}
            </Link>
          ))}
          <Link className="mobile-cta" href="/get-rumahl" onClick={() => setMobileOpen(false)}>
            Get rumahl <ArrowUpRight size={15} />
          </Link>
        </nav>
      )}

      <NavSearch />
    </header>
  );
}

function MobileGroup({panel, onNavigate}: {panel: NavPanel; onNavigate: () => void}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mobile-group">
      <button aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        {panel.label}
        <ChevronDown size={16} className={open ? 'rotated' : undefined} />
      </button>
      {open && (
        <div className="mobile-group-links">
          {panel.columns.flatMap((column) => column.links).map((link) =>
            link.href.startsWith('http') ? (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" onClick={onNavigate}>
                {link.label}
              </a>
            ) : (
              <Link key={link.label} href={link.href} onClick={onNavigate}>
                {link.label}
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
}
