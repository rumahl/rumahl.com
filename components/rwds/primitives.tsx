'use client';
import Link from 'next/link';
import {createElement, type ReactNode} from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'inverse';

/** A call to action. Renders a link when `href` is set, otherwise a button. */
export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  icon,
  external = false,
  type = 'button',
  disabled = false,
  onClick,
  'aria-label': ariaLabel,
}: {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: 'md' | 'sm';
  icon?: ReactNode;
  external?: boolean;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
  'aria-label'?: string;
}) {
  const content = (
    <>
      {children}
      {icon}
    </>
  );
  if (href) {
    if (external) {
      return (
        <a className="rwds-button" data-variant={variant} data-size={size} href={href} target="_blank" rel="noreferrer" aria-label={ariaLabel}>
          {content}
        </a>
      );
    }
    return (
      <Link className="rwds-button" data-variant={variant} data-size={size} href={href} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }
  return (
    <button className="rwds-button" data-variant={variant} data-size={size} type={type} disabled={disabled} onClick={onClick} aria-label={ariaLabel}>
      {content}
    </button>
  );
}

/** Inline link with an arrow-free, underline-on-hover style. */
export function TextLink({children, href, external = false}: {children: ReactNode; href: string; external?: boolean}) {
  if (external) {
    return (
      <a className="rwds-link" href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link className="rwds-link" href={href}>
      {children}
    </Link>
  );
}

/** Small status or category label. */
export function Tag({children, tone = 'neutral'}: {children: ReactNode; tone?: 'neutral' | 'accent' | 'warning'}) {
  return (
    <span className="rwds-tag" data-tone={tone === 'neutral' ? undefined : tone}>
      {children}
    </span>
  );
}

/** Uppercase label that sits above a heading. */
export function Eyebrow({children}: {children: ReactNode}) {
  return <span className="rwds-eyebrow">{children}</span>;
}

/**
 * Heading. `level` controls the semantic element, `size` the visual scale.
 * They are independent so a visual section title can be an h3 when needed.
 */
export function Heading({
  children,
  level = 2,
  size,
  id,
}: {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4;
  size?: 'display' | 'xl' | 'lg' | 'md' | 'sm';
  id?: string;
}) {
  const visual = size ?? (level === 1 ? 'display' : level === 2 ? 'lg' : 'md');
  return createElement(`h${level}`, {className: 'rwds-heading', 'data-size': visual, id}, children);
}

/** Running text. `lead` for introductions, `small` for metadata. */
export function Text({
  children,
  size = 'body',
  tone = 'default',
  as = 'p',
}: {
  children: ReactNode;
  size?: 'lead' | 'body' | 'small';
  tone?: 'default' | 'strong';
  as?: 'p' | 'span' | 'div';
}) {
  return createElement(as, {className: 'rwds-text', 'data-size': size === 'body' ? undefined : size, 'data-tone': tone === 'default' ? undefined : tone}, children);
}
