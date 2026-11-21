'use client';
import {useEffect, useState} from 'react';
import {Monitor, Moon, Sun} from 'lucide-react';
import styles from './theme-switch.module.css';

export type ThemeMode = 'light' | 'dark' | 'system';

const MODES: {mode: ThemeMode; label: string; icon: typeof Sun}[] = [
  {mode: 'light', label: 'Light theme', icon: Sun},
  {mode: 'dark', label: 'Dark theme', icon: Moon},
  {mode: 'system', label: 'System theme', icon: Monitor},
];

function resolved(mode: ThemeMode) {
  if (mode !== 'system') return mode;
  return typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function apply(mode: ThemeMode) {
  if (typeof document === 'undefined') return;
  const next = resolved(mode);
  if (mode === 'system') {
    delete document.documentElement.dataset.theme;
  } else {
    document.documentElement.dataset.theme = next;
  }
  window.dispatchEvent(new CustomEvent('rumahl-theme-change', {detail: {mode, resolved: next}}));
}

export function ThemeSwitch() {
  const [mode, setMode] = useState<ThemeMode>('system');

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      let saved: string | null = null;
      try { saved = localStorage.getItem('rumahl-theme'); } catch {}
      const next: ThemeMode = saved === 'light' || saved === 'dark' ? saved : 'system';
      setMode(next);
      apply(next);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => {
      if (mode === 'system') apply('system');
    };
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, [mode]);

  function choose(next: ThemeMode) {
    setMode(next);
    try { localStorage.setItem('rumahl-theme', next); } catch {}
    apply(next);
  }

  return (
    <div className={styles.group} role="group" aria-label="Color theme">
      {MODES.map(({mode: value, label, icon: Icon}) => (
        <button
          key={value}
          type="button"
          className={styles.button}
          data-active={mode === value}
          aria-pressed={mode === value}
          aria-label={label}
          title={label}
          onClick={() => choose(value)}
        >
          <Icon size={15} />
        </button>
      ))}
    </div>
  );
}
