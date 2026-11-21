'use client';

import {useEffect, useRef, useState, type KeyboardEvent, type PointerEvent} from 'react';
import {brandTints} from '@/content/brand';
import {BrandLogo} from './brand';
import styles from './color-wheel.module.css';

type Mode = 'light' | 'dark';

function tinted(hue: number, mode: Mode): string {
  const tint = brandTints[mode];
  return `hsl(${Math.round(hue)} ${tint.saturation}% ${tint.lightness}%)`;
}

function paint(
  hue: number,
  mode: Mode,
  mark: HTMLSpanElement | null,
  marker: HTMLSpanElement | null,
  swatch: HTMLSpanElement | null
) {
  const color = tinted(hue, mode);
  if (mark) mark.style.color = color;
  if (marker) marker.style.transform = `rotate(${hue}deg)`;
  if (swatch) swatch.style.background = color;
}

export function BrandColorWheel() {
  const [mode, setMode] = useState<Mode>('light');
  const [automatic, setAutomatic] = useState(true);
  const [selected, setSelected] = useState<number | null>(null);
  const markRef = useRef<HTMLSpanElement>(null);
  const markerRef = useRef<HTMLSpanElement>(null);
  const swatchRef = useRef<HTMLSpanElement>(null);
  const wheelRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  useEffect(() => {
    if (!automatic) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      paint(selected ?? 140, mode, markRef.current, markerRef.current, swatchRef.current);
      return;
    }
    let frame = 0;
    const started = performance.now();
    const tick = (now: number) => {
      const hue = ((now - started) / 20000) * 360 % 360;
      paint(hue, mode, markRef.current, markerRef.current, swatchRef.current);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [automatic, mode, selected]);

  function choose(hue: number) {
    const next = ((hue % 360) + 360) % 360;
    setAutomatic(false);
    setSelected(next);
    paint(next, mode, markRef.current, markerRef.current, swatchRef.current);
  }

  function switchMode(next: Mode) {
    setMode(next);
    if (!automatic) {
      const hue = selected ?? 0;
      paint(hue, next, markRef.current, markerRef.current, swatchRef.current);
    }
  }

  function fromPointer(event: PointerEvent<HTMLDivElement>) {
    const element = wheelRef.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);
    choose((Math.atan2(y, x) * 180) / Math.PI + 90);
  }

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.setPointerCapture(event.pointerId);
    dragging.current = true;
    fromPointer(event);
  }

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    if (dragging.current) fromPointer(event);
  }

  function onPointerUp() {
    dragging.current = false;
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const current = selected ?? 0;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
      event.preventDefault();
      choose(current - 5);
    } else if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
      event.preventDefault();
      choose(current + 5);
    } else if (event.key === 'Home') {
      event.preventDefault();
      choose(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      choose(359);
    }
  }

  function resumeAutomatic() {
    setSelected(null);
    setAutomatic(true);
  }

  const tint = brandTints[mode];
  const wheelBackground = `conic-gradient(from 0deg, ${Array.from({length: 13}, (_, index) => {
    const hue = index * 30;
    return `hsl(${hue} ${tint.saturation}% ${tint.lightness}%) ${index * (100 / 12)}%`;
  }).join(', ')})`;

  return (
    <div className={styles.wrap}>
      <div
        ref={wheelRef}
        className={styles.wheel}
        style={{background: wheelBackground}}
        role="slider"
        tabIndex={0}
        aria-label="Choose the logo colour from the allowed tint"
        aria-valuemin={0}
        aria-valuemax={359}
        aria-valuenow={selected ?? 0}
        aria-valuetext={automatic ? 'Automatic colour cycle' : `Hue ${Math.round(selected ?? 0)} degrees`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onKeyDown={onKeyDown}
      >
        <span className={styles.inner} data-mode={mode}>
          <span ref={markRef} className={styles.mark} style={{color: tinted(selected ?? 0, mode)}}>
            <BrandLogo />
          </span>
        </span>
        <span ref={markerRef} className={styles.marker} aria-hidden="true" />
      </div>
      <div className={styles.copy}>
        <h3>All hues. The right tint.</h3>
        <p>
          Click or drag the wheel to pick a hue. Leave it alone and the mark cycles through the range at the selected
          tint. The light tint is deeper; the dark tint is lighter. A coloured logo is not always the most useful choice.
        </p>
        <div className={styles.modes} role="group" aria-label="Allowed tint">
          <button type="button" data-active={mode === 'light'} aria-pressed={mode === 'light'} onClick={() => switchMode('light')}>
            Light tint
          </button>
          <button type="button" data-active={mode === 'dark'} aria-pressed={mode === 'dark'} onClick={() => switchMode('dark')}>
            Dark tint
          </button>
        </div>
        <div className={styles.readout}>
          <span ref={swatchRef} className={styles.swatch} style={{background: tinted(selected ?? 0, mode)}} aria-hidden="true" />
          <code>
            {automatic
              ? `Automatic · ${mode} tint`
              : `hsl(${Math.round(selected ?? 0)} ${tint.saturation}% ${tint.lightness}%)`}
          </code>
          {!automatic && (
            <button type="button" onClick={resumeAutomatic}>
              Automatic
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
