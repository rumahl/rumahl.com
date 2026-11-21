'use client';
import {useEffect, useState} from 'react';
import styles from './product-story.module.css';

export function ProductSubNav({name, items}: {name: string; items: {id: string; label: string}[]}) {
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

  return (
    <nav className={styles.localNav} aria-label={name + ' sections'}>
      <strong>{name}</strong>
      <div>
        {items.map((item) => (
          <a key={item.id} href={'#' + item.id} data-active={active === item.id} aria-current={active === item.id ? 'true' : undefined}>
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
