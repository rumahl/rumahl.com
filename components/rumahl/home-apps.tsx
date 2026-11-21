import Link from 'next/link';
import type {CSSProperties} from 'react';
import {ArrowRight, Cable, HardDrive} from 'lucide-react';
import styles from './home-apps.module.css';

const apps = [
  {
    name: 'Home Assistant',
    category: 'Smart home',
    icon: '/icons/apps/homeassistant.svg',
    color: '#18BCF2',
    text: 'Keep your automations, entities and history. Connect the instance you already run, or let rumahl provide it and use it behind rumahl Home.',
    modes: ['Connect existing', 'Native target'],
  },
  {
    name: 'Jellyfin',
    category: 'Media',
    icon: '/icons/apps/jellyfin.svg',
    color: '#00A4DC',
    text: 'Keep your library and clients. Bring an existing Jellyfin into rumahl, or install and manage it through rumahl.',
    modes: ['Connect existing', 'Native target'],
  },
  {
    name: 'Proxmox',
    category: 'Virtualisation',
    icon: '/icons/apps/proxmox.svg',
    color: '#E57000',
    text: 'Keep Proxmox responsible for VMs and containers. rumahl connects to the host and brings health and resources into one view.',
    modes: ['Connect existing'],
  },
  {
    name: 'Vaultwarden',
    category: 'Passwords',
    icon: '/icons/apps/vaultwarden.svg',
    color: 'var(--foreground)',
    text: 'Keep your vault independent. Connect an existing Vaultwarden instance or provide it through rumahl.',
    modes: ['Connect existing', 'Native target'],
  },
  {
    name: 'Immich',
    category: 'Photos',
    icon: '/icons/apps/immich.svg',
    color: '#4250AF',
    text: 'Keep your photo library where it is. Connect Immich or install it through rumahl and bring photos into the shared experience.',
    modes: ['Connect existing', 'Native target'],
  },
] as const;

export function HomeApps() {
  return (
    <section className={styles.section} id="apps">
      <div className={styles.head}>
        <div>
          <span className="eyebrow muted">APPS &amp; SERVICES</span>
          <h2>The services you choose.</h2>
        </div>
        <p>
          rumahl OS does not want to take over your services. It gives the ones you already run a shared home — or
          provides them itself when you want rumahl to manage the lifecycle.
        </p>
      </div>

      <div className={styles.paths}>
        <article className={styles.path}>
          <Cable size={20} />
          <div>
            <strong>Connect what you run</strong>
            <span>Keep Home Assistant, Jellyfin, Proxmox, Vaultwarden or Immich where they are. rumahl connects to them.</span>
          </div>
        </article>
        <article className={styles.path}>
          <HardDrive size={20} />
          <div>
            <strong>Let rumahl provide it</strong>
            <span>Install and manage supported services through rumahl when you want one lifecycle and shared updates.</span>
          </div>
        </article>
      </div>

      <div className={styles.grid}>
        {apps.map((app) => (
          <article className={styles.card} key={app.name} style={{'--app-color': app.color} as CSSProperties}>
            <div className={styles.icon} aria-hidden="true">
              <span
                className={styles.logo}
                style={{
                  maskImage: `url(${app.icon})`,
                  WebkitMaskImage: `url(${app.icon})`,
                }}
              />
            </div>
            <div className={styles.body}>
              <span className={styles.category}>{app.category}</span>
              <h3>{app.name}</h3>
              <p>{app.text}</p>
              <div className={styles.tags}>
                {app.modes.map((mode) => (
                  <span key={mode} className={styles.tag} data-native={mode === 'Native target' ? 'true' : undefined}>
                    {mode}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.footer}>
        <p>Support varies while the integration model is being built. The docs mark what is available and what is still a target.</p>
        <div className={styles.actions}>
          <Link className={styles.primary} href="/integrations">
            Explore integrations <ArrowRight size={16} />
          </Link>
          <Link href="/docs/integrations">How integration works</Link>
        </div>
      </div>
    </section>
  );
}
