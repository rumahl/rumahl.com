import {
  Activity,
  Camera,
  Cloud,
  FileText,
  Film,
  Gamepad2,
  HardDrive,
  Home,
  Image,
  LockKeyhole,
  Play,
  RefreshCw,
  ShieldCheck,
  Users,
  Wifi,
  type LucideIcon,
} from 'lucide-react';

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  DEVICE DATABASE
 * ─────────────────────────────────────────────────────────────────────────────
 *  Add a device by appending one entry to `devices`. Fields:
 *    id          stable slug (also used in share URLs)
 *    name        display name
 *    brand       maker
 *    arch        'x86_64' | 'arm64'
 *    kind        'sbc' | 'minipc' | 'server'  (used for the fallback illustration)
 *    ram         GB of RAM (0 = custom / bring your own)
 *    storage     GB of included storage (0 = add your own disk)
 *    cores       CPU cores
 *    ethernet    network speed label
 *    price       approximate price in EUR (0 = already owned)
 *    priceNote   short note next to the price
 *    power       typical power draw in watts
 *    ease        1–5, how easy it is to get running
 *    expand      1–5, how expandable it is
 *    image       optional path under /public, e.g. '/images/devices/foo.jpg'
 *    notes       one short sentence
 *    popular     optional highlight
 * ─────────────────────────────────────────────────────────────────────────────
 */
export type Arch = 'x86_64' | 'arm64';
export type DeviceKind = 'sbc' | 'minipc' | 'server';

export type Device = {
  id: string;
  name: string;
  brand: string;
  arch: Arch;
  kind: DeviceKind;
  ram: number;
  storage: number;
  cores: number;
  ethernet: string;
  price: number;
  priceNote: string;
  power: number;
  ease: number;
  expand: number;
  image?: string;
  notes: string;
  popular?: boolean;
};

