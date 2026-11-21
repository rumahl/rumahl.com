import {
  Blocks,
  Cable,
  Cloud,
  Code2,
  Folder,
  GitFork,
  Globe,
  HardDrive,
  House,
  Layers,
  LockKeyhole,
  Network,
  Server,
  Settings2,
  ShieldCheck,
  Users,
  type LucideIcon,
} from 'lucide-react';
import {docs, help} from './knowledge';
import {developerDocs} from './developer-docs';
import {designDocs} from '@/components/design/design-docs';
import {postMetas} from '@/lib/blog';
import {releases} from '@/lib/releases';

export type ProductKey = 'os' | 'integrations' | 'features';

export type ProductHighlight = {icon: LucideIcon; title: string; text: string};
export type GalleryItem = {
  eyebrow: string;
  title: string;
  text: string;
  icon: LucideIcon;
  link?: {label: string; href: string};
};
export type SpecGroup = {title: string; rows: {label: string; value: string}[]};
export type FaqItem = {q: string; a: string};
export type Comparison = {
  columns: {name: string; note: string}[];
  rows: {label: string; values: (string | boolean)[]}[];
};

export type Product = {
  key: ProductKey;
  name: string;
  navLabel: string;
  tagline: string;
  href: string;
  icon: LucideIcon;
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  cta: {label: string; href: string};
  stats: {value: string; label: string}[];
  highlights: ProductHighlight[];
  gallery: GalleryItem[];
  specs: SpecGroup[];
  faq: FaqItem[];
  comparison?: Comparison;
};

