'use client';
import {useCallback, useEffect, useState} from 'react';
import {Maximize2, Minimize2} from 'lucide-react';

export function useArticleWidth() {
  const [wide, setWide] = useState(false);
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      try {
        if (window.localStorage.getItem('rumahl-article-wide') === '1') setWide(true);
      } catch {
        /* ignore */
      }
    });
    return () => cancelAnimationFrame(raf);
  }, []);
  const toggle = useCallback(() => {
    setWide((value) => {
      const next = !value;
      try {
        window.localStorage.setItem('rumahl-article-wide', next ? '1' : '0');
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);
  return {wide, toggle};
}

export function ArticleWidthToggle({wide, onToggle}: {wide: boolean; onToggle: () => void}) {
  return (
    <button type="button" className="content-width-toggle" onClick={onToggle} aria-pressed={wide}>
      {wide ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
      {wide ? 'Normal width' : 'Wide layout'}
    </button>
  );
}
