import Link from 'next/link';
import {HighlightCarousel} from './highlight-carousel';
import {ArrowRight} from 'lucide-react';
import {Navigation} from './navigation';
import {Footer} from './sections';
import {ScrollMotion} from './motion';
import {EditorialMotion} from './editorial-motion';
import {EditorialImage,EditorialAction} from './home-continuation';
import {productPhotography} from '@/content/homepage';
import {ComparisonTable,SpecsSection,FaqSection} from './showcase';
import {ProductExplorer} from './product-explorer';
import {ProductSubNav} from './product-subnav';
import {products,type ProductKey} from './catalog';
import styles from './product-story.module.css';
export {products};export type {ProductKey};
export const productNames=Object.fromEntries(Object.entries(products).map(([key,value])=>[key,value.name])) as Record<ProductKey,string>;
const themeNames={os:'Platform components',integrations:'Integration design',features:'Platform details'};
export function ProductPage({product}:{product:ProductKey}) {
  const d=products[product];
  const photos=productPhotography[product];
  return <><Navigation/><main className={styles.page} data-product={product}>
    <section className={styles.hero} data-editorial-motion>
      <div className={styles.heroCopy} data-editorial-reveal><div className={styles.breadcrumb}><Link href="/">rumahl</Link><span>/</span><span>{d.name}</span></div><span className={styles.eyebrow}>{d.eyebrow}</span><h1>{d.title}</h1><p>{d.description}</p><div className={styles.heroActions}><EditorialAction link={d.cta}/><a href="#explore">Take a closer look <ArrowRight size={17}/></a></div><span className={styles.release}>INDEPENDENT OPEN SOURCE · IN DEVELOPMENT</span></div>
      <EditorialImage photo={photos.hero} className={styles.heroPhoto} eager action={d.cta}/>
    </section>
    <p className="section">Development status: these pages describe the current platform and its intended integration design. Provider availability varies. <Link href="/docs/start-here">Read the current status and getting-started guide.</Link></p>
    <ProductSubNav name={d.name} items={[{id:'explore',label:'Explore'},{id:'details',label:'Details'},{id:'questions',label:'Questions'}]}/>
    <HighlightCarousel title="Overview" slides={d.highlights.map((item,index)=>({title:item.title,text:item.text,photo:photos.highlights[index % photos.highlights.length]}))}/>
    <ProductExplorer product={product}/>
    <HighlightCarousel compact title={themeNames[product]} slides={d.gallery.map((item,index)=>({title:item.title,text:item.text,link:item.link,photo:photos.gallery[index % photos.gallery.length]}))}/>
    <div id="details" className={styles.details}>{d.comparison&&<ComparisonTable comparison={d.comparison}/>}<SpecsSection groups={d.specs}/></div>
    <div id="questions" className={styles.questions}><FaqSection items={d.faq}/></div>
    <section className={styles.next} data-editorial-motion><div data-editorial-reveal><span className={styles.eyebrow}>YOUR NEXT STEP</span><h2>{product==='integrations'?'Read the integration status.':'Explore the project.'}</h2><p>{product==='integrations'?'Review implemented connectors and proposed provider capabilities before testing an integration.':'Explore what comes next for rumahl and your own setup.'}</p></div><EditorialAction link={{label:product==='integrations'?'Read the integration docs':'Discover rumahl',href:product==='integrations'?'/docs/integrations':'/get-rumahl'}}/></section>
  </main><Footer/><ScrollMotion/><EditorialMotion/></>;
}