export const products: Record<ProductKey, Product> = {
  os: {
    key: 'os',
    name: 'rumahl OS',
    navLabel: 'rumahl OS',
    tagline: 'A local platform for apps and home services.',
    href: '/os',
    icon: Server,
    eyebrow: 'rumahl OS',
    title: (
      <>
        A local platform.
        <br />
        In development.
      </>
    ),
    description:
      'rumahl OS is an independent open-source project. Its Rust platform, local accounts and browser shell are available for development; broader service integrations are still being built.',
    cta: {label: 'Read the documentation', href: '/docs'},
    stats: [
      {value: 'Native + external', label: 'integrations'},
      {value: 'Open', label: 'connector spec'},
      {value: 'Your', label: 'hardware, your rules'},
    ],
    highlights: [
      {
        icon: Cable,
        title: 'Integrates, does not replace',
        text: 'The integration design uses service APIs and keeps existing systems independent. Individual providers are still in development.',
      },
      {
        icon: Layers,
        title: 'Two surfaces, one home',
        text: 'Use the complete original apps or the native rumahl Home, Files and System apps.',
      },
      {
        icon: ShieldCheck,
        title: 'Capabilities, not lock-in',
        text: 'External and native installations are judged by what they support — not by who installed them.',
      },
    ],
    gallery: [
      {
        eyebrow: 'STORAGE',
        title: 'Storage integration',
        text: 'The proposed storage model covers volumes, shares and snapshots. TrueNAS and OpenMediaVault adapters are development targets, not generally available integrations.',
        icon: HardDrive,
        link: {label: 'Storage integrations', href: '/integrations'},
      },
      {
        eyebrow: 'PRIVATE CLOUD',
        title: 'Private cloud integration',
        text: 'The Nextcloud integration design keeps the upstream application and its accounts independent. Shared identity requires explicit configuration and provider support.',
        icon: Globe,
        link: {label: 'Connect a service', href: '/docs/external-integrations'},
      },
      {
        eyebrow: 'SMART HOME',
        title: 'Smart-home integration',
        text: 'The intended Home Assistant integration would expose selected entities through a provider while retaining the original automation interface.',
        icon: Layers,
        link: {label: 'Read the provider model', href: '/developers/connectors'},
      },
    ],
    specs: [
      {
        title: 'Platform',
        rows: [
          {label: 'Positioning', value: 'Open integration platform for the home'},
          {label: 'Integrations', value: 'Connected, Enhanced and Native'},
          {label: 'Runs on', value: 'Your own hardware'},
          {label: 'Internet connection', value: 'Not required for local operation'},
          {label: 'Status', value: 'In development'},
        ],
      },
      {
        title: 'Independence',
        rows: [
          {label: 'Service lifecycle', value: 'Owned by each service'},
          {label: 'rumahl offline', value: 'Integrated services keep running'},
          {label: 'Connector spec', value: 'Open, in development'},
          {label: 'Providers', value: 'Community-extensible'},
        ],
      },
      {
        title: 'Accounts & privacy',
        rows: [
          {label: 'Accounts', value: 'Local accounts required for authenticated access'},
          {label: 'Data collection', value: 'None'},
          {label: 'Tracking & profiling', value: 'None'},
          {label: 'Identity', value: 'Scoped, per service'},
        ],
      },
    ],
    faq: [
      {
        q: 'Does rumahl replace TrueNAS or Nextcloud?',
        a: 'No. rumahl OS is the place where your services come together. TrueNAS keeps managing storage, Nextcloud keeps being your private cloud, and rumahl connects both without taking ownership of them.',
      },
      {
        q: 'Can I connect an existing installation?',
        a: 'Support depends on the provider implementation. The Connected, Enhanced and Native levels describe the intended architecture. Check the integration documentation for current availability.',
      },
      {
        q: 'Do my services keep working without rumahl?',
        a: 'Yes. Integration must not create a new dependency. Your NAS, cloud and smart home stay operational if rumahl is offline, and you can always reach their original interfaces.',
      },
      {
        q: 'Do I need an account?',
        a: 'The running platform uses local accounts. The developer server generates one on first start; image accounts are provisioned locally. A central rumahl account is not required.',
      },
      {
        q: 'How are native builds updated?',
        a: 'For the planned native level, maintained builds will be published on GitHub with their upstream changes visible. Updates and security fixes should be automated where possible, with rollback available. The current OS image already separates system and data volumes and checks schema versions before startup.',
      },
    ],
    comparison: {
      columns: [
        {name: 'External', note: 'Your existing installation'},
        {name: 'Native', note: 'Installed through rumahl'},
      ],
      rows: [
        {label: 'Keeps the original interface', values: [true, true]},
        {label: 'Can expose the same capabilities', values: [true, true]},
        {label: 'Managed by rumahl', values: [false, true]},
        {label: 'Automatic rumahl updates', values: [false, true]},
        {label: 'Works without rumahl', values: [true, true]},
      ],
    },
  },
  integrations: {
    key: 'integrations',
    name: 'Integrations',
    navLabel: 'Integrations',
    tagline: 'Provider contracts and implementation status.',
    href: '/integrations',
    icon: Cable,
    eyebrow: 'OPEN INTEGRATIONS',
    title: (
      <>
        Independent services.
        <br />
        A local platform.
      </>
    ),
    description:
      'The project is developing open contracts for external and native services. TrueNAS, OpenMediaVault, Nextcloud and Home Assistant are integration targets; the documentation records current implementation boundaries.',
    cta: {label: 'Read the integration docs', href: '/docs/integrations'},
    stats: [
      {value: '3', label: 'integration levels'},
      {value: 'Open', label: 'connector specification'},
      {value: '0', label: 'forced migrations'},
    ],
    highlights: [
      {
        icon: Cloud,
        title: 'Connected',
        text: 'Link an existing service through its API or URL. Nothing needs to be installed on the other system.',
      },
      {
        icon: Cable,
        title: 'Enhanced',
        text: 'Add the open rumahl Connector to an existing installation for snapshots, health checks and updates.',
      },
      {
        icon: Server,
        title: 'Native',
        text: 'The native level is being built for systems that rumahl installs and manages directly, with maintained builds and automatic updates.',
      },
    ],
    gallery: [
      {
        eyebrow: 'STORAGE',
        title: 'Storage providers',
        text: 'Storage providers are intended to expose volumes, shares and snapshots without replacing the upstream storage system. Provider implementation is ongoing.',
        icon: HardDrive,
        link: {label: 'Connect storage', href: '/docs/external-integrations'},
      },
      {
        eyebrow: 'PRIVATE CLOUD',
        title: 'Nextcloud provider design',
        text: 'Use Nextcloud as the full application or bring files into the rumahl Files experience through a provider.',
        icon: Folder,
        link: {label: 'Read the provider model', href: '/developers/connectors'},
      },
      {
        eyebrow: 'SMART HOME',
        title: 'Smart-home providers',
        text: 'The proposed Home provider would expose selected entities for everyday control. The upstream automation interface remains independent.',
        icon: House,
        link: {label: 'Integrate Home Assistant', href: '/help/connect-existing-service'},
      },
    ],
    specs: [
      {
        title: 'Integration levels',
        rows: [
          {label: 'Connected', value: 'API or URL, no extra installation'},
          {label: 'Enhanced', value: 'Existing system + rumahl Connector'},
          {label: 'Native', value: 'Installed and managed by rumahl'},
        ],
      },
      {
        title: 'Capabilities',
        rows: [
          {label: 'Model', value: 'Namespaced, explicit and revocable'},
          {label: 'Examples', value: 'storage.*, home.*, system.*'},
          {label: 'Tied to installation level', value: 'No'},
          {label: 'Community providers', value: 'Yes'},
        ],
      },
      {
        title: 'Ownership',
        rows: [
          {label: 'Data ownership', value: 'Stays with the service'},
          {label: 'Service lifecycle', value: 'Owned by the service'},
          {label: 'rumahl dependency', value: 'None for service operation'},
          {label: 'Connector spec', value: 'In development'},
        ],
      },
    ],
    faq: [
      {
        q: 'What is the difference between Connected, Enhanced and Native?',
        a: 'Connected links an existing service over its API. Enhanced adds the optional rumahl Connector to that installation. Native means rumahl installs and manages a supported system. The level describes the installation route, not the permissions.',
      },
      {
        q: 'Can an external installation do everything a native one can?',
        a: 'Often, yes. Capabilities are negotiated with the service. An external installation with a connector can expose the same capabilities as a native one; only installation, updates and lifecycle differ.',
      },
      {
        q: 'Do you fork every integrated project?',
        a: 'No. Integration should happen through adapters, APIs and additional components first. A fork or modified build is only used when an integration cannot be achieved otherwise, and its changes stay visible on GitHub.',
      },
      {
        q: 'Can the community add integrations?',
        a: 'Yes. Connectors and providers are developed in public through the app package contract. The broader connector specification is being finalised in the open, so the community can add systems rumahl does not support yet.',
      },
    ],
    comparison: {
      columns: [
        {name: 'Original app', note: 'Complete upstream interface'},
        {name: 'rumahl app', note: 'Unified native experience'},
      ],
      rows: [
        {label: 'Full specialised functionality', values: [true, true]},
        {label: 'Consistent across providers', values: [false, true]},
        {label: 'Requires the service to stay independent', values: [true, true]},
        {label: 'Community-extensible', values: [true, true]},
      ],
    },
  },
  features: {
    key: 'features',
    name: 'Features',
    navLabel: 'Features',
    tagline: 'The details that connect across your services.',
    href: '/features',
    icon: Blocks,
    eyebrow: 'DESIGNED AS ONE PLATFORM',
    title: (
      <>
        The details connect.
        <br />
        Explicit permissions
      </>
    ),
    description:
      'One experience across storage, clouds, smart home and apps — with capabilities, permissions and system services under your control.',
    cta: {label: 'Explore the documentation', href: '/docs'},
    stats: [
      {value: 'Files', label: 'in one place'},
      {value: 'Apps', label: 'shared contracts'},
      {value: 'Local-first', label: 'foundation'},
    ],
    highlights: [
      {
        icon: Folder,
        title: 'A place for everything',
        text: 'Bring local files, NAS volumes and private clouds into one consistent view.',
      },
      {
        icon: Cable,
        title: 'Open to every provider',
        text: 'Native and external services use the same capability contracts.',
      },
      {
        icon: LockKeyhole,
        title: 'Local at heart',
        text: 'Your core system stays local. Local identity, no tracking and no data collection.',
      },
    ],
    gallery: [
      {
        eyebrow: 'ORGANISE',
        title: 'Everything in its place.',
        text: 'A structure that grows with you, so your digital life stays findable and yours.',
        icon: Folder,
        link: {label: 'Read the foundations', href: '/developers/architecture'},
      },
      {
        eyebrow: 'CONNECT',
        title: 'Your connection, your choice.',
        text: 'Use a VPN you control. Remote access never replaces the local foundation.',
        icon: Network,
        link: {label: 'Remote access explained', href: '/help/remote-access'},
      },
      {
        eyebrow: 'MAKE IT YOURS',
        title: 'Bend it to your home.',
        text: 'Personalise the interface, add the apps you want and modify the platform itself.',
        icon: Settings2,
        link: {label: 'App development', href: '/docs/integration-capabilities'},
      },
    ],
    specs: [
      {
        title: 'Core',
        rows: [
          {label: 'Files', value: 'One personal space'},
          {label: 'Apps', value: 'First-party and third-party'},
          {label: 'Development status', value: 'Early platform development'},
        ],
      },
      {
        title: 'Access',
        rows: [
          {label: 'Local access', value: 'Always the foundation'},
          {label: 'Remote access', value: 'Your own VPN'},
          {label: 'Account needed', value: 'None'},
        ],
      },
      {
        title: 'Privacy',
        rows: [
          {label: 'Data collection', value: 'None'},
          {label: 'Tracking & advertising', value: 'None'},
          {label: 'Server logs', value: 'Website delivery only'},
        ],
      },
    ],
    faq: [
      {
        q: 'What makes rumahl different?',
        a: 'The core is local-first. Your hardware, your data and your rules come before any optional service — and nothing about your use is tracked or collected.',
      },
      {
        q: 'Can I reach my system remotely?',
        a: 'Yes — through a VPN you control. Remote access never replaces the local foundation.',
      },
      {
        q: 'Can I change how rumahl looks and behaves?',
        a: 'Yes. rumahl is designed to be personalisable, extensible and modifiable, and the platform source is open.',
      },
      {
        q: 'Where can I learn more?',
        a: 'The documentation covers the platform foundations, accounts, apps and remote access.',
      },
    ],
  },
};

