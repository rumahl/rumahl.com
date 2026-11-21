'use client';
import type {Article} from '@/components/rumahl/knowledge';
import {groupArticles} from './docs-utils';
import {NestedNav, type NestedNavGroup} from './nested-nav';

export function DocsSidebar({
  articles,
  currentSlug,
  hrefFor,
}: {
  articles: Article[];
  currentSlug: string;
  hrefFor: (slug: string) => string;
}) {
  const groups: NestedNavGroup[] = groupArticles(articles).map((group) => ({
    id: group.group,
    label: group.group,
    areas: group.areas.map((area) => ({
      id: group.group + '/' + area.area,
      label: area.area,
      items: area.items.map((article) => ({
        id: article.slug,
        label: article.title,
        href: hrefFor(article.slug),
      })),
    })),
  }));

  return <NestedNav groups={groups} activeId={currentSlug} ariaLabel="Article navigation" />;
}
