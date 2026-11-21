/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  RELEASES
 * ─────────────────────────────────────────────────────────────────────────────
 *  Newest first. Add a release to the top of the array; the /releases page
 *  renders the timeline, highlights and changelog groups automatically.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export type ReleaseType = 'major' | 'minor' | 'patch' | 'security';
export type ChangelogGroup = {type: 'Added' | 'Changed' | 'Fixed' | 'Security' | 'Removed'; items: string[]};

export type Release = {
  version: string;
  name?: string;
  date: string;
  type: ReleaseType;
  summary: string;
  highlights?: string[];
  changelog?: ChangelogGroup[];
};

export const releases: Release[] = [
  {
    version: '0.8.0',
    name: 'Compass',
    date: '2026-09-10',
    type: 'minor',
    summary: 'Runtime permission dialogs, platform foundations and selectable update channels.',
    highlights: [
      'Platform service foundations and diagnostics',
      'Runtime permission dialogs for apps',
      'Update channels: stable, beta, alpha',
    ],
    changelog: [
      {type: 'Added', items: ['Platform service diagnostics', 'Permission dialogs at runtime for app capabilities', 'Update channel selection in the update center']},
      {type: 'Changed', items: ['Faster service discovery through rumahl-core', 'Dashboard widgets can now be rearranged']},
      {type: 'Fixed', items: ['Watchdog no longer restarts healthy services on slow disks']},
    ],
  },
  {
    version: '0.7.0',
    name: 'Blueprint',
    date: '2026-08-27',
    type: 'minor',
    summary: 'Architecture documentation, the first REST API surface and open app contracts.',
    highlights: ['Published architecture and security documentation', 'Documented app contracts', 'First REST API endpoints'],
    changelog: [
      {type: 'Added', items: ['Architecture, security and app-contract documentation', 'REST API for apps and releases', 'App manifest schema and validation']},
      {type: 'Changed', items: ['Service ports documented and stabilized']},
      {type: 'Fixed', items: ['Corrected audit log ordering under concurrent writes']},
    ],
  },
  {
    version: '0.6.0',
    name: 'Marketplace',
    date: '2026-08-12',
    type: 'minor',
    summary: 'Apps move to a public repository, with open contracts and permissions.',
    highlights: ['Public apps repository on GitHub', 'Apps submitted via pull request', 'Permission model for apps'],
    changelog: [
      {type: 'Added', items: ['Public apps repository (rumahl/apps)', 'Pull-request workflow for app submissions', 'App manifest schema and validation']},
      {type: 'Changed', items: ['Apps now declare permissions in the manifest']},
      {type: 'Security', items: ['Capabilities are enforced by the platform, never exceeded']},
    ],
  },
  {
    version: '0.5.0',
    name: 'Homestead',
    date: '2026-07-29',
    type: 'minor',
    summary: 'The Files app, automatic backups and encrypted restore.',
    highlights: ['Files app with drag & drop', 'Encrypted backups to USB, NAS or remote', 'Restore from backup'],
    changelog: [
      {type: 'Added', items: ['Files app with drag & drop, shares and trash', 'Automatic encrypted backups', 'Restore flow after failure or migration']},
      {type: 'Changed', items: ['Downloads now run in the background']},
      {type: 'Fixed', items: ['Large uploads no longer time out on slow connections']},
    ],
  },
  {
    version: '0.4.0',
    name: 'Boundary',
    date: '2026-07-15',
    type: 'minor',
    summary: 'The permission system, app sandbox and the first audit log.',
    highlights: ['Permission system as the trust boundary', 'App sandbox with AppArmor', 'Hash-chained audit logs'],
    changelog: [
      {type: 'Added', items: ['Permission checks at the API gateway', 'App sandbox and AppArmor profiles', 'Hash-chained audit logs']},
      {type: 'Security', items: ['Destructive operations now require explicit confirmation']},
    ],
  },
  {
    version: '0.3.0',
    name: 'Foundation',
    date: '2026-06-30',
    type: 'minor',
    summary: 'Containerized services, the dashboard and first-boot setup.',
    highlights: ['Docker Compose stack', 'Dashboard with widget grid', 'First-boot wizard'],
    changelog: [
      {type: 'Added', items: ['Docker Compose deployment for Linux servers', 'Dashboard with a widget grid', 'First-boot wizard and admin account']},
      {type: 'Changed', items: ['rumahl-supervisor manages all service containers']},
    ],
  },
  {
    version: '0.2.0',
    name: 'First Light',
    date: '2026-06-15',
    type: 'minor',
    summary: 'Atomic updates, the read-only root filesystem and health monitoring.',
    highlights: ['RAUC A/B updates with rollback', 'Read-only SquashFS root', 'rumahl-watchdog health monitoring'],
    changelog: [
      {type: 'Added', items: ['RAUC A/B atomic updates with rollback', 'Read-only SquashFS root filesystem', 'rumahl-watchdog health monitoring and failover']},
      {type: 'Fixed', items: ['Boot no longer fails when the data partition is dirty']},
    ],
  },
  {
    version: '0.1.0',
    name: 'Preview',
    date: '2026-05-28',
    type: 'major',
    summary: 'The first public preview of rumahl OS — the local-first foundation.',
    highlights: ['Local-first foundation', 'Rust microservices', 'Web interface on port 8126'],
    changelog: [
      {type: 'Added', items: ['Initial Rust workspace with the core microservices', 'Web interface and API on port 8126', 'SQLite-backed system state']},
      {type: 'Changed', items: ['Renamed the project to rumahl (from “rumah” + l)']},
    ],
  },
];

export const latestRelease = releases[0];

export function formatReleaseDate(iso: string, lang: 'en' | 'de' = 'en'): string {
  try {
    return new Date(iso).toLocaleDateString(lang === 'de' ? 'de-DE' : 'en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  } catch {
    return iso;
  }
}
