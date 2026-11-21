import {notFound} from 'next/navigation';
import type {Metadata} from 'next';
import {developerDocs} from '@/components/rumahl/developer-docs';
import {PortalShell, ArticleView} from '@/components/rumahl/portal';

export function generateStaticParams() {
  return developerDocs.map((article) => ({slug: article.slug}));
}

export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
  const {slug} = await params;
  const article = developerDocs.find((item) => item.slug === slug);
  const path = `/developers/${slug}`;
  return {
    title: `${article?.title ?? 'Developer documentation'} — rumahl developers`,
    description: article?.summary,
    alternates: {
      canonical: path,
      types: {'text/markdown': path + '.md'},
    },
  };
}

export default async function Page({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const article = developerDocs.find((item) => item.slug === slug);
  if (!article) notFound();
  return (
    <PortalShell kind="developers">
      <ArticleView article={article} kind="developers" />
    </PortalShell>
  );
}
