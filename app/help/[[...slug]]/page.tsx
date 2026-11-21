import {notFound} from 'next/navigation';
import type {Metadata} from 'next';
import {help} from '@/components/rumahl/knowledge';
import {PortalShell,HelpHome,ArticleView} from '@/components/rumahl/portal';
export function generateStaticParams(){return [{slug:[]},...help.map(a=>({slug:[a.slug]}))]}
export async function generateMetadata({params}:{params:Promise<{slug?:string[]}>}):Promise<Metadata>{
  const{slug}=await params;
  const article=help.find(a=>a.slug===slug?.join('/'));
  const title=`${article?.title||'Support center'} — rumahl support`;
  const description=article?.summary||'Current setup guidance, project limitations and troubleshooting for rumahl OS.';
  const path=article?`/help/${article.slug}`:'/help';
  return {title,description,alternates:{canonical:path,types:{'text/markdown':path+'.md'}},openGraph:{title,description,url:path,type:'article'}};
}
export default async function Page({params}:{params:Promise<{slug?:string[]}>}){const{slug}=await params;const article=slug?.length?help.find(a=>a.slug===slug.join('/')):undefined;if(slug?.length&&!article)notFound();return <PortalShell kind="help">{article?<ArticleView article={article} kind="help"/>:<HelpHome/>}</PortalShell>}
