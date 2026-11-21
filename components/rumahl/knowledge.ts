export type ApiEndpoint = {
  method: string;
  path: string;
  purpose: string;
};

export type ApiEndpointGroup = {
  title: string;
  note?: string;
  rows: ApiEndpoint[];
};

export type ArticleSection = {
  title: string;
  text?: string;
  /** Extended CommonMark / GFM content. */
  markdown?: string;
  steps?: string[];
  list?: string[];
  code?: {language: string; content: string};
  table?: {columns: string[]; rows: string[][]};
  /** Highlighted callout box with a tone. */
  callout?: {tone: 'note' | 'tip' | 'important' | 'warning' | 'caution'; title?: string; text: string};
  /** Interactive checklist that can be ticked off and is saved locally. */
  checklist?: {id?: string; title?: string; items: string[]};
  /** Visual explanation rendered above the section content. */
  diagram?: 'request-flow' | 'app-model';
  /** Grouped HTTP or bridge methods, rendered as a compact reference list. */
  endpoints?: ApiEndpointGroup;
};

export type Article = {
  slug: string;
  title: string;
  summary: string;
  area: string;
  group: string;
  readTime: number;
  updated: string;
  featured?: boolean;
  sections: ArticleSection[];
};

export const docs: Article[] = [
{
  "slug": "start-here",
  "title": "Start here: what rumahl is today",
  "summary": "Understand the project status, choose a way to explore it and find the right reading path.",
  "area": "Installation & Setup",
  "group": "Documentation",
  "readTime": 7,
  "updated": "20 October 2026",
  "featured": true,
  "sections": [
    {
      "title": "An independent project",
      "markdown": "rumahl is an independent open-source project developing a local platform for apps and home services. There is no company or commercial support offering behind this website. Development takes place in the open, and contributions include documentation, testing and code.\n\nThe source is available under Apache-2.0. Artwork and branding can have separate terms; check the repository licensing files before redistributing them."
    },
    {
      "title": "What you can try",
      "markdown": "The native developer server runs the Rust platform, local SQLite accounts and sessions, and the React interface. The Buildroot image provides a separate QEMU testing path. These are development environments, not a finished consumer installation.\n\nThe website demo shows interface behavior with sample data. It does not connect to your home services, install software on your machine or verify hardware compatibility."
    },
    {
      "title": "Choose a starting point",
      "markdown": "| Your aim | Start here | What you need |\n| --- | --- | --- |\n| Look around the interface | [Browser demo](/demo) | A browser |\n| Try a real local session | [Quick start](/docs/quick-start) | Linux or WSL2 and the development tools |\n| Test the system image | [Installation](/docs/installation) | Linux, QEMU and provisioned test state |\n| Change the software | [Developer setup](/developers/getting-started) | A source checkout |\n\nIf you are new to self-hosting, start with the demo and the concepts below. You do not need to prepare a system image to understand the project."
    },
    {
      "title": "Read feature descriptions with their status",
      "markdown": "The integration pages explain both implemented mechanisms and intended provider behavior. A proposed capability such as `storage.snapshots.create` is not evidence that a particular NAS supports it today. Check [integration status](/docs/integrations) and the provider implementation before configuring another system.\n\nThere is currently no general-purpose signed hardware installer. Do not use the development build as the only place to store important files."
    },
    {
      "title": "A short glossary",
      "markdown": "- **Platform:** the backend that authenticates requests, checks permissions and coordinates operations.\n- **Shell:** the browser interface used to open apps and settings.\n- **App:** a packaged application using platform contracts.\n- **Capability:** an operation a provider can offer; it does not itself grant permission.\n- **Grant:** an explicit permission with a defined scope.\n- **Connector:** an integration boundary between rumahl and another system.\n- **Local account:** an account in your rumahl instance, separate from a website or GitHub account."
    },
    {
      "title": "Continue in order",
      "markdown": "1. Follow the [quick start](/docs/quick-start).\n2. Work through [your first local session](/docs/first-session).\n3. Read [permissions and capabilities](/docs/integration-capabilities).\n4. Use [troubleshooting](/docs/troubleshooting) if setup fails.\n5. Send reproducible observations through [the contribution guide](/developers/contributing)."
    }
  ]
},
{
  "slug": "first-session",
  "title": "Your first local session",
  "summary": "Sign in, explore the shell and understand what persists when you stop the developer server.",
  "area": "Using rumahl",
  "group": "Documentation",
  "readTime": 7,
  "updated": "20 October 2026",
  "featured": false,
  "sections": [
    {
      "title": "Before opening the interface",
      "markdown": "Complete [installation](/docs/installation) or [developer setup](/developers/getting-started) first. The commands in those guides run from the root of the rumahl source repository, not the website repository. Wait for the server to report its HTTPS origin. The initial Rust build can take longer than subsequent starts."
    },
    {
      "title": "Trust the development certificate",
      "markdown": "The default origin is `https://localhost:8443`. The server creates a localhost test certificate under `.rumahl-dev/tls`. Trust the public certificate in a dedicated development browser profile, or use a locally trusted certificate as described in [developer troubleshooting](/developers/development-troubleshooting).\n\nA page that loads after dismissing a certificate warning can still have broken hot reload or service-worker registration. Never share the private key."
    },
    {
      "title": "Sign in with the local account",
      "markdown": "The first developer-server start creates a local developer account and writes its credentials to `.rumahl-dev/credentials.json`. Read that file locally and use its account name and password. These are not your GitHub or community credentials. There is no universal default password and no public account-registration endpoint.\n\nDo not paste this file into an issue, screenshot or chat. If login fails, confirm that you are using the credentials from the state directory of the running server."
    },
    {
      "title": "Explore without connecting another service",
      "markdown": "Open the app catalog and inspect the apps your account is authorized to launch. Visit Settings to see the available account and device options. `/settings/display` opens presentation preferences; `/app/app-manager` opens the app manager route.\n\nChanging a display mode does not create additional permissions. The set of visible apps depends on installed packages and grants. An empty catalog does not necessarily indicate a broken installation."
    },
    {
      "title": "Check persistence",
      "markdown": "Sign out and back in once to verify the login flow. Stop the developer server with Ctrl+C, then start it again from the same checkout and state directory. Your local account and sessions are stored in SQLite and survive server restarts.\n\nThe development state is separate from an installed system. Deleting `.rumahl-dev` is not an ordinary restart: it removes development accounts and state. Preserve it when investigating an issue."
    },
    {
      "title": "Know the boundaries",
      "markdown": "The developer server listens on `127.0.0.1`. Another device on your network cannot reach it directly. Do not expose the development listener as your household server. For remote development, use the SSH forwarding workflow in [developer troubleshooting](/developers/development-troubleshooting).\n\nAn external service retains its own users and permissions. Signing in to rumahl does not automatically sign you in to Nextcloud or authorize access to a NAS."
    }
  ]
},
{
  "slug": "troubleshooting",
  "title": "Troubleshooting local setup",
  "summary": "Diagnose common startup, login and permission problems without deleting your state.",
  "area": "Installation & Setup",
  "group": "Documentation",
  "readTime": 7,
  "updated": "20 October 2026",
  "featured": false,
  "sections": [
    {
      "title": "Identify which environment failed",
      "markdown": "Record whether you used the browser demo, native developer server or QEMU image. The demo has no real backend login; the developer server has generated credentials; the image requires provisioned accounts and TLS material. Fixes for one do not necessarily apply to another.\n\nFor a source build, record the checkout revision with `git rev-parse HEAD` in the rumahl repository."
    },
    {
      "title": "The browser cannot connect",
      "markdown": "Check the terminal running the server. A first Cargo build must finish before the platform is ready. Use the exact origin printed by the launcher; a custom port changes the URL. Confirm the process is still running and that you are opening HTTPS rather than HTTP.\n\nIf the port is occupied, stop your previous developer process or choose another port with `pnpm --dir frontend dev --port 9443`. A second process must not share the same state directory."
    },
    {
      "title": "The login page loads, but parts of the interface fail",
      "markdown": "Check certificate trust first. Browser security errors can block a service worker or a WSS hot-reload connection even when the page is visible. Trust the generated public localhost certificate in the development profile.\n\nInspect Settings → This device for service-worker registration errors and cache status. Note the browser error and origin before changing state. Do not disable TLS verification or remove CSRF checks to make the page load."
    },
    {
      "title": "Credentials or permissions are rejected",
      "markdown": "Read the account details from the active development state directory. Image accounts must be provisioned through the installation workflow. If an operation is denied after login, confirm the account has the relevant grant. Installation and capability discovery are not permission grants.\n\nDo not edit the database to bypass an authorization failure. Record the action, account role and expected permission without sharing passwords or tokens."
    },
    {
      "title": "Changes do not appear",
      "markdown": "Frontend component and CSS changes normally update through Vite. Rust changes require a successful incremental compilation; a failed build leaves the previous platform running. Read the first compiler error in the server terminal. Launcher and Vite configuration changes require a full restart.\n\nUse `pnpm --dir frontend dev --poll` when shared folders do not deliver reliable file-change events."
    },
    {
      "title": "Ask for help with a reproducible report",
      "markdown": "Include your revision, operating system, Node and pnpm versions, environment type, exact command, steps to reproduce, expected result and actual result. Attach only the relevant log excerpt. Remove credentials, cookies, tokens, private keys and personal filenames.\n\nReport ordinary bugs through [GitHub issues](https://github.com/rumahl/rumahl/issues). Suspected vulnerabilities belong in the [private security reporting process](/security). Community participation does not include a guaranteed response time."
    }
  ]
},
  {
    slug: 'installation',
    title: 'Installation',
    summary:
      'Run the real developer server or boot the Buildroot QEMU image — current requirements, commands and limitations.',
    area: 'Installation & Setup',
    group: 'Documentation',
    readTime: 8,
    updated: '20 October 2026',
    featured: true,
    sections: [
      {
        title: 'Current status',
        text: 'rumahl OS is under active development and is not yet intended for production use. There is no signed hardware installer release yet.',
        list: [
          'Developer server: the real Rust platform, SQLite accounts, SSR and Vite on Linux or WSL2.',
          'Buildroot QEMU image: a read-only system disk plus a persistent data disk, used for acceptance.',
          'A/B slot activation, signed boot and update policy, installer media and additional boards are still separate milestones.',
        ],
        callout: {
          tone: 'warning',
          title: 'No default credentials',
          text: 'The platform never ships a default account or password. The developer server generates credentials on first start; the image is provisioned explicitly.',
        },
      },
      {
        title: 'Requirements',
        table: {
          columns: ['Path', 'Requirements'],
          rows: [
            ['Developer server', 'Linux or WSL2, Rust toolchain, Node 22.12+ or 24 with ICU, pnpm 11.19.0, OpenSSL'],
            ['Buildroot image', 'Linux build host with Buildroot prerequisites, QEMU for the x86-64 target'],
            ['Runtime', 'x86_64 QEMU target today; additional boards need their own acceptance work'],
          ],
        },
        text: 'Docker, nginx, root access and a global watch utility are not required for native development. The image itself ships Docker, nginx, systemd, Node with ICU and tpm2-tools.',
      },
      {
        title: 'Path A — developer server',
        code: {
          language: 'bash',
          content:
`pnpm --dir frontend install --frozen-lockfile
pnpm --dir frontend dev`,
        },
        steps: [
          'Open https://localhost:8443.',
          'Read the generated developer password from .rumahl-dev/credentials.json.',
          'Trust the generated localhost certificate in a dedicated browser profile.',
          'Sign in. Accounts and sessions survive restarts.',
        ],
        text: 'Pass --poll for shared folders, --port 9443 for a stable port, or --no-watch to disable automatic Rust rebuilds. See the developer documentation for the full workflow.',
      },
      {
        title: 'Path B — Buildroot QEMU image',
        code: {
          language: 'bash',
          content:
`platform-buildroot/image/build.sh

mkdir -p "$RUMAHL_SEED/lib/rumahl" "$RUMAHL_SEED/lib/rumahl-tls"
chmod 700 "$RUMAHL_SEED" "$RUMAHL_SEED/lib/rumahl" "$RUMAHL_SEED/lib/rumahl-tls"

python3 platform-buildroot/image/create-data.py \
  --seed "$RUMAHL_SEED" \
  --output "$RUMAHL_DATA_IMAGE"

platform-buildroot/image/boot.sh \
  --output "$BR_OUTPUT" \
  --seed "$RUMAHL_SEED"`,
        },
        text: 'The system disk is read-only. The separate ext4 data disk supplies /var, /home and /apps. TLS material and account databases are provisioned onto the data disk, never baked into the system image. Open https://rumahl.home.arpa:8443 with rumahl.home.arpa resolving to 127.0.0.1.',
      },
      {
        title: 'Provision a local account',
        text: 'Provisioning is a local administrative CLI, not an unauthenticated web endpoint. Run it as the owner of the state directory with RUMAHL_STATE_DIR and RUMAHL_PASSWORD_BLOCKLIST set. Passwords are at least 15 characters by default.',
        code: {
          language: 'bash',
          content:
`read -r -s -p "New local password: " rumahl_password
printf "\n"
printf "%s" "$rumahl_password" | rumahl-platform-service provision-account alice Alice --password-stdin
unset rumahl_password`,
        },
        callout: {
          tone: 'warning',
          title: 'Keep the password out of arguments',
          text: 'Do not put the password in a command argument or environment variable, and do not enable shell tracing around the command.',
        },
      },
      {
        title: 'Before you rely on it',
        checklist: {
          id: 'installation-post-install',
          title: 'Current acceptance steps',
          items: [
            'Use a dedicated browser profile with a trusted localhost certificate.',
            'Confirm login, reload and logout against the real platform.',
            'Verify the data disk persists across a restart.',
            'For the QEMU image, repeat the acceptance checks in a disposable VM.',
            'Keep backups and do not expose the developer server as a public interface.',
          ],
        },
      },
    ],
  },
  {
    slug: 'quick-start',
    title: 'Quick Start',
    summary: 'Choose the developer server or the QEMU image, start it and sign in with a provisioned local account.',
    area: 'Installation & Setup',
    group: 'Documentation',
    readTime: 4,
    updated: '20 October 2026',
    featured: true,
    sections: [
      {
        title: 'Before you begin',
        markdown: 'New to the project? Read [Start here](/docs/start-here) for the difference between the demo, developer server and system image. The native steps below require Linux or WSL2, the repository Rust toolchain, Node 22.12+ or 24 with ICU, pnpm 11.19.0 and OpenSSL. Use test data while the platform is in development.',
      },
      {
        title: 'Get the source',
        code: {language: 'bash', content: 'git clone https://github.com/rumahl/rumahl.git\ncd rumahl'},
        text: 'Run the following commands from this repository root. If you already have a checkout, use it and record the revision you are testing. The website repository is a separate project.',
      },
      {
        title: 'Choose a track',
        table: {
          columns: ['Track', 'Best for', 'Interface'],
          rows: [
            ['Developer server', 'Working on the platform or shell', 'https://localhost:8443'],
            ['Buildroot QEMU image', 'Image and acceptance testing', 'https://rumahl.home.arpa:8443'],
          ],
        },
      },
      {
        title: 'Developer track',
        code: {
          language: 'bash',
          content:
`pnpm --dir frontend install --frozen-lockfile
pnpm --dir frontend dev`,
        },
        text: 'The first start creates an isolated developer account and writes the random password to .rumahl-dev/credentials.json. Trust the generated certificate before signing in.',
      },
      {
        title: 'QEMU track',
        code: {
          language: 'bash',
          content:
`platform-buildroot/image/build.sh
platform-buildroot/image/boot.sh --output "$BR_OUTPUT" --seed "$RUMAHL_SEED"`,
        },
        text: 'The boot script creates the data disk from the seed when it is missing. The full provisioning and certificate steps are in the installation guide.',
      },
      {
        title: 'First login',
        steps: [
          'Open the HTTPS address for your track.',
          'Sign in with the generated developer account or a provisioned local account.',
          'For the image, verify that the data disk persists after a restart.',
        ],
        callout: {
          tone: 'note',
          text: 'There is no public account creation endpoint. Accounts are provisioned locally by an administrator.',
        },
      },
      {
        title: 'Where to go next',
        list: [
          'Explore your first session: /docs/first-session',
          'Resolve setup problems: /docs/troubleshooting',
          'Check integration availability: /docs/external-integrations',
          'Understand the integration model: /docs/integrations',
          'Build for rumahl: /developers',
          'Run the full check matrix: /developers/testing-release',
        ],
      },
    ],
  },
  {
    slug: 'security-model',
    title: 'Security Model',
    summary:
      'Defense in depth across native and external services: authentication, scoped capabilities, network security, encryption and audit.',
    area: 'Security & Permissions',
    group: 'Documentation',
    readTime: 7,
    updated: '20 October 2026',
    featured: true,
    sections: [
      {
        title: 'The five security layers',
        text: 'Every layer has one job: making sure that a compromise at one level does not reach the next. Integrations add a sixth concern — a trust boundary around every external system.',
        table: {
          columns: ['Layer', 'Mechanisms'],
          rows: [
            ['1. Authentication & authorization', 'JWT tokens, API keys, PIN auth, RBAC'],
            ['2. Integration boundary', 'Capability checks, scoped credentials, connector manifests'],
            ['3. Network security', 'Domain whitelist, IP access control, sandbox'],
            ['4. Data protection', 'AES-256-GCM encryption, hash-chained audit logs'],
            ['5. Threat detection & response', 'Intrusion detection, auto-lockdown, alerts'],
            ['6. Platform security', 'AppArmor, container isolation, read-only filesystem'],
          ],
        },
      },
      {
        title: 'Identity across independent systems',
        text: 'A shared interface must not create a shared super-user. rumahl keeps its own local identity, and each integration receives a separate scoped credential and consent record.',
        list: [
          'Each integrated service keeps its own accounts and permissions.',
          'rumahl never uses one privileged credential for every service.',
          'A rumahl app can only act with the capabilities the user granted to that app.',
          'Revoking an integration revokes its scoped credential immediately.',
          'No transitive permissions: access to rumahl does not automatically mean access to a service.',
        ],
        callout: {
          tone: 'important',
          title: 'No accidental escalation',
          text: 'The native interface may be convenient, but it must never be able to do more than the underlying service and the user’s consent allow.',
        },
      },
      {
        title: 'Core security services',
        table: {
          columns: ['Service', 'Port', 'Role'],
          rows: [
            ['rumahl-security', '8095', 'Threat detection, intrusion prevention, lockdown'],
            ['rumahl-secrets', '8093', 'Encrypted secrets and scoped integration credentials'],
            ['rumahl-watchdog', '8094', 'Health monitoring, failover, circuit breaker'],
          ],
        },
      },
      {
        title: 'Data protection',
        list: [
          'Encryption at rest: AES-256-GCM for secrets and sensitive data.',
          'Audit logging: hash-chained logs — tampering becomes visible immediately.',
          'Local-first: by default, no data leaves your device at all.',
          'Integration data stays with the service unless a capability explicitly moves it.',
          'Opt-in telemetry: diagnostics and cloud features require explicit consent.',
        ],
      },
      {
        title: 'Permissions as the trust boundary',
        list: [
          'Every API call is checked against an explicit permission at the gateway.',
          'Permission decisions are bound to the live account, app installation and declared capability — never to installation level.',
          'Destructive operations require explicit, typed confirmation — never autonomous.',
          'Connectors fail closed when a capability, credential or expected response is missing.',
          'AppArmor, the runtime sandbox and scoped credentials limit what a compromised integration can do.',
        ],
      },
    ],
  },







  {
    slug: 'privacy-and-data',
    title: 'Privacy & Data',
    summary:
      'Local-first, no tracking, no advertising, no profiling and no data collection — plus what the website itself processes.',
    area: 'Security & Permissions',
    group: 'Documentation',
    readTime: 5,
    updated: '6 October 2026',
    sections: [
      {
        title: 'Local-first by default',
        text: 'rumahl OS keeps your files, apps, accounts and the data your services produce on hardware you own. Nothing is transmitted by default; remote access and any cloud feature are optional and explicit.',
      },
      {
        title: 'What we do not do',
        list: [
          'No tracking and no analytics of how you use rumahl OS.',
          'No advertising and no profiling.',
          'No sale or sharing of your data with third parties.',
          'No central account required; the platform uses local accounts.',
        ],
      },
      {
        title: 'The website',
        text: 'This website is deliberately low-tracking. It sets no advertising or analytics cookies; technically necessary browser storage only remembers your theme and language preferences.',
        callout: {
          tone: 'note',
          text: 'When you visit, the hosting provider processes your IP address and standard server logs (date/time, requested page, user agent) solely to deliver the site securely. See the Privacy Policy for details.',
        },
      },
      {
        title: 'Networked services',
        text: 'When a feature or integrated service needs the internet, the documentation must say so plainly and identify the responsible service.',
      },
      {
        title: 'Integrated services',
        text: 'When you connect an external service, its data remains with that service and is governed by its own policies. rumahl only receives what a granted capability returns, and stores credentials encrypted in the secrets store.',
        list: [
          'Connecting a service does not copy its data into rumahl by default.',
          'Revoking an integration removes its scoped credential and permissions.',
          'A connector must never send data to a third party that the user did not choose.',
          'Native builds keep their data in the service format, not in a rumahl-only silo.',
        ],
      },
    ],
  },
  {
    slug: 'integrations',
    title: 'Integrations',
    summary:
      'How rumahl connects existing and native services — Connected, Enhanced and Native, with capabilities instead of lock-in.',
    area: 'Integrations',
    group: 'Documentation',
    readTime: 7,
    updated: '20 October 2026',
    featured: true,
    sections: [
      {
        title: 'The idea',
        text: 'rumahl OS is not meant to replace your NAS, your private cloud or your smart-home hub. It is the place where those systems come together. A service keeps its own data, its own interface and its own lifecycle; rumahl adds a shared home around it.',
        callout: {
          tone: 'important',
          title: 'The design principle',
          text: 'rumahl connects systems without binding them to itself. If rumahl is unavailable, the integrated services must keep working.',
        },
      },
      {
        title: 'Implementation status',
        text: 'This page describes the integration model. It is not a claim that every adapter already exists.',
        callout: {
          tone: 'note',
          title: 'What is implemented today',
          text: 'The platform already supports signed app packages, app-provided capabilities, connectors for external services such as Nextcloud and Plex, OIDC registration and same-origin streams. Generic TrueNAS, OpenMediaVault or Home Assistant adapters and the public three-level connector specification are still in development.',
        },
      },
      {
        title: 'Three integration levels',
        text: 'The level describes how a service becomes part of rumahl. It does not describe how much access it has.',
        table: {
          columns: ['Level', 'What happens', 'Best for'],
          rows: [
            ['Connected', 'Connect an existing service over its URL or API. Nothing is installed on the other system.', 'Trying rumahl without changing your setup'],
            ['Enhanced', 'Install the optional rumahl Connector on an existing service for deeper capabilities.', 'Existing installations that should expose snapshots, health or updates'],
            ['Native', 'rumahl installs and manages a supported system, including updates and rollback.', 'A dedicated device where rumahl owns the lifecycle'],
          ],
        },
      },
      {
        title: 'External and native are both first-class',
        list: [
          'External installations do not have to be replaced to benefit from rumahl.',
          'Native installations get managed installation and updates, but remain based on the upstream project.',
          'The same rumahl app can use both through a shared provider interface.',
          'The service always keeps its original interface as a fallback.',
        ],
      },
      {
        title: 'Example services',
        text: 'These are the target examples for the integration model. Support is still being built; the documentation and app pages state what is available today.',
        table: {
          columns: ['Service', 'Category', 'How it joins'],
          rows: [
            ['Home Assistant', 'Smart home', 'Existing installation or native; provider for rumahl Home'],
            ['Jellyfin', 'Media', 'Existing installation or native; the library stays with Jellyfin'],
            ['Proxmox', 'Virtualisation', 'Existing host; Proxmox keeps managing VMs and containers'],
            ['Vaultwarden', 'Passwords', 'Existing installation or native; the vault stays independent'],
            ['Immich', 'Photos', 'Existing installation or native; the photo library stays with Immich'],
          ],
        },
      },
      {
        title: 'Two surfaces, the same services',
        table: {
          columns: ['Surface', 'What you get'],
          rows: [
            ['Original app', 'The complete upstream interface — ZFS pools, automations, Nextcloud settings and app-specific tools.'],
            ['rumahl app', 'A consistent native experience for everyday tasks, backed by the same service and capabilities.'],
          ],
        },
        text: 'For example, Home Assistant remains the full automation engine while rumahl Home offers a calmer view of lights, sensors and rooms. TrueNAS remains responsible for ZFS while rumahl Files brings volumes, shares and snapshots into one view.',
      },
      {
        title: 'Capabilities, not installation types',
        text: 'The intended integration contract uses explicit capabilities. An external installation with a connector can expose the same capabilities as a native one; only installation, updates and lifecycle differ. The platform already uses this pattern for app-provided capabilities today.',
        list: [
          'storage.volumes.read',
          'storage.snapshots.create',
          'system.health.read',
          'system.updates.manage',
          'home.entities.control',
          'identity.scopes.read',
        ],
      },
      {
        title: 'Where to go next',
        list: [
          'Connect an existing system: /docs/external-integrations',
          'Understand the capability model: /docs/integration-capabilities',
          'Read the connector documentation: /developers/connectors',
          'How maintained native builds work: /docs/native-integrations',
          'Understand app hosting and capabilities: /developers/app-hosting',
        ],
      },
    ],
  },
  {
    slug: 'integration-capabilities',
    title: 'Capabilities & permissions',
    summary:
      'How rumahl authorizes what an app or service can do today — and how explicit capability namespaces will extend that model to integrations.',
    area: 'Integrations',
    group: 'Documentation',
    readTime: 6,
    updated: '20 October 2026',
    featured: true,
    sections: [
      {
        title: 'Current capability model',
        text: 'An installed app can provide capabilities. The signed manifest declares them in providedCapabilities, and consumers invoke them through the platform rather than calling another app directly.',
        list: [
          'A capability is a validated, publisher-defined identifier.',
          'The provider registers a handler with rumahl.provide(capability, handler).',
          'The platform checks the caller, installation, current account and grant before delivery.',
          'Web providers receive the invocation through the bridge; always-on services receive it over the persistent channel.',
          'Installing an app currently grants each provided capability to every existing account. A separate end-user permission-management flow is still open work.',
        ],
        callout: {
          tone: 'important',
          title: 'Capability is not permission',
          text: 'Declaring or providing a capability does not grant access. Permission decisions belong to the platform, and every invocation is authorized against the live identity.',
        },
      },
      {
        title: 'Normalised integration namespaces',
        text: 'The integration platform will add stable namespaces so native rumahl apps can target a capability instead of a specific vendor. These names are the product direction; they are not a frozen connector API yet.',
        table: {
          columns: ['Namespace', 'Intended capability'],
          rows: [
            ['storage.*', 'Volumes, shares, files and snapshots across storage providers'],
            ['home.*', 'Entities, rooms and scenes across smart-home providers'],
            ['system.*', 'Health, version and update information'],
            ['identity.*', 'Scoped accounts, consent and service identity'],
          ],
        },
      },
      {
        title: 'Permission scopes',
        table: {
          columns: ['Scope', 'Meaning'],
          rows: [
            ['app-private', 'Only the owning app installation'],
            ['user-own', 'Resources owned by the active account'],
            ['user-selected', 'Resources the user explicitly chooses'],
            ['explicit', 'A specific resource or action'],
            ['family-shared', 'Resources shared within the household'],
            ['system', 'Platform-wide operations, reserved for trusted components'],
          ],
        },
      },
      {
        title: 'Least privilege',
        list: [
          'Use the smallest scope that makes the capability work.',
          'Never reuse an administrator password for an integration when a scoped token is possible.',
          'Revoke a grant when the integration is removed or the credential is compromised.',
          'A pleasant shared interface must never silently grant more access than the underlying service allows.',
          'No transitive permissions: access to rumahl does not automatically mean access to a service.',
        ],
      },
      {
        title: 'Developer reference',
        text: 'The implementation details — manifest fields, the bridge protocol, runtime channels and current limits — live in the separate developer documentation.',
        list: [
          'App packages: /developers/app-packages',
          'App hosting and bridge: /developers/app-hosting',
          'Connectors: /developers/connectors',
        ],
      },
    ],
  },
  {
    slug: 'external-integrations',
    title: 'Connecting an existing installation',
    summary:
      'Keep your TrueNAS, OpenMediaVault, Nextcloud or Home Assistant where it runs and connect it to rumahl — with or without the connector.',
    area: 'Integrations',
    group: 'Documentation',
    readTime: 7,
    updated: '20 October 2026',
    sections: [
      {
        title: 'When to connect externally',
        text: 'External integration is the right choice when a service already runs well and should not be reinstalled. rumahl adds a shared experience without taking over the service lifecycle.',
        list: [
          'Your NAS already stores important data and should not be migrated.',
          'Home Assistant already holds your automations and integrations.',
          'Nextcloud is shared with other people and should keep its own accounts.',
          'You want to try rumahl before deciding on a dedicated device.',
        ],
        callout: {
          tone: 'note',
          title: 'Current availability',
          text: 'Connectors are implemented through signed app packages and OIDC for services such as Nextcloud and Plex. A general Settings → Integrations flow for TrueNAS, OpenMediaVault and Home Assistant is still in development.',
        },
      },
      {
        title: 'Target connections',
        text: 'These are the connection types the integration model is being designed around.',
        table: {
          columns: ['Service', 'Connection', 'What rumahl should add'],
          rows: [
            ['TrueNAS', 'API token', 'Volumes, datasets, snapshots, health'],
            ['OpenMediaVault', 'API / RPC', 'Shares, disks, health'],
            ['Nextcloud', 'OCS API / WebDAV', 'Files, shares, quota'],
            ['Home Assistant', 'REST / WebSocket', 'Entities, rooms, scenes'],
          ],
        },
      },
      {
        title: 'Planned connect flow',
        text: 'Today, a connector is installed with its app package and configured through that app. The guided platform flow below is the direction for generic external integrations.',
        steps: [
          'Open Settings → Integrations in rumahl.',
          'Choose the service type and enter its address.',
          'Create a scoped credential in the service — not an admin password if avoidable.',
          'Review the capabilities rumahl can provide.',
          'Grant only what you need and save the integration.',
          'Open the original app and rumahl app side by side to verify the result.',
        ],
      },
      {
        title: 'What stays with the service',
        list: [
          'Data, accounts and service configuration.',
          'The complete original interface.',
          'The service update cycle — unless you explicitly install the connector or choose a native build.',
          'The ability to keep working if rumahl is offline.',
        ],
      },
      {
        title: 'Add the connector (optional)',
        text: 'Connected mode uses the service API only. The optional rumahl Connector adds deeper capabilities such as snapshot orchestration, richer health data and update information. It is installed on the existing system and can be removed again.',
        callout: {
          tone: 'note',
          text: 'The connector is an adapter, not a new control plane. It runs beside the service and only exposes the capabilities described in its manifest.',
        },
      },
      {
        title: 'A note on TrueNAS and OpenMediaVault',
        text: 'A full NAS operating system is not an ordinary container app. TrueNAS manages storage, boot environments and system services at a level that cannot be safely nested inside a normal rumahl app container.',
        list: [
          'Use external integration for an existing NAS installation.',
          'Use a VM or a dedicated device when the NAS should run on the same hardware.',
          'Use a native integration when rumahl manages the appliance lifecycle directly.',
        ],
      },
      {
        title: 'Trust checklist',
        list: [
          'Use TLS and verify the service certificate.',
          'Prefer a dedicated integration account with the smallest possible scope.',
          'Do not expose the service API directly to the internet.',
          'Review granted capabilities after every update.',
          'Revoke the integration immediately if the credential is compromised.',
        ],
      },
    ],
  },
  {
    slug: 'native-integrations',
    title: 'Native integrations & maintained builds',
    summary:
      'How rumahl installs supported systems, tracks upstream changes on GitHub, automates updates and decides when a modified build is justified.',
    area: 'Integrations',
    group: 'Documentation',
    readTime: 6,
    updated: '20 October 2026',
    sections: [
      {
        title: 'What native means',
        text: 'A native integration is installed and managed by rumahl. The underlying project remains the upstream project; rumahl adds integration metadata, a maintained build and lifecycle management.',
        callout: {
          tone: 'note',
          title: 'Current status',
          text: 'rumahl already ships a Buildroot-based OS image with separate data volumes and schema-safe updates. Generic native service installation, maintained upstream builds and signed update execution are still under development.',
        },
        table: {
          columns: ['Responsibility', 'Native integration'],
          rows: [
            ['Installation', 'rumahl'],
            ['Updates', 'rumahl, with a visible changelog'],
            ['Rollback', 'rumahl'],
            ['Original interface', 'Preserved'],
            ['Upstream source', 'Public on GitHub'],
          ],
        },
      },
      {
        title: 'Maintained builds on GitHub',
        text: 'Maintained builds live in a public repository and keep the relationship to upstream visible. A build should make it obvious what changed and why.',
        list: [
          'An upstream remote and a documented base version.',
          'Integration changes kept as a small, reviewable patch series.',
          'Reproducible build and release workflows.',
          'Release notes that separate upstream changes from rumahl changes.',
          'Security updates tracked and merged promptly.',
        ],
      },
      {
        title: 'Update flow',
        steps: [
          'Upstream publishes a release or security fix.',
          'The maintained build rebases its integration patches onto the new version.',
          'CI builds and runs the integration test suite.',
          'The release is published with upstream and rumahl changelogs.',
          'rumahl stages the update, verifies health and keeps a rollback available.',
        ],
      },
      {
        title: 'When a modified build is justified',
        text: 'A fork or patch series is a last resort, not the default. Integration should happen through adapters, APIs and additional components first.',
        list: [
          'The service exposes no API for a capability the integration needs.',
          'A small upstream patch is the only safe way to expose lifecycle events.',
          'Packaging requires rumahl-specific defaults that cannot be configured externally.',
          'The change is small, documented and easy to rebase.',
        ],
        callout: {
          tone: 'warning',
          title: 'Avoid fork lock-in',
          text: 'The more a build diverges, the harder security updates become. Every modification must have an owner, a reason and a path back upstream.',
        },
      },
      {
        title: 'Independence and rollback',
        text: 'Native management must not remove the service’s escape hatch. The data stays in the service’s own format, the original interface stays available, and a rollback returns to the previous working build.',
      },
    ],
  },

];

