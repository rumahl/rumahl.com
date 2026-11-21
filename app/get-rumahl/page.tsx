import type {CSSProperties} from 'react';
import type {Metadata} from 'next';
import Link from 'next/link';
import {ArrowRight, Sparkles} from 'lucide-react';
import {Navigation} from '@/components/rumahl/navigation';
import {Footer} from '@/components/rumahl/sections';
import {Installer} from '@/components/rumahl/installer';

export const metadata: Metadata = {
  title: 'Get rumahl — Plan your install',
  description:
    'Choose your device and the services you want to run, see the system requirements and get a personalised installation guide you can save as a link.',
  alternates: {canonical: '/get-rumahl', types: {'text/markdown': '/get-rumahl.md'}},
};

export default function GetRumahlPage() {
  return (
    <>
      <Navigation />
      <main className="portal-scope content-main" style={{'--content-accent': 'var(--accent)'} as CSSProperties}>
        <section className="content-hero">
          <div className="content-hero-inner">
            <span className="content-eyebrow">
              <Sparkles size={13} /> Get rumahl
            </span>
            <h1>
              Make yourself <span className="gradient-text">at home</span>.
            </h1>
            <p className="lead">
              Plan your future setup: pick a device, choose the services you want and save a tailored installation plan. This
              planner is a preview of the planned hardware support. Current builds are the developer server and the
              Buildroot QEMU image — there is no public hardware installer yet, and no account is required.
            </p>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 30}}>
              <a className="button" href="#installer">
                Start the planner
              </a>
              <Link className="text-link" href="/docs/installation">
                Read the docs <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
        <div id="installer" style={{scrollMarginTop: 110}} />
        <Installer />
      </main>
      <Footer />
    </>
  );
}
