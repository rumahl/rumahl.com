import type {Article} from './knowledge';

export const developerDocs: Article[] = [
{
  "slug": "repository-guide",
  "title": "Repository guide and request flow",
  "summary": "Find the right module and follow an authenticated request across the frontend and Rust boundaries.",
  "area": "Architecture",
  "group": "Start",
  "readTime": 7,
  "updated": "20 October 2026",
  "featured": false,
  "sections": [
    {
      "title": "Start from the behavior you are changing",
      "markdown": "Read `ARCHITECTURE.md` and `CONTRIBUTING.md` in the checkout before adding a feature. The core provides domain mechanisms. HTTP, persistence, authentication and rendering belong at their respective boundaries. First-party apps use platform contracts too; they should not gain a privileged shortcut merely because they ship with rumahl."
    },
    {
      "title": "Repository map",
      "markdown": "| Location | Responsibility |\n| --- | --- |\n| `core/` | Domain mechanisms and capability/permission abstractions |\n| `platform-api/`, `platform-service/`, `platform-web/` | Platform interfaces, service composition and web boundary |\n| `persistence-sqlite/` | SQLite persistence |\n| `oidc-provider/`, `account-auth/` | Identity and account authentication |\n| `app-packages/`, `app-operations/` | Package and application operation boundaries |\n| `ui-contracts/` | Contracts consumed by the interface |\n| `frontend/` | Shell, SSR, bridge client, UI and Storybook workspaces |\n| `platform-buildroot/` | System image and OS integration |\n| `tests/e2e/` | Cross-boundary integration checks |"
    },
    {
      "title": "Trace a request before changing it",
      "markdown": "Begin at the UI action or route and find the client contract it calls. Follow that contract into the web handler, authentication and authorization checks, and then the domain operation. Inspect the persistence or host-service adapter where the operation leaves the domain. Finally, follow the result back through the response or snapshot to the UI.\n\nAn interface-only change often belongs in `frontend/`. A new permission rule belongs at the backend authorization boundary as well as in its UI explanation. Hiding a button is not authorization."
    },
    {
      "title": "Keep failures explicit",
      "markdown": "Missing permission must deny the operation. Unknown bridge methods must not execute. Resources must remain logical references rather than host filesystem paths. A reconnect or restart must not create a new grant.\n\nWhen changing a contract, check both the successful response and malformed, unknown, unauthenticated and unauthorized requests. Keep validation errors distinguishable from transport failures so the interface can explain the right next step."
    },
    {
      "title": "Follow-up references",
      "markdown": "Continue with [shell contracts](/developers/shell-contracts), [HTTP API](/developers/http-api), [app resources](/developers/app-resources) and [testing](/developers/testing-release). The repository source and tests for your revision are the reference when an evolving contract differs from this website."
    }
  ]
},
{
  "slug": "development-troubleshooting",
  "title": "Development troubleshooting",
  "summary": "Resolve certificate, watcher, state-lock and remote-development issues while preserving isolation.",
  "area": "Getting started",
  "group": "Start",
  "readTime": 7,
  "updated": "20 October 2026",
  "featured": false,
  "sections": [
    {
      "title": "Establish a baseline",
      "markdown": "Run the commands from the root of the rumahl repository. Check `node --version`, `pnpm --version`, `rustc --version` and `openssl version`. Use the repository Rust toolchain, pnpm 11.19.0 and Node 22.12+ or 24 with ICU support. Install frontend dependencies with `pnpm --dir frontend install --frozen-lockfile`.\n\nLinux or WSL2 is the native development environment. A source build needs the Rust toolchain; prebuilt-binary mode still needs matching frontend sources and dependencies."
    },
    {
      "title": "Use a trusted local certificate",
      "markdown": "Supply an existing localhost certificate and key when that fits your setup:\n\n```bash\npnpm --dir frontend dev \\\n  --cert /absolute/path/localhost.pem \\\n  --key /absolute/path/localhost-key.pem\n```\n\nThe certificate must cover `localhost`. Generated certificates live under `.rumahl-dev/tls` and are short-lived test certificates. To rotate one, stop the server and remove only that TLS directory before restarting. Re-establish trust in the new public certificate. Preserve the account database and never publish the private key."
    },
    {
      "title": "Handle watcher and compiler failures",
      "markdown": "Use `pnpm --dir frontend dev --poll --port 9443` for shared-folder notification problems. Use `--no-watch` to disable automatic Rust rebuilds while retaining frontend hot reload.\n\nThe platform process is replaced only after compilation succeeds. A broken Rust change can therefore leave the last successful binary serving requests. Fix the compiler error before assuming the UI is using your new code. Brief 503 responses during a successful platform restart are different from a persistent startup failure."
    },
    {
      "title": "Resolve state conflicts without resetting data",
      "markdown": "A lock prevents two developer servers from using the same state directory. Stop the process you previously started before launching another with that state. Do not bypass the lock or remove the database to clear an error.\n\n`.rumahl-dev/server.json` records the selected origin, certificate path and development build ID. Treat it as local diagnostic state. The launcher uses private temporary sockets and keeps development databases separate from `/var/lib/rumahl`."
    },
    {
      "title": "Connect to a Linux development host",
      "markdown": "Start the server on the Linux host, then forward the local port from your workstation:\n\n```bash\nssh -L 8443:127.0.0.1:8443 developer@development-host\n```\n\nOpen `https://localhost:8443` locally and trust that host’s public development certificate. The example hostname and user must be replaced with your own. Keep the development listener bound to loopback; do not add wildcard CORS or expose Vite as a public OS interface."
    },
    {
      "title": "Verify the repaired workflow",
      "markdown": "After the server starts, verify login, a frontend hot update and persistence across restart. For changes to the launcher or authentication boundary, run the integration check described in [testing and release](/developers/testing-release), including its prerequisites. The fixture-only demo cannot validate authentication, real persistence or backend permissions."
    }
  ]
},
{
  "slug": "contributing",
  "title": "Make your first contribution",
  "summary": "Choose a scoped change, verify it and prepare a reviewable contribution to the independent project.",
  "area": "Getting started",
  "group": "Start",
  "readTime": 7,
  "updated": "20 October 2026",
  "featured": false,
  "sections": [
    {
      "title": "Contributions beyond code",
      "markdown": "A useful contribution can clarify an installation step, reproduce a bug, improve a test or explain an accessibility problem. Start with a concrete observation and include the revision you tested. For a large architectural change, discuss the proposed behavior before implementing it.\n\nRead the repository `CONTRIBUTING.md`, `AI_POLICY.md` and architecture documentation. Maintainers review contributions as project work; no commercial support or review deadline is implied."
    },
    {
      "title": "Prepare a small branch",
      "markdown": "Use a fork or a checkout you can push to. From the rumahl repository, create a branch for one change:\n\n```bash\ngit switch -c docs/clarify-local-setup\n```\n\nUse the appropriate typed prefix, such as `fix/`, `feat/`, `docs/` or `test/`. Keep generated output, local credentials and `.rumahl-dev` out of the diff. Artwork belongs in the assets repository under its own licensing rules."
    },
    {
      "title": "Document the observable result",
      "markdown": "For a bug fix, write down the trigger, expected behavior and current result. Add a regression test at the boundary that failed. For documentation, execute the relevant instructions and verify links. Mark proposed APIs as proposed rather than inventing an implementation.\n\nFor a permission change, cover both the authorized operation and denial. Consider reconnects, restarts and malformed requests. A positive-path screenshot alone cannot demonstrate an authorization boundary."
    },
    {
      "title": "Run checks for the affected area",
      "markdown": "For frontend changes:\n\n```bash\npnpm --dir frontend typecheck\npnpm --dir frontend lint\npnpm --dir frontend test\npnpm --dir frontend build\n```\n\nFor Rust changes:\n\n```bash\ncargo fmt --all -- --check\ncargo clippy --workspace --all-targets --locked -- -D warnings\ncargo test --workspace --locked\n```\n\nUse the additional integration and image checks in [testing and release](/developers/testing-release) when the change crosses those boundaries. State any check you could not run and why."
    },
    {
      "title": "Prepare the review",
      "markdown": "Inspect `git diff` and `git status` before committing. The project uses Conventional Commits and requires a Developer Certificate of Origin sign-off on every commit (`git commit -s`). Sign off only changes you are entitled to contribute.\n\nA pull request should describe the problem, the resulting behavior and validation. Include reproduction steps for a fix and screenshots when a visual change needs them. Link the related issue and explain any remaining limitations. Do not include account credentials or private log data."
    },
    {
      "title": "Keep documentation close to behavior",
      "markdown": "When a contract changes, update the relevant repository guide, example and test together. Website guides should state which behavior exists and which is planned. Small corrections that make a guide reproducible are valuable contributions in their own right.\n\nUse [private reporting](/security) for security vulnerabilities rather than disclosing them in a public issue or pull request."
    }
  ]
},
{
    slug: 'getting-started',
    title: 'Developer setup',
    summary:
      'Run the real Rust platform, SQLite accounts, SSR and Vite behind one local HTTPS origin — without Docker or root access.',
    area: 'Getting started',
    group: 'Start',
    readTime: 8,
    updated: '20 October 2026',
    featured: true,
    sections: [
      {
        title: 'Prepare your checkout',
        code: {language: 'bash', content: 'git clone https://github.com/rumahl/rumahl.git\ncd rumahl'},
        markdown: 'All commands below run from the rumahl repository root. Read `CONTRIBUTING.md` and `ARCHITECTURE.md` at your checked-out revision. The [repository guide](/developers/repository-guide) explains the module boundaries; [development troubleshooting](/developers/development-troubleshooting) covers TLS, watchers and state locks.',
      },
      {
        title: 'What you need',
        text: 'Native full-stack development runs on Linux or WSL2. The development server uses the real platform, the local account database and the React shell; it is not a fixture-only mock.',
        list: [
          'The repository Rust toolchain',
          'Node 22.12+ or Node 24, with ICU/Intl support',
          'pnpm 11.19.0',
          'OpenSSL',
          'No Docker, nginx, root access or global watch utility',
        ],
      },
      {
        title: 'Start the developer server',
        code: {
          language: 'bash',
          content:
            'pnpm --dir frontend install --frozen-lockfile\npnpm --dir frontend dev',
        },
        text: 'Open https://localhost:8443. React components use Fast Refresh, CSS updates in place, and Rust changes trigger an incremental rebuild followed by a platform restart.',
      },
      {
        title: 'First login',
        steps: [
          'On first start the server creates an isolated developer account with a random password.',
          'Read the credentials from .rumahl-dev/credentials.json (owner-only permissions).',
          'Trust the generated public certificate in a dedicated development browser profile.',
          'Sign in. Accounts and sessions survive restarts.',
        ],
        callout: {
          tone: 'warning',
          title: 'Do not skip certificate trust',
          text: 'Continuing past a certificate warning can load the login page while Chromium rejects the service worker and WebSocket hot reload. Trust the generated certificate or pass your own localhost certificate with --cert and --key.',
        },
      },
      {
        title: 'Daily workflow',
        list: [
          'Shell components and CSS: Vite hot update with React Fast Refresh where possible.',
          'Shared contracts or non-component client modules: the page may reload; Rust remains authoritative.',
          'SSR source: the next request loads the changed module.',
          'Rust files or Cargo manifests: debounced incremental build, then a process replacement after a successful compile.',
          'Launcher or Vite configuration: restart the developer command.',
        ],
        code: {
          language: 'bash',
          content:
            'pnpm --dir frontend dev --poll --port 9443\npnpm --dir frontend dev --no-watch',
        },
      },
      {
        title: 'Development boundaries',
        text: '.rumahl-dev/ is Git-ignored. The server creates a separate developer state directory, keeps sockets in a private temporary directory and binds only to 127.0.0.1. It never uses the installed system state at /var/lib/rumahl.',
        list: [
          'Same SSR render function and request bounds as production.',
          'Strict production CSP and CSRF checks remain active.',
          'No unauthenticated development API performs privileged actions.',
          'The fixture-only demo is available with pnpm --dir frontend dev:demo, but is not a substitute for the full-stack server.',
        ],
      },
      {
        title: 'Checks',
        code: {
          language: 'bash',
          content:
            'pnpm --dir frontend typecheck\npnpm --dir frontend lint\npnpm --dir frontend test\npnpm --dir frontend build\ncargo build --locked -p rumahl-platform-service\npython3 tests/e2e/development/check.py',
        },
      },
    ],
  },
{
    slug: 'architecture',
    title: 'Architecture',
    summary:
      'The current repository boundaries, platform invariants and the path from the React shell to the Rust domain core.',
    area: 'Architecture',
    group: 'Start',
    readTime: 9,
    updated: '20 October 2026',
    featured: true,
    sections: [
      {
        title: 'Platform invariants',
        list: [
          'Core provides mechanisms, not products, and contains no app-specific behavior.',
          'Apps never communicate directly with other apps.',
          'Apps depend on capabilities, not concrete providers.',
          'Permission request is not permission grant; capability is not contribution.',
          'Every operation has an identity.',
          'Resources are logical references, never host paths.',
          'First-party and third-party apps use the same platform contracts.',
          'Privileged OS operations run in isolated services.',
          'Transport, persistence, authentication and UI concerns stay outside the domain core.',
        ],
      },
      {
        title: 'System overview',
        code: {
          language: 'text',
          content:
`Frontend / OS shell
  frontend/
        │
        ▼
Platform web / API
  platform-web/ · platform-api/
        │
        ▼
Platform service
  platform-service/
        │
        ├── account-auth/ · oidc-provider/
        ├── app-operations/ · app-packages/
        └── persistence-sqlite/
                 │
                 ▼
             Domain core
                 core/`,
        },
      },
      {
        title: 'Source map',
        table: {
          columns: ['Path', 'Responsibility'],
          rows: [
            ['core/', 'Domain concepts, policies and platform invariants'],
            ['platform-api/', 'Stable contracts without implementation leakage'],
            ['platform-service/', 'Composition of core, auth, persistence and app operations'],
            ['platform-web/', 'HTTP, HTTPS gateway, shell snapshot, apps and OIDC adapter'],
            ['app-packages/', 'Signed package manifest, verification, import and CLI'],
            ['app-operations/', 'Durable install/uninstall journal across providers'],
            ['account-auth/ · oidc-provider/', 'Local accounts and OpenID Connect'],
            ['persistence-sqlite/', 'SQLite snapshots, accounts, operations, databases and secrets'],
            ['frontend/', 'React shell, SSR, bridge client, UI kit and Storybook'],
            ['ui-contracts/', 'Engine-neutral snapshot, theme and extension contracts'],
            ['platform-buildroot/', 'System image and service integration'],
          ],
        },
      },
      {
        title: 'Boundaries',
        text: 'Dependencies point toward the domain core. Infrastructure implements platform concepts with SQLite, HTTP, OAuth/OIDC or host services; those details must not leak into core types.',
        list: [
          'UI and transport call platform services.',
          'Platform services orchestrate domain rules and infrastructure.',
          'Core defines identity, permissions, resources and lifecycle rules.',
          'Buildroot is an implementation detail of the image, not the application-facing API.',
        ],
      },
      {
        title: 'Identity and accounts',
        text: 'rust OS supports multiple local user accounts. Account selection and session state are explicit, and changing the active desktop account must not silently change an existing app or OAuth session. rumahl OS is also its own standards-compliant OpenID Provider for installed applications.',
      },
      {
        title: 'Detailed documentation',
        text: 'The repository keeps subsystem documents under docs/architecture/. The developer docs here mirror the current implementation and call out deferred work explicitly.',
        list: [
          'Account and OpenID Connect',
          'App databases, hosting and resource operations',
          'Buildroot acceptance and migration',
          'Filesystem layout, injection safety and secret store',
          'Shell preferences and routing',
          'Storage and updates',
          'Offline behaviour',
        ],
      },
    ],
  },
{
    slug: 'build-app',
    title: 'Build an app',
    summary:
      'The practical path from a signed package to a hosted app with a bridge connection and declared capabilities.',
    area: 'App development',
    group: 'Build apps',
    readTime: 8,
    updated: '21 November 2026',
    featured: true,
    sections: [
      {
        title: 'The app model',
        text: 'An app is a signed directory package. A detached Ed25519 signature covers the exact manifest bytes, and every payload file is authenticated by SHA-256. The platform imports the package, publishes verified web assets or stages a container image reference, and grants launch only for the live account and installation.',
        diagram: 'app-model',
        list: [
          'A manifest named package.json describes the app, runtime and requested permissions.',
          'Web apps use a web-asset entrypoint and run in a sandboxed iframe.',
          'Container apps use a container-artifact entrypoint and the runtime supervisor.',
          'Native apps are defined in core, but the native runtime trust policy is not enabled yet.',
        ],
      },
      {
        title: 'Build path',
        steps: [
          'Choose the runtime: start with a `web` app and a single `web-asset` entrypoint. Add a container only when the app needs a backend process.',
          'Write the manifest. Keep identifiers stable and request only the permissions the app actually uses. Read [App packages and manifest](/developers/app-packages).',
          'Connect the shell through the bridge. Use the documented methods for info, theme, settings, notifications, windows and capabilities. For a local service, declare `com.rumahl.os.network` and use the brokered request instead of a direct socket. Read [App hosting and bridge](/developers/app-hosting).',
          'Sign the package, import it through `POST /api/v1/shell/apps/import`, and test launch, settings, data and runtime state. Read [Install, uninstall and databases](/developers/app-resources).',
          'Run the frontend, Rust and browser checks before calling the app releasable. Read [Testing and release](/developers/testing-release).',
        ],
      },
      {
        title: 'A minimal manifest',
        text: 'This is the smallest useful web-app shape. Replace the example identifiers and digest. Unknown manifest fields are rejected, so add fields from the documented contract rather than inventing them.',
        code: {
          language: 'json',
          content:
`{
  "formatVersion": 1,
  "publisherId": "com.example",
  "app": {
    "appId": "com.example.notes",
    "version": "0.1.0",
    "displayName": "Notes",
    "runtime": {
      "kind": "web",
      "entrypoints": [
        { "id": "main", "kind": "web-asset", "path": "index.html" }
      ]
    },
    "lifecycle": "on-demand",
    "permissions": [
      {
        "id": "com.rumahl.os.window",
        "scope": "user-own",
        "required": true,
        "reason": "Control its own window"
      }
    ],
    "providedCapabilities": []
  },
  "files": [
    { "path": "index.html", "size": 1234, "sha256": "<hex digest>" }
  ]
}`,
        },
      },
      {
        title: 'Connect the bridge',
        text: 'A web app does not receive the shell session. It talks to the shell through the bridge and registers capability handlers with the platform. Keep the return shape of your capability documented with the app.',
        code: {
          language: 'js',
          content:
`// Inside the hosted web app.
rumahl.provide('com.example.notes.search', async (request) => {
  return searchNotes(request);
});

// The shell can now invoke the declared capability.
// The platform still decides whether the caller is authorized.`,
        },
        callout: {
          tone: 'important',
          title: 'No direct app-to-app calls',
          text: 'Apps never communicate directly. A provider handles a declared capability through the platform, and a capability request is not a permission grant.',
        },
      },
      {
        title: 'Sign and import',
        code: {
          language: 'bash',
          content:
`cargo run -p rumahl-app-packages --bin rumahl-package -- keygen \\
  --key-id example-1 \\
  --publisher com.example \\
  --keystore keys/example.json

cargo run -p rumahl-app-packages --bin rumahl-package -- sign \\
  --package dist/notes \\
  --manifest dist/notes/package.json \\
  --keystore keys/example.json

cargo run -p rumahl-app-packages --bin rumahl-package -- verify \\
  --package dist/notes \\
  --trust-store trust.json`,
        },
      },
      {
        title: 'Design for the boundaries',
        list: [
          'Request the narrowest permission scope that supports the feature.',
          'Treat resources as logical references, never host paths.',
          'Do not assume a capability grant survives a different account or session.',
          'Keep public web assets free of secrets; an app host strips cookies and Authorization.',
          'Test denial, malformed input and missing permissions, not only the successful path.',
          'Declare com.rumahl.os.settings for app settings and com.rumahl.os.network for brokered HTTP(S); neither is granted by installation alone.',
        ],
        callout: {
          tone: 'warning',
          title: 'Not a public catalog yet',
          text: 'The signed package and capability foundations exist for development. A polished public catalog, general self-service installation and update execution are not released. Check the current status before promising an installation flow.',
        },
      },
      {
        title: 'Continue',
        list: [
          '[API reference](/developers/api)',
          '[App packages and manifest](/developers/app-packages)',
          '[App hosting and bridge](/developers/app-hosting)',
          '[OIDC for app login](/developers/identity-oidc)',
          '[Testing and release](/developers/testing-release)',
        ],
      },
    ],
  },
{
    slug: 'app-packages',
    title: 'App packages & manifest',
    summary:
      'The signed directory package, the package.json manifest, runtime kinds, capabilities, permissions, connectors and the signing CLI.',
    area: 'Packages & manifest',
    group: 'Build apps',
    readTime: 10,
    updated: '21 November 2026',
    featured: true,
    sections: [
      {
        title: 'Package boundary',
        text: 'An app is a signed directory package. A detached Ed25519 signature covers the exact manifest bytes, and every payload file is authenticated by SHA-256. The importer publishes verified web assets or stages a container image reference; it never trusts manifest paths or host directories.',
        list: [
          'Manifest filename: package.json',
          'Manifest limit: 1 MiB',
          'Payload limit: 2,048 files, 64 MiB per file, 256 MiB total',
          'Unknown manifest fields are rejected',
        ],
      },
      {
        title: 'Manifest example',
        code: {
          language: 'json',
          content:
`{
  "formatVersion": 1,
  "publisherId": "com.example",
  "app": {
    "appId": "com.example.notes",
    "version": "1.0.0",
    "displayName": "Notes",
    "runtime": {
      "kind": "web",
      "entrypoints": [
        { "id": "main", "kind": "web-asset", "path": "index.html" }
      ]
    },
    "lifecycle": "on-demand",
    "permissions": [
      {
        "id": "com.rumahl.os.window",
        "scope": "user-own",
        "required": true,
        "reason": "Control its own window"
      }
    ],
    "providedCapabilities": ["com.example.notes.search"],
    "settings": [
      {
        "key": "mode",
        "title": "Mode",
        "type": "select",
        "options": [{ "value": "light", "label": "Light" }]
      }
    ]
  },
  "files": [
    { "path": "index.html", "size": 1234, "sha256": "<hex digest>" }
  ]
}`,
        },
      },
      {
        title: 'Runtime kinds',
        table: {
          columns: ['Kind', 'Entrypoint', 'Current behaviour'],
          rows: [
            ['web', 'web-asset', 'Published under the installation asset root and hosted in a sandboxed iframe'],
            ['container', 'container-artifact', 'Staged through the runtime supervisor; lifecycle on-demand or always-on'],
            ['native', 'endpoint', 'Defined in core, native runtime trust policy is not enabled yet'],
          ],
        },
      },
      {
        title: 'Permissions and capabilities',
        text: 'A permission request declares what the app needs; the platform decides whether to grant it. A capability is a named operation an app provides to other apps. Requesting a capability is not a grant, and providing one is not the same as contributing UI.',
        table: {
          columns: ['Field', 'Meaning'],
          rows: [
            ['permissions[].id', 'Validated permission identifier'],
            ['permissions[].scope', 'app-private, user-own, user-selected, explicit, family-shared or system'],
            ['permissions[].required', 'Whether installation can continue without it'],
            ['providedCapabilities[]', 'Capabilities this app can serve through the bridge'],
            ['connectors[]', 'External service target plus a container-artifact entrypoint'],
          ],
        },
      },
      {
        title: 'Settings and network access',
        text: 'Integration apps often need configuration and a way to reach a local service without receiving a socket or a secret. Both are generic platform resources and both require an explicit capability declaration in the signed manifest.',
        list: [
          'com.rumahl.os.settings lets an app read and write only its own manifest settings.',
          'A secret setting is write-only: it is encrypted at rest and never returned to the app.',
          'com.rumahl.os.network lets the OS perform a brokered HTTP(S) request to an origin the user approved for that installation.',
          'Network consent is per installation, user and exact origin; it can be session-bound or durable with an expiry.',
          'The app never receives a socket, cookie jar or secret plaintext, and the platform rechecks consent on every call.',
        ],
      },
      {
        title: 'Connectors in the manifest',
        text: 'A connector bundle targets an external service such as nextcloud or plex. The OS installs the bundle and registers the app as an OIDC relying party for that service. The broader open connector specification for arbitrary NAS and smart-home providers is product direction, not a frozen public API yet.',
        code: {
          language: 'json',
          content:
`"connectors": [
  { "target": "nextcloud", "entrypoint": "main" }
]`,
        },
      },
      {
        title: 'Sign and verify',
        code: {
          language: 'bash',
          content:
            'cargo run -p rumahl-app-packages --bin rumahl-package -- keygen \\\n  --key-id example-1 \\\n  --publisher com.example \\\n  --keystore keys/example.json\n\ncargo run -p rumahl-app-packages --bin rumahl-package -- sign \\\n  --package dist/notes \\\n  --manifest dist/notes/package.json \\\n  --keystore keys/example.json\n\ncargo run -p rumahl-app-packages --bin rumahl-package -- verify \\\n  --package dist/notes \\\n  --trust-store trust.json',
        },
      },
    ],
  },
{
    slug: 'app-hosting',
    title: 'App hosting & bridge',
    summary:
      'Authorized catalog and launch, isolated app origins, short-lived leases, the iframe bridge, runtime control and persistent channels.',
    area: 'Hosting & bridge',
    group: 'Build apps',
    readTime: 9,
    updated: '21 November 2026',
    sections: [
      {
        title: 'Catalog and launch authority',
        text: 'Installed apps are not trusted shell code. Rust returns a session-filtered catalog, and a launch is authorized again for the live account, installation and grants.',
        table: {
          columns: ['Route', 'Purpose'],
          rows: [
            ['GET /api/v1/shell/apps', 'Bounded, session-filtered app catalog'],
            ['POST /api/v1/shell/apps/:id/launch', 'Authorize and return a frame URL plus short-lived lease'],
            ['GET/POST /api/v1/shell/apps/:id/runtime', 'Read or change runtime state'],
            ['POST /api/v1/shell/apps/import', 'Import a verified package'],
            ['POST /api/v1/shell/capabilities/invoke', 'Invoke a capability through the platform'],
          ],
        },
      },
      {
        title: 'Isolation',
        list: [
          'Each installation uses <installation-uuid>.<RUMAHL_APP_HOST_SUFFIX>, normally apps.<shell-host>.',
          'Assets are served under /launch/<256-bit-random-lease>/<manifest-path>.',
          'A lease is bound to one session and installation, expires after 90 seconds without renewal and lives in memory only.',
          'The iframe uses sandbox="allow-scripts" without allow-same-origin.',
          'App hosts never route to shell APIs and strip cookies and Authorization.',
          'Apps receive no shell session token or broad platform bearer credential.',
        ],
      },
      {
        title: 'Bridge protocol',
        text: 'Installed apps reach the shell only through window.postMessage using rumahl.bridge.v1. The channel is bound to the frame contentWindow; event.origin is "null" for a sandboxed app.',
        table: {
          columns: ['Method', 'Purpose'],
          rows: [
            ['os.info', 'Bounded shell and app information'],
            ['os.theme.get / os.theme.changed', 'Read and follow the semantic OS palette'],
            ['os.settings.get / os.settings.set', 'Read or write the app’s own manifest settings'],
            ['os.notification', 'Send a user notification'],
            ['os.window.*', 'Close, minimize or focus the app window'],
            ['os.capabilities.invoke', 'Invoke another installed app’s declared capability'],
          ],
        },
      },
      {
        title: 'Capabilities and channels',
        text: 'The capability registry is derived from installed apps, and every existing account is granted each provided capability at install. A web provider is reached through its frame; an always-on service can connect over the persistent rumahl.channel.v1 loopback channel with a hello/token handshake.',
        list: [
          'Capability providers register handlers with rumahl.provide(capability, handler).',
          'Deliveries wait for the bridge handshake so provider registration is not raced.',
          'Theme changes are pushed to apps and streamed services as --rumahl-* variables.',
          'Standalone services can be embedded through the same-origin stream proxy under /api/v1/shell/streams/{id}/.',
        ],
      },
      {
        title: 'Settings and brokered network',
        text: 'Apps that declare com.rumahl.os.settings can persist manifest-declared values bound to the installation. Secret values are write-only and encrypted at rest. Apps that declare com.rumahl.os.network can ask the platform to perform an HTTP(S) request to an origin the user explicitly approved for that installation; the platform attaches configured secrets server-side and returns only the response.',
        list: [
          'Settings are read and written through GET/PUT /api/v1/shell/apps/{id}/settings.',
          'Consent and file access use /apps/{id}/grants and /apps/{id}/files/content.',
          'Network consent uses GET/PUT/DELETE /apps/{id}/network/consent; requests use POST /apps/{id}/network/request.',
          'The network broker allows HTTP(S) only, follows no redirects, refuses link-local targets and never sends cookies.',
          'A denied request returns 403 with a reason such as approval-required so the shell can offer consent.',
        ],
        callout: {
          tone: 'important',
          title: 'Consent is not installation',
          text: 'Installing an app does not grant its network origins or its file access. The current account and session must approve the exact origin or resource, and revocation takes effect on the next request.',
        },
      },
      {
        title: 'Publication boundary',
        text: 'Only Web runtimes with a main web-asset entrypoint are launchable in this slice. Assets must be published under $RUMAHL_STATE_DIR/app-assets/<installation-uuid>/<manifest-path> and must contain public assets only.',
        callout: {
          tone: 'warning',
          text: 'Container web proxies, OIDC app login, native app backends and a general action bridge still need separate authorization contracts. The generic web-app network broker is limited to declared capability, explicit origin consent and the documented transport rules.',
        },
      },
    ],
  },
{
    slug: 'app-resources',
    title: 'Install, uninstall & databases',
    summary:
      'How the durable operation journal coordinates app databases, runtime preparation, OIDC registration, secrets and the platform snapshot.',
    area: 'Resources & data',
    group: 'Build apps',
    readTime: 8,
    updated: '21 November 2026',
    sections: [
      {
        title: 'Why a journal',
        text: 'Installing an app crosses several persistence boundaries that cannot share one transaction: the platform snapshot, optional app databases, runtime preparation and activation, and optional OIDC registration and secret delivery. rumahl records ordered steps and can resume or compensate after a crash.',
      },
      {
        title: 'Install order',
        code: {
          language: 'text',
          content:
`optional app databases
prepare runtime instance and secret namespace
optional OIDC client registration
activate runtime instance
store platform snapshot`,
        },
        text: 'The platform snapshot is always last, so live state cannot advertise resources whose provider step has not completed. App code cannot start before its declared runtime secrets exist.',
      },
      {
        title: 'Uninstall order',
        code: {
          language: 'text',
          content:
`stop runtime
remove runtime secrets
revoke app grants and network consents
revoke OIDC client
remove prepared runtime
retain app databases
store removed platform snapshot`,
        },
        text: 'An interrupted uninstall resumes forward. Databases are retained in inaccessible storage; physical deletion is a separate explicit purge policy that is not implemented yet.',
      },
      {
        title: 'Crash-visible states',
        table: {
          columns: ['Phase', 'Meaning'],
          rows: [
            ['pending', 'Not started'],
            ['applying', 'Provider call may have happened; ambiguous after a crash'],
            ['applied', 'Provider confirmed success'],
            ['compensation-pending', 'Must be reversed'],
            ['compensating', 'Reverse call in progress'],
            ['compensated', 'Reverse call confirmed'],
          ],
        },
      },
      {
        title: 'App databases',
        text: 'Databases are optional and declared by logical names only. The host path, engine, credentials and connection details belong to the provider, never the manifest.',
        list: [
          'Each active database is addressed by (InstallationId, AppDatabaseId).',
          'An app can declare at most eight databases.',
          'SQLite is the first local provider; PostgreSQL and native delivery remain separate adapters.',
          'A new installation never inherits an old installation’s database.',
        ],
      },
      {
        title: 'Current status',
        callout: {
          tone: 'note',
          title: 'Update execution is not connected yet',
          text: 'Install, uninstall, compensation and restart recovery are implemented. Update execution still needs version validation, database backup/migration, health checks and rollback policy.',
        },
      },
    ],
  },
{
    slug: 'identity-oidc',
    title: 'Accounts & OpenID Connect',
    summary:
      'Local accounts, the rumahl OpenID Provider, Authorization Code with PKCE, OIDC clients, pairwise subjects and current limits.',
    area: 'Identity & security',
    group: 'Platform',
    readTime: 8,
    updated: '20 October 2026',
    featured: true,
    sections: [
      {
        title: 'Local accounts',
        text: 'rumahl OS supports multiple local accounts. Passwords are stored as Argon2id PHC verifiers with transactional retry state and lockout. A password change revokes live account sessions and their opaque transport credentials in the same transaction.',
      },
      {
        title: 'The OpenID Provider',
        text: 'rumahl OS is its own standards-compliant OpenID Provider. Only apps already present in PlatformState can be registered. The signed manifest declares a logical entrypoint, callback path, client type and requested scopes; a platform-owned resolver supplies the actual HTTPS origin.',
        table: {
          columns: ['Route', 'Purpose'],
          rows: [
            ['/.well-known/openid-configuration', 'Discovery document'],
            ['/oauth2/jwks', 'Public signing keys'],
            ['/oauth2/authorize', 'Authorization request'],
            ['/oauth2/authorize/approve', 'Consent submission'],
            ['/oauth2/token', 'Authorization code exchange'],
            ['/oauth2/userinfo', 'UserInfo endpoint'],
          ],
        },
      },
      {
        title: 'Flow rules',
        list: [
          'Authorization Code with mandatory PKCE S256.',
          'Exact redirect matching; no wildcard callback.',
          'ID tokens are signed with EdDSA.',
          'Static web apps are public clients and receive no secret.',
          'Container apps are confidential clients; the random 256-bit secret is encrypted and only its SHA-256 digest is stored with the client.',
          'Pairwise subjects keep users separate across clients.',
          'offline_access is currently rejected until refresh-token families can be issued and rotated atomically.',
        ],
      },
      {
        title: 'Registration is a journal participant',
        text: 'The recovery-safe registrar is the only registration path. It participates in the app operation journal, delivers a recovered confidential secret through an idempotent runtime channel, and publishes staged platform state only after the snapshot and journal commit.',
      },
      {
        title: 'Nextcloud acceptance',
        text: 'The repository contains a Nextcloud OIDC end-to-end harness under tests/e2e/nextcloud. It covers two local users, pairwise subjects, restart persistence, revocation and the real container login sequence. The sequence remains to be executed as part of release acceptance.',
      },
    ],
  },
{
    slug: 'secrets',
    title: 'Secrets & runtime delivery',
    summary:
      'Installation-bound secrets, AES-256-GCM, TPM-sealed keys, idempotent OIDC delivery and the no-plaintext boundary.',
    area: 'Identity & security',
    group: 'Platform',
    readTime: 7,
    updated: '20 October 2026',
    sections: [
      {
        title: 'Boundary',
        text: 'Secrets live separately from the platform snapshot, app manifest, operation journal and normal app storage. Each record is bound to a complete AppIdentity and a validated namespaced purpose.',
      },
      {
        title: 'Encryption',
        list: [
          'Every value is encrypted independently with AES-256-GCM and a random 96-bit nonce.',
          'Authenticated data includes format version, secret ID, app identity, purpose, key ID and creation timestamp.',
          'SQLite stores metadata, key ID, nonce and ciphertext — never the root key.',
          'The 256-bit root key comes from a SecretEncryptionKeyProvider.',
          'Tpm2UnsealKeyProvider invokes a fixed absolute tpm2_unseal executable without a shell and accepts exactly 32 bytes.',
          'Missing keys and authentication failures fail closed.',
        ],
      },
      {
        title: 'Delivery',
        text: 'Confidential OIDC clients are registered by storing the generated secret, persisting only its digest, verifying declaration-derived metadata on replay, and delivering the same value through the privileged runtime channel before the journal step becomes applied.',
        code: {
          language: 'text',
          content:
`operation + installation + client identity
        │
        ▼
decrypt stored OIDC secret
        │
        ▼
Unix peer-credential authenticated delivery
        │
        ▼
installation namespace read-only secret mount`,
        },
      },
      {
        title: 'Non-negotiables',
        list: [
          'No secret in the manifest, platform snapshot, React bundle, command line or environment variables.',
          'No secret in logs or error messages.',
          'Runtime adapters must acknowledge an identical replay and reject changed material.',
          'Update-time credential rotation and its rollback policy remain open work.',
        ],
      },
    ],
  },
{
    slug: 'storage-updates',
    title: 'Storage, updates & backups',
    summary:
      'Separate data volumes, the private state volume, schema versioning, consistent backups and the current A/B update boundary.',
    area: 'Operations',
    group: 'Platform',
    readTime: 7,
    updated: '20 October 2026',
    sections: [
      {
        title: 'Volumes',
        table: {
          columns: ['Volume', 'Mount', 'Contents', 'Lifecycle'],
          rows: [
            ['System slot A/B', '/ (read-only), /rumahl', 'OS and rumahl services', 'Replaced by an update'],
            ['home', '/home', 'User data', 'Persistent, backed up'],
            ['apps', '/apps', 'Installed apps and assets', 'Persistent, backed up'],
            ['state', '/var/lib/rumahl', 'Databases and secrets', 'Persistent, private, backed up'],
          ],
        },
      },
      {
        title: 'The state volume is private',
        text: 'The state volume is never mounted, symlinked or bind-mounted into a user- or app-visible path. Only the platform service mounts it, owner-only (0700). The path/grant policy denies every access and apps never receive a handle into it.',
      },
      {
        title: 'Schema safety',
        list: [
          'Every database records its schema version in PRAGMA user_version.',
          'Startup stamps a fresh database and refuses one written by a newer binary.',
          'A newer slot migrates in a transaction and bumps the version.',
          'An older slot refuses to start instead of corrupting shared state.',
          'Before a slot switch, the service checkpoints WAL and fsyncs.',
          'Backups use the SQLite online backup API, never a live file copy.',
        ],
      },
      {
        title: 'Update boundary',
        text: 'Data safety and slot execution are deliberately split. The volumes are already separate, schema versions are enforced, and consistent snapshots are implemented. The inactive-slot writer, signature verification, boot artifact, rollback policy and update activation are still deferred.',
        callout: {
          tone: 'warning',
          title: 'Do not document updates as complete',
          text: 'Signed updates and boot verification are separate milestones. The current contract only guarantees that update execution must never touch data volumes and must take a backup before the first migration in a new slot.',
        },
      },
    ],
  },
{
    slug: 'connectors',
    title: 'Connectors & external services',
    summary:
      'What connectors implement today, how external services are embedded, and which parts of the open integration specification are still direction.',
    area: 'Integrations',
    group: 'Platform',
    readTime: 7,
    updated: '20 October 2026',
    sections: [
      {
        title: 'Current implementation',
        text: 'An app manifest can declare a connector target and a container-artifact entrypoint. The OS installs the bundle into the external service, registers the app as an OIDC relying party for it, and lets the connector reach the OS over the persistent channel.',
        list: [
          'Connector targets are validated lowercase service identifiers such as nextcloud or plex.',
          'The connector bundle is an entrypoint of the same signed app package.',
          'OIDC registration uses the same recoverable journal participant as other app resources.',
          'Standalone services can be embedded through the same-origin stream proxy and follow the OS theme.',
        ],
      },
      {
        title: 'What is not public yet',
        callout: {
          tone: 'important',
          title: 'No frozen universal connector API',
          text: 'The Connected / Enhanced / Native integration model and a public connector specification for arbitrary NAS, cloud and smart-home systems are product direction. Do not build against a hypothetical universal endpoint; use the current app package, capabilities and OIDC contracts.',
        },
      },
      {
        title: 'Capabilities today',
        text: 'Capabilities are declared by installed apps and invoked through the shell bridge. A provider app registers a handler with rumahl.provide(capability, handler); the platform authorizes the caller, the installation and the current account before delivery.',
        table: {
          columns: ['Concept', 'Current implementation'],
          rows: [
            ['Provider', 'Installed app that provides a capability'],
            ['Consumer', 'Installed app or shell action invoking it'],
            ['Grant', 'Platform authorization for the caller and installation'],
            ['Transport', 'Bridge frame for web apps, persistent channel for always-on services'],
            ['Audit', 'Platform boundary, live identity and fail-closed authorization'],
          ],
        },
      },
      {
        title: 'Next contracts',
        list: [
          'A public connector specification with versioning and compatibility rules',
          'Explicit capability namespaces for storage, smart home and system services',
          'External installations that expose capabilities without being replaced',
          'Native lifecycle management and maintained upstream builds',
          'A permission and identity model that never infers access from installation level',
        ],
      },
    ],
  },
{
    slug: 'shell-contracts',
    title: 'Shell, routing & UI contracts',
    summary:
      'One URL, two presentations, the first-party route registry, installed app hosting and the engine-neutral ui-contracts boundary.',
    area: 'Shell & UI',
    group: 'Frontend',
    readTime: 8,
    updated: '20 October 2026',
    sections: [
      {
        title: 'One address, two presentations',
        table: {
          columns: ['URL', 'Meaning'],
          rows: [
            ['/', 'Desktop dashboard or app grid in launcher mode'],
            ['/apps', 'First-party apps and authorized installed-app catalog'],
            ['/app/:appId/*', 'App identifier and an app-owned nested route'],
            ['/settings/*', 'Settings modules and nested pages'],
            ['/settings/display', 'Presentation controls'],
            ['/recovery', 'Standalone Rust recovery environment'],
          ],
        },
        text: 'Desktop or launcher is a persisted preference, not a route parameter. Reload and Back/Forward preserve the route; login returns to a validated deep link.',
      },
      {
        title: 'Route ownership',
        list: [
          'App.tsx owns the live snapshot/session boundary, locale provider, router and shell.',
          'routing/routes.tsx is the first-party route table with navigation, title and window metadata.',
          'apps/registry.tsx registers trusted first-party app declarations and nested routes.',
          'Third-party manifests cannot register React components in this table.',
          'Installed apps are consumed through the Rust catalog and hosted in an isolated frame.',
          'Unknown apps and nested pages get explicit unavailable/not-found views.',
        ],
      },
      {
        title: 'UI contracts',
        text: 'ui-contracts is the engine-neutral compatibility boundary between the authoritative Rust platform and replaceable shell renderers. It contains no React, Node.js, HTTP, database, runtime-engine or privileged platform integration.',
        list: [
          'Strict ShellSnapshot parsing with explicit snapshot, UI and extension API versions',
          'Declarative theme manifests with an allowlisted token and variant set',
          'Deterministic CSS compilation from validated values',
          'Command, search-provider and reserved dashboard-widget projections',
          'Checked-in JSON schemas, TypeScript bindings and compatibility fixtures',
        ],
      },
      {
        title: 'Preferences',
        text: 'Shell mode and device preferences are synchronized through versioned APIs. Account-wide settings follow the same account on other browser profiles; a device override takes priority and can be removed. Rust persists authoritative values; clients use Local Storage with Session Storage fallback and surface stale-write conflicts.',
      },
    ],
  },
  {
    slug: 'storybook',
    title: 'Storybook & design system',
    summary:
      'Run and extend the living reference for rumahl UI (RUI): stories, foundations, patterns, layouts, theming, accessibility and quality checks. RUI is not the website design system.',
    area: 'Shell & UI',
    group: 'Frontend',
    readTime: 9,
    updated: '20 October 2026',
    featured: true,
    sections: [
      {
        title: 'RUI, not RWDS',
        callout: {
          tone: 'important',
          title: 'Two design systems',
          text: 'This Storybook documents rumahl UI (RUI) for the OS shell and apps. The website uses the separate rumahl Web Design System (RWDS). Do not confuse the two or import one into the other.',
        },
        text: 'The public design documentation lives at /design: RWDS describes the web system, RUI describes the OS system, and /design/systems explains the boundary.',
        list: [
          'RWDS: website tokens, editorial layout, docs and marketing surfaces',
          'RUI: OS shell components, windows, controls, materials and themes',
          'Storybook: the living component reference for RUI only',
        ],
      },
      {
        title: 'Run Storybook',
        text: 'Storybook lives in its own workspace package so it can be extracted together with @rumahl/ui. The root frontend scripts proxy to it.',
        code: {
          language: 'bash',
          content:
            'pnpm --dir frontend install --frozen-lockfile\npnpm --dir frontend storybook\n# http://localhost:6006\n\npnpm --dir frontend build-storybook',
        },
      },
      {
        title: 'What it contains',
        list: [
          'Design documentation and the component catalog in MDX',
          'Foundations: colour, typography, shape, spacing, elevation, motion, icons and accessibility',
          'Components with autodocs generated from component JSDoc and props',
          'Hooks, patterns, layouts and app-level surfaces',
          'Guides for getting started, architecture, theming, overrides, quality and contributing',
        ],
        text: 'Component stories live next to their implementation under frontend/packages/ui/src/components. Cross-cutting documentation lives in frontend/packages/storybook/stories. For the separate design-system overview, open /design.',
      },
      {
        title: 'Theming',
        text: 'A theme is data, not code: tokens plus optional CSS and safe slot templates. The shell projects tokens onto the document root as --rumahl-ui-* custom properties, so a theme restyles the whole OS without touching component code.',
        code: {
          language: 'ts',
          content:
`import { defineTheme, registerTheme } from "@rumahl/ui/sdk";

export const ocean = registerTheme(defineTheme({
  id: "com.example.ocean",
  name: "Ocean",
  tokens: {
    "color.accent": "#0b6ea8",
    "color.canvas.background": "#071a24",
    "color.panel.background": "#0d2733",
    "color.text.primary": "#eaf4f9",
    "shape.radius.window": "16px"
  },
  modes: ["light", "dark"]
}));`,
        },
        list: [
          'color.* — accent, surfaces, text, canvas, panel, outline, shadow',
          'material.* — blur, saturation, opacity and glass strength',
          'shape.* — radii and icon sizes',
          'motion.* — durations and easing',
          'typography.* — UI and display faces, scale',
          'layout.*, texture.wallpaper, icon.gradient',
        ],
      },
      {
        title: 'Story conventions',
        list: [
          'One Name.stories.tsx per component module, title Components/Name.',
          'Lead JSDoc on the component feeds autodocs.',
          'Cover default, variants, sizes, hover/focus/disabled/loading, edge cases, floating and glass={false}.',
          'Prefer native elements and accessible names.',
          'Associate errors with aria-describedby and aria-invalid.',
          'No hard-coded colours or radii in component CSS — use tokens.',
        ],
      },
      {
        title: 'Quality checks',
        code: {
          language: 'bash',
          content:
            'pnpm --dir frontend typecheck\npnpm --dir frontend lint\npnpm --dir frontend test\npnpm --dir frontend build-storybook',
        },
        text: 'The a11y addon is installed and violations are treated as errors in autodocs and tests. Visual regression and bundle budgets are configurable extensions, not part of the current required pipeline.',
      },
      {
        title: 'Public surface',
        text: '@rumahl/ui (tokens, themes, sdk, materials) and @rumahl/ui/components are the public surface. Token IDs, component props and event shapes follow semver: add, deprecate, then remove.',
      },
    ],
  },
{
    slug: 'api',
    title: 'API reference',
    summary:
      'The current rumahl OS route catalog: shell, files, apps, capabilities, streams, store, warnings, administration, recovery, OIDC, browser auth and the app bridge.',
    area: 'API & contracts',
    group: 'Reference',
    readTime: 16,
    updated: '21 November 2026',
    featured: true,
    sections: [
      {
        title: 'One authorization boundary',
        text: 'A shell action and an app bridge call both end at the same platform boundary. The browser sends a same-origin request with the session cookie; the gateway checks Host, Origin and CSRF; Rust revalidates the live account, session, installation and grants before the operation runs. A rendered control is never proof of permission.',
        diagram: 'request-flow',
      },
      {
        title: 'Base URL and request rules',
        markdown: 'Routes below are relative to the origin of the running instance, for example `https://<host>`. The development server uses `https://localhost:8443`; a deployed instance uses its own host. The current checkout is the source of truth when a route changes.',
        list: [
          'A local password login issues a fresh 12-hour `__Host-` session cookie.',
          'Mutating `/api/v1/` requests require the exact shell Origin.',
          'The gateway rejects foreign Host headers and missing CSRF protection.',
          'Private responses are `no-store` and are never cached by the offline worker.',
          'App windows never receive the shell session token or a broad platform bearer credential.',
        ],
      },
      {
        title: 'Shell, session and preferences',
        endpoints: {
          title: 'HTTP routes',
          rows: [
            {method: 'GET', path: '/', purpose: 'Server-rendered shell document'},
            {method: 'GET', path: '/api/v1/shell/snapshot', purpose: 'Current shell, account, app and session state'},
            {method: 'GET', path: '/api/v1/shell/events', purpose: 'Live shell events'},
            {method: 'GET/PUT', path: '/api/v1/shell/preferences', purpose: 'Load or save preferences'},
            {method: 'GET/PUT', path: '/api/v1/shell/os-mode', purpose: 'Load or save the OS presentation mode'},
            {method: 'GET/PUT', path: '/api/v1/shell/workspace', purpose: 'Load or save workspace state'},
            {method: 'GET', path: '/api/v1/shell/config', purpose: 'Display-safe platform configuration'},
            {method: 'GET', path: '/api/v1/shell/widgets/{id}/frame', purpose: 'Widget frame'},
            {method: 'POST', path: '/api/v1/shell/surfaces/{id}/frame', purpose: 'Shell surface frame'},
            {method: 'POST', path: '/api/v1/shell/report', purpose: 'Client report to the platform'},
          ],
        },
      },
      {
        title: 'Files and workspace',
        endpoints: {
          title: 'HTTP routes',
          note: 'Workspace and file routes stay behind the same session and origin checks. Resources are logical references, not arbitrary host paths.',
          rows: [
            {method: 'GET/POST/PUT/DELETE', path: '/api/v1/shell/fs', purpose: 'List, create, rename or remove shell-visible entries'},
            {method: 'GET/PUT', path: '/api/v1/shell/fs/content', purpose: 'Read or write shell-visible file content'},
            {method: 'GET', path: '/api/v1/shell/fs/resolve', purpose: 'Resolve a shell-visible path'},
            {method: 'GET', path: '/api/v1/files', purpose: 'List files'},
            {method: 'POST', path: '/api/v1/files', purpose: 'Create a file or folder'},
            {method: 'PUT', path: '/api/v1/files', purpose: 'Move or rename an entry'},
            {method: 'DELETE', path: '/api/v1/files', purpose: 'Remove an entry'},
            {method: 'GET/PUT', path: '/api/v1/files/content', purpose: 'Download or write file content'},
          ],
        },
      },
      {
        title: 'Apps and capabilities',
        endpoints: {
          title: 'HTTP routes',
          note: 'The catalog is session-filtered. Launch and renewal authorize the live account, installation and grants again.',
          rows: [
            {method: 'GET', path: '/api/v1/shell/apps', purpose: 'Bounded, session-filtered app catalog'},
            {method: 'POST', path: '/api/v1/shell/apps/{id}/launch', purpose: 'Authorize launch and return a frame URL plus short-lived lease'},
            {method: 'GET/PUT', path: '/api/v1/shell/apps/{id}/settings', purpose: 'Read or write manifest-declared app settings'},
            {method: 'GET', path: '/api/v1/shell/apps/{id}/data', purpose: 'Scoped app data'},
            {method: 'GET/POST', path: '/api/v1/shell/apps/{id}/runtime', purpose: 'Read runtime state or send a runtime action'},
            {method: 'POST', path: '/api/v1/shell/apps/import', purpose: 'Import a verified package'},
            {method: 'DELETE', path: '/api/v1/shell/apps/{id}', purpose: 'Uninstall an app'},
            {method: 'POST', path: '/api/v1/shell/capabilities/invoke', purpose: 'Invoke a declared capability through the platform'},
          ],
        },
      },
      {
        title: 'App consent, files and network',
        endpoints: {
          title: 'HTTP routes',
          note: 'These routes are the user-consent surface and enforcement consumer. Installation alone grants nothing; each request is checked against the live installation, account, session and explicit consent.',
          rows: [
            {method: 'GET/PUT', path: '/api/v1/shell/apps/{id}/grants', purpose: 'Read requested grants or issue explicit consent'},
            {method: 'DELETE', path: '/api/v1/shell/apps/{id}/grants/{grant}', purpose: 'Revoke one grant'},
            {method: 'GET/PUT', path: '/api/v1/shell/apps/{id}/files/content', purpose: 'Read or write consented app files'},
            {method: 'GET/PUT/DELETE', path: '/api/v1/shell/apps/{id}/network/consent', purpose: 'List, approve or revoke an origin consent'},
            {method: 'POST', path: '/api/v1/shell/apps/{id}/network/request', purpose: 'Brokered HTTP(S) request with server-side secret attachment'},
            {method: 'GET', path: '/api/v1/shell/apps/{id}/image', purpose: 'Recorded app image diagnostics'},
            {method: 'GET', path: '/api/v1/shell/apps/{id}/storage', purpose: 'App storage diagnostics'},
          ],
        },
        text: 'Settings are bound to the installation. Plain values are validated against the manifest; secret values are write-only, encrypted at rest and never echoed. Network consent is per installation, user and exact origin; the app never receives a socket, cookie jar or secret plaintext. The image and storage views are advanced diagnostics behind the current OS-mode policy.',
      },
      {
        title: 'Streams and app store',
        endpoints: {
          title: 'HTTP routes',
          rows: [
            {method: 'GET', path: '/api/v1/shell/streams', purpose: 'List available service streams'},
            {method: 'POST', path: '/api/v1/shell/streams/{id}/grant', purpose: 'Grant a stream scope'},
            {method: 'GET', path: '/api/v1/shell/streams/{id}/api/websockets', purpose: 'WebSocket proxy for a stream'},
            {method: 'GET', path: '/api/v1/shell/streams/{id}/', purpose: 'Stream root'},
            {method: 'GET', path: '/api/v1/shell/streams/{id}/{*tail}', purpose: 'Same-origin stream asset proxy'},
            {method: 'GET', path: '/api/v1/shell/store/fetch', purpose: 'Fetch an app-store resource'},
            {method: 'GET', path: '/api/v1/shell/store/image', purpose: 'Proxy an app-store image'},
            {method: 'POST', path: '/api/v1/shell/store/trust', purpose: 'Write the app-store trust file'},
          ],
        },
      },
      {
        title: 'Weather warnings',
        endpoints: {
          title: 'HTTP routes',
          note: 'Warnings are an OS-owned surface. Publishing and test warnings require the relevant app capability and policy.',
          rows: [
            {method: 'GET', path: '/api/v1/shell/warnings', purpose: 'Active warnings and revision'},
            {method: 'POST', path: '/api/v1/shell/warnings/register', purpose: 'Register a warning publisher'},
            {method: 'POST', path: '/api/v1/shell/warnings/publish', purpose: 'Publish a warning batch'},
            {method: 'POST', path: '/api/v1/shell/warnings/clear', purpose: 'Clear published warnings'},
            {method: 'POST', path: '/api/v1/shell/warnings/test', purpose: 'Publish a test warning'},
          ],
        },
      },
      {
        title: 'Administration',
        endpoints: {
          title: 'HTTP routes',
          note: 'The admin surface requires an administrator actor. Account administration is not exposed to an ordinary app window.',
          rows: [
            {method: 'GET/POST', path: '/api/v1/admin/users', purpose: 'List or create local users'},
            {method: 'PATCH/DELETE', path: '/api/v1/admin/users/{id}', purpose: 'Update or remove a local user'},
            {method: 'POST', path: '/api/v1/admin/users/{id}/password', purpose: 'Set a user password'},
            {method: 'GET', path: '/api/v1/admin/sessions', purpose: 'List sessions'},
            {method: 'DELETE', path: '/api/v1/admin/sessions/{id}', purpose: 'Revoke one session'},
            {method: 'GET', path: '/api/v1/admin/audit', purpose: 'Read the admin audit trail'},
            {method: 'GET/PUT', path: '/api/v1/admin/policies', purpose: 'Read or set account and device policies'},
            {method: 'GET/POST', path: '/api/v1/admin/groups', purpose: 'List or create groups'},
            {method: 'DELETE', path: '/api/v1/admin/groups/{id}', purpose: 'Delete a group'},
            {method: 'PUT', path: '/api/v1/admin/groups/{id}/members', purpose: 'Update group membership'},
          ],
        },
      },
      {
        title: 'Recovery API',
        endpoints: {
          title: 'HTTP routes',
          note: 'The recovery environment is served directly by Rust and does not need the React desktop or SSR renderer.',
          rows: [
            {method: 'GET', path: '/recovery', purpose: 'Recovery page'},
            {method: 'GET', path: '/recovery.js', purpose: 'Recovery client'},
            {method: 'GET', path: '/api/v1/recovery/status', purpose: 'Recovery status'},
            {method: 'GET', path: '/api/v1/recovery/audit', purpose: 'Recovery audit'},
            {method: 'GET', path: '/api/v1/recovery/components', purpose: 'Components'},
            {method: 'GET', path: '/api/v1/recovery/sensors', purpose: 'Sensors'},
            {method: 'GET', path: '/api/v1/recovery/storage', purpose: 'Storage'},
            {method: 'GET', path: '/api/v1/recovery/disks', purpose: 'Disks'},
            {method: 'POST', path: '/api/v1/recovery/disk-test', purpose: 'Run a disk test'},
            {method: 'GET', path: '/api/v1/recovery/diagnostics', purpose: 'Diagnostics'},
            {method: 'GET', path: '/api/v1/recovery/network', purpose: 'Network state'},
            {method: 'POST', path: '/api/v1/recovery/network-test', purpose: 'Run a network test'},
            {method: 'GET', path: '/api/v1/recovery/logs', purpose: 'Logs'},
            {method: 'GET', path: '/api/v1/recovery/crashes', purpose: 'Crash records'},
            {method: 'GET', path: '/api/v1/recovery/boot', purpose: 'Boot state'},
            {method: 'GET', path: '/api/v1/recovery/system', purpose: 'System information'},
            {method: 'POST', path: '/api/v1/recovery/quarantine', purpose: 'Quarantine an item'},
            {method: 'GET/PUT', path: '/api/v1/recovery/settings', purpose: 'Read or update recovery settings'},
            {method: 'GET/POST', path: '/api/v1/recovery/host', purpose: 'Host status or an allowed host action'},
            {method: 'POST', path: '/api/v1/recovery/restart', purpose: 'Restart through the recovery broker'},
            {method: 'POST', path: '/api/v1/recovery/self-heal', purpose: 'Run self-heal'},
          ],
        },
        callout: {
          tone: 'warning',
          title: 'Recovery is a separate trust boundary',
          text: 'Host power and maintenance actions require the separate rumahl-recovery.service broker, peer-UID checks and an explicit operator allowlist. A session or UI mode alone grants no maintenance rights.',
        },
      },
      {
        title: 'OpenID Connect',
        endpoints: {
          title: 'Standards endpoints',
          note: 'rumahl OS is its own OpenID Provider for installed applications. Local account and session rules still apply.',
          rows: [
            {method: 'GET', path: '/.well-known/openid-configuration', purpose: 'Provider metadata'},
            {method: 'GET', path: '/oauth2/jwks', purpose: 'Public signing keys'},
            {method: 'GET', path: '/oauth2/authorize', purpose: 'Authorization request'},
            {method: 'POST', path: '/oauth2/authorize/approve', purpose: 'Explicit consent'},
            {method: 'POST', path: '/oauth2/token', purpose: 'Token exchange'},
            {method: 'GET', path: '/oauth2/userinfo', purpose: 'User information for authorized clients'},
          ],
        },
      },
      {
        title: 'Bridge API inside an app',
        endpoints: {
          title: 'Bridge methods',
          note: 'Installed web apps use window.postMessage with protocol rumahl.bridge.v1. The channel is bound to the frame contentWindow; a sandboxed app has the origin "null".',
          rows: [
            {method: 'bridge', path: 'os.info', purpose: 'Bounded shell and app information'},
            {method: 'bridge', path: 'os.theme.get / os.theme.changed', purpose: 'Read and follow the semantic OS palette'},
            {method: 'bridge', path: 'os.settings.get / os.settings.set', purpose: 'Read or write the app’s own manifest settings'},
            {method: 'bridge', path: 'os.notification', purpose: 'Send a user notification'},
            {method: 'bridge', path: 'os.window.*', purpose: 'Close, minimize or focus the app window'},
            {method: 'bridge', path: 'os.capabilities.invoke', purpose: 'Invoke another installed app’s declared capability'},
          ],
        },
      },
      {
        title: 'Browser auth and offline surface',
        endpoints: {
          title: 'Browser and worker routes',
          note: 'These routes serve the login page, logout, installation metadata and the offline shell. They are not app APIs.',
          rows: [
            {method: 'GET/POST', path: '/login', purpose: 'Login page or password login'},
            {method: 'GET', path: '/login/appearance.js', purpose: 'Login appearance script'},
            {method: 'GET', path: '/login/wallpaper.jpg', purpose: 'Login wallpaper'},
            {method: 'GET/POST', path: '/logout', purpose: 'Logout page or session logout'},
            {method: 'GET', path: '/offline', purpose: 'Offline shell'},
            {method: 'GET', path: '/splash', purpose: 'Startup splash page'},
            {method: 'GET', path: '/offline/ping', purpose: 'Offline worker probe'},
            {method: 'GET', path: '/offline/wallpaper.jpg', purpose: 'Offline wallpaper'},
            {method: 'GET', path: '/service-worker.js', purpose: 'Service worker'},
            {method: 'GET', path: '/os-client.js', purpose: 'Offline client'},
            {method: 'GET', path: '/rre-i18n.js', purpose: 'Offline translations'},
            {method: 'GET', path: '/manifest.webmanifest', purpose: 'Installation manifest'},
            {method: 'GET', path: '/icon.svg', purpose: 'Installation icon'},
            {method: 'GET', path: '/icon-512.png', purpose: 'Large installation icon'},
          ],
        },
      },
      {
        title: 'Errors, denial and state',
        list: [
          'A 2xx response means the request was accepted; 4xx responses cover authentication, permission and request validation; 5xx responses mean the platform operation failed.',
          'Permission request is not permission grant. Installation and capability discovery do not create a grant.',
          'Unknown bridge methods and unknown manifest fields are rejected rather than silently ignored.',
          'A session or UI mode alone never grants recovery, maintenance or admin rights.',
          'Do not retry a denied mutation with a different origin or a cached private response.',
        ],
        callout: {
          tone: 'important',
          title: 'Authorization stays on the server',
          text: 'Hiding a button is not authorization. Every launch, capability invocation, stream grant and admin action is checked again in Rust for the live account, installation and session.',
        },
      },
      {
        title: 'Related contracts',
        list: [
          '[Request rules and enforcement](/developers/http-api)',
          '[Build an app](/developers/build-app)',
          '[App packages and signing](/developers/app-packages)',
          '[App hosting, leases and the bridge](/developers/app-hosting)',
          '[Install, uninstall and app databases](/developers/app-resources)',
          '[Accounts and OpenID Connect](/developers/identity-oidc)',
          '[Connectors and external services](/developers/connectors)',
        ],
      },
    ],
  },
{
    slug: 'http-api',
    title: 'HTTP request rules',
    summary:
      'Session, Origin, CSRF and response rules that apply to every rumahl OS route. The API reference holds the full route catalog.',
    area: 'HTTP API',
    group: 'Reference',
    readTime: 8,
    updated: '21 November 2026',
    sections: [
      {
        title: 'Authentication and request rules',
        list: [
          'A local password login issues a fresh 12-hour __Host- session cookie.',
          'Mutating /api/v1/ requests require the exact shell Origin.',
          'The gateway rejects foreign Host headers and missing CSRF protection.',
          'Private responses are no-store and never cached by the offline worker.',
          'Rust revalidates the live account, session, installation and grants on every launch or renewal.',
        ],
        callout: {
          tone: 'note',
          title: 'Complete route catalog',
          text: 'The API reference at /developers/api groups every documented HTTP route, bridge method, OIDC endpoint and recovery boundary in one place.',
        },
      },
      {
        title: 'Route families',
        text: 'The API reference is the canonical route catalog. These families show what the gateway exposes without duplicating every path and method here.',
        table: {
          columns: ['Family', 'Representative routes'],
          rows: [
            ['Shell and session', '/api/v1/shell/snapshot, /events, /preferences, /os-mode, /workspace, /config'],
            ['Files', '/api/v1/shell/fs, /fs/content, /fs/resolve, /api/v1/files, /files/content'],
            ['Apps', '/api/v1/shell/apps, /apps/{id}/launch, /settings, /data, /runtime, /import, DELETE /apps/{id}'],
            ['App consent and network', '/apps/{id}/grants, /apps/{id}/files/content, /apps/{id}/network/consent, /apps/{id}/network/request'],
            ['Capabilities', '/api/v1/shell/capabilities/invoke'],
            ['Streams and store', '/api/v1/shell/streams, /streams/{id}/grant, /streams/{id}/{*tail}, /store/*'],
            ['Surfaces and widgets', '/api/v1/shell/widgets/{id}/frame, /surfaces/{id}/frame'],
            ['Warnings', '/api/v1/shell/warnings, /warnings/register, /warnings/publish, /warnings/clear'],
            ['Administration', '/api/v1/admin/users, /admin/sessions, /admin/audit, /admin/policies, /admin/groups'],
            ['Reporting', '/api/v1/shell/report'],
          ],
        },
        callout: {
          tone: 'note',
          title: 'Full route catalog',
          text: 'Open /developers/api for every documented method, path and purpose, including recovery and OIDC endpoints.',
        },
      },
      {
        title: 'OIDC routes',
        code: {
          language: 'text',
          content:
`GET  /.well-known/openid-configuration
GET  /oauth2/jwks
GET  /oauth2/authorize
POST /oauth2/authorize/approve
POST /oauth2/token
GET  /oauth2/userinfo`,
        },
      },
      {
        title: 'Recovery routes',
        text: 'The recovery environment is served directly by Rust and does not need the React desktop or SSR renderer. Its API covers status, audit, components, sensors, storage, disks and disk tests, diagnostics, network and network tests, logs, crashes, boot, system, quarantine, settings, host actions, restart and self-heal.',
        callout: {
          tone: 'note',
          text: 'Host power and maintenance actions require the separate rumahl-recovery.service broker, peer-UID checks and an explicit operator allowlist. A session or UI mode alone grants no maintenance rights.',
        },
      },
      {
        title: 'Offline routes',
        list: [
          '/os-client.js registers /service-worker.js with scope /.',
          'The worker caches only /offline, /offline/client.js and /offline/wallpaper.jpg.',
          'No shell document, login HTML, API response, profile, session, file or app resource is cached.',
          'Writes are never intercepted, queued or replayed.',
        ],
      },
    ],
  },
{
    slug: 'testing-release',
    title: 'Testing & release checks',
    summary:
      'The current check matrix for Rust, frontend, Storybook, HTTPS, Chromium, recovery and Buildroot acceptance.',
    area: 'Testing & release',
    group: 'Reference',
    readTime: 7,
    updated: '20 October 2026',
    sections: [
      {
        title: 'Frontend',
        code: {
          language: 'bash',
          content:
            'pnpm --dir frontend typecheck\npnpm --dir frontend lint\npnpm --dir frontend test\npnpm --dir frontend build\npnpm --dir frontend --filter @rumahl/ssr test:smoke\npnpm --dir frontend build-storybook',
        },
        text: 'Tests cover the UI kit, bridge client, shell and SSR. Storybook typechecks as part of the frontend typecheck command.',
      },
      {
        title: 'Rust',
        code: {
          language: 'bash',
          content:
            'cargo fmt --all -- --check\ncargo clippy --workspace --all-targets --locked -- -D warnings\ncargo test --workspace --locked\ncargo build --locked -p rumahl-platform-service',
        },
      },
      {
        title: 'Integration and browser checks',
        code: {
          language: 'bash',
          content:
            'python3 tests/e2e/development/check.py\npython3 tests/e2e/development/check.py --browser\npython3 tests/e2e/shell/check.py\npython3 -m unittest discover -s platform-buildroot/recovery -p "test_*.py" -v',
        },
        list: [
          'The development check uses prebuilt mode, verified HTTPS, login/SSR, origin and file boundaries, a live HMR WebSocket, changed SSR output, lock behaviour and persisted sessions.',
          'The browser check covers native form login, hydration, React state preservation and CSS hot updates.',
          'The shell check exercises the real HTTPS gateway, SQLite, two users, immutable assets, sessions, WebSocket revocation and renderer-independent recovery.',
          'Recovery unit tests leave the host untouched; power, mount and systemd behaviour still require a disposable QEMU instance.',
        ],
      },
      {
        title: 'Release acceptance',
        text: 'Process-level tests do not prove that a Buildroot image boots. Use the production HTTPS test and Buildroot acceptance documented in their READMEs before shipping an image, including a booted VM or device test.',
        callout: {
          tone: 'warning',
          title: 'Separate development from release',
          text: 'The developer server serves source code and must never be exposed as the public OS interface. Production keeps immutable bundles, strict CSP and content-derived build IDs.',
        },
      },
    ],
  }
];

export const developerQuickLinks: {label: string; slug: string}[] = [
  {label: 'API reference', slug: 'api'},
  {label: 'Build an app', slug: 'build-app'},
  {label: 'Repository guide', slug: 'repository-guide'},
  {label: 'Troubleshooting', slug: 'development-troubleshooting'},
  {label: 'Contributing', slug: 'contributing'},
  {label: 'Developer setup', slug: 'getting-started'},
  {label: 'Architecture', slug: 'architecture'},
  {label: 'App packages', slug: 'app-packages'},
  {label: 'App hosting', slug: 'app-hosting'},
  {label: 'App resources', slug: 'app-resources'},
  {label: 'Storybook', slug: 'storybook'},
  {label: 'Request rules', slug: 'http-api'},
  {label: 'Testing', slug: 'testing-release'},
];

export const developerFeatured = [
  'api',
  'build-app',
  'architecture',
  'getting-started',
];
