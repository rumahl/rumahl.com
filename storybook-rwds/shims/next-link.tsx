import type {AnchorHTMLAttributes, ReactNode} from 'react';

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: string | {pathname?: string};
  children?: ReactNode;
  prefetch?: boolean;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  locale?: string | false;
  legacyBehavior?: boolean;
  passHref?: boolean;
};

export default function Link({href, children, prefetch, replace, scroll, shallow, locale, legacyBehavior, passHref, ...props}: LinkProps) {
  const target = typeof href === 'string' ? href : href?.pathname ?? '#';
  return <a href={target} {...props}>{children}</a>;
}