export type NavLink = {label: string; href: string; description?: string};
export type NavPanel = {
  id: string;
  label: string;
  href: string;
  columns: {title: string; links: NavLink[]}[];
  featured?: {eyebrow: string; title: string; text: string; href: string; icon: LucideIcon};
};

export const REPO_URL = 'https://github.com/rumahl/rumahl';

export const navPanels: NavPanel[] = [
  {
    id: 'project',
    label: 'Project',
    href: '/os',
    columns: [
      {
        title: 'Overview',
        links: [
          {label: 'rumahl OS', href: '/os', description: 'An independent open-source platform.'},
          {label: 'Integrations', href: '/integrations', description: 'External and native services.'},
          {label: 'Features', href: '/features', description: 'The details across your services.'},
        ],
      },
      {
        title: 'Foundations',
        links: [
          {label: 'Architecture', href: '/developers/architecture', description: 'How the platform fits together.'},
          {label: 'Documentation', href: '/docs', description: 'Guides for your home.'},
          {label: 'Releases', href: '/releases', description: 'Milestones and changelogs.'},
        ],
      },
    ],
    featured: {
      eyebrow: 'BUILT IN THE OPEN',
      title: 'An independent open-source platform.',
      text: 'Source code, documentation and ongoing development.',
      href: REPO_URL,
      icon: GitFork,
    },
  },

  {
    id: 'docs',
    label: 'Docs',
    href: '/docs',
    columns: [
      {
        title: 'Get started',
        links: [
          {label: 'Start here', href: '/docs/start-here', description: 'Project status and reading paths.'},
          {label: 'Getting started', href: '/docs/quick-start', description: 'Your first local session.'},
          {label: 'Troubleshooting', href: '/docs/troubleshooting', description: 'Diagnose setup and login problems.'},
          {label: 'Installation', href: '/docs/installation', description: 'Run it on your hardware.'},
          {label: 'Integrations', href: '/docs/integrations', description: 'The open integration model.'},
          {label: 'Existing installations', href: '/docs/external-integrations', description: 'Connect what you already run.'},
          {label: 'Capabilities', href: '/docs/integration-capabilities', description: 'What a service can do.'},
          {label: 'Remote access', href: '/help/remote-access', description: 'Your connection, your choice.'},
        ],
      },
    ],
    featured: {
      eyebrow: 'USER DOCUMENTATION',
      title: 'Understand and try rumahl.',
      text: 'Guides for integrations, setup and support.',
      href: '/docs',
      icon: HardDrive,
    },
  },
  {
    id: 'developers',
    label: 'Developers',
    href: '/developers',
    columns: [
      {
        title: 'Start',
        links: [
          {label: 'Developer documentation', href: '/developers', description: 'Separate from the user docs.'},
          {label: 'Developer setup', href: '/developers/getting-started', description: 'Run the real platform locally.'},
          {label: 'Repository guide', href: '/developers/repository-guide', description: 'Locate modules and trace requests.'},
          {label: 'Contributing', href: '/developers/contributing', description: 'Prepare your first contribution.'},
          {label: 'Architecture', href: '/developers/architecture', description: 'Core, services and boundaries.'},
        ],
      },
      {
        title: 'Build apps',
        links: [
          {label: 'Build an app', href: '/developers/build-app', description: 'Package, sign, host and connect.'},
          {label: 'App packages', href: '/developers/app-packages', description: 'Manifest, signing and runtimes.'},
          {label: 'App hosting', href: '/developers/app-hosting', description: 'Catalog, leases and the bridge.'},
          {label: 'App resources', href: '/developers/app-resources', description: 'Install, data and databases.'},
        ],
      },
      {
        title: 'Platform',
        links: [
          {label: 'API reference', href: '/developers/api', description: 'HTTP, bridge, OIDC and recovery.'},
          {label: 'Identity & OIDC', href: '/developers/identity-oidc', description: 'Local accounts and clients.'},
          {label: 'Connectors', href: '/developers/connectors', description: 'External providers and services.'},
          {label: 'HTTP route rules', href: '/developers/http-api', description: 'Current route groups and enforcement.'},
        ],
      },
      {
        title: 'Frontend & UI',
        links: [
          {label: 'Storybook', href: '/developers/storybook', description: 'The living design-system reference.'},
          {label: 'Shell & UI contracts', href: '/developers/shell-contracts', description: 'Routing, snapshots and themes.'},
          {label: 'Testing & release', href: '/developers/testing-release', description: 'The check matrix.'},
        ],
      },
    ],
    featured: {
      eyebrow: 'DEVELOPER DOCUMENTATION',
      title: 'Build against the real platform.',
      text: 'API reference, signed packages, capabilities, OIDC and Storybook — kept separate from user docs.',
      href: '/developers',
      icon: Code2,
    },
  },
  {
    id: 'community',
    label: 'Community',
    href: '/blog',
    columns: [
      {
        title: 'Read',
        links: [
          {label: 'Blog', href: '/blog', description: 'Notes from the project.'},
          {label: 'Releases', href: '/releases', description: 'Every release and changelog.'},
          {label: 'About the project', href: '/about', description: 'Where “rumahl” comes from.'},
        ],
      },
      {
        title: 'Contribute',
        links: [
          {label: 'Contributing', href: '/legal/contributing', description: 'Report bugs, send pull requests.'},
          {label: 'Code of Conduct', href: '/legal/code-of-conduct', description: 'How we treat each other.'},
          {label: 'Security', href: '/security', description: 'Report a vulnerability.'},
        ],
      },
      {
        title: 'Connect',
        links: [
          {label: 'Forum', href: 'https://community.rumahl.com', description: 'The rumahl community on Discourse.'},
          {label: 'GitHub', href: REPO_URL, description: 'The source repository.'},
          {label: 'Discussions', href: REPO_URL + '/discussions', description: 'Ask, propose, discuss.'},
          {label: 'Issues', href: REPO_URL + '/issues', description: 'Bugs and feature requests.'},
        ],
      },
    ],
    featured: {
      eyebrow: 'BUILT IN THE OPEN',
      title: 'Built in the open.',
      text: 'Apache-2.0 and shaped by its community.',
      href: REPO_URL,
      icon: Users,
    },
  },
];

