'use client';
import {ArticleTools} from '@/components/rumahl/article-tools';

import { useMemo } from 'react';
import {RichMarkdown} from '@/components/rumahl/rich-markdown';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowLeft, CalendarDays, FileText, RefreshCw } from 'lucide-react';
import type { BilingualDoc, LegalLang, LegalSection } from '@/lib/legal/types';
import { company } from '@/lib/legal/company';
import { useLang } from '@/components/rumahl/language';
import { ArticleToc } from '@/components/rumahl/article-toc';
import { useArticleWidth, ArticleWidthToggle } from '@/components/rumahl/article-width';

function formatDate(iso: string, lang: LegalLang): string {
  try {
    return new Date(iso).toLocaleDateString(lang === 'de' ? 'de-DE' : 'en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  } catch {
    return iso;
  }
}

function SectionContent({section}: {section: LegalSection}) {
  return (
    <>
      {section.blocks.map((block, i) => {
        if (block.type === 'markdown') return <RichMarkdown key={i} prefix={section.id+'-'+i}>{block.text}</RichMarkdown>;
        if (block.type === 'p') {
          return <p key={i}>{block.text}</p>;
        }
        if (block.type === 'ul') {
          return (
            <ul key={i}>
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          );
        }
        if (block.type === 'note') {
          return (
            <div key={i} className="content-note">
              {block.text}
            </div>
          );
        }
        return (
          <div key={i} className="rich-table">
            <table>
              <thead>
                <tr>
                  {block.headers.map((header) => (
                    <th key={header}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, r) => (
                  <tr key={r}>
                    {row.map((cell, c) => (
                      <td key={c}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </>
  );
}

const legalTree: {group: string; items: {label: string; href: string}[]}[] = [
  {
    group: 'Website Policies',
    items: [
      {label: 'Imprint', href: '/legal/impressum'},
      {label: 'Terms of Service', href: '/legal/tos'},
      {label: 'Privacy Policy', href: '/legal/privacy'},
      {label: 'Cookie Policy', href: '/legal/cookies'},
    ],
  },
  {
    group: 'rumahl OS',
    items: [
      {label: 'Software Terms', href: '/legal/rumahlos/tos'},
      {label: 'Privacy Policy', href: '/legal/rumahlos/privacy'},
    ],
  },
  {
    group: 'Open Source',
    items: [
      {label: 'Apps (repository)', href: '/legal/apps'},
      {label: 'Contributing', href: '/legal/contributing'},
      {label: 'Code of Conduct', href: '/legal/code-of-conduct'},
      {label: 'Trademark Policy', href: '/legal/trademark'},
      {label: 'Security', href: '/security'},
    ],
  },
];

function LegalTree() {
  const pathname = usePathname();
  return (
    <nav className="content-sidenav" aria-label="Legal documents">
      {legalTree.map((group) => (
        <div className="content-sidenav-group" key={group.group}>
          <p className="content-sidenav-label">{group.group}</p>
          <ul>
            {group.items.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link href={item.href} aria-current={active ? 'page' : undefined}>
                    <span className="content-sidenav-dot" />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}

interface LegalDocumentProps {
  de: BilingualDoc['de'];
  en: BilingualDoc['en'];
  /** Language shown first / default. Store documents default to "en". */
  defaultLang?: LegalLang;
  /** Label of the parent category, e.g. "Website Policies". */
  categoryLabel?: string;
}

export function LegalDocument({de, en, categoryLabel}: LegalDocumentProps) {
  const {lang} = useLang();
  const doc = lang === 'de' ? de : en;
  const toc = useMemo(() => doc.sections, [doc]);
  const tocItems = toc.map((section) => ({id: section.id, label: section.title}));
  const {wide, toggle} = useArticleWidth();

  return (
    <div className="content-layout" data-width={wide ? 'wide' : undefined}>
      <LegalTree />

      <div className="content-mobile-nav">
        <details>
          <summary style={{cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600, color: 'var(--foreground)'}}>
            {lang === 'de' ? 'Alle Rechtsdokumente' : 'All legal documents'}
          </summary>
          <div style={{marginTop: 16}}>
            <LegalTree />
          </div>
        </details>
      </div>

      <article className="content-article">
        <Link
          href="/legal"
          style={{display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--foreground-muted)', marginBottom: 26}}
        >
          <ArrowLeft size={16} />
          {lang === 'de' ? 'Alle Rechtsdokumente' : 'All legal documents'}
        </Link>

        <header>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', marginBottom: 16}}>
            <span className="content-eyebrow">
              {categoryLabel
                ? categoryLabel.includes(' · ')
                  ? categoryLabel.split(' · ')[lang === 'de' ? 1 : 0]
                  : categoryLabel
                : lang === 'de'
                  ? 'Rechtliches'
                  : 'Legal'}
            </span>
            <ArticleWidthToggle wide={wide} onToggle={toggle} />
          </div>
          <h1>{doc.title}</h1>
          <p className="lead">{doc.subtitle}</p>
          <div className="meta">
            <span>
              <CalendarDays size={14} />
              {lang === 'de' ? 'Inkrafttreten' : 'Effective'}: {formatDate(doc.effective, lang)}
            </span>
            <span>
              <RefreshCw size={14} />
              {lang === 'de' ? 'Zuletzt aktualisiert' : 'Last updated'}: {formatDate(doc.updated, lang)}
            </span>
            <span>
              <FileText size={14} />
              {lang === 'de' ? 'Version' : 'Version'}: {doc.version}
            </span>
          </div>
          <ArticleTools/>
        </header>

        <div className="content-prose">
          {toc.map((section, i) => (
            <section key={section.id} id={section.id} data-legal-section className="scroll-mt-28">
              <h2>
                <span style={{color: 'var(--content-accent)', fontSize: '.78em', marginRight: 12, fontVariantNumeric: 'tabular-nums'}}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                {section.title}
              </h2>
              <SectionContent section={section} />
            </section>
          ))}
        </div>

        <footer className="mt-14 rounded-2xl border border-border/40 bg-surface/50 p-6">
          <p className="text-[14px] leading-relaxed text-muted-foreground">
            {lang === 'de' ? 'Fragen zu diesen Bestimmungen? Schreib uns an ' : 'Questions about these terms? Reach us at '}
            <a href={`mailto:${company.email}`} className="text-primary hover:underline">
              {company.email}
            </a>
            .
          </p>
        </footer>
      </article>

      <ArticleToc items={tocItems} label={lang === 'de' ? 'Auf dieser Seite' : 'On this page'} />
    </div>
  );
}