export const devices: Device[] = [
  {
    id: 'raspberry-pi-4',
    name: 'Raspberry Pi 4 Model B',
    brand: 'Raspberry Pi',
    arch: 'arm64',
    kind: 'sbc',
    ram: 4,
    storage: 0,
    cores: 4,
    ethernet: 'Gigabit',
    price: 65,
    priceNote: 'Board only',
    power: 5,
    ease: 4,
    expand: 3,
    notes: 'The classic. Quiet, low power, huge community. Add a microSD or USB SSD.',
    popular: true,
  },
  {
    id: 'raspberry-pi-5',
    name: 'Raspberry Pi 5',
    brand: 'Raspberry Pi',
    arch: 'arm64',
    kind: 'sbc',
    ram: 8,
    storage: 0,
    cores: 4,
    ethernet: 'Gigabit',
    price: 95,
    priceNote: 'Board only',
    power: 7,
    ease: 4,
    expand: 4,
    notes: 'Noticeably faster than the Pi 4 — useful for media and several lightweight services.',
    popular: true,
  },
  {
    id: 'rock-pi-4',
    name: 'Rock Pi 4 Model B',
    brand: 'Radxa',
    arch: 'arm64',
    kind: 'sbc',
    ram: 4,
    storage: 0,
    cores: 6,
    ethernet: 'Gigabit',
    price: 75,
    priceNote: 'Board only',
    power: 6,
    ease: 3,
    expand: 4,
    notes: 'Six cores and M.2 support for a fast NVMe system disk.',
  },
  {
    id: 'odroid-n2-plus',
    name: 'Odroid N2+',
    brand: 'Hardkernel',
    arch: 'arm64',
    kind: 'sbc',
    ram: 4,
    storage: 0,
    cores: 6,
    ethernet: 'Gigabit',
    price: 90,
    priceNote: 'Board only',
    power: 5,
    ease: 3,
    expand: 3,
    notes: 'Strong ARM board with excellent I/O and passive cooling.',
  },
  {
    id: 'orange-pi-5',
    name: 'Orange Pi 5',
    brand: 'Orange Pi',
    arch: 'arm64',
    kind: 'sbc',
    ram: 8,
    storage: 0,
    cores: 8,
    ethernet: 'Gigabit',
    price: 110,
    priceNote: 'Board only',
    power: 8,
    ease: 3,
    expand: 4,
    notes: 'Eight cores and NVMe for more demanding services.',
  },
  {
    id: 'zimaboard',
    name: 'ZimaBoard 832',
    brand: 'IceWhale',
    arch: 'x86_64',
    kind: 'sbc',
    ram: 8,
    storage: 32,
    cores: 4,
    ethernet: 'Dual 2.5 Gigabit',
    price: 200,
    priceNote: '8 GB / 32 GB eMMC',
    power: 8,
    ease: 4,
    expand: 4,
    notes: 'x86 single-board with dual Ethernet — great as a router or firewall.',
  },
  {
    id: 'mini-n100-8',
    name: 'Intel N100 Mini PC',
    brand: 'Mini PC',
    arch: 'x86_64',
    kind: 'minipc',
    ram: 8,
    storage: 256,
    cores: 4,
    ethernet: '2.5 Gigabit',
    price: 150,
    priceNote: '8 GB / 256 GB',
    power: 12,
    ease: 5,
    expand: 3,
    notes: 'Quiet, efficient x86 with NVMe storage — the sweet spot for most homes.',
    popular: true,
  },
  {
    id: 'mini-n100-16',
    name: 'Intel N100 Mini PC (Plus)',
    brand: 'Mini PC',
    arch: 'x86_64',
    kind: 'minipc',
    ram: 16,
    storage: 512,
    cores: 4,
    ethernet: '2.5 Gigabit',
    price: 220,
    priceNote: '16 GB / 512 GB',
    power: 13,
    ease: 5,
    expand: 3,
    notes: 'More memory for media, photos and additional services.',
  },
  {
    id: 'beelink-s12',
    name: 'Beelink Mini S12 Pro',
    brand: 'Beelink',
    arch: 'x86_64',
    kind: 'minipc',
    ram: 16,
    storage: 500,
    cores: 4,
    ethernet: 'Gigabit',
    price: 200,
    priceNote: '16 GB / 500 GB',
    power: 12,
    ease: 5,
    expand: 2,
    notes: 'Ready-to-run mini PC with plenty of storage out of the box.',
  },
  {
    id: 'used-office-pc',
    name: 'Used office mini PC (i5)',
    brand: 'Refurbished',
    arch: 'x86_64',
    kind: 'minipc',
    ram: 16,
    storage: 256,
    cores: 6,
    ethernet: 'Gigabit',
    price: 130,
    priceNote: '16 GB / 256 GB',
    power: 18,
    ease: 4,
    expand: 3,
    notes: 'Best price/performance if you do not mind a refurbished machine.',
    popular: true,
  },
  {
    id: 'lenovo-tiny',
    name: 'Lenovo ThinkCentre Tiny',
    brand: 'Lenovo',
    arch: 'x86_64',
    kind: 'minipc',
    ram: 16,
    storage: 256,
    cores: 6,
    ethernet: 'Gigabit',
    price: 160,
    priceNote: 'Refurbished',
    power: 18,
    ease: 4,
    expand: 3,
    notes: 'Popular ex-office tiny PC with good Linux support.',
  },
  {
    id: 'intel-nuc-13',
    name: 'Intel NUC 13 Pro',
    brand: 'Intel',
    arch: 'x86_64',
    kind: 'minipc',
    ram: 16,
    storage: 500,
    cores: 12,
    ethernet: '2.5 Gigabit',
    price: 450,
    priceNote: '16 GB / 500 GB',
    power: 20,
    ease: 5,
    expand: 3,
    notes: 'Premium mini PC with plenty of CPU for many services at once.',
  },
  {
    id: 'byo-x86',
    name: 'Your own x86_64 machine',
    brand: 'Bring your own',
    arch: 'x86_64',
    kind: 'server',
    ram: 0,
    storage: 0,
    cores: 0,
    ethernet: 'Any',
    price: 0,
    priceNote: 'Already owned',
    power: 35,
    ease: 2,
    expand: 5,
    notes: 'An old desktop, laptop or server. Add RAM and a disk if needed.',
  },
];

export type AppItem = {
  id: string;
  name: string;
  category: string;
  icon: LucideIcon;
  ram: number;
  storage: number;
  cores: number;
  text: string;
  popular?: boolean;
};

