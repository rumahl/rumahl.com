'use client';
import {useEffect} from 'react';
/** Scoped motion; content stays readable without JavaScript or with reduced motion. */
export function EditorialMotion() {
  useEffect(()=>{
    const preference=matchMedia('(prefers-reduced-motion: reduce)');
    const sections=[...document.querySelectorAll<HTMLElement>('[data-editorial-motion]')];
    const active=new Set<HTMLElement>();
    const animations:Animation[]=[];
    let frame=0;
    const update=()=>{
      frame=0;
      if(preference.matches)return;
      active.forEach(section=>{
        const rect=section.getBoundingClientRect();
        const progress=Math.min(1,Math.max(0,(innerHeight-rect.top)/(innerHeight+rect.height)));
        section.style.setProperty('--editorial-progress',String(progress));
      });
    };
    const requestUpdate=()=>{if(!frame)frame=requestAnimationFrame(update);};
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        const section=entry.target as HTMLElement;
        if(entry.isIntersecting){
          active.add(section);
          if(!preference.matches&&!section.dataset.editorialSeen){
            section.dataset.editorialSeen='true';
            section.querySelectorAll<HTMLElement>('[data-editorial-reveal]').forEach((el,index)=>{
              animations.push(el.animate([{opacity:.3,transform:'translateY(25px)'},{opacity:1,transform:'none'}],{duration:700,delay:index*70,easing:'cubic-bezier(.2,.7,.2,1)'}));
            });
          }
        }else active.delete(section);
      });
      requestUpdate();
    },{rootMargin:'100px',threshold:0});
    sections.forEach(section=>observer.observe(section));
    const preferenceChanged=()=>{
      if(preference.matches){
        animations.forEach(a=>a.cancel());
        sections.forEach(s=>s.style.removeProperty('--editorial-progress'));
      }else requestUpdate();
    };
    preference.addEventListener('change',preferenceChanged);
    window.addEventListener('scroll',requestUpdate,{passive:true});
    window.addEventListener('resize',requestUpdate);
    return ()=>{
      observer.disconnect();cancelAnimationFrame(frame);animations.forEach(a=>a.cancel());
      preference.removeEventListener('change',preferenceChanged);
      window.removeEventListener('scroll',requestUpdate);
      window.removeEventListener('resize',requestUpdate);
    };
  },[]);
  return null;
}