export const help: Article[] = [
  {
    slug: 'installing-rumahl-os',
    title: 'Installing rumahl OS',
    summary: 'The current development paths: the real developer server or the Buildroot QEMU image.',
    area: 'Getting Started',
    group: 'Support',
    readTime: 5,
    updated: '20 October 2026',
    featured: true,
    sections: [
      {
        title: 'Current status',
        text: 'rumahl OS is under active development and is not yet intended for production use. There is no signed hardware installer release and no default account or password.',
        list: [
          'Developer server: real Rust platform, SQLite accounts, SSR and Vite on Linux or WSL2.',
          'Buildroot QEMU image: read-only system disk plus a persistent data disk for acceptance.',
          'Hardware flashing, signed updates, A/B activation and installer media are still separate milestones.',
        ],
      },
      {
        title: 'Developer server',
        code: {
          language: 'bash',
          content:
`pnpm --dir frontend install --frozen-lockfile
pnpm --dir frontend dev`,
        },
        text: 'Open https://localhost:8443, trust the generated certificate and read the generated developer password from .rumahl-dev/credentials.json. See the developer documentation for the full workflow.',
      },
      {
        title: 'QEMU image',
        text: 'The image build uses the pinned Buildroot source and produces a read-only system image. A separate ext4 data disk supplies /var, /home and /apps. The detailed provisioning and certificate steps are in the installation guide.',
        code: {
          language: 'bash',
          content:
`platform-buildroot/image/build.sh
platform-buildroot/image/create-data.py --seed "$RUMAHL_SEED" --output "$RUMAHL_DATA_IMAGE"
platform-buildroot/image/boot.sh --output "$BR_OUTPUT" --seed "$RUMAHL_SEED"`,
        },
      },
      {
        title: 'No self-service account creation',
        text: 'Local accounts are provisioned by an administrator with the rumahl-platform-service provisioning CLI. Passwords are at least 15 characters by default and must never be placed in command arguments or environment variables.',
      },
    ],
  },
  {
    slug: 'connect-existing-service',
    title: 'Connecting an existing service',
    summary: 'What works today with connectors and external services — and the guided integration flow that is still in development.',
    area: 'Integrations',
    group: "How-To's",
    readTime: 5,
    updated: '20 October 2026',
    featured: true,
    sections: [
      {
        title: 'Current availability',
        callout: {
          tone: 'note',
          title: 'Connectors today, generic integrations next',
          text: 'Connectors are installed through signed app packages for services such as Nextcloud and Plex. A general Settings → Integrations flow for TrueNAS, OpenMediaVault and Home Assistant is still in development.',
        },
      },
      {
        title: 'What a connector does today',
        list: [
          'The app package declares a connector target and a container-artifact entrypoint.',
          'The OS installs the connector bundle into the external service.',
          'The app is registered as an OIDC relying party for that service.',
          'The connector reaches the OS over the persistent channel with scoped identity.',
          'The original service keeps its own data, accounts and interface.',
        ],
      },
      {
        title: 'Planned guided flow',
        text: 'The platform integration UI will follow these steps once the generic adapters are available.',
        steps: [
          'Open the integration settings and choose a service type.',
          'Enter the service address and create a dedicated scoped credential.',
          'Review the capabilities the service can expose.',
          'Grant only what you need.',
          'Verify the original app and the rumahl app side by side.',
        ],
      },
      {
        title: 'Target behaviour',
        table: {
          columns: ['Requirement', 'Expected behaviour'],
          rows: [
            ['Service independence', 'The service keeps working if rumahl is offline'],
            ['Data ownership', 'Data stays in the service and is not copied by default'],
            ['Permissions', 'Capabilities are explicit and never inferred from installation level'],
            ['Original interface', 'Always remains available as a fallback'],
          ],
        },
      },
    ],
  },
  {
    slug: 'system-requirements',
    title: 'System requirements',
    summary: 'What the developer server and the current Buildroot QEMU image require.',
    area: 'Getting Started',
    group: 'Support',
    readTime: 2,
    updated: '20 October 2026',
    sections: [
      {
        title: 'Developer server',
        table: {
          columns: ['Component', 'Requirement'],
          rows: [
            ['Host OS', 'Linux or WSL2'],
            ['Rust', 'Repository toolchain'],
            ['Node', '22.12+ or 24 with ICU/Intl'],
            ['Package manager', 'pnpm 11.19.0'],
            ['Other', 'OpenSSL; no Docker, nginx or root access required'],
          ],
        },
      },
      {
        title: 'Buildroot image',
        list: [
          'Linux build host with the Buildroot host prerequisites',
          'QEMU for the x86-64 development target',
          'A separate data disk for /var, /home and /apps',
          'Trusted TLS certificate for rumahl.home.arpa and *.apps.rumahl.home.arpa',
        ],
      },
      {
        title: 'Supported hardware',
        text: 'The current image target is QEMU x86-64. Additional boards, UEFI hardware images and installer media require their own board support and acceptance work; they are not released yet.',
      },
    ],
  },
  {
    slug: 'first-boot-setup',
    title: 'First boot & initial setup',
    summary: 'Sign in with a provisioned local account and verify the current shell, recovery and persistence behaviour.',
    area: 'Getting Started',
    group: 'Support',
    readTime: 4,
    updated: '20 October 2026',
    sections: [
      {
        title: 'Developer server',
        steps: [
          'Open https://localhost:8443.',
          'Trust the generated certificate in a dedicated browser profile.',
          'Sign in with the generated developer account.',
          'Read the password from .rumahl-dev/credentials.json if needed.',
        ],
      },
      {
        title: 'Image',
        steps: [
          'Provision a local account on the data disk before booting.',
          'Open https://rumahl.home.arpa:8443 with the hostname resolving to the device or QEMU host.',
          'Sign in and verify that the session survives a restart.',
          'Verify /recovery and /login remain reachable when the renderer is unavailable.',
        ],
      },
      {
        title: 'What you can explore',
        list: [
          'Desktop and launcher presentation modes',
          'Apps and the authorized installed-app catalog',
          'Settings, preferences and this-device diagnostics',
          'The separate recovery environment',
          'Developer documentation and Storybook for the UI kit',
        ],
        callout: {
          tone: 'note',
          text: 'Generic NAS, cloud and smart-home integrations are still being built. The current platform already provides the app, capability, OIDC and connector foundations.',
        },
      },
    ],
  },
  {
    slug: 'backing-up-your-system',
    title: 'Backup status and safe development data',
    summary: 'What is available today, what is planned and how to protect test data in the meantime.',
    area: 'Backups & Recovery',
    group: 'Support',
    readTime: 4,
    updated: '21 October 2026',
    featured: true,
    sections: [
      {
        title: 'Current status',
        callout: {tone: 'warning', title: 'Not available yet', text: 'rumahl does not currently provide a supported backup or restore workflow. Do not use a development instance as the only copy of important data.'},
      },
      {
        title: 'Protect development data',
        list: ['Use disposable test data where possible.', 'Back up the development state directory with your existing host backup tools while the server is stopped.', 'Keep external-service backups in the service that owns the data.', 'Test restoration separately before relying on any backup.'],
      },
    ],
  },
  {
    slug: 'restoring-from-backup',
    title: 'Restore status',
    summary: 'There is no supported system restore flow yet; use disposable environments and service-owned backups.',
    area: 'Backups & Recovery',
    group: 'Support',
    readTime: 5,
    updated: '21 October 2026',
    sections: [
      {
        title: 'Current status',
        callout: {tone: 'warning', title: 'No supported restore flow', text: 'The development build has no finished Settings → Backup restore experience. A copied state directory is not a guaranteed portable system backup.'},
      },
      {
        title: 'Recovery during development',
        list: ['Reproduce failures in a disposable checkout or VM.', 'Restore external-service data with that service’s documented tools.', 'Record the rumahl revision and schema version before testing state recovery.', 'Never overwrite the only copy of a development state directory.'],
      },
    ],
  },
  {
    slug: 'device-unreachable',
    title: 'Your device is unreachable',
    summary: 'Diagnose the local developer server or QEMU image without relying on unreleased hardware behavior.',
    area: 'Troubleshooting',
    group: 'Support',
    readTime: 6,
    updated: '21 October 2026',
    featured: true,
    sections: [
      {
        title: 'Check the basics',
        steps: [
          'Confirm whether you are running the native developer server or the QEMU image.',
          'Check that the process or VM is still running and review its first error.',
          'For the developer server, open the HTTPS origin printed by the launcher (normally https://localhost:8443).',
          'For QEMU, verify that rumahl.home.arpa resolves to the QEMU host and use https://rumahl.home.arpa:8443.',
        ],
      },
      {
        title: 'Hardware note',
        text: 'There is no released general-purpose hardware image or supported rumahl.local device endpoint yet. Do not expose the development listener to your home network or the internet.',
      },
    ],
  },
  {
    slug: 'app-wont-start',
    title: "An app won't start",
    summary: 'Collect useful diagnostics from the development build without deleting state or bypassing permissions.',
    area: 'Troubleshooting',
    group: 'Support',
    readTime: 3,
    updated: '21 October 2026',
    sections: [
      {
        title: 'Checks for the current build',
        list: [
          'Confirm that the signed package installed successfully and appears in the authorized catalog.',
          'Review the platform and container logs for the first startup error.',
          'Check the package manifest, runtime kind, requested capabilities and granted permissions.',
          'Confirm that referenced artifacts are present and their digests match.',
          'Record the repository revision and exact reproduction steps before changing state.',
          'Do not edit the database or disable authorization to force an app to start.',
        ],
      },
    ],
  },
  {
    slug: 'installing-an-app',
    title: 'App installation status',
    summary: 'Understand the signed-package foundation and the user-facing installation flow that is still being built.',
    area: 'Apps',
    group: "How-To's",
    readTime: 3,
    updated: '21 October 2026',
    sections: [
      {
        title: 'Current status',
        callout: {tone: 'note', title: 'Developer workflow', text: 'The platform has signed app-package, manifest and capability foundations. A polished public catalog and general self-service installation flow are not released yet.'},
      },
      {
        title: 'How apps are published',
        text: 'App work is developed in public repositories and reviewed through pull requests. Package installation does not itself grant every requested capability; authorization remains explicit. See the [developer package documentation](/developers/app-packages) for the current contract.',
      },
    ],
  },
  {
    slug: 'app-permissions',
    title: 'Understanding app permissions',
    summary: 'How the permission system works — and how you control it at any time.',
    area: 'Apps',
    group: "How-To's",
    readTime: 4,
    updated: '21 October 2026',
    featured: true,
    sections: [
      {
        title: 'How permissions work',
        text: 'Every API call an app makes is checked against an explicit permission. Apps request permissions at registration and at runtime.',
      },
      {
        title: 'Current boundary',
        text: 'The platform checks grants independently of installation. User-facing grant review and revocation surfaces are still evolving, so verify the behavior against the current implementation and developer documentation rather than assuming every planned control is present.',
      },
    ],
  },
  {
    slug: 'updating-uninstalling-apps',
    title: 'Updating & uninstalling apps',
    summary: 'The intended update and removal behavior, clearly separated from what is released today.',
    area: 'Apps',
    group: "How-To's",
    readTime: 2,
    updated: '21 October 2026',
    sections: [
      {
        title: 'Updating',
        text: 'A general app update center and user-facing rollback workflow are planned, not released. During development, use the repository’s pinned package artifacts and record the exact version under test.',
      },
      {
        title: 'Uninstalling',
        text: 'Removal semantics are still under development. Do not assume uninstalling a package safely exports, retains or deletes all app data. Use disposable data and inspect the current package lifecycle implementation before testing removal.',
      },
    ],
  },
  {
    slug: 'using-files',
    title: 'Files app status',
    summary: 'The planned file experience and its current development boundary.',
    area: 'Files & Storage',
    group: "How-To's",
    readTime: 3,
    updated: '21 October 2026',
    sections: [
      {
        title: 'Planned experience',
        list: [
          'Browse provider-backed files without taking ownership away from the source service.',
          'Expose only operations supported by the selected provider and granted to the user.',
          'Keep the original service interface available.',
          'Represent unsupported operations honestly instead of simulating success.',
        ],
        callout: {tone: 'note', title: 'In development', text: 'Do not use the current Files surfaces as a supported file manager or the only place for important data.'},
      },
    ],
  },
  {
    slug: 'downloads-folder',
    title: 'Download manager status',
    summary: 'Background downloads are planned but not a supported system service today.',
    area: 'Files & Storage',
    group: "How-To's",
    readTime: 2,
    updated: '21 October 2026',
    sections: [
      {
        title: 'Background downloads',
        text: 'A system-managed download queue that survives closing the browser is planned. The current development build does not guarantee this behavior.',
      },
      {
        title: 'Managing downloads',
        list: ['Pause and resume', 'Choose a destination through an authorized provider', 'Review history and failures'],
      },
    ],
  },
  {
    slug: 'connecting-to-your-rumahl',
    title: 'Connecting to a development instance',
    summary: 'Use the loopback developer server or QEMU hostname without exposing an unsupported network service.',
    area: 'Networking & Remote',
    group: "How-To's",
    readTime: 3,
    updated: '21 October 2026',
    sections: [
      {
        title: 'Supported development origins',
        steps: [
          'For the native developer server, use the HTTPS origin printed by the launcher, normally https://localhost:8443.',
          'For the QEMU image, resolve rumahl.home.arpa to the QEMU host and open https://rumahl.home.arpa:8443.',
          'Trust only the test certificate you created or provisioned for that environment.',
        ],
        callout: {tone: 'warning', text: 'The developer server listens on 127.0.0.1 and is not a household or public deployment. Do not weaken TLS or expose it through port forwarding.'},
      },
    ],
  },
  {
    slug: 'remote-access',
    title: 'Remote access status',
    summary: 'Remote household access and share links are not supported by the current development build.',
    area: 'Networking & Remote',
    group: "How-To's",
    readTime: 5,
    updated: '21 October 2026',
    featured: true,
    sections: [
      {
        title: 'Current status',
        callout: {tone: 'warning', title: 'Do not expose the development server', text: 'There is no supported remote-access or public share-link workflow today. The development listener is loopback-only by design.'},
      },
      {
        title: 'For remote development',
        list: [
          'Use the documented SSH forwarding workflow for a trusted development machine.',
          'Keep the platform bound to loopback and preserve TLS and CSRF protections.',
          'Do not treat a generic VPN or reverse proxy as a supported rumahl deployment.',
        ],
      },
      {
        title: 'Stay safe',
        list: [
          'Never publish the development origin directly to the internet.',
          'Do not copy development credentials to another device or issue report.',
          'Use only disposable test data while remote-development support evolves.',
        ],
      },
    ],
  },
  {
    slug: 'user-profiles-guest-mode',
    title: 'Accounts and profile status',
    summary: 'Local accounts exist today; family profiles, child restrictions and guest mode are not released.',
    area: 'Security & Permissions',
    group: 'Documentation',
    readTime: 4,
    updated: '21 October 2026',
    sections: [
      {
        title: 'Profiles',
        text: 'The platform supports provisioned local accounts, sessions and scoped grants. A finished family-profile experience and automatic separation of every app’s data are not available yet.',
      },
      {
        title: 'Guest mode',
        text: 'Guest mode, child restrictions and temporary no-persistence sessions are planned concepts, not current security boundaries.',
      },
    ],
  },
  {
    slug: 'security-monitor',
    title: 'Security monitoring status',
    summary: 'Current security controls and the monitoring features that remain planned.',
    area: 'Security & Permissions',
    group: 'Documentation',
    readTime: 3,
    updated: '21 October 2026',
    sections: [
      {
        title: 'Available foundations',
        list: ['Local authentication and sessions', 'Explicit capabilities and grants', 'TLS and request protections', 'Logs and diagnostics for development'],
      },
      {
        title: 'Not available yet',
        text: 'There is no supported anomaly-detection dashboard or automatic intrusion lockdown today. Use the host, network and integrated service security tools you already operate.',
      },
    ],
  },






  {
    slug: 'is-rumahl-private',
    title: 'Is rumahl private?',
    summary: 'rumahl is designed for local operation; external services and future cloud features keep their own data boundaries.',
    area: 'Security & Permissions',
    group: 'Support',
    readTime: 3,
    updated: '21 October 2026',
    sections: [
      {
        title: 'Short answer',
        text: 'The platform is designed to run locally with provisioned local accounts. The project does not add advertising or profiling to the OS. Data handled by an integrated service remains subject to that service’s configuration and privacy terms.',
      },
      {
        title: 'What leaves my device?',
        text: 'The current developer server does not require a hosted rumahl account. Network requests can still be made by apps, package tooling, updates or external services you configure. Inspect the current implementation and each provider before using real data.',
      },
      {
        title: 'And this website?',
        text: 'The website sets no advertising or analytics cookies. Only technically necessary browser storage remembers your theme and language. Your IP address and standard server logs are processed by the hosting provider solely to serve the page securely.',
      },
    ],
  },
];

