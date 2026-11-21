import type {Metadata} from 'next';
import './design.css';
import '@/components/rwds/rwds.css';
import {DesignNav, DesignFooter} from '@/components/design/design-shell';

export const metadata: Metadata = {
  title: 'rumahl design systems — RWDS & RUI reference',
  description:
    'Reference documentation for the rumahl Web Design System (RWDS) and rumahl UI (RUI), including tokens, components, theming and adoption notes.',
  alternates: {canonical: '/design', types: {'text/markdown': '/design.md'}},
};

export default function DesignLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="design-site">
      <DesignNav />
      <main className="ds-main">{children}</main>
      <DesignFooter />
    </div>
  );
}
