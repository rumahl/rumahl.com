'use client';
import type {ReactNode} from 'react';

/** Horizontal frame. `narrow` for reading, `content` for documentation, `wide` for pages. */
export function Container({children, width = 'wide', id}: {children: ReactNode; width?: 'narrow' | 'content' | 'wide'; id?: string}) {
  return (
    <div className="rwds-container" data-width={width} id={id}>
      {children}
    </div>
  );
}

/** Vertical section. `alt` uses the surface colour, `inverse` the dark band. */
export function Section({
  children,
  tone = 'default',
  spacing = 'default',
  id,
  label,
}: {
  children: ReactNode;
  tone?: 'default' | 'alt' | 'inverse';
  spacing?: 'default' | 'tight';
  id?: string;
  label?: string;
}) {
  return (
    <section className="rwds-section" data-tone={tone === 'default' ? undefined : tone} data-spacing={spacing === 'default' ? undefined : spacing} id={id} aria-label={label}>
      <Container>{children}</Container>
    </section>
  );
}

/** Responsive column grid. Three and four columns collapse to two, then one. */
export function Grid({children, columns = 3, gap = 'md'}: {children: ReactNode; columns?: 2 | 3 | 4; gap?: 'sm' | 'md' | 'lg'}) {
  return (
    <div className="rwds-grid" data-columns={columns} data-gap={gap === 'md' ? undefined : gap}>
      {children}
    </div>
  );
}

/** Vertical rhythm between children. Use instead of ad-hoc margins. */
export function Stack({children, gap = 'md', align = 'stretch'}: {children: ReactNode; gap?: 'sm' | 'md' | 'lg'; align?: 'stretch' | 'start'}) {
  const size = gap === 'sm' ? 12 : gap === 'lg' ? 40 : 24;
  return <div style={{display: 'grid', gap: size, justifyItems: align === 'start' ? 'start' : 'stretch'}}>{children}</div>;
}
