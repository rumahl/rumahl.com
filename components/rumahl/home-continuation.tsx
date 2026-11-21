import Link from 'next/link';
import {HighlightCarousel} from './highlight-carousel';
import type {CSSProperties} from 'react';
import {ArrowUpRight,ArrowRight} from 'lucide-react';
import {homepageModules,type HomepageModule,type EditorialPhoto,type EditorialLink} from '@/content/homepage';
import {EditorialMotion} from './editorial-motion';
import styles from './home-continuation.module.css';

export function EditorialAction({link,secondary=false}:{link:EditorialLink;secondary?:boolean}) {
  return <Link className={secondary?styles.secondary:styles.action} href={link.href}>{link.label}<ArrowUpRight size={18}/></Link>;
}
export function EditorialImage({photo,className='',eager=false,action}:{photo:EditorialPhoto;className?:string;eager?:boolean;action?:EditorialLink}) {
  return <figure className={styles.photo+' '+className} style={{'--photo-focus':photo.position,'--photo-mobile-focus':photo.mobilePosition||photo.position} as CSSProperties}>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading={eager?'eager':'lazy'} decoding="async"/>
    <figcaption><a href={photo.source} target="_blank" rel="noreferrer">{photo.author} / Unsplash <ArrowUpRight size={10}/></a></figcaption>
    {action && <Link className="surface-notch photo-notch" href={action.href} aria-label={action.label}><ArrowUpRight size={27}/></Link>}
  </figure>;
}
function Campaign({module:m}:{module:HomepageModule}) {
  const headingId=m.id+'-heading';
  switch(m.kind) {
    case 'highlights': return <div id={m.id}><HighlightCarousel title={m.title} slides={m.slides}/></div>;
    case 'story': return <section id={m.id} className={styles.story} aria-labelledby={headingId} data-editorial-motion>
      <div className={styles.storyIntro} data-editorial-reveal><span className={styles.eyebrow}>{m.eyebrow}</span><h2 id={headingId}>{m.title}</h2><div className={styles.storySummary}><p>{m.text}</p><EditorialAction link={m.link}/></div></div>
      <div className={styles.landscape}><EditorialImage photo={m.photo} action={m.link}/><span className={styles.photoCaption}>{m.caption}</span></div>
    </section>;
    case 'spotlight': return <section id={m.id} className={styles.spotlight} aria-labelledby={headingId} data-editorial-motion>
      <div className={styles.spotlightCopy} data-editorial-reveal><span className={styles.eyebrow}>{m.eyebrow}</span><span className={styles.wordmark}>{m.wordmark}</span><h2 id={headingId}>{m.title}</h2><p>{m.text}</p><EditorialAction link={m.link}/><span className={styles.status}>{m.status}</span></div><EditorialImage photo={m.photo} action={m.link}/>
    </section>;
    case 'collection': return <section id={m.id} className={styles.collection} aria-labelledby={headingId} data-editorial-motion>
      <div data-editorial-reveal><span className={styles.eyebrow}>{m.eyebrow}</span><h2 id={headingId}>{m.title}</h2><p>{m.text}</p><EditorialAction link={m.link}/></div>
      <div className={styles.categoryList}>{m.links.map((link,index)=><Link href={link.href} key={link.label} data-editorial-reveal><span className={styles.categoryNumber}>0{index+1}</span><span><strong>{link.label}</strong><small>{link.text}</small></span><ArrowRight size={22}/></Link>)}</div>
    </section>;
    case 'invitation': return <section id={m.id} className={styles.invitation} aria-labelledby={headingId} data-editorial-motion><div data-editorial-reveal><span className={styles.eyebrow}>{m.eyebrow}</span><h2 id={headingId}>{m.title}</h2><p>{m.text}</p></div><div className={styles.invitationActions}><EditorialAction link={m.link}/><EditorialAction link={m.secondary} secondary/></div></section>;
  }
}
export function HomeContinuation() {
  return <div className={styles.continuation}>{homepageModules.filter(m=>m.enabled).map(m=><Campaign key={m.id} module={m}/>)}<EditorialMotion/></div>;
}