export const faqs: {q: string; a: string}[] = [
  {
    q: 'Does rumahl replace TrueNAS, Nextcloud or Home Assistant?',
    a: 'No. rumahl connects them. The services keep their own data, interfaces and lifecycles. rumahl adds a shared home, native apps and a capability layer around them.',
  },
  {
    q: 'Can I keep my existing installation?',
    a: 'That is the design goal. Generic adapters and the guided integration flow are still being built; check the integration status and provider implementation before configuring a service.',
  },
  {
    q: 'Do my services still work if rumahl is down?',
    a: 'Yes. Integration must not create a new dependency. Your NAS, private cloud and smart home keep running, and their original interfaces remain reachable.',
  },
  {
    q: 'What are Connected, Enhanced and Native?',
    a: 'They describe how a service joins rumahl: over its API, with the optional connector on an existing installation, or installed and managed by rumahl. They do not describe permissions — capabilities do.',
  },
  {
    q: 'What hardware do I need to run rumahl OS?',
    a: 'The current system-image target is QEMU x86-64. There is no released general-purpose Raspberry Pi, mini-PC, NAS or Docker installation and no published production minimum yet.',
  },
  {
    q: 'Is my data really kept local?',
    a: 'Local operation is a core design goal. External services, package tooling and any future cloud provider have separate network and data boundaries, so verify the implementation and provider configuration before using real data.',
  },
  {
    q: 'Can I install apps?',
    a: 'Signed app-package and capability foundations exist for development. A polished public catalog and general self-service installation flow are not released yet.',
  },
  {
    q: 'How do updates work?',
    a: 'There is no supported stable update channel or user-facing rollback workflow yet. Signed boot, A/B activation and update policy remain development milestones.',
  },
  {
    q: 'Is rumahl OS really free?',
    a: 'Yes. rumahl OS is free and open source (Apache-2.0 licensed) — no tiers, no subscriptions, no lock-in. Commercial use is permitted under the license.',
  },
];

