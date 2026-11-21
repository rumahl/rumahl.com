import Link from 'next/link';
import {ArrowRight, Clock} from 'lucide-react';
import type {Article} from '@/components/rumahl/knowledge';
import {cn} from '@/lib/utils';

export const docsAreaCover: Record<string, string> = {
  'Installation & Setup': 'cover-blue',
  'Security & Permissions': 'cover-green',
  'System & Architecture': 'cover-indigo',
  'App Development': 'cover-purple',
  'Getting Started': 'cover-blue',
  'Backups & Recovery': 'cover-amber',
  Troubleshooting: 'cover-pink',
  Apps: 'cover-teal',
  'Files & Storage': 'cover-indigo',
  'Networking & Remote': 'cover-teal',
  Integrations: 'cover-teal',
  'Getting started': 'cover-blue',
  Architecture: 'cover-indigo',
  'Apps & packages': 'cover-purple',
  'Packages & manifest': 'cover-purple',
  'Hosting & bridge': 'cover-indigo',
  'Resources & data': 'cover-teal',
  'API & contracts': 'cover-green',
  'HTTP API': 'cover-pink',
  'Testing & release': 'cover-amber',
  'Identity & security': 'cover-green',
  Operations: 'cover-amber',
  'Shell & UI': 'cover-teal',
  Reference: 'cover-pink',
  Overview: 'cover-blue',
  'Web design system': 'cover-teal',
  'OS design system': 'cover-indigo',
  Tooling: 'cover-amber',
  Process: 'cover-green',
};

export function DocsCard({article, href}: {article: Article; href: string}) {
  return (
    <Link href={href} className="content-card">
      <div className={cn('content-card-cover', docsAreaCover[article.area] ?? 'cover-blue')}>
        <span>{article.area}</span>
        <em>
          <ArrowRight size={20} />
        </em>
      </div>
      <div className="content-card-body">
        <h3>{article.title}</h3>
        <p>{article.summary}</p>
        <div className="content-card-meta">
          <span style={{display: 'inline-flex', alignItems: 'center', gap: 6}}>
            <Clock size={13} /> {article.readTime} min
          </span>
          <b>
            Read <ArrowRight size={14} />
          </b>
        </div>
      </div>
    </Link>
  );
}
