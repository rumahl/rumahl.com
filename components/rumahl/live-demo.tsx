import {ArrowUpRight} from 'lucide-react';
import styles from './live-demo.module.css';

// Point this at any externally hosted rumahl OS instance (a public demo, a
// QEMU image, or your own device). The website only embeds it — it never
// bundles or ships the operating system itself.
const DEFAULT_DEMO_URL = 'https://demo.rumahl.com';
const demoUrl = (process.env.NEXT_PUBLIC_RUMAHL_DEMO_URL ?? '').trim() || DEFAULT_DEMO_URL;

export function LiveDemo() {
  return (
    <div className={styles.wrap}>
      <div className={styles.bar}>
        <span>Live rumahl OS instance</span>
        <a href={demoUrl} target="_blank" rel="noreferrer">
          Open in a new tab <ArrowUpRight size={13} />
        </a>
      </div>
      <iframe
        className={styles.frame}
        src={demoUrl}
        title="rumahl OS live demo"
        loading="lazy"
        allow="clipboard-read; clipboard-write; fullscreen"
        referrerPolicy="no-referrer"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-downloads allow-modals allow-pointer-lock"
      />
    </div>
  );
}
