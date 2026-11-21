'use client';

import Link from 'next/link';
import {useEffect, useRef, useState, type CSSProperties} from 'react';
import {ArrowDown, ArrowRight, Folder, House, Layers} from 'lucide-react';
import {BrandIcon} from './brand';
import styles from './integration-story.module.css';

const steps = [
  {title: 'Your services keep their place.', text: 'Home Assistant runs your automations. Jellyfin serves your media. Your services keep their data and original interfaces.', label: 'Independent services'},
  {title: 'rumahl connects to them.', text: 'APIs and connectors expose selected capabilities. Access needs explicit permission. Connect an existing service, or use a supported installation managed by rumahl.', label: 'Explicit connections'},
  {title: 'One interface. Still your services.', text: 'The integration model brings selected capabilities into rumahl Home, Files and System. The original services remain available in their own interfaces.', label: 'A shared interface'},
];
const services = [
  {name: 'Home Assistant', logo: 'home-assistant', x: 22, y: 18},
  {name: 'Jellyfin', logo: 'jellyfin', x: 79, y: 19},
  {name: 'Immich', logo: 'immich', x: 89, y: 59},
  {name: 'Proxmox', logo: 'proxmox', x: 67, y: 87},
  {name: 'Vaultwarden', logo: 'vaultwarden', x: 22, y: 82},
];

export function IntegrationStory() {
  const section = useRef<HTMLElement>(null);
  const [phase, setPhase] = useState(0);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const root = section.current;
    if (!root) return;
    const query = window.matchMedia('(min-width: 1000px) and (min-height: 760px) and (prefers-reduced-motion: no-preference)');
    let frame = 0;
    let visible = true;
    const update = () => {
      frame = 0;
      if (!query.matches || !visible) return;
      const rect = root.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -rect.top / Math.max(1, root.offsetHeight - window.innerHeight)));
      setPhase(progress < .32 ? 0 : progress < .67 ? 1 : 2);
    };
    const schedule = () => {if (!frame) frame = requestAnimationFrame(update);};
    const configure = () => {setAnimated(query.matches); schedule();};
    const observer = new IntersectionObserver(([entry]) => {visible = entry.isIntersecting; if (visible) schedule();});
    observer.observe(root);
    query.addEventListener('change', configure);
    window.addEventListener('scroll', schedule, {passive: true});
    window.addEventListener('resize', schedule);
    configure();
    return () => {
      observer.disconnect();
      query.removeEventListener('change', configure);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      cancelAnimationFrame(frame);
    };
  }, []);

  function selectPhase(index: number) {
    setPhase(index);
    const root = section.current;
    if (animated && root) {
      const start = root.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({top: start + (root.offsetHeight - window.innerHeight) * [0, .49, .86][index], behavior: 'smooth'});
    }
  }

  return (
    <section ref={section} id="integration-story" className={styles.story} data-animated={animated} data-phase={phase} aria-labelledby="integration-story-title">
      <div className={styles.sticky}>
        <header className={styles.header}>
          <div>
            <span className={styles.eyebrow}>WHAT rumahl OS CONNECTS</span>
            <h2 id="integration-story-title">Integrate,<br/><span>don’t replace.</span></h2>
          </div>
          <p>A local platform around the services you choose.<br/>The connection changes. The services remain.</p>
        </header>
        <div className={styles.body}>
          <ol className={styles.steps} aria-label="How integration works">
            {steps.map((step, index) => (
              <li key={step.title} data-active={phase === index}>
                <button type="button" onClick={() => selectPhase(index)} aria-pressed={phase === index} aria-controls="integration-diagram">
                  <span className={styles.number}>0{index + 1}</span>
                  <span><strong>{step.title}</strong><span className={styles.stepText}>{step.text}</span></span>
                </button>
              </li>
            ))}
          </ol>
          <div className={styles.diagram} id="integration-diagram" role="img" aria-label={`${steps[phase].label}. Home Assistant, Jellyfin, Immich, Proxmox and Vaultwarden remain independent services. rumahl connects selected capabilities through APIs and explicit permissions. Conceptual integration model, not a live system.`}>
            <div className={styles.diagramCaption} aria-hidden="true"><span className={styles.dot}/>{steps[phase].label}</div>
            <div className={styles.map} aria-hidden="true">
              <div className={styles.disc}/>
              <div className={styles.outerOrbit}/>
              <div className={styles.innerOrbit}/>
              <svg className={styles.connections} viewBox="0 0 100 100">
                {services.map(service => <path key={service.name} pathLength="1" d={`M ${service.x} ${service.y} L 50 50`}/>)}
              </svg>
              <div className={styles.hub}>
                <BrandIcon />
                <strong>rumahl OS</strong>
                <div className={styles.surfaces}><span><House size={14}/> Home</span><span><Folder size={14}/> Files</span><span><Layers size={14}/> System</span></div>
              </div>
              {services.map(service => (
                <div className={styles.service} key={service.name} style={{'--x': `${service.x}%`, '--y': `${service.y}%`} as CSSProperties}>
                  {/* Original vector assets, rendered in full color rather than masked into generic symbols. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className={styles.serviceLogo} src={`/icons/apps/original/${service.logo}.svg`} alt="" width={64} height={64} data-monochrome={service.logo === 'vaultwarden'} />
                  <strong>{service.name}</strong>
                </div>
              ))}
            </div>
            <div className={styles.diagramFooter} aria-hidden="true"><span>Original interfaces remain available</span><span>On your hardware</span></div>
          </div>
        </div>
        <footer className={styles.footer}>
          <p>Integration design · Provider support is in development.</p>
          <Link href="/docs/integrations">Read the implementation status <ArrowRight size={15}/></Link>
          <span className={styles.scrollHint} aria-hidden="true">Scroll to connect <ArrowDown size={14}/></span>
        </footer>
      </div>
    </section>
  );
}