export const apps: AppItem[] = [
  {id: 'home-assistant', name: 'Home Assistant', category: 'Smart home', icon: Home, ram: 1, storage: 8, cores: 1, text: 'Automate lights, sensors and devices — local and private.', popular: true},
  {id: 'plex', name: 'Plex', category: 'Media', icon: Play, ram: 2, storage: 20, cores: 2, text: 'Stream your films and shows to any device.', popular: true},
  {id: 'jellyfin', name: 'Jellyfin', category: 'Media', icon: Film, ram: 2, storage: 20, cores: 2, text: 'Free, open media server with no account required.', popular: true},
  {id: 'nextcloud', name: 'Nextcloud', category: 'Files', icon: Cloud, ram: 1, storage: 20, cores: 1, text: 'Your own cloud for files, calendars and contacts.', popular: true},
  {id: 'immich', name: 'Immich', category: 'Photos', icon: Image, ram: 4, storage: 50, cores: 2, text: 'Google-Photos-style backup for your pictures and videos.', popular: true},
  {id: 'adguard', name: 'AdGuard Home', category: 'Network', icon: ShieldCheck, ram: 0.5, storage: 1, cores: 0.5, text: 'Network-wide ad blocking and DNS privacy.', popular: true},
  {id: 'pihole', name: 'Pi-hole', category: 'Network', icon: Wifi, ram: 0.5, storage: 1, cores: 0.5, text: 'The classic network ad blocker.'},
  {id: 'vaultwarden', name: 'Vaultwarden', category: 'Security', icon: LockKeyhole, ram: 0.5, storage: 2, cores: 0.5, text: 'Self-hosted password manager (Bitwarden compatible).', popular: true},
  {id: 'paperless', name: 'Paperless-ngx', category: 'Documents', icon: FileText, ram: 2, storage: 10, cores: 2, text: 'Scan, index and find every document.'},
  {id: 'sonarr', name: 'Sonarr / Radarr', category: 'Media', icon: RefreshCw, ram: 1, storage: 5, cores: 1, text: 'Automate your series and film library.'},
  {id: 'syncthing', name: 'Syncthing', category: 'Files', icon: HardDrive, ram: 0.5, storage: 5, cores: 0.5, text: 'Continuous file sync between your devices.'},
  {id: 'minecraft', name: 'Minecraft Server', category: 'Games', icon: Gamepad2, ram: 4, storage: 10, cores: 2, text: 'Your own game server for friends and family.'},
  {id: 'grafana', name: 'Grafana + Prometheus', category: 'Monitoring', icon: Activity, ram: 1, storage: 10, cores: 1, text: 'Dashboards and monitoring for everything you run.'},
  {id: 'frigate', name: 'Frigate NVR', category: 'Cameras', icon: Camera, ram: 4, storage: 100, cores: 4, text: 'Local camera recording with object detection.'},
  {id: 'users', name: 'Family accounts', category: 'System', icon: Users, ram: 0.5, storage: 2, cores: 0.5, text: 'Separate profiles and desktops for your household.'},
];

export const baseRequirements = {ram: 1, storage: 8, cores: 1};

export type Requirements = {ram: number; storage: number; cores: number};

export function requiredResources(selected: string[]): Requirements {
  return apps
    .filter((app) => selected.includes(app.id))
    .reduce<Requirements>(
      (acc, app) => ({ram: acc.ram + app.ram, storage: acc.storage + app.storage, cores: acc.cores + app.cores}),
      {...baseRequirements}
    );
}

export function deviceMeets(device: Device, req: Requirements): boolean {
  if (device.ram === 0) return true;
  return device.ram >= req.ram && device.cores >= req.cores && (device.storage === 0 || device.storage >= req.storage);
}

export function deviceFitsApp(device: Device, app: AppItem, current: Requirements): boolean {
  if (device.ram === 0) return true;
  return (
    device.ram >= current.ram + app.ram &&
    device.cores >= current.cores + app.cores &&
    (device.storage === 0 || device.storage >= current.storage + app.storage)
  );
}

export function valueScore(device: Device): number {
  if (!device.price) return 0;
  return Math.round(((device.ram * 8 + device.cores * 5 + device.storage * 0.05) / device.price) * 100);
}

export function formatRam(value: number): string {
  return Number.isInteger(value) ? `${value} GB` : `${value.toFixed(1)} GB`;
}
