import type {MetadataRoute} from 'next';
import {docs, help} from '@/components/rumahl/knowledge';
import {developerDocs} from '@/components/rumahl/developer-docs';
import {designDocs} from '@/components/design/design-docs';
import {posts} from '@/lib/blog';

const base = 'https://rumahl.com';
const articleDate = (value: string) => {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? new Date() : date;
};

const staticRoutes = [
  '/',
  '/about',
  '/brand',
  '/photography',
  '/os',
  '/demo',
  '/features',
  '/integrations',
  '/get-rumahl',
  '/docs',
  '/help',
  '/developers',
  '/design',
  '/design/docs',
  '/design/storybook',
  '/design/rwds',
  '/design/rwds/components',
  '/design/color',
  '/design/glossary',
  '/design/rui',
  '/design/rui/components',
  '/design/systems',
  '/design/resources',
  '/blog',
  '/releases',
  '/security',
  '/legal',
  '/legal/privacy',
  '/legal/tos',
  '/legal/impressum',
  '/legal/cookies',
  '/legal/contributing',
  '/legal/code-of-conduct',
  '/legal/trademark',
  '/legal/rumahlos/tos',
  '/legal/rumahlos/privacy',
  '/legal/apps',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...staticRoutes.map((route) => ({
      url: base + route,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: route === '/' ? 1 : 0.7,
    })),
    ...docs.map((article) => ({
      url: base + '/docs/' + article.slug,
      lastModified: articleDate(article.updated),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...help.map((article) => ({
      url: base + '/help/' + article.slug,
      lastModified: articleDate(article.updated),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...developerDocs.map((article) => ({
      url: base + '/developers/' + article.slug,
      lastModified: articleDate(article.updated),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...designDocs.map((article) => ({
      url: base + '/design/docs/' + article.slug,
      lastModified: articleDate(article.updated),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...posts.map((post) => ({
      url: base + '/blog/' + post.slug,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
