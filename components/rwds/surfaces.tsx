'use client';
import Link from 'next/link';
import type {ReactNode} from 'react';
import {Heading} from './primitives';

/**
 * Content card. Pass `href` to make the whole card a link. `footer` sits at
 * the bottom, so cards in a grid align their actions.
 */
export function Card({
  title,
  eyebrow,
  children,
  footer,
  href,
  padding = 'md',
  tone = 'surface',
}: {
  title: ReactNode;
  eyebrow?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  href?: string;
  padding?: 'md' | 'lg';
  tone?: 'surface' | 'plain';
}) {
  const inner = (
    <>
      <div className="rwds-card-header">
        {eyebrow}
        <Heading level={3} size="md">
          {title}
        </Heading>
      </div>
      {children ? <div className="rwds-card-body">{children}</div> : null}
      {footer ? <div className="rwds-card-footer">{footer}</div> : null}
    </>
  );
  const common = {padding: padding === 'lg' ? 'lg' : undefined, tone: tone === 'plain' ? 'plain' : undefined};
  if (href) {
    return (
      <Link className="rwds-card" href={href} data-interactive data-padding={common.padding} data-tone={common.tone}>
        {inner}
      </Link>
    );
  }
  return (
    <div className="rwds-card" data-padding={common.padding} data-tone={common.tone}>
      {inner}
    </div>
  );
}

/** Highlighted note. Tones: note (default), tip, important, warning. */
export function Callout({title, children, tone = 'note'}: {title?: string; children: ReactNode; tone?: 'note' | 'tip' | 'important' | 'warning'}) {
  return (
    <div className="rwds-callout" data-tone={tone === 'note' || tone === 'tip' ? undefined : tone} role={tone === 'warning' ? 'note' : undefined}>
      {title ? <strong>{title}</strong> : null}
      <div>{children}</div>
    </div>
  );
}

/** Native disclosure. Accessible without JavaScript. */
export function Disclosure({summary, children, defaultOpen = false}: {summary: ReactNode; children: ReactNode; defaultOpen?: boolean}) {
  return (
    <details className="rwds-disclosure" open={defaultOpen}>
      <summary>{summary}</summary>
      <div className="rwds-disclosure-body">{children}</div>
    </details>
  );
}

/** Image with a fixed aspect ratio and an optional caption. */
export function Figure({src, alt, ratio = '16:9', caption}: {src: string; alt: string; ratio?: '16:9' | '4:3' | '1:1'; caption?: ReactNode}) {
  const value = ratio.replace(':', '/');
  return (
    <figure className="rwds-figure" style={{['--rwds-ratio' as string]: value}}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
