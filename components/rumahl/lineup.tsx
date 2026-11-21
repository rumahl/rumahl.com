import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import {products} from './catalog';

export function Lineup() {
  return (
    <section className="section lineup" id="lineup">
      <div className="section-heading">
        <h2>Explore the lineup.</h2>
        <span className="eyebrow muted">THE rumahl ECOSYSTEM</span>
      </div>
      <div className="lineup-grid">
        {Object.values(products).map((product) => (
          <Link key={product.key} href={product.href} className={'lineup-card lineup-' + product.key}>
            <div className="lineup-art">
              <product.icon size={42} />
            </div>
            <span className="eyebrow muted">{product.eyebrow}</span>
            <h3>{product.name}</h3>
            <p>{product.tagline}</p>
            <span className="lineup-cta">
              Learn more <ArrowUpRight size={15} />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
