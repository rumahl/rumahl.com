import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {designDocs} from '@/components/design/design-docs';
import {ArticleView} from '@/components/rumahl/portal';

export function generateStaticParams() {
  return designDocs.map((article) => ({slug: article.slug}));
}

export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
  const {slug} = await params;
  const article = designDocs.find((item) => item.slug === slug);
  const path = `/design/docs/${slug}`;
  return {
    title: `${article?.title ?? 'Design documentation'} — rumahl Design`,
    description: article?.summary,
    alternates: {
      canonical: path,
      types: {'text/markdown': path + '.md'},
    },
  };
}

export default async function Page({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const article = designDocs.find((item) => item.slug === slug);
  if (!article) notFound();
  return (
    <div className="portal-scope content-main" style={{'--content-accent': 'var(--design-accent)'} as React.CSSProperties}>
      <ArticleView article={article} kind="design" />
    </div>
  );
}
