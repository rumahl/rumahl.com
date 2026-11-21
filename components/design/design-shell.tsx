'use client';
import Link from 'next/link';
import {usePathname, useRouter} from 'next/navigation';
import {Layers, Palette} from 'lucide-react';
import {useEffect, useRef, useState} from 'react';
import {BrandIcon, BrandLogo} from '@/components/rumahl/brand';
import {ThemeSwitch} from '@/components/rumahl/theme-switch';

type SystemKey = 'rwds' | 'rui';
type DesignSection = 'overview' | SystemKey;

export function useActiveDesignSystem(): SystemKey {
  const path = usePathname();
  const [pref, setPref] = useState<SystemKey>('rwds');

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      try {
        const saved = localStorage.getItem('rumahl-design-system');
        if (saved === 'rwds' || saved === 'rui') setPref(saved);
      } catch {}
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  if (path.startsWith('/design/rui')) return 'rui';
  if (path.startsWith('/design/rwds') || path.startsWith('/design/color')) return 'rwds';
  return pref;
}

export function useActiveDesignSection(): DesignSection {
  const path = usePathname();
  if (path.startsWith('/design/rwds') || path.startsWith('/design/color')) return 'rwds';
  if (path.startsWith('/design/rui')) return 'rui';
  return 'overview';
}

export function DesignSystemToggle() {
  const router = useRouter();
  const path = usePathname();
  const active = useActiveDesignSection();

  function choose(section: DesignSection) {
    if (section === 'overview') {
      router.push('/design');
      return;
    }
    try { localStorage.setItem('rumahl-design-system', section); } catch {}
    const onComponents = path.startsWith('/design/rwds/components') || path.startsWith('/design/rui/components');
    const target = section === 'rui'
      ? (onComponents ? '/design/rui/components' : '/design/rui')
      : (onComponents ? '/design/rwds/components' : path.startsWith('/design/color') ? '/design/color' : '/design/rwds');
    router.push(target);
  }

  return (
    <div className="ds-system-toggle" role="group" aria-label="Design section">
      <button type="button" data-active={active === 'overview'} onClick={() => choose('overview')} aria-pressed={active === 'overview'} title="Shared design overview">
        Overview
      </button>
      <button type="button" data-active={active === 'rwds'} onClick={() => choose('rwds')} aria-pressed={active === 'rwds'} title="rumahl Web Design System (RWDS)">
        <Palette size={14} /> <span>Web</span> <b>RWDS</b>
      </button>
      <button type="button" data-active={active === 'rui'} onClick={() => choose('rui')} aria-pressed={active === 'rui'} title="rumahl UI (RUI) operating-system design system">
        <Layers size={14} /> <span>OS</span> <b>RUI</b>
      </button>
    </div>
  );
}

export function DesignNav() {
  const path = usePathname();
  const active = useActiveDesignSystem();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = navRef.current;
    if (!element) return;
    const update = () => document.documentElement.style.setProperty('--design-nav-height', `${Math.ceil(element.getBoundingClientRect().height)}px`);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(element);
    window.addEventListener('resize', update);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', update);
    };
  }, []);
  const componentsHref = active === 'rui' ? '/design/rui/components' : '/design/rwds/components';
  const items = [
    {label: 'Components', href: componentsHref},
    ...(active === 'rwds' ? [{label: 'Color', href: '/design/color'}] : []),
    {label: 'Docs', href: '/design/docs'},
    {label: 'Storybook', href: '/design/storybook'},
    {label: 'Compare', href: '/design/systems'},
    {label: 'Resources', href: '/design/resources'},
  ];

  return (
    <header className="ds-nav" ref={navRef}>
      <div className="ds-nav-inner">
        <Link className="ds-brand" href="/design" aria-label="rumahl Design home">
          <BrandIcon />
          <i className="ds-brand-divider" aria-hidden="true" />
          <strong>Design</strong>
        </Link>
        <DesignSystemToggle />
        <nav className="ds-nav-links" aria-label="rumahl Design">
          {items.map((item) => (
            <Link key={item.href} href={item.href} aria-current={path === item.href ? 'page' : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="ds-nav-actions">
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}

export function DesignFooter() {
  return (
    <footer className="ds-footer">
      <div className="ds-footer-inner">
        <div className="ds-footer-top">
          <div className="ds-footer-brand">
            <BrandLogo />
            <p>Reference documentation for the rumahl Web Design System and rumahl UI. Two systems for two surfaces.</p>
          </div>
          <div>
            <h2>RWDS</h2>
            <ul>
              <li><Link href="/design/rwds">Overview</Link></li>
              <li><Link href="/design/rwds/components">Components</Link></li>
              <li><Link href="/design/color">Color Table Generator</Link></li>
            </ul>
          </div>
          <div>
            <h2>RUI</h2>
            <ul>
              <li><Link href="/design/rui">Overview</Link></li>
              <li><Link href="/design/rui/components">Components</Link></li>
              <li><Link href="/design/docs">Documentation</Link></li>
            </ul>
          </div>
          <div>
            <h2>Shared</h2>
            <ul>
              <li><Link href="/design/systems">Comparison</Link></li>
              <li><Link href="/design/storybook">Storybook</Link></li>
              <li><Link href="/design/resources">Resources</Link></li>
              <li><Link href="/design/glossary">Glossary</Link></li>
            </ul>
          </div>
        </div>
        <div className="ds-footer-bottom">
          <span>© {new Date().getFullYear()} rumahl Design</span>
          <span>RWDS for the web · RUI for the operating system</span>
          <span>Status: in development</span>
        </div>
      </div>
    </footer>
  );
}