// The main navigation stays within this website. Independent services live in the footer.
export const navLinks: NavLink[] = [
  {label: 'Support', href: '/help'},
];

export type SearchEntry = {title: string; description: string; href: string; category: string};

export const searchIndex: SearchEntry[] = [
  {title: 'Home', description: 'An independent open-source project for local apps and home services.', href: '/', category: 'rumahl'},
  {title: 'Integrations', description: 'Connect TrueNAS, Nextcloud, Home Assistant and more — external or native.', href: '/integrations', category: 'Project'},
  {title: 'Live demo', description: 'Try a running rumahl OS instance in your browser.', href: '/demo', category: 'Project'},
  {title: 'GitHub', description: 'Source repository, issues and discussions.', href: REPO_URL, category: 'Community'},
  {title: 'About the project', description: 'Where “rumahl” comes from and what the mark means.', href: '/about', category: 'rumahl'},
  {title: 'Brand guidelines', description: 'Naming, logo, wordmark, construction, colour, partner lockups and downloadable assets.', href: '/brand', category: 'rumahl'},
  {title: 'Get rumahl', description: 'Plan your install: device, services and guide.', href: '/get-rumahl', category: 'rumahl'},
  {title: 'Blog', description: 'Stories from the home: announcements and engineering notes.', href: '/blog', category: 'Blog'},
  {title: 'Releases', description: 'Every rumahl OS release with highlights and changelog.', href: '/releases', category: 'Releases'},
  {title: 'Security', description: 'Report a vulnerability, severity scoring and disclosure.', href: '/security', category: 'Security'},
  {title: 'Documentation', description: 'Understand your digital home.', href: '/docs', category: 'Docs'},
  {title: 'Support center', description: 'A little help. A lot less friction.', href: '/help', category: 'Support'},
  {title: 'Legal', description: 'All policies and terms in one place.', href: '/legal', category: 'Legal'},
  {title: 'Apps', description: 'Browse apps in the public repository and install them.', href: 'https://github.com/rumahl/apps', category: 'Products'},
  ...Object.values(products).map((p) => ({
    title: p.name,
    description: p.description,
    href: p.href,
    category: 'Products',
  })),
  ...docs.map((a) => ({title: a.title, description: a.summary, href: '/docs/' + a.slug, category: 'Docs'})),
  ...help.map((a) => ({title: a.title, description: a.summary, href: '/help/' + a.slug, category: 'Support'})),
  ...developerDocs.map((a) => ({title: a.title, description: a.summary, href: '/developers/' + a.slug, category: 'Developers'})),
  {title: 'Developer documentation', description: 'API reference, architecture, app packages, OIDC and Storybook — separate from user docs.', href: '/developers', category: 'Developers'},
  {title: 'rumahl Design', description: 'Reference documentation for RWDS and RUI, the two rumahl design systems.', href: '/design', category: 'Design'},
  {title: 'Design documentation', description: 'Tokens, components, theming, adoption and contribution for RWDS and RUI.', href: '/design/docs', category: 'Design'},
  {title: 'Design Storybook', description: 'The RWDS and RUI Storybook builds.', href: '/design/storybook', category: 'Design'},
  {title: 'RWDS components', description: 'Browse the RWDS Storybook in a custom component explorer.', href: '/design/rwds/components', category: 'Design'},
  {title: 'RUI components', description: 'Browse the RUI Storybook in a custom component explorer.', href: '/design/rui/components', category: 'Design'},
  {title: 'Color Table Generator', description: 'Generate an accessible RWDS accent scale and tinted neutrals from a seed colour.', href: '/design/color', category: 'Design'},
  {title: 'Design glossary', description: 'Plain-language definitions for RWDS, RUI, tokens, components and stories.', href: '/design/glossary', category: 'Design'},
  {title: 'rumahl Web Design System', description: 'Tokens, typography, layout, surfaces, motion and components for rumahl.com.', href: '/design/rwds', category: 'Design'},
  {title: 'rumahl UI', description: 'The OS design system, component library and Storybook.', href: '/design/rui', category: 'Design'},
  {title: 'RWDS vs RUI', description: 'How the two design systems differ and what they share.', href: '/design/systems', category: 'Design'},
  {title: 'Design resources', description: 'Source, Storybook, contribution rules and where each system lives.', href: '/design/resources', category: 'Design'},
  ...designDocs.map((article) => ({title: article.title, description: article.summary, href: '/design/docs/' + article.slug, category: 'Design'})),
  ...postMetas.map((p) => ({title: p.title, description: p.excerpt, href: '/blog/' + p.slug, category: 'Blog'})),
  ...releases.map((r) => ({
    title: `rumahl OS ${r.version}${r.name ? ` “${r.name}”` : ''}`,
    description: r.summary,
    href: '/releases',
    category: 'Releases',
  })),
  {title: 'Privacy Policy', description: 'How we collect, use and protect your personal data.', href: '/legal/privacy', category: 'Legal'},
  {title: 'Terms of Service', description: 'Your rights and responsibilities when using our website.', href: '/legal/tos', category: 'Legal'},
  {title: 'Imprint', description: 'Mandatory provider information in accordance with § 5 DDG.', href: '/legal/impressum', category: 'Legal'},
  {title: 'Cookie Policy', description: 'Which cookies and local storage the website uses.', href: '/legal/cookies', category: 'Legal'},
  {title: 'Contributing Guidelines', description: 'How to report bugs, propose features and submit pull requests.', href: '/legal/contributing', category: 'Community'},
  {title: 'Code of Conduct', description: 'How we treat each other across all projects and discussions.', href: '/legal/code-of-conduct', category: 'Community'},
  {title: 'Apps (repository)', description: 'Apps live in github.com/rumahl/apps and are submitted by pull request.', href: '/legal/apps', category: 'Community'},
  {title: 'Trademark Policy', description: 'How the rumahl name and logo may be used.', href: '/legal/trademark', category: 'Community'},
];

