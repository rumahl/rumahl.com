import Link from 'next/link';
import {
  ArrowRight,
  Boxes,
  Cable,
  Cloud,
  Folder,
  HardDrive,
  House,
  Layers,
  Plug,
  Server,
  ShieldCheck,
} from 'lucide-react';
import styles from './integrations.module.css';

const levels = [
  {
    number: '01',
    name: 'Connected',
    icon: Cloud,
    text: 'Link an existing service through its API or URL. Nothing needs to be installed on the other system.',
    note: 'Proposed connection level.',
  },
  {
    number: '02',
    name: 'Enhanced',
    icon: Cable,
    text: 'Add the open rumahl Connector to an existing installation for deeper capabilities such as snapshots, health and updates.',
    note: 'Provider support varies.',
  },
  {
    number: '03',
    name: 'Native',
    icon: Server,
    text: 'The native level is being built to install and manage a supported system directly through rumahl, with maintained builds and automatic updates.',
    note: 'In development.',
  },
];

const providers = [
  {icon: House, name: 'rumahl Home', text: 'Home Assistant · openHAB', capability: 'home.*'},
  {icon: Folder, name: 'rumahl Files', text: 'TrueNAS · OpenMediaVault · SMB · WebDAV', capability: 'storage.*'},
  {icon: Layers, name: 'rumahl System', text: 'Native services · external hosts', capability: 'system.*'},
];

const capabilities = [
  'storage.volumes.read',
  'storage.snapshots.create',
  'system.health.read',
  'system.updates.manage',
  'home.entities.control',
  'identity.scopes.read',
];

export function HomeIntegrations() {
  return (
    <section className={styles.section} id="integrations">
      <div className={styles.head}>
        <div>
          <span className="eyebrow muted">TWO WAYS TO INTEGRATE</span>
          <h2>How a service connects.</h2>
        </div>
        <p>
          Connect the services you already run, or let rumahl provide them. rumahl OS does not replace Home Assistant,
          Jellyfin, Proxmox, Vaultwarden or Immich. These levels describe how a service can join; the documentation
          marks what is implemented today.
        </p>
      </div>

      <div className={styles.levelGrid}>
        {levels.map((level) => (
          <article className={styles.level} key={level.name}>
            <div className={styles.levelTop}>
              <span className={styles.levelNumber}>{level.number}</span>
              <level.icon size={22} />
            </div>
            <span className={styles.levelName}>{level.name}</span>
            <p>{level.text}</p>
            <span className={styles.levelNote}>{level.note}</span>
          </article>
        ))}
      </div>

      <div className={styles.split}>
        <div className={styles.surfacePanel}>
          <span className={styles.panelEyebrow}>TWO SURFACES, SAME SERVICES</span>
          <h3>Original apps stay complete. rumahl apps connect them.</h3>
          <p>
            Open the full TrueNAS or Home Assistant interface whenever you need it. Or use the native rumahl apps for a
            consistent experience across every provider.
          </p>
          <ul className={styles.providerList}>
            {providers.map((provider) => (
              <li key={provider.name}>
                <provider.icon size={19} />
                <div>
                  <strong>{provider.name}</strong>
                  <span>{provider.text}</span>
                </div>
                <code>{provider.capability}</code>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.capabilityPanel}>
          <span className={styles.panelEyebrow}>ONE OPEN CONTRACT</span>
          <div className={styles.capabilityIcon}>
            <Plug size={24} />
          </div>
          <h3>Capabilities decide what is possible — not where it runs.</h3>
          <p>
            An external installation with a connector can offer the same capabilities as a native one. The difference is
            who manages installation, updates and lifecycle.
          </p>
          <ul className={styles.capabilities}>
            {capabilities.map((capability) => (
              <li key={capability}>
                <code>{capability}</code>
              </li>
            ))}
          </ul>
          <Link href="/docs/integration-capabilities">
            Read the capability model <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      <div className={styles.principles}>
        <div>
          <ShieldCheck size={20} />
          <strong>Independent by design</strong>
          <span>Your services keep working when rumahl is offline. Nothing is replaced.</span>
        </div>
        <div>
          <Boxes size={20} />
          <strong>External or native</strong>
          <span>Choose the installation route that fits your home.</span>
        </div>
        <div>
          <HardDrive size={20} />
          <strong>Open from the start</strong>
          <span>The developer contracts are public. The connector specification is being developed in the open.</span>
        </div>
      </div>

      <div className={styles.actions}>
        <Link className={styles.primary} href="/docs/integrations">
          Explore the integration model <ArrowRight size={16} />
        </Link>
        <Link href="/developers/connectors">Read the connector documentation</Link>
      </div>
    </section>
  );
}
