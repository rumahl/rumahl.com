import type {CSSProperties} from 'react';
import type {Metadata} from 'next';
import {MonitorPlay} from 'lucide-react';
import {Navigation} from '@/components/rumahl/navigation';
import {Footer} from '@/components/rumahl/sections';
import {LiveDemo} from '@/components/rumahl/live-demo';

export const metadata: Metadata = {
  title: 'Live demo — rumahl',
  description:
    'Explore the rumahl OS interface with sample apps, files and widgets. Local-first, open source, and embedded from demo.rumahl.com.',
};

export default function DemoPage() {
  return (
    <>
      <Navigation />
      <main className="portal-scope content-main" style={{'--content-accent': 'var(--accent)'} as CSSProperties}>
        <section className="content-hero">
          <div className="content-hero-inner">
            <span className="content-eyebrow">
              <MonitorPlay size={13} /> Live demo
            </span>
            <h1>
              rumahl OS, <span className="gradient-text">running live</span>.
            </h1>
            <p className="lead">
              A fully interactive demo with sample apps, files and widgets. Explore the shell, change themes and
              arrange the desktop — then read the source or spin up your own instance.
            </p>
          </div>
        </section>

        <section className="content-section demo-page-section">
          <LiveDemo />
        </section>
      </main>
      <Footer />
    </>
  );
}