export const homeGallery: GalleryItem[] = [
  {
    eyebrow: 'LOCAL-FIRST',
    title: 'Your foundation.',
    text: 'Runs on your own hardware, on your own network, on your own terms.',
    icon: HardDrive,
    link: {label: 'Why rumahl', href: '/features'},
  },
  {
    eyebrow: 'YOUR OWN VPN',
    title: 'Home, wherever you are.',
    text: 'Reach your system securely through a VPN you control.',
    icon: Globe,
    link: {label: 'Remote access explained', href: '/help/remote-access'},
  },
  {
    eyebrow: 'APPS',
    title: 'Room for more.',
    text: 'Apps live in a public repository — browse, install and contribute.',
    icon: Blocks,
    link: {label: 'Browse apps on GitHub', href: 'https://github.com/rumahl/apps'},
  },
  {
    eyebrow: 'LOCAL IDENTITY',
    title: 'Your identity stays local.',
    text: 'No vendor account is required. Local accounts and scoped credentials keep each service separate.',
    icon: ShieldCheck,
    link: {label: 'Read the security model', href: '/docs/security-model'},
  },
];

export function searchSite(query: string): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const scored = searchIndex
    .map((entry) => {
      const title = entry.title.toLowerCase();
      const description = entry.description.toLowerCase();
      let score = 0;
      if (title === q) score += 100;
      if (title.startsWith(q)) score += 50;
      if (title.includes(q)) score += 25;
      if (description.includes(q)) score += 10;
      if ((entry.category + ' ' + entry.title + ' ' + entry.description).toLowerCase().includes(q)) score += 5;
      return {entry, score};
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);
  return scored.map((item) => item.entry);
}
