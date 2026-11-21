import {notFound} from 'next/navigation';
import type {Metadata} from 'next';
import {docs} from '@/components/rumahl/knowledge';
import {PortalShell,DocsFrame,DocsHome,ArticleView} from '@/components/rumahl/portal';
export function generateStaticParams(){return [{slug:[]},...docs.map(a=>({slug:[a.slug]}))]}
export async function generateMetadata({params}:{params:Promise<{slug?:string[]}>}):Promise<Metadata>{
  const{slug}=await params;
  const article=docs.find(a=>a.slug===slug?.join('/'));
  const title=`${article?.title||'Documentation'} — rumahl docs`;
  const description=article?.summary||'Learn what rumahl OS can do today, try the development build and understand its security and integration model.';
  const path=article?`/docs/${article.slug}`:'/docs';
  return {title,description,alternates:{canonical:path,types:{'text/markdown':path+'.md'}},openGraph:{title,description,url:path,type:'article'}};
}
export default async function Page({params}:{params:Promise<{slug?:string[]}>}){const{slug}=await params;const article=slug?.length?docs.find(a=>a.slug===slug.join('/')):undefined;if(slug?.length&&!article)notFound();return <PortalShell kind="docs"><DocsFrame>{article?<ArticleView article={article} kind="docs"/>:<DocsHome/>}</DocsFrame></PortalShell>}
