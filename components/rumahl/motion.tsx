'use client';
import {useEffect} from 'react';

export function ScrollMotion() {
  useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    const update = () => {
      frame = 0;
      document.documentElement.classList.toggle('scrolled', scrollY > 45);
      if (media.matches) return;
      document.querySelectorAll<HTMLElement>('[data-scroll]').forEach((el) => {
        const rect = el.getBoundingClientRect();
        const p = Math.max(0, Math.min(1, -rect.top / Math.max(1, rect.height - innerHeight)));
        el.style.setProperty('--progress', String(p));
      });
    };
    const scroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', scroll, {passive: true});
    window.addEventListener('resize', scroll);
    update();

    const reveals = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (media.matches || !('IntersectionObserver' in window)) {
      reveals.forEach((el) => el.classList.add('is-visible'));
      return () => {
        window.removeEventListener('scroll', scroll);
        window.removeEventListener('resize', scroll);
        cancelAnimationFrame(frame);
      };
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {rootMargin: '0px 0px -8% 0px', threshold: 0.08}
    );
    reveals.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', scroll);
      window.removeEventListener('resize', scroll);
      cancelAnimationFrame(frame);
    };
  }, []);
  return null;
}

export function ScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - innerHeight;
      const p = max > 0 ? Math.min(1, scrollY / max) : 0;
      bar.style.transform = `scaleX(${p})`;
    };
    const scroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', scroll, {passive: true});
    window.addEventListener('resize', scroll);
    update();
    return () => {
      window.removeEventListener('scroll', scroll);
      window.removeEventListener('resize', scroll);
      cancelAnimationFrame(frame);
    };
  }, []);
  return <div id="scroll-progress" className="scroll-progress" aria-hidden="true" />;
}
