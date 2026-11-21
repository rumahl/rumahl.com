'use client';
import {useEffect, useState} from 'react';

export function ArticleToc({items, label = 'On this page'}: {items: {id: string; label: string}[]; label?: string}) {
  const [active, setActive] = useState(items[0]?.id ?? '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      {rootMargin: '-140px 0px -65% 0px', threshold: 0}
    );
    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <><aside className="content-toc" aria-label={label}>
      <p className="content-toc-label">{label}</p>
      <nav>
        {items.map((item) => (
          <a key={item.id} href={'#' + item.id} aria-current={active === item.id ? 'true' : undefined}>
            {item.label}
          </a>
        ))}
      </nav>
    </aside><details className="content-mobile-toc"><summary>{label}</summary><nav>{items.map(item=><a key={item.id} href={'#'+item.id}>{item.label}</a>)}</nav></details></>
  );
}
