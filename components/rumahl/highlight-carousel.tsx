'use client';

import {useEffect,useRef,useState} from 'react';
import Link from 'next/link';
import {ArrowUpRight,Pause,Play} from 'lucide-react';
import {Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious,type CarouselApi} from '@/components/ui/carousel';
import type {EditorialPhoto,EditorialLink} from '@/content/homepage';
import styles from './highlight-carousel.module.css';

export type HighlightSlide={title:string;text:string;photo:EditorialPhoto;link?:EditorialLink};
export function HighlightCarousel({title,slides,compact=false}:{title:string;slides:HighlightSlide[];compact?:boolean}) {
  const [api,setApi]=useState<CarouselApi>();
  const [active,setActive]=useState(0);
  const [playing,setPlaying]=useState(false);
  const [visible,setVisible]=useState(false);
  const [reduced,setReduced]=useState(false);
  useEffect(()=>{const query=matchMedia("(prefers-reduced-motion: reduce)");const update=()=>setReduced(query.matches);update();query.addEventListener("change",update);return()=>query.removeEventListener("change",update);},[]);
  const [progress,setProgress]=useState(0);
  const root=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    if(!api)return;
    const select=()=>{setActive(api.selectedScrollSnap());setProgress(0);};
    const stop=()=>setPlaying(false);
    api.on('select',select);api.on('pointerDown',stop);api.on('reInit',select);select();
    return()=>{api.off('select',select);api.off('pointerDown',stop);api.off('reInit',select);};
  },[api]);
  useEffect(()=>{
    const observer=new IntersectionObserver(([entry])=>setVisible(entry.isIntersecting),{threshold:.3});
    if(root.current)observer.observe(root.current);
    const hide=()=>{if(document.hidden)setPlaying(false);};
    document.addEventListener('visibilitychange',hide);
    return()=>{observer.disconnect();document.removeEventListener('visibilitychange',hide);};
  },[]);
  useEffect(()=>{
    if(!playing||!visible||!api)return;
    const started=performance.now();
    const timer=setInterval(()=>{
      const next=(performance.now()-started)/6000;
      setProgress(Math.min(next,1));
      if(next>=1){api.scrollNext();}
    },40);
    return()=>clearInterval(timer);
  },[playing,visible,api,active]);
  if(!slides.length)return null;
  return <div ref={root} className={styles.section} data-compact={compact}>
    <h2>{title}</h2>
    <Carousel setApi={setApi} opts={{duration:reduced?0:25,align:compact?'start':'center',containScroll:compact?'trimSnaps':false,loop:!compact&&slides.length>1}} aria-label={title} onFocusCapture={()=>setPlaying(false)} onKeyDown={()=>setPlaying(false)}>
      <CarouselContent className={styles.track}>{slides.map((slide,index)=><CarouselItem key={slide.title} className={styles.slide} aria-label={`${index+1} of ${slides.length}`}>
        <article><div className={styles.visual}>
          <img src={slide.photo.src} alt={slide.photo.alt} width={slide.photo.width} height={slide.photo.height} loading="lazy" style={{objectPosition:slide.photo.position}}/>
          {!compact&&<div className={styles.overlay}><h3>{slide.title}</h3><p>{slide.text}</p>{slide.link&&<Link href={slide.link.href}>{slide.link.label}<ArrowUpRight size={18}/></Link>}</div>}
          <a className={styles.credit} href={slide.photo.source} target="_blank" rel="noreferrer">{slide.photo.author} / Unsplash</a>
        </div>{compact&&<div className={styles.caption}><h3>{slide.title}</h3><p>{slide.text}</p>{slide.link&&<Link href={slide.link.href}>{slide.link.label}<ArrowUpRight size={16}/></Link>}</div>}</article>
      </CarouselItem>)}</CarouselContent>
      {slides.length>1&&<div className={styles.controls}>{compact?<><CarouselPrevious className={styles.arrow}/><CarouselNext className={styles.arrow}/></>:<><div className={styles.dots}>{slides.map((slide,index)=><button key={slide.title} type="button" aria-label={`Show ${slide.title}`} aria-current={index===active?'true':undefined} onClick={()=>{setPlaying(false);api?.scrollTo(index);}}><span className={styles.dot} data-active={index===active}>{index===active&&<i style={{transform:`scaleX(${playing?progress:1})`}}/>}</span></button>)}</div><button className={styles.play} type="button" aria-label={playing?'Pause highlights':'Play highlights'} onClick={()=>{setProgress(0);setPlaying(!playing);}}>{playing?<Pause size={20}/>:<Play size={20}/>}</button></>}</div>}
    </Carousel>
  </div>;
}
