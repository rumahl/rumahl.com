import Link from 'next/link';
import {ArrowRight, BookOpen, Compass, LifeBuoy, Scale} from 'lucide-react';
import {Navigation} from '@/components/rumahl/navigation';
import {Footer} from '@/components/rumahl/sections';

const destinations = [
  {href: '/docs', icon: BookOpen, title: 'Documentation', text: 'Installation, architecture, API reference and app development.'},
  {href: '/help', icon: LifeBuoy, title: 'Support', text: 'Guides, how-to’s and answers for the moments you need help.'},
  {href: '/legal', icon: Scale, title: 'Legal', text: 'All policies and terms in one place.'},
];

export default function NotFound() {
  return (
    <div data-section="docs">
      <Navigation />
      <main className="portal-scope content-main">
        <section className="content-hero">
          <div className="content-hero-inner">
            <span className="content-eyebrow">
              <Compass size={13} /> 404 · Not found
            </span>
            <h1>
              This page hasn&rsquo;t <span className="gradient-text">found its home</span>.
            </h1>
            <p className="lead">
              The page you&rsquo;re looking for doesn&rsquo;t exist or has moved. Here are a few places that do.
            </p>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 30}}>
              <Link className="button" href="/">
                Back to rumahl
              </Link>
              <Link className="text-link" href="/docs">
                Browse the documentation <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="content-grid" style={{gridTemplateColumns: 'repeat(3, 1fr)'}}>
            {destinations.map((destination) => (
              <Link key={destination.href} href={destination.href} className="content-card">
                <div className="content-card-body">
                  <destination.icon size={22} style={{color: 'var(--content-accent)', marginBottom: 16}} />
                  <h3>{destination.title}</h3>
                  <p>{destination.text}</p>
                  <div className="content-card-meta">
                    <b>
                      Open <ArrowRight size={14} />
                    </b>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
