'use client';
import {useEffect, useState} from 'react';
import styles from './section-subnav.module.css';

export function SectionSubNav({label, items}: {label: string; items: {id: string; label: string}[]}) {
  const [active, setActive] = useState(items[0]?.id ?? '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      {rootMargin: '-150px 0px -60% 0px', threshold: 0}
    );
    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav className={styles.subnav} aria-label={label + ' sections'}>
      <strong className={styles.label}>{label}</strong>
      <div className={styles.track}>
        {items.map((item) => (
          <a key={item.id} href={'#' + item.id} data-active={active === item.id} aria-current={active === item.id ? 'true' : undefined}>
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
