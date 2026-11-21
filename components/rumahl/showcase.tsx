import Link from 'next/link';
import {ArrowRight, ArrowUpRight, Check, Minus} from 'lucide-react';
import {Accordion, AccordionItem, AccordionTrigger, AccordionContent} from '@/components/ui/accordion';
import type {Comparison, FaqItem, GalleryItem, ProductHighlight, SpecGroup} from './catalog';

export function ProductStats({stats}: {stats: {value: string; label: string}[]}) {
  return (
    <section className="showcase-stats section">
      <div className="showcase-stats-grid">
        {stats.map((stat) => (
          <div className="showcase-stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ProductHighlights({eyebrow, title, highlights}: {eyebrow: string; title: string; highlights: ProductHighlight[]}) {
  return (
    <section className="section showcase-highlights">
      <div className="center-title">
        <span className="eyebrow muted">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      <div className="highlight-grid">
        {highlights.map((item) => (
          <article key={item.title} className="highlight-card reveal">
            <span className="highlight-icon">
              <item.icon size={24} />
            </span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function FeatureGallery({items}: {items: GalleryItem[]}) {
  return (
    <section className="section showcase-gallery">
      {items.map((item, index) => (
        <article className={'gallery-row' + (index % 2 ? ' reversed' : '')} key={item.title}>
          <div className="gallery-copy reveal">
            <span className="eyebrow muted">{item.eyebrow}</span>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
            {item.link &&
              (item.link.href.startsWith('http') ? (
                <a className="text-link" href={item.link.href} target="_blank" rel="noreferrer">
                  {item.link.label} <ArrowUpRight size={16} />
                </a>
              ) : (
                <Link className="text-link" href={item.link.href}>
                  {item.link.label} <ArrowRight size={16} />
                </Link>
              ))}
          </div>
          <div className="gallery-art reveal" aria-hidden="true">
            <div className="gallery-art-card">
              <item.icon size={34} />
              <span className="gallery-art-bar" />
              <span className="gallery-art-bar short" />
              <span className="gallery-art-bar" />
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

export function ScrollGallery({eyebrow, title, items}: {eyebrow: string; title: string; items: GalleryItem[]}) {
  return (
    <section className="section showcase-scroller">
      <div className="section-heading">
        <h2>{title}</h2>
        <span className="eyebrow muted">{eyebrow}</span>
      </div>
      <div className="snap-track" role="list">
        {items.map((item) => (
          <article className="snap-card" role="listitem" key={item.title}>
            <item.icon size={26} />
            <span className="eyebrow muted">{item.eyebrow}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ComparisonTable({comparison}: {comparison: Comparison}) {
  return (
    <section className="section showcase-compare">
      <div className="center-title">
        <span className="eyebrow muted">WHICH IS RIGHT FOR YOU?</span>
        <h2>Compare the choices.</h2>
        <p>Start local. Add remote access only if you want it.</p>
      </div>
      <div className="compare-scroll">
        <table className="compare-table">
          <thead>
            <tr>
              <th scope="col" />
              {comparison.columns.map((column) => (
                <th scope="col" key={column.name}>
                  <strong>{column.name}</strong>
                  <span>{column.note}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparison.rows.map((row) => (
              <tr key={row.label}>
                <th scope="row">{row.label}</th>
                {row.values.map((value, index) => (
                  <td key={comparison.columns[index].name}>
                    {value === true ? (
                      <span className="compare-yes" aria-label="Yes">
                        <Check size={18} />
                      </span>
                    ) : value === false ? (
                      <span className="compare-no" aria-label="No">
                        <Minus size={18} />
                      </span>
                    ) : (
                      value
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function SpecsSection({groups}: {groups: SpecGroup[]}) {
  return (
    <section className="section showcase-specs">
      <div className="section-heading">
        <h2>Technical details.</h2>
        <span className="eyebrow muted">SPECIFICATIONS</span>
      </div>
      <div className="specs-grid">
        {groups.map((group) => (
          <div className="specs-group" key={group.title}>
            <h3>{group.title}</h3>
            <dl>
              {group.rows.map((row) => (
                <div key={row.label}>
                  <dt>{row.label}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
      <p className="specs-note">
        Details describe the current direction and are subject to change as rumahl develops.
      </p>
    </section>
  );
}

export function FaqSection({items, title = 'Questions, answered.'}: {items: FaqItem[]; title?: string}) {
  return (
    <section className="section showcase-faq">
      <div className="section-heading">
        <h2>{title}</h2>
        <span className="eyebrow muted">GOOD TO KNOW</span>
      </div>
      <Accordion type="single" collapsible className="faq-accordion">
        {items.map((item, index) => (
          <AccordionItem value={String(index)} key={item.q}>
            <AccordionTrigger>{item.q}</AccordionTrigger>
            <AccordionContent>{item.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