export const docQuickLinks: {label: string; slug: string}[] = [
  {label: 'Start here', slug: 'start-here'},
  {label: 'First session', slug: 'first-session'},
  {label: 'Troubleshooting', slug: 'troubleshooting'},
  {label: 'Integrations', slug: 'integrations'},
  {label: 'Capabilities', slug: 'integration-capabilities'},
  {label: 'Existing installations', slug: 'external-integrations'},
  {label: 'Native integrations', slug: 'native-integrations'},
  {label: 'Security model', slug: 'security-model'},
  {label: 'Installation', slug: 'installation'},
  {label: 'Quick start', slug: 'quick-start'},
  {label: 'Privacy & data', slug: 'privacy-and-data'},
];

export const helpPopular: {label: string; slug: string}[] = [
  {label: 'Installation', slug: 'installing-rumahl-os'},
  {label: 'Is rumahl private?', slug: 'is-rumahl-private'},
  {label: 'Backups', slug: 'backing-up-your-system'},
  {label: 'Remote access', slug: 'remote-access'},
  {label: 'Install an app', slug: 'installing-an-app'},
  {label: 'Connect existing services', slug: 'connect-existing-service'},
];

export const helpChannels: {title: string; text: string; href: string; label: string}[] = [
  {title: 'GitHub Discussions', text: 'Ask the community, share ideas, report bugs.', href: 'https://github.com/rumahl', label: 'Open GitHub'},
  {title: 'Community', text: 'Guides, tips and answers from other rumahl users.', href: '/docs', label: 'Read the docs'},
  {title: 'Email us', text: 'For project questions that should not be posted publicly.', href: 'mailto:hello@rumahl.com', label: 'Write an email'},
];
