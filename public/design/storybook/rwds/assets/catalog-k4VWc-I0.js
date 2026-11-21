import{i as e}from"./preload-helper-Cs4UwXAW.js";import{t}from"./iframe-CMsHJqmJ.js";import{G as n,K as r,P as i,U as a,W as o,Y as s,f as c,it as ee,m as te,mt as l,o as ne,p as u,rt as re,t as ie,vt as ae,w as oe,z as d}from"./lucide-react-DdYxlqfQ.js";import{i as f,n as p,s as m}from"./knowledge-lhgwueJ7.js";var h,g,_,v=e((()=>{h=[{slug:`repository-guide`,title:`Repository guide and request flow`,summary:`Find the right module and follow an authenticated request across the frontend and Rust boundaries.`,area:`Architecture`,group:`Start`,readTime:7,updated:`20 October 2026`,featured:!1,sections:[{title:`Start from the behavior you are changing`,markdown:"Read `ARCHITECTURE.md` and `CONTRIBUTING.md` in the checkout before adding a feature. The core provides domain mechanisms. HTTP, persistence, authentication and rendering belong at their respective boundaries. First-party apps use platform contracts too; they should not gain a privileged shortcut merely because they ship with rumahl."},{title:`Repository map`,markdown:"| Location | Responsibility |\n| --- | --- |\n| `core/` | Domain mechanisms and capability/permission abstractions |\n| `platform-api/`, `platform-service/`, `platform-web/` | Platform interfaces, service composition and web boundary |\n| `persistence-sqlite/` | SQLite persistence |\n| `oidc-provider/`, `account-auth/` | Identity and account authentication |\n| `app-packages/`, `app-operations/` | Package and application operation boundaries |\n| `ui-contracts/` | Contracts consumed by the interface |\n| `frontend/` | Shell, SSR, bridge client, UI and Storybook workspaces |\n| `platform-buildroot/` | System image and OS integration |\n| `tests/e2e/` | Cross-boundary integration checks |"},{title:`Trace a request before changing it`,markdown:`Begin at the UI action or route and find the client contract it calls. Follow that contract into the web handler, authentication and authorization checks, and then the domain operation. Inspect the persistence or host-service adapter where the operation leaves the domain. Finally, follow the result back through the response or snapshot to the UI.

An interface-only change often belongs in \`frontend/\`. A new permission rule belongs at the backend authorization boundary as well as in its UI explanation. Hiding a button is not authorization.`},{title:`Keep failures explicit`,markdown:`Missing permission must deny the operation. Unknown bridge methods must not execute. Resources must remain logical references rather than host filesystem paths. A reconnect or restart must not create a new grant.

When changing a contract, check both the successful response and malformed, unknown, unauthenticated and unauthorized requests. Keep validation errors distinguishable from transport failures so the interface can explain the right next step.`},{title:`Follow-up references`,markdown:`Continue with [shell contracts](/developers/shell-contracts), [HTTP API](/developers/http-api), [app resources](/developers/app-resources) and [testing](/developers/testing-release). The repository source and tests for your revision are the reference when an evolving contract differs from this website.`}]},{slug:`development-troubleshooting`,title:`Development troubleshooting`,summary:`Resolve certificate, watcher, state-lock and remote-development issues while preserving isolation.`,area:`Getting started`,group:`Start`,readTime:7,updated:`20 October 2026`,featured:!1,sections:[{title:`Establish a baseline`,markdown:"Run the commands from the root of the rumahl repository. Check `node --version`, `pnpm --version`, `rustc --version` and `openssl version`. Use the repository Rust toolchain, pnpm 11.19.0 and Node 22.12+ or 24 with ICU support. Install frontend dependencies with `pnpm --dir frontend install --frozen-lockfile`.\n\nLinux or WSL2 is the native development environment. A source build needs the Rust toolchain; prebuilt-binary mode still needs matching frontend sources and dependencies."},{title:`Use a trusted local certificate`,markdown:"Supply an existing localhost certificate and key when that fits your setup:\n\n```bash\npnpm --dir frontend dev \\\n  --cert /absolute/path/localhost.pem \\\n  --key /absolute/path/localhost-key.pem\n```\n\nThe certificate must cover `localhost`. Generated certificates live under `.rumahl-dev/tls` and are short-lived test certificates. To rotate one, stop the server and remove only that TLS directory before restarting. Re-establish trust in the new public certificate. Preserve the account database and never publish the private key."},{title:`Handle watcher and compiler failures`,markdown:"Use `pnpm --dir frontend dev --poll --port 9443` for shared-folder notification problems. Use `--no-watch` to disable automatic Rust rebuilds while retaining frontend hot reload.\n\nThe platform process is replaced only after compilation succeeds. A broken Rust change can therefore leave the last successful binary serving requests. Fix the compiler error before assuming the UI is using your new code. Brief 503 responses during a successful platform restart are different from a persistent startup failure."},{title:`Resolve state conflicts without resetting data`,markdown:"A lock prevents two developer servers from using the same state directory. Stop the process you previously started before launching another with that state. Do not bypass the lock or remove the database to clear an error.\n\n`.rumahl-dev/server.json` records the selected origin, certificate path and development build ID. Treat it as local diagnostic state. The launcher uses private temporary sockets and keeps development databases separate from `/var/lib/rumahl`."},{title:`Connect to a Linux development host`,markdown:"Start the server on the Linux host, then forward the local port from your workstation:\n\n```bash\nssh -L 8443:127.0.0.1:8443 developer@development-host\n```\n\nOpen `https://localhost:8443` locally and trust that host’s public development certificate. The example hostname and user must be replaced with your own. Keep the development listener bound to loopback; do not add wildcard CORS or expose Vite as a public OS interface."},{title:`Verify the repaired workflow`,markdown:`After the server starts, verify login, a frontend hot update and persistence across restart. For changes to the launcher or authentication boundary, run the integration check described in [testing and release](/developers/testing-release), including its prerequisites. The fixture-only demo cannot validate authentication, real persistence or backend permissions.`}]},{slug:`contributing`,title:`Make your first contribution`,summary:`Choose a scoped change, verify it and prepare a reviewable contribution to the independent project.`,area:`Getting started`,group:`Start`,readTime:7,updated:`20 October 2026`,featured:!1,sections:[{title:`Contributions beyond code`,markdown:"A useful contribution can clarify an installation step, reproduce a bug, improve a test or explain an accessibility problem. Start with a concrete observation and include the revision you tested. For a large architectural change, discuss the proposed behavior before implementing it.\n\nRead the repository `CONTRIBUTING.md`, `AI_POLICY.md` and architecture documentation. Maintainers review contributions as project work; no commercial support or review deadline is implied."},{title:`Prepare a small branch`,markdown:"Use a fork or a checkout you can push to. From the rumahl repository, create a branch for one change:\n\n```bash\ngit switch -c docs/clarify-local-setup\n```\n\nUse the appropriate typed prefix, such as `fix/`, `feat/`, `docs/` or `test/`. Keep generated output, local credentials and `.rumahl-dev` out of the diff. Artwork belongs in the assets repository under its own licensing rules."},{title:`Document the observable result`,markdown:`For a bug fix, write down the trigger, expected behavior and current result. Add a regression test at the boundary that failed. For documentation, execute the relevant instructions and verify links. Mark proposed APIs as proposed rather than inventing an implementation.

For a permission change, cover both the authorized operation and denial. Consider reconnects, restarts and malformed requests. A positive-path screenshot alone cannot demonstrate an authorization boundary.`},{title:`Run checks for the affected area`,markdown:`For frontend changes:

\`\`\`bash
pnpm --dir frontend typecheck
pnpm --dir frontend lint
pnpm --dir frontend test
pnpm --dir frontend build
\`\`\`

For Rust changes:

\`\`\`bash
cargo fmt --all -- --check
cargo clippy --workspace --all-targets --locked -- -D warnings
cargo test --workspace --locked
\`\`\`

Use the additional integration and image checks in [testing and release](/developers/testing-release) when the change crosses those boundaries. State any check you could not run and why.`},{title:`Prepare the review`,markdown:"Inspect `git diff` and `git status` before committing. The project uses Conventional Commits and requires a Developer Certificate of Origin sign-off on every commit (`git commit -s`). Sign off only changes you are entitled to contribute.\n\nA pull request should describe the problem, the resulting behavior and validation. Include reproduction steps for a fix and screenshots when a visual change needs them. Link the related issue and explain any remaining limitations. Do not include account credentials or private log data."},{title:`Keep documentation close to behavior`,markdown:`When a contract changes, update the relevant repository guide, example and test together. Website guides should state which behavior exists and which is planned. Small corrections that make a guide reproducible are valuable contributions in their own right.

Use [private reporting](/security) for security vulnerabilities rather than disclosing them in a public issue or pull request.`}]},{slug:`getting-started`,title:`Developer setup`,summary:`Run the real Rust platform, SQLite accounts, SSR and Vite behind one local HTTPS origin — without Docker or root access.`,area:`Getting started`,group:`Start`,readTime:8,updated:`20 October 2026`,featured:!0,sections:[{title:`Prepare your checkout`,code:{language:`bash`,content:`git clone https://github.com/rumahl/rumahl.git
cd rumahl`},markdown:"All commands below run from the rumahl repository root. Read `CONTRIBUTING.md` and `ARCHITECTURE.md` at your checked-out revision. The [repository guide](/developers/repository-guide) explains the module boundaries; [development troubleshooting](/developers/development-troubleshooting) covers TLS, watchers and state locks."},{title:`What you need`,text:`Native full-stack development runs on Linux or WSL2. The development server uses the real platform, the local account database and the React shell; it is not a fixture-only mock.`,list:[`The repository Rust toolchain`,`Node 22.12+ or Node 24, with ICU/Intl support`,`pnpm 11.19.0`,`OpenSSL`,`No Docker, nginx, root access or global watch utility`]},{title:`Start the developer server`,code:{language:`bash`,content:`pnpm --dir frontend install --frozen-lockfile
pnpm --dir frontend dev`},text:`Open https://localhost:8443. React components use Fast Refresh, CSS updates in place, and Rust changes trigger an incremental rebuild followed by a platform restart.`},{title:`First login`,steps:[`On first start the server creates an isolated developer account with a random password.`,`Read the credentials from .rumahl-dev/credentials.json (owner-only permissions).`,`Trust the generated public certificate in a dedicated development browser profile.`,`Sign in. Accounts and sessions survive restarts.`],callout:{tone:`warning`,title:`Do not skip certificate trust`,text:`Continuing past a certificate warning can load the login page while Chromium rejects the service worker and WebSocket hot reload. Trust the generated certificate or pass your own localhost certificate with --cert and --key.`}},{title:`Daily workflow`,list:[`Shell components and CSS: Vite hot update with React Fast Refresh where possible.`,`Shared contracts or non-component client modules: the page may reload; Rust remains authoritative.`,`SSR source: the next request loads the changed module.`,`Rust files or Cargo manifests: debounced incremental build, then a process replacement after a successful compile.`,`Launcher or Vite configuration: restart the developer command.`],code:{language:`bash`,content:`pnpm --dir frontend dev --poll --port 9443
pnpm --dir frontend dev --no-watch`}},{title:`Development boundaries`,text:`.rumahl-dev/ is Git-ignored. The server creates a separate developer state directory, keeps sockets in a private temporary directory and binds only to 127.0.0.1. It never uses the installed system state at /var/lib/rumahl.`,list:[`Same SSR render function and request bounds as production.`,`Strict production CSP and CSRF checks remain active.`,`No unauthenticated development API performs privileged actions.`,`The fixture-only demo is available with pnpm --dir frontend dev:demo, but is not a substitute for the full-stack server.`]},{title:`Checks`,code:{language:`bash`,content:`pnpm --dir frontend typecheck
pnpm --dir frontend lint
pnpm --dir frontend test
pnpm --dir frontend build
cargo build --locked -p rumahl-platform-service
python3 tests/e2e/development/check.py`}}]},{slug:`architecture`,title:`Architecture`,summary:`The current repository boundaries, platform invariants and the path from the React shell to the Rust domain core.`,area:`Architecture`,group:`Start`,readTime:9,updated:`20 October 2026`,featured:!0,sections:[{title:`Platform invariants`,list:[`Core provides mechanisms, not products, and contains no app-specific behavior.`,`Apps never communicate directly with other apps.`,`Apps depend on capabilities, not concrete providers.`,`Permission request is not permission grant; capability is not contribution.`,`Every operation has an identity.`,`Resources are logical references, never host paths.`,`First-party and third-party apps use the same platform contracts.`,`Privileged OS operations run in isolated services.`,`Transport, persistence, authentication and UI concerns stay outside the domain core.`]},{title:`System overview`,code:{language:`text`,content:`Frontend / OS shell
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
                 core/`}},{title:`Source map`,table:{columns:[`Path`,`Responsibility`],rows:[[`core/`,`Domain concepts, policies and platform invariants`],[`platform-api/`,`Stable contracts without implementation leakage`],[`platform-service/`,`Composition of core, auth, persistence and app operations`],[`platform-web/`,`HTTP, HTTPS gateway, shell snapshot, apps and OIDC adapter`],[`app-packages/`,`Signed package manifest, verification, import and CLI`],[`app-operations/`,`Durable install/uninstall journal across providers`],[`account-auth/ · oidc-provider/`,`Local accounts and OpenID Connect`],[`persistence-sqlite/`,`SQLite snapshots, accounts, operations, databases and secrets`],[`frontend/`,`React shell, SSR, bridge client, UI kit and Storybook`],[`ui-contracts/`,`Engine-neutral snapshot, theme and extension contracts`],[`platform-buildroot/`,`System image and service integration`]]}},{title:`Boundaries`,text:`Dependencies point toward the domain core. Infrastructure implements platform concepts with SQLite, HTTP, OAuth/OIDC or host services; those details must not leak into core types.`,list:[`UI and transport call platform services.`,`Platform services orchestrate domain rules and infrastructure.`,`Core defines identity, permissions, resources and lifecycle rules.`,`Buildroot is an implementation detail of the image, not the application-facing API.`]},{title:`Identity and accounts`,text:`rust OS supports multiple local user accounts. Account selection and session state are explicit, and changing the active desktop account must not silently change an existing app or OAuth session. rumahl OS is also its own standards-compliant OpenID Provider for installed applications.`},{title:`Detailed documentation`,text:`The repository keeps subsystem documents under docs/architecture/. The developer docs here mirror the current implementation and call out deferred work explicitly.`,list:[`Account and OpenID Connect`,`App databases, hosting and resource operations`,`Buildroot acceptance and migration`,`Filesystem layout, injection safety and secret store`,`Shell preferences and routing`,`Storage and updates`,`Offline behaviour`]}]},{slug:`app-packages`,title:`App packages & manifest`,summary:`The signed directory package, the package.json manifest, runtime kinds, capabilities, permissions, connectors and the signing CLI.`,area:`Apps & packages`,group:`Platform`,readTime:10,updated:`20 October 2026`,featured:!0,sections:[{title:`Package boundary`,text:`An app is a signed directory package. A detached Ed25519 signature covers the exact manifest bytes, and every payload file is authenticated by SHA-256. The importer publishes verified web assets or stages a container image reference; it never trusts manifest paths or host directories.`,list:[`Manifest filename: package.json`,`Manifest limit: 1 MiB`,`Payload limit: 2,048 files, 64 MiB per file, 256 MiB total`,`Unknown manifest fields are rejected`]},{title:`Manifest example`,code:{language:`json`,content:`{
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
}`}},{title:`Runtime kinds`,table:{columns:[`Kind`,`Entrypoint`,`Current behaviour`],rows:[[`web`,`web-asset`,`Published under the installation asset root and hosted in a sandboxed iframe`],[`container`,`container-artifact`,`Staged through the runtime supervisor; lifecycle on-demand or always-on`],[`native`,`endpoint`,`Defined in core, native runtime trust policy is not enabled yet`]]}},{title:`Permissions and capabilities`,text:`A permission request declares what the app needs; the platform decides whether to grant it. A capability is a named operation an app provides to other apps. Requesting a capability is not a grant, and providing one is not the same as contributing UI.`,table:{columns:[`Field`,`Meaning`],rows:[[`permissions[].id`,`Validated permission identifier`],[`permissions[].scope`,`app-private, user-own, user-selected, explicit, family-shared or system`],[`permissions[].required`,`Whether installation can continue without it`],[`providedCapabilities[]`,`Capabilities this app can serve through the bridge`],[`connectors[]`,`External service target plus a container-artifact entrypoint`]]}},{title:`Connectors in the manifest`,text:`A connector bundle targets an external service such as nextcloud or plex. The OS installs the bundle and registers the app as an OIDC relying party for that service. The broader open connector specification for arbitrary NAS and smart-home providers is product direction, not a frozen public API yet.`,code:{language:`json`,content:`"connectors": [
  { "target": "nextcloud", "entrypoint": "main" }
]`}},{title:`Sign and verify`,code:{language:`bash`,content:`cargo run -p rumahl-app-packages --bin rumahl-package -- keygen \\
  --key-id example-1 \\
  --publisher com.example \\
  --keystore keys/example.json

cargo run -p rumahl-app-packages --bin rumahl-package -- sign \\
  --package dist/notes \\
  --manifest dist/notes/package.json \\
  --keystore keys/example.json

cargo run -p rumahl-app-packages --bin rumahl-package -- verify \\
  --package dist/notes \\
  --trust-store trust.json`}}]},{slug:`app-hosting`,title:`App hosting & bridge`,summary:`Authorized catalog and launch, isolated app origins, short-lived leases, the iframe bridge, runtime control and persistent channels.`,area:`Apps & packages`,group:`Platform`,readTime:9,updated:`20 October 2026`,sections:[{title:`Catalog and launch authority`,text:`Installed apps are not trusted shell code. Rust returns a session-filtered catalog, and a launch is authorized again for the live account, installation and grants.`,table:{columns:[`Route`,`Purpose`],rows:[[`GET /api/v1/shell/apps`,`Bounded, session-filtered app catalog`],[`POST /api/v1/shell/apps/:id/launch`,`Authorize and return a frame URL plus short-lived lease`],[`GET/POST /api/v1/shell/apps/:id/runtime`,`Read or change runtime state`],[`POST /api/v1/shell/apps/import`,`Import a verified package`],[`POST /api/v1/shell/capabilities/invoke`,`Invoke a capability through the platform`]]}},{title:`Isolation`,list:[`Each installation uses <installation-uuid>.<RUMAHL_APP_HOST_SUFFIX>, normally apps.<shell-host>.`,`Assets are served under /launch/<256-bit-random-lease>/<manifest-path>.`,`A lease is bound to one session and installation, expires after 90 seconds without renewal and lives in memory only.`,`The iframe uses sandbox="allow-scripts" without allow-same-origin.`,`App hosts never route to shell APIs and strip cookies and Authorization.`,`Apps receive no shell session token or broad platform bearer credential.`]},{title:`Bridge protocol`,text:`Installed apps reach the shell only through window.postMessage using rumahl.bridge.v1. The channel is bound to the frame contentWindow; event.origin is "null" for a sandboxed app.`,table:{columns:[`Method`,`Purpose`],rows:[[`os.info`,`Bounded shell and app information`],[`os.theme.get / os.theme.changed`,`Read and follow the semantic OS palette`],[`os.notification`,`Send a user notification`],[`os.window.*`,`Close, minimize or focus the app window`],[`os.capabilities.invoke`,`Invoke another installed app’s declared capability`]]}},{title:`Capabilities and channels`,text:`The capability registry is derived from installed apps, and every existing account is granted each provided capability at install. A web provider is reached through its frame; an always-on service can connect over the persistent rumahl.channel.v1 loopback channel with a hello/token handshake.`,list:[`Capability providers register handlers with rumahl.provide(capability, handler).`,`Deliveries wait for the bridge handshake so provider registration is not raced.`,`Theme changes are pushed to apps and streamed services as --rumahl-* variables.`,`Standalone services can be embedded through the same-origin stream proxy under /api/v1/shell/streams/{id}/.`]},{title:`Publication boundary`,text:`Only Web runtimes with a main web-asset entrypoint are launchable in this slice. Assets must be published under $RUMAHL_STATE_DIR/app-assets/<installation-uuid>/<manifest-path> and must contain public assets only.`,callout:{tone:`warning`,text:`Container web proxies, OIDC app login, networked app backends and a general action bridge need separate authorization contracts. The host does not silently grant them.`}}]},{slug:`app-resources`,title:`Install, uninstall & databases`,summary:`How the durable operation journal coordinates app databases, runtime preparation, OIDC registration, secrets and the platform snapshot.`,area:`Apps & packages`,group:`Platform`,readTime:8,updated:`20 October 2026`,sections:[{title:`Why a journal`,text:`Installing an app crosses several persistence boundaries that cannot share one transaction: the platform snapshot, optional app databases, runtime preparation and activation, and optional OIDC registration and secret delivery. rumahl records ordered steps and can resume or compensate after a crash.`},{title:`Install order`,code:{language:`text`,content:`optional app databases
prepare runtime instance and secret namespace
optional OIDC client registration
activate runtime instance
store platform snapshot`},text:`The platform snapshot is always last, so live state cannot advertise resources whose provider step has not completed. App code cannot start before its declared runtime secrets exist.`},{title:`Uninstall order`,code:{language:`text`,content:`stop runtime
remove runtime secrets
revoke OIDC client
remove prepared runtime
retain app databases
store removed platform snapshot`},text:`An interrupted uninstall resumes forward. Databases are retained in inaccessible storage; physical deletion is a separate explicit purge policy that is not implemented yet.`},{title:`Crash-visible states`,table:{columns:[`Phase`,`Meaning`],rows:[[`pending`,`Not started`],[`applying`,`Provider call may have happened; ambiguous after a crash`],[`applied`,`Provider confirmed success`],[`compensation-pending`,`Must be reversed`],[`compensating`,`Reverse call in progress`],[`compensated`,`Reverse call confirmed`]]}},{title:`App databases`,text:`Databases are optional and declared by logical names only. The host path, engine, credentials and connection details belong to the provider, never the manifest.`,list:[`Each active database is addressed by (InstallationId, AppDatabaseId).`,`An app can declare at most eight databases.`,`SQLite is the first local provider; PostgreSQL and native delivery remain separate adapters.`,`A new installation never inherits an old installation’s database.`]},{title:`Current status`,callout:{tone:`note`,title:`Update execution is not connected yet`,text:`Install, uninstall, compensation and restart recovery are implemented. Update execution still needs version validation, database backup/migration, health checks and rollback policy.`}}]},{slug:`identity-oidc`,title:`Accounts & OpenID Connect`,summary:`Local accounts, the rumahl OpenID Provider, Authorization Code with PKCE, OIDC clients, pairwise subjects and current limits.`,area:`Identity & security`,group:`Platform`,readTime:8,updated:`20 October 2026`,featured:!0,sections:[{title:`Local accounts`,text:`rumahl OS supports multiple local accounts. Passwords are stored as Argon2id PHC verifiers with transactional retry state and lockout. A password change revokes live account sessions and their opaque transport credentials in the same transaction.`},{title:`The OpenID Provider`,text:`rumahl OS is its own standards-compliant OpenID Provider. Only apps already present in PlatformState can be registered. The signed manifest declares a logical entrypoint, callback path, client type and requested scopes; a platform-owned resolver supplies the actual HTTPS origin.`,table:{columns:[`Route`,`Purpose`],rows:[[`/.well-known/openid-configuration`,`Discovery document`],[`/oauth2/jwks`,`Public signing keys`],[`/oauth2/authorize`,`Authorization request`],[`/oauth2/authorize/approve`,`Consent submission`],[`/oauth2/token`,`Authorization code exchange`],[`/oauth2/userinfo`,`UserInfo endpoint`]]}},{title:`Flow rules`,list:[`Authorization Code with mandatory PKCE S256.`,`Exact redirect matching; no wildcard callback.`,`ID tokens are signed with EdDSA.`,`Static web apps are public clients and receive no secret.`,`Container apps are confidential clients; the random 256-bit secret is encrypted and only its SHA-256 digest is stored with the client.`,`Pairwise subjects keep users separate across clients.`,`offline_access is currently rejected until refresh-token families can be issued and rotated atomically.`]},{title:`Registration is a journal participant`,text:`The recovery-safe registrar is the only registration path. It participates in the app operation journal, delivers a recovered confidential secret through an idempotent runtime channel, and publishes staged platform state only after the snapshot and journal commit.`},{title:`Nextcloud acceptance`,text:`The repository contains a Nextcloud OIDC end-to-end harness under tests/e2e/nextcloud. It covers two local users, pairwise subjects, restart persistence, revocation and the real container login sequence. The sequence remains to be executed as part of release acceptance.`}]},{slug:`secrets`,title:`Secrets & runtime delivery`,summary:`Installation-bound secrets, AES-256-GCM, TPM-sealed keys, idempotent OIDC delivery and the no-plaintext boundary.`,area:`Identity & security`,group:`Platform`,readTime:7,updated:`20 October 2026`,sections:[{title:`Boundary`,text:`Secrets live separately from the platform snapshot, app manifest, operation journal and normal app storage. Each record is bound to a complete AppIdentity and a validated namespaced purpose.`},{title:`Encryption`,list:[`Every value is encrypted independently with AES-256-GCM and a random 96-bit nonce.`,`Authenticated data includes format version, secret ID, app identity, purpose, key ID and creation timestamp.`,`SQLite stores metadata, key ID, nonce and ciphertext — never the root key.`,`The 256-bit root key comes from a SecretEncryptionKeyProvider.`,`Tpm2UnsealKeyProvider invokes a fixed absolute tpm2_unseal executable without a shell and accepts exactly 32 bytes.`,`Missing keys and authentication failures fail closed.`]},{title:`Delivery`,text:`Confidential OIDC clients are registered by storing the generated secret, persisting only its digest, verifying declaration-derived metadata on replay, and delivering the same value through the privileged runtime channel before the journal step becomes applied.`,code:{language:`text`,content:`operation + installation + client identity
        │
        ▼
decrypt stored OIDC secret
        │
        ▼
Unix peer-credential authenticated delivery
        │
        ▼
installation namespace read-only secret mount`}},{title:`Non-negotiables`,list:[`No secret in the manifest, platform snapshot, React bundle, command line or environment variables.`,`No secret in logs or error messages.`,`Runtime adapters must acknowledge an identical replay and reject changed material.`,`Update-time credential rotation and its rollback policy remain open work.`]}]},{slug:`storage-updates`,title:`Storage, updates & backups`,summary:`Separate data volumes, the private state volume, schema versioning, consistent backups and the current A/B update boundary.`,area:`Operations`,group:`Platform`,readTime:7,updated:`20 October 2026`,sections:[{title:`Volumes`,table:{columns:[`Volume`,`Mount`,`Contents`,`Lifecycle`],rows:[[`System slot A/B`,`/ (read-only), /rumahl`,`OS and rumahl services`,`Replaced by an update`],[`home`,`/home`,`User data`,`Persistent, backed up`],[`apps`,`/apps`,`Installed apps and assets`,`Persistent, backed up`],[`state`,`/var/lib/rumahl`,`Databases and secrets`,`Persistent, private, backed up`]]}},{title:`The state volume is private`,text:`The state volume is never mounted, symlinked or bind-mounted into a user- or app-visible path. Only the platform service mounts it, owner-only (0700). The path/grant policy denies every access and apps never receive a handle into it.`},{title:`Schema safety`,list:[`Every database records its schema version in PRAGMA user_version.`,`Startup stamps a fresh database and refuses one written by a newer binary.`,`A newer slot migrates in a transaction and bumps the version.`,`An older slot refuses to start instead of corrupting shared state.`,`Before a slot switch, the service checkpoints WAL and fsyncs.`,`Backups use the SQLite online backup API, never a live file copy.`]},{title:`Update boundary`,text:`Data safety and slot execution are deliberately split. The volumes are already separate, schema versions are enforced, and consistent snapshots are implemented. The inactive-slot writer, signature verification, boot artifact, rollback policy and update activation are still deferred.`,callout:{tone:`warning`,title:`Do not document updates as complete`,text:`Signed updates and boot verification are separate milestones. The current contract only guarantees that update execution must never touch data volumes and must take a backup before the first migration in a new slot.`}}]},{slug:`shell-contracts`,title:`Shell, routing & UI contracts`,summary:`One URL, two presentations, the first-party route registry, installed app hosting and the engine-neutral ui-contracts boundary.`,area:`Shell & UI`,group:`Frontend`,readTime:8,updated:`20 October 2026`,sections:[{title:`One address, two presentations`,table:{columns:[`URL`,`Meaning`],rows:[[`/`,`Desktop dashboard or app grid in launcher mode`],[`/apps`,`First-party apps and authorized installed-app catalog`],[`/app/:appId/*`,`App identifier and an app-owned nested route`],[`/settings/*`,`Settings modules and nested pages`],[`/settings/display`,`Presentation controls`],[`/recovery`,`Standalone Rust recovery environment`]]},text:`Desktop or launcher is a persisted preference, not a route parameter. Reload and Back/Forward preserve the route; login returns to a validated deep link.`},{title:`Route ownership`,list:[`App.tsx owns the live snapshot/session boundary, locale provider, router and shell.`,`routing/routes.tsx is the first-party route table with navigation, title and window metadata.`,`apps/registry.tsx registers trusted first-party app declarations and nested routes.`,`Third-party manifests cannot register React components in this table.`,`Installed apps are consumed through the Rust catalog and hosted in an isolated frame.`,`Unknown apps and nested pages get explicit unavailable/not-found views.`]},{title:`UI contracts`,text:`ui-contracts is the engine-neutral compatibility boundary between the authoritative Rust platform and replaceable shell renderers. It contains no React, Node.js, HTTP, database, runtime-engine or privileged platform integration.`,list:[`Strict ShellSnapshot parsing with explicit snapshot, UI and extension API versions`,`Declarative theme manifests with an allowlisted token and variant set`,`Deterministic CSS compilation from validated values`,`Command, search-provider and reserved dashboard-widget projections`,`Checked-in JSON schemas, TypeScript bindings and compatibility fixtures`]},{title:`Preferences`,text:`Shell mode and device preferences are synchronized through versioned APIs. Account-wide settings follow the same account on other browser profiles; a device override takes priority and can be removed. Rust persists authoritative values; clients use Local Storage with Session Storage fallback and surface stale-write conflicts.`}]},{slug:`http-api`,title:`HTTP API surface`,summary:`The actual shell, app, stream, preferences, OIDC and recovery routes — with session, Origin and capability enforcement.`,area:`Reference`,group:`Reference`,readTime:8,updated:`20 October 2026`,sections:[{title:`Authentication and request rules`,list:[`A local password login issues a fresh 12-hour __Host- session cookie.`,`Mutating /api/v1/ requests require the exact shell Origin.`,`The gateway rejects foreign Host headers and missing CSRF protection.`,`Private responses are no-store and never cached by the offline worker.`,`Rust revalidates the live account, session, installation and grants on every launch or renewal.`]},{title:`Shell and app routes`,table:{columns:[`Group`,`Routes`],rows:[[`Shell`,`/api/v1/shell/snapshot, /api/v1/shell/events`],[`Apps`,`/api/v1/shell/apps, /apps/:id/launch, /settings, /data, /runtime, /import`],[`Capabilities`,`/api/v1/shell/capabilities/invoke`],[`Streams`,`/api/v1/shell/streams, /streams/:id/grant, /streams/:id/*`],[`Workspace`,`/api/v1/shell/workspace, /fs, /fs/content`],[`Preferences`,`/api/v1/shell/preferences, /os-mode`],[`Widgets`,`/api/v1/shell/widgets/:id/frame`],[`Reporting`,`/api/v1/shell/report`]]}},{title:`OIDC routes`,code:{language:`text`,content:`GET  /.well-known/openid-configuration
GET  /oauth2/jwks
GET  /oauth2/authorize
POST /oauth2/authorize/approve
POST /oauth2/token
GET  /oauth2/userinfo`}},{title:`Recovery routes`,text:`The recovery environment is served directly by Rust and does not need the React desktop or SSR renderer. Its API covers status, audit, components, sensors, storage, disks and disk tests, diagnostics, network and network tests, logs, crashes, boot, system, quarantine, settings, host actions, restart and self-heal.`,callout:{tone:`note`,text:`Host power and maintenance actions require the separate rumahl-recovery.service broker, peer-UID checks and an explicit operator allowlist. A session or UI mode alone grants no maintenance rights.`}},{title:`Offline routes`,list:[`/os-client.js registers /service-worker.js with scope /.`,`The worker caches only /offline, /offline/client.js and /offline/wallpaper.jpg.`,`No shell document, login HTML, API response, profile, session, file or app resource is cached.`,`Writes are never intercepted, queued or replayed.`]}]},{slug:`storybook`,title:`Storybook & design system`,summary:`Run and extend the living reference for rumahl UI (RUI): stories, foundations, patterns, layouts, theming, accessibility and quality checks. RUI is not the website design system.`,area:`Shell & UI`,group:`Frontend`,readTime:9,updated:`20 October 2026`,featured:!0,sections:[{title:`RUI, not RWDS`,callout:{tone:`important`,title:`Two design systems`,text:`This Storybook documents rumahl UI (RUI) for the OS shell and apps. The website uses the separate rumahl Web Design System (RWDS). Do not confuse the two or import one into the other.`},text:`The public design documentation lives at /design: RWDS describes the web system, RUI describes the OS system, and /design/systems explains the boundary.`,list:[`RWDS: website tokens, editorial layout, docs and marketing surfaces`,`RUI: OS shell components, windows, controls, materials and themes`,`Storybook: the living component reference for RUI only`]},{title:`Run Storybook`,text:`Storybook lives in its own workspace package so it can be extracted together with @rumahl/ui. The root frontend scripts proxy to it.`,code:{language:`bash`,content:`pnpm --dir frontend install --frozen-lockfile
pnpm --dir frontend storybook
# http://localhost:6006

pnpm --dir frontend build-storybook`}},{title:`What it contains`,list:[`Design documentation and the component catalog in MDX`,`Foundations: colour, typography, shape, spacing, elevation, motion, icons and accessibility`,`Components with autodocs generated from component JSDoc and props`,`Hooks, patterns, layouts and app-level surfaces`,`Guides for getting started, architecture, theming, overrides, quality and contributing`],text:`Component stories live next to their implementation under frontend/packages/ui/src/components. Cross-cutting documentation lives in frontend/packages/storybook/stories. For the separate design-system overview, open /design.`},{title:`Theming`,text:`A theme is data, not code: tokens plus optional CSS and safe slot templates. The shell projects tokens onto the document root as --rumahl-ui-* custom properties, so a theme restyles the whole OS without touching component code.`,code:{language:`ts`,content:`import { defineTheme, registerTheme } from "@rumahl/ui/sdk";

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
}));`},list:[`color.* — accent, surfaces, text, canvas, panel, outline, shadow`,`material.* — blur, saturation, opacity and glass strength`,`shape.* — radii and icon sizes`,`motion.* — durations and easing`,`typography.* — UI and display faces, scale`,`layout.*, texture.wallpaper, icon.gradient`]},{title:`Story conventions`,list:[`One Name.stories.tsx per component module, title Components/Name.`,`Lead JSDoc on the component feeds autodocs.`,`Cover default, variants, sizes, hover/focus/disabled/loading, edge cases, floating and glass={false}.`,`Prefer native elements and accessible names.`,`Associate errors with aria-describedby and aria-invalid.`,`No hard-coded colours or radii in component CSS — use tokens.`]},{title:`Quality checks`,code:{language:`bash`,content:`pnpm --dir frontend typecheck
pnpm --dir frontend lint
pnpm --dir frontend test
pnpm --dir frontend build-storybook`},text:`The a11y addon is installed and violations are treated as errors in autodocs and tests. Visual regression and bundle budgets are configurable extensions, not part of the current required pipeline.`},{title:`Public surface`,text:`@rumahl/ui (tokens, themes, sdk, materials) and @rumahl/ui/components are the public surface. Token IDs, component props and event shapes follow semver: add, deprecate, then remove.`}]},{slug:`connectors`,title:`Connectors & external services`,summary:`What connectors implement today, how external services are embedded, and which parts of the open integration specification are still direction.`,area:`Architecture`,group:`Platform`,readTime:7,updated:`20 October 2026`,sections:[{title:`Current implementation`,text:`An app manifest can declare a connector target and a container-artifact entrypoint. The OS installs the bundle into the external service, registers the app as an OIDC relying party for it, and lets the connector reach the OS over the persistent channel.`,list:[`Connector targets are validated lowercase service identifiers such as nextcloud or plex.`,`The connector bundle is an entrypoint of the same signed app package.`,`OIDC registration uses the same recoverable journal participant as other app resources.`,`Standalone services can be embedded through the same-origin stream proxy and follow the OS theme.`]},{title:`What is not public yet`,callout:{tone:`important`,title:`No frozen universal connector API`,text:`The Connected / Enhanced / Native integration model and a public connector specification for arbitrary NAS, cloud and smart-home systems are product direction. Do not build against a hypothetical universal endpoint; use the current app package, capabilities and OIDC contracts.`}},{title:`Capabilities today`,text:`Capabilities are declared by installed apps and invoked through the shell bridge. A provider app registers a handler with rumahl.provide(capability, handler); the platform authorizes the caller, the installation and the current account before delivery.`,table:{columns:[`Concept`,`Current implementation`],rows:[[`Provider`,`Installed app that provides a capability`],[`Consumer`,`Installed app or shell action invoking it`],[`Grant`,`Platform authorization for the caller and installation`],[`Transport`,`Bridge frame for web apps, persistent channel for always-on services`],[`Audit`,`Platform boundary, live identity and fail-closed authorization`]]}},{title:`Next contracts`,list:[`A public connector specification with versioning and compatibility rules`,`Explicit capability namespaces for storage, smart home and system services`,`External installations that expose capabilities without being replaced`,`Native lifecycle management and maintained upstream builds`,`A permission and identity model that never infers access from installation level`]}]},{slug:`testing-release`,title:`Testing & release checks`,summary:`The current check matrix for Rust, frontend, Storybook, HTTPS, Chromium, recovery and Buildroot acceptance.`,area:`Reference`,group:`Reference`,readTime:7,updated:`20 October 2026`,sections:[{title:`Frontend`,code:{language:`bash`,content:`pnpm --dir frontend typecheck
pnpm --dir frontend lint
pnpm --dir frontend test
pnpm --dir frontend build
pnpm --dir frontend --filter @rumahl/ssr test:smoke
pnpm --dir frontend build-storybook`},text:`Tests cover the UI kit, bridge client, shell and SSR. Storybook typechecks as part of the frontend typecheck command.`},{title:`Rust`,code:{language:`bash`,content:`cargo fmt --all -- --check
cargo clippy --workspace --all-targets --locked -- -D warnings
cargo test --workspace --locked
cargo build --locked -p rumahl-platform-service`}},{title:`Integration and browser checks`,code:{language:`bash`,content:`python3 tests/e2e/development/check.py
python3 tests/e2e/development/check.py --browser
python3 tests/e2e/shell/check.py
python3 -m unittest discover -s platform-buildroot/recovery -p "test_*.py" -v`},list:[`The development check uses prebuilt mode, verified HTTPS, login/SSR, origin and file boundaries, a live HMR WebSocket, changed SSR output, lock behaviour and persisted sessions.`,`The browser check covers native form login, hydration, React state preservation and CSS hot updates.`,`The shell check exercises the real HTTPS gateway, SQLite, two users, immutable assets, sessions, WebSocket revocation and renderer-independent recovery.`,`Recovery unit tests leave the host untouched; power, mount and systemd behaviour still require a disposable QEMU instance.`]},{title:`Release acceptance`,text:`Process-level tests do not prove that a Buildroot image boots. Use the production HTTPS test and Buildroot acceptance documented in their READMEs before shipping an image, including a booted VM or device test.`,callout:{tone:`warning`,title:`Separate development from release`,text:`The developer server serves source code and must never be exposed as the public OS interface. Production keeps immutable bundles, strict CSP and content-derived build IDs.`}}]}],g=[{label:`Repository guide`,slug:`repository-guide`},{label:`Troubleshooting`,slug:`development-troubleshooting`},{label:`Contributing`,slug:`contributing`},{label:`Developer setup`,slug:`getting-started`},{label:`Architecture`,slug:`architecture`},{label:`App packages`,slug:`app-packages`},{label:`App hosting`,slug:`app-hosting`},{label:`App resources`,slug:`app-resources`},{label:`Storybook`,slug:`storybook`},{label:`HTTP API`,slug:`http-api`},{label:`Testing`,slug:`testing-release`}],_=[`getting-started`,`architecture`,`app-packages`,`contributing`]})),y,b=e((()=>{y=[{slug:`overview`,title:`Design systems overview`,summary:`What the rumahl design documentation covers, how RWDS and RUI relate, and which system applies to a given surface.`,area:`Overview`,group:`Start here`,readTime:4,updated:`20 October 2026`,featured:!0,sections:[{title:`Two systems`,text:`rumahl has two design systems. They share brand and accessibility constraints, but they are separate implementations with separate tokens, components and release cycles. The design site switches between Overview, Web · RWDS and OS · RUI in the header. Each system has its own overview and component explorer; shared pages cover docs, Storybook, comparison and resources.`,table:{columns:[`System`,`Surface`,`Reference`],rows:[[`RWDS — rumahl Web Design System`,`Websites, documentation, help, editorial content`,`/design/rwds`],[`RUI — rumahl UI`,`rumahl OS shell and installed apps`,`/design/rui`]]}},{title:`Which system applies?`,list:[`A page, article, documentation entry or campaign uses RWDS.`,`A shell, window, settings page, control or app surface uses RUI.`,`A shared brand decision affects both and must be evaluated as a cross-system change.`,`A component that seems to fit both surfaces is usually two components with a shared brand token.`]},{title:`RUI is not a website system`,text:`RUI is built for the operating-system shell. Its density, window chrome, materials and interaction model assume an OS surface. Using RUI on a website is not meaningful, even where a component can technically render in a browser. Conversely, RWDS is not an OS kit.`,callout:{tone:`important`,title:`Rendering is not fit`,text:`A component can display in a browser and still be wrong for the surface. Choose the system by focus, density and semantics, not by whether it renders.`}},{title:`What this documentation contains`,text:`The design docs cover tokens, components, theming, adoption, versioning and contribution. Storybook is the canonical component reference for RUI. RWDS is documented in these pages and has its own Storybook for web components.`,list:[`RWDS tokens and components`,`RUI scope, tokens, materials and theming`,`Adoption and versioning notes`,`Contribution rules and the boundary between the systems`]},{title:`Related documentation`,list:[`Storybook: /design/storybook`,`Comparison and boundary rules: /design/systems`,`Source and tooling: /design/resources`,`Platform developer documentation: /developers`]}]},{slug:`versioning`,title:`Versioning & compatibility`,summary:`How RWDS and RUI evolve, what counts as a breaking change and why the two systems are not versioned as one package.`,area:`Overview`,group:`Start here`,readTime:4,updated:`20 October 2026`,sections:[{title:`Separate release surfaces`,text:`RWDS follows the website and its content. RUI follows the OS frontend and the @rumahl/ui package. A release of one system does not imply a release of the other.`},{title:`Compatibility rules`,list:[`Token roles and component props are treated as contracts.`,`New tokens, variants and props are additive within a major version.`,`Removing or redefining a public token or prop is a breaking change.`,`RUI component props and theme token IDs follow semver.`,`RWDS theme roles must keep their semantic meaning across website releases.`,`Deprecate first, then remove in a new major version.`]},{title:`Storybook and fixtures`,text:`RUI keeps component stories and tests next to the components. RWDS keeps web stories in its own Storybook. Both should be updated together with the implementation they document.`},{title:`No combined package`,callout:{tone:`important`,title:`Do not collapse the systems`,text:`RWDS and RUI may share a brand palette, but they are not a single versioned package. Importing one into the other creates accidental compatibility promises.`}}]},{slug:`rwds-tokens`,title:`RWDS tokens`,summary:`The semantic colour, typography, shape, spacing and motion roles used by the rumahl website.`,area:`Web design system`,group:`RWDS`,readTime:5,updated:`18 November 2026`,featured:!0,sections:[{title:`Token source`,text:`RWDS tokens are CSS custom properties defined in the website theme. The shared values live in app/rwds-tokens.css; the website imports them into its global stylesheet.`,code:{language:`css`,content:`:root {
  --background: #e8ece7;
  --surface: #f8faf7;
  --foreground: #18201c;
  --foreground-muted: #5f6a62;
  --accent: #28694c;
  --accent-hover: #1f5a41;
  --accent-secondary: #3f8a68;
  --border: #d3dbd1;
}`}},{title:`Colour roles`,table:{columns:[`Token`,`Role`],rows:[[`--accent`,`Primary brand and action signal`],[`--accent-secondary`,`Quiet emphasis and secondary iconography`],[`--accent-hover`,`Hover and pressed state for primary actions`],[`--accent-contrast`,`Text on accent surfaces`],[`--background`,`Page canvas`],[`--surface`,`Cards, panels and documentation`],[`--surface-glass`,`Sticky navigation and overlays`],[`--foreground`,`Primary text`],[`--foreground-muted`,`Secondary copy and metadata`],[`--border`,`Hairline separation`]]}},{title:`Accent families`,text:`RWDS supports multiple accent families. A project can generate a different scale without changing the fixed identity: semantic roles, typography, spacing, radii, surfaces and motion stay the same.`,list:[`The seed colour is the 500 step of a 50–950 scale.`,`Light and dark semantic roles are picked from steps that meet contrast.`,`Only the accent family changes; layout and type do not.`,`Use the Color Table Generator at /design/color to create and validate a scale.`]},{title:`Typography, spacing and shape`,list:[`Inter is the primary text and display face.`,`JetBrains Mono is reserved for code, tokens and technical labels.`,`Display tracking stops at -0.035em so large headings stay legible.`,`Body copy uses 1.65 line height and a 68ch measure (45–75 characters).`,`Spacing steps: 4, 8, 12, 16, 24, 32, 48, 64 and 96px.`,`Interactive targets are at least 44px high; compact filters keep 40px.`,`Radii: 12–28px for cards, 20–40px for sections, pill-shaped actions.`,`The content frame is 1320px with 56px desktop gutters.`]},{title:`Rules`,list:[`Components read semantic roles, never hard-coded colours.`,`Light and dark provide values for the same roles.`,`New tokens must be additive and documented before use.`,`RWDS tokens do not use the RUI --rumahl-ui-* namespace.`]}]},{slug:`color-tables`,title:`Colour tables & multiple palettes`,summary:`How RWDS supports different accent families without losing its identity, and how to generate an accessible colour table.`,area:`Web design system`,group:`RWDS`,readTime:6,updated:`20 October 2026`,featured:!0,sections:[{title:`One identity, several accents`,text:`RWDS is not tied to rumahl green. A project can use blue, violet or amber and still be an RWDS surface. What makes the system recognisable is the role model, typography, spacing, radii, surfaces and motion — not a single hue. The neutral surfaces can also be tinted from the seed hue, with a strength control.`,callout:{tone:`important`,title:`Change the accent, not the system`,text:`A colour table changes the accent family, the neutral tint and the contrast colour on accent surfaces. It does not change layout, type, spacing or motion. Changing those would be a different design system, not a palette.`}},{title:`Generate a table`,text:`The Color Table Generator turns a seed colour into a systematic 50–950 scale, tinted neutral surfaces, semantic light and dark roles, contrast readings and copy-ready CSS.`,list:[`Open the generator: /design/color`,`Enter a hex value or pick a colour.`,`Compare the light and dark previews.`,`Check the contrast column before copying the CSS.`]},{title:`Scale rules`,list:[`The seed is the 500 step.`,`Lighter steps move toward the paper tone; darker steps move toward ink.`,`Hue stays fixed; chroma is reduced at the extremes so the scale does not turn neon or muddy.`,`Neutral surfaces are derived from the same hue with a low chroma. The tint slider controls how much hue enters the background.`,`Each step lists its contrast against the generated light and dark backgrounds.`,`Light accent roles are chosen from steps that meet normal-text contrast; dark roles are chosen from the lighter end.`]},{title:`Semantic roles`,table:{columns:[`Token`,`Role`,`How it is chosen`],rows:[[`--accent`,`Primary action and brand signal`,`A step that meets contrast with the theme canvas`],[`--accent-secondary`,`Hover, links and quiet emphasis`,`A neighbouring step in the same scale`],[`--accent-contrast`,`Text on accent surfaces`,`White or ink, whichever contrasts more`],[`--background / --surface`,`Page and content surfaces`,`Tinted neutrals from the seed hue and tint strength`],[`--foreground / --foreground-muted`,`Text roles`,`Tinted text roles that keep the same semantic meaning`]]}},{title:`Contrast`,text:`The generator marks 4.5:1 or higher as passing for normal text. Contrast is checked against the generated light and dark backgrounds. Accent roles that cannot reach that threshold are a warning: choose a darker or lighter seed or reduce the tint rather than forcing the role.`,callout:{tone:`warning`,title:`Do not force a failing accent`,text:`If a seed cannot produce an accessible accent on the chosen canvas, fix the seed or the canvas. Do not hard-code a text colour to compensate.`}},{title:`CSS output`,text:`Paste the generated variables into the project theme. The output overrides the accent family and the neutral surfaces; typography, spacing, radii and motion stay unchanged.`,code:{language:`css`,content:`:root {
  --accent: #17543a;
  --accent-secondary: #28694c;
  --accent-contrast: #ffffff;
  --background: #e8ece7;
  --surface: #f8faf7;
  --foreground: #18201c;
  --border: #d3dbd1;
}

[data-theme="dark"] {
  --accent: #52896e;
  --accent-secondary: #28694c;
  --accent-contrast: #0f1512;
  --background: #0f1512;
  --surface: #161f1a;
  --foreground: #eef4f0;
  --border: #30443a;
}`}},{title:`Boundary with RUI`,text:`RUI does not use the RWDS accent table. It has its own token namespace, materials and theme model. Do not apply an RWDS palette to RUI components or the other way around.`}]},{slug:`rwds-components`,title:`RWDS components`,summary:`The web surfaces and components covered by the rumahl Web Design System, and where their boundaries are.`,area:`Web design system`,group:`RWDS`,readTime:5,updated:`20 October 2026`,sections:[{title:`Scope`,text:`RWDS covers the surfaces served by rumahl.com: navigation, editorial sections, documentation, help, blog, releases and the design microsite itself.`},{title:`Inventory`,table:{columns:[`Group`,`Surfaces`],rows:[[`Primitives`,`Button, TextLink, Tag, Eyebrow, Heading and Text`],[`Layout`,`Container, Section, Grid and Stack`],[`Surfaces`,`Card, Callout, Disclosure and Figure`],[`Data`,`DataTable, Swatch and CodeBlock`],[`Navigation`,`Sticky navigation, mega panels, mobile navigation, search and theme switch`],[`Editorial`,`Heroes, highlights, stories, collections and invitation blocks`],[`Documentation`,`Docs home, article layout, sidebar, table of contents, search and cards`],[`Actions`,`Pill buttons, text links, tags and metadata rows`],[`Media`,`Editorial photography, device art and branded compositions`],[`Colour`,`Color Table Generator for multiple accent families`]]}},{title:`Not in RWDS`,list:[`OS window controls and window chrome`,`Shell toolbars, trays and menu bars`,`OS materials and wallpaper-aware surfaces`,`Installed app layouts and mobile OS shells`,`Components that require the RUI token namespace`,`RUI itself: it is an operating-system system and is not intended for websites`]},{title:`Storybook`,text:`The RWDS Storybook renders the actual website components from components/rwds: primitives, header, footer, media, slideshow, docs cards, sidebar, article design and the page compositions.`,list:[`Open the RWDS component explorer: /design/rwds/components`,`Open the RUI component explorer: /design/rui/components`,`Open the full Storybook: /design/storybook`,`Inspect source: the website components and app/design/design.css`,`Check the comparison before reusing an OS component: /design/systems`]}]},{slug:`rwds-adoption`,title:`Adopting RWDS`,summary:`Practical steps for using the rumahl web design language in another project, including tokens, components and licensing checks.`,area:`Web design system`,group:`RWDS`,readTime:4,updated:`20 October 2026`,sections:[{title:`What you can reuse`,list:[`Semantic token roles and their light/dark values`,`Typography scale and spacing rhythm`,`Surface, border and elevation rules`,`Documentation and content-card patterns`,`Motion and reduced-motion rules`]},{title:`What you need to adapt`,list:[`Navigation structure and information architecture`,`Page composition and editorial imagery`,`Product-specific content and status labels`,`Any website-specific build integration`]},{title:`Steps`,steps:[`Start from the token roles and define light and dark values for your project.`,`Build the type scale and layout frame before adding components.`,`Implement only the components you need; do not copy unused page sections.`,`Check keyboard access, focus visibility and reduced motion.`,`Review the licence and trademark rules before publishing.`]},{title:`Boundary`,text:`RWDS is a web system. If your project needs OS windows, shell controls or app surfaces, use RUI or build a separate surface instead of stretching RWDS.`}]},{slug:`rui-overview`,title:`RUI overview`,summary:`The scope and architecture of rumahl UI, the design system and component library of the rumahl OS shell.`,area:`OS design system`,group:`RUI`,readTime:5,updated:`20 October 2026`,featured:!0,sections:[{title:`Scope`,text:`RUI covers the rumahl OS shell and installed apps: windows, toolbars, controls, overlays, navigation, layouts and themes. It is a component package, not a website skin.`,callout:{tone:`important`,title:`Not for websites`,text:`RUI is an operating-system design system. It is not intended for websites or documentation pages. Those use RWDS. RUI components may render in a browser, but their focus and semantics are the OS shell.`},list:[`Package: @rumahl/ui in the rumahl frontend workspace`,`Living component reference: Storybook`,`Token namespace: --rumahl-ui-*`,`Used by first-party and installed app surfaces`]},{title:`Architecture`,list:[`Components, hooks, icons, styles and tests are versioned together.`,`The shell owns behaviour; themes change presentation.`,`Apps add content only through defined interfaces.`,`Third-party app UI runs in an isolated context, not in the trusted shell.`]},{title:`Component groups`,table:{columns:[`Group`,`Examples`],rows:[[`Window & chrome`,`Window, toolbar, tray, menu bar`],[`Controls`,`Button, inputs, select, search, stepper, color picker`],[`Feedback`,`Badge, notice, toast, progress, skeleton, tooltip`],[`Navigation`,`Tabs, steps, breadcrumbs, sidenav, navbar, list`],[`Overlays`,`Dialog, anchored popover, menus`],[`Layouts`,`App layout, settings, mobile shell, launcher, split views`]]}},{title:`Reference`,list:[`Storybook: /design/storybook`,`Developer Storybook guide: /developers/storybook`,`Shell and UI contracts: /developers/shell-contracts`]}]},{slug:`rui-tokens`,title:`RUI tokens & materials`,summary:`The token namespaces, material states and wallpaper-aware surfaces used by rumahl UI.`,area:`OS design system`,group:`RUI`,readTime:5,updated:`20 October 2026`,sections:[{title:`Token namespace`,text:`RUI tokens are projected onto the shell root as --rumahl-ui-* custom properties. Components read those tokens; a theme supplies the values.`,code:{language:`css`,content:`--rumahl-ui-color-accent
--rumahl-ui-color-canvas-background
--rumahl-ui-color-panel-background
--rumahl-ui-color-text-primary
--rumahl-ui-shape-radius-window
--rumahl-ui-material-opacity`}},{title:`Token groups`,table:{columns:[`Group`,`Purpose`],rows:[[`color.*`,`Accent, surfaces, text, canvas, panel, outline and shadow`],[`material.*`,`Blur, saturation, opacity and glass strength`],[`shape.*`,`Corner radii and icon sizes`],[`motion.*`,`Durations and easing`],[`typography.*`,`UI and display faces, and the type scale`],[`layout.*`,`Layout primitives for shell and app surfaces`],[`texture.wallpaper`,`Wallpaper-aware surface treatment`],[`icon.gradient`,`Icon finish and brand detail`]]}},{title:`Material states`,list:[`Glass: default control material for navigation and controls over the OS surface.`,`Solid: flat, opaque surfaces where translucency would reduce clarity.`,`Floating: an element state for controls that hover over a picture or another surface.`,`A floating control is its own island; a bar is only for adjacent controls.`]},{title:`Rules`,list:[`Components do not hard-code colours or radii.`,`Themes must be able to restyle components through tokens.`,`A theme cannot replace protected shell behaviour.`,`Reduced-motion and focus states are part of the contract.`]}]},{slug:`rui-theming`,title:`RUI theming`,summary:`How RUI themes are defined as data, registered with the theme SDK and projected onto the shell.`,area:`OS design system`,group:`RUI`,readTime:5,updated:`20 October 2026`,sections:[{title:`Theme model`,text:`A theme is data: a validated set of tokens, optional CSS and safe templates. It is not arbitrary JavaScript and it does not replace shell behaviour.`,list:[`id, name and supported modes`,`Token values for colour, material, shape, motion, typography, layout and texture`,`Optional theme-specific CSS`,`Safe slot templates where a theme may provide structure`]},{title:`Example`,code:{language:`ts`,content:`import { defineTheme, registerTheme } from "@rumahl/ui/sdk";

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
}));`}},{title:`Runtime`,list:[`ThemeProvider projects the active tokens onto the document root.`,`The shell resolves the theme from account and device preferences.`,`A theme switch produces a new configuration revision and stylesheet.`,`Components only read tokens, so no component rebuild is needed.`]},{title:`Reference`,text:`The Storybook theme toolbar and the theme guides demonstrate the active token set and registered themes.`}]},{slug:`rui-adoption`,title:`Adopting RUI`,summary:`How to use @rumahl/ui and its themes in an app, and which checks are required before shipping.`,area:`OS design system`,group:`RUI`,readTime:4,updated:`20 October 2026`,sections:[{title:`Use the package`,text:`RUI is consumed as @rumahl/ui inside the rumahl frontend workspace. Import styles once, wrap the app in ThemeProvider and I18nProvider, then use components from the package.`},{title:`Checks`,list:[`Component behaviour and accessibility tests pass.`,`Stories cover default, variants, states and floating/glass overrides.`,`Tokens are used instead of hard-coded values.`,`Light and dark themes both render correctly.`,`Reduced motion and keyboard focus are verified.`]},{title:`Boundary`,text:`RUI is not a website kit. Do not import it into RWDS pages to reuse a control; either build the web component in RWDS or reconsider the surface.`},{title:`Reference`,list:[`Storybook: /design/storybook`,`Developer Storybook guide: /developers/storybook`,`Package source: frontend/packages/ui`]}]},{slug:`storybook`,title:`Storybook`,summary:`The two Storybook builds: RUI from the rumahl repository and the RWDS Storybook for the website design system.`,area:`Tooling`,group:`Process`,readTime:4,updated:`20 October 2026`,featured:!0,sections:[{title:`Two Storybooks`,table:{columns:[`Storybook`,`System`,`Source`],rows:[[`RUI Storybook`,`rumahl UI`,`frontend/packages/storybook in rumahl/rumahl`],[`RWDS Storybook`,`rumahl Web Design System`,`storybook-rwds in the website repository`]]},text:`Both are static builds hosted under /design/storybook. Use /design/rwds/components and /design/rui/components to browse individual stories in a custom UI; the full Storybooks remain available for controls, addons and deep inspection. The RWDS Storybook imports the actual website components from components/rwds, including Header, titles, containers, media, image slideshow, docs cards, sidebar and article design. It uses the production website stylesheet, so the reference matches rumahl.com rather than the design microsite.`},{title:`Run locally`,code:{language:`bash`,content:`# RUI
pnpm --dir frontend install --frozen-lockfile
pnpm --dir frontend storybook

# RWDS
pnpm --dir storybook-rwds install --ignore-workspace
pnpm --dir storybook-rwds storybook`}},{title:`Build`,code:{language:`bash`,content:`pnpm --dir frontend build-storybook
pnpm --dir storybook-rwds build-storybook`}},{title:`Boundary`,text:`Do not merge the two Storybooks into one package. They depend on different surfaces, tokens and release cycles.`}]},{slug:`contributing`,title:`Contributing`,summary:`How to propose and implement changes to RWDS or RUI without coupling the two systems.`,area:`Process`,group:`Process`,readTime:5,updated:`20 October 2026`,featured:!0,sections:[{title:`Identify the surface`,steps:[`Decide whether the change affects the website, the operating system or the shared brand.`,`Choose RWDS, RUI or a cross-system brand decision.`,`Check the existing tokens, components and stories before adding anything new.`,`Open the change against the matching source and documentation.`]},{title:`RWDS contributions`,list:[`Use semantic tokens and document any new role.`,`Check light and dark, long-form readability and mobile layout.`,`Update the RWDS Storybook when a shared web component changes.`,`Do not import RUI components or the --rumahl-ui-* namespace.`]},{title:`RUI contributions`,list:[`Add or update a component, story and test together.`,`Keep component props and token IDs semver-stable.`,`Use native elements and verify the a11y addon.`,`Update Storybook and the developer documentation.`]},{title:`Cross-system changes`,callout:{tone:`important`,title:`Brand is shared, code is not`,text:`A shared palette or typeface change affects both systems and needs one decision. Reusing a component across surfaces needs a separate decision and usually means building two components.`}},{title:`Review checklist`,list:[`The change belongs to the correct system.`,`Existing tokens or components were reused where possible.`,`Accessibility and reduced motion were checked.`,`Documentation and Storybook are updated.`,`No cross-imports or accidental compatibility promises were introduced.`]}]}]})),x,se=e((()=>{x=`---
title: "A home for your files"
slug: "a-home-for-your-files"
excerpt: "Files are the oldest interface we have — and the one we most often hand over to someone else. Here is how rumahl thinks about them."
category: "Product"
date: "2026-08-08"
author: "The rumahl team"
readTime: 4
cover: "/images/editorial/storage-unsplash.jpg"
tags: ["Files", "Product", "Design"]
---
# Everything in its place

A file system is a quiet promise: the things you keep will still be there, findable and yours. rumahl treats that promise as a product feature, not an implementation detail.

## What we are building

- **One space** for documents, photos, projects and downloads.
- **Drag and drop** that works like you expect.
- **Shares** that are internal by default and external only when you decide.
- **Trash** with restore, because mistakes happen.

## Files and apps together

Files do not live in isolation. Apps can request access through the permission system, so a photo app sees photos — not your tax documents.

\`\`\`json
{
  "name": "my-photo-app",
  "permissions": ["FilesRead", "AppStorageWrite"]
}
\`\`\`

> [!NOTE]
> Permissions are enforced at the API gateway, before app code runs.

## Storage that grows with you

Start with an SSD in your mini PC. Add a NAS. Add an external drive for backups. The system should follow you, not the other way around.

## Backups are not optional

Automatic, encrypted backups to USB, NAS or a remote target are part of the plan — because local-first only works if you can recover.
`})),S,ce=e((()=>{S=`---
title: "Apps, in the open"
slug: "apps-in-the-open"
excerpt: "Apps for rumahl OS live in a public GitHub repository and are submitted by pull request — no store, no account."
category: "Ecosystem"
date: "2026-07-18"
author: "The rumahl team"
readTime: 4
cover: "/images/editorial/development-unsplash.jpg"
tags: ["Apps", "Developers", "Ecosystem"]
---
# Apps extend the home

No platform can anticipate everything a home needs. So your system can grow — with apps built for it, published in the open and installed with clear permissions.

## A repository, not a store

Apps live in the public repository **github.com/rumahl/apps**. There is no store service, no review queue behind a login, and no account. You browse the repository, read an app's README and install what you need.

## For users

- Browse apps and plugins in one place — the repository.
- Review permissions before installing.
- Revoke access at any time.
- Update whenever you want; nothing is pushed to your device behind your back.

## For developers

- Fork the repository and add your app.
- Include a manifest and a README describing what it does.
- Open a pull request — review happens in the open.

\`\`\`json
{
  "name": "my-app",
  "version": "1.0.0",
  "permissions": ["AppStorageRead", "AppStorageWrite"]
}
\`\`\`

## Review that means something

Every contribution is reviewed in the open, for safety, privacy, content and quality. Feedback is public and reasoned, and any app can be fixed or updated with a further pull request.

> [!TIP]
> Start with the [app development docs](/developers/app-packages) and the repository at [github.com/rumahl/apps](https://github.com/rumahl/apps).

## Open by design

Because apps are just files in a repository, the history, the diffs and the licences stay transparent. The core system stays local — and there is no account anywhere.
`})),C,le=e((()=>{C=`---
title: "Introducing rumahl OS"
slug: "introducing-rumahl-os"
excerpt: "An open platform for your own hardware, apps and home services — still early in development."
category: "Announcement"
date: "2026-09-01"
author: "The rumahl team"
readTime: 6
cover: "/images/editorial/hardware-unsplash.jpg"
featured: true
tags: ["rumahl OS", "Announcement", "Local-first"]
---
# A home for your digital life

For most of us, the most personal parts of our digital life live somewhere else: photos in one cloud, documents in another, smart-home devices spread across three apps. **rumahl OS is our answer to that.**

rumahl OS is a local-first operating system for your own hardware. It runs on a Raspberry Pi, a mini PC or an old desktop, and brings your files, apps and automations together — at home, on hardware you control.

## What is in the box

- **Files** — one personal space for documents, photos and projects.
- **Apps** — first-party and third-party apps from the public rumahl/apps repository.
- **Automations** — smart-home control that works without the internet.
- **Open platform foundations** — local accounts, explicit permissions and contracts for apps and integrations.
- **Updates** — atomic A/B updates with rollback, so a bad update never bricks your home.

## The platform principle

rumahl is built around a clear boundary:

\`\`\`text
rumahl Apps          ← installable, permissioned, replaceable
─────────────────────────────────────────────
Window Manager / Desktop  (shell UX, session)
Files / Notifications / Jobs / Users          ← OS services & SDK
Permissions                                    ← trust boundary
rumahl Runtime (plugin sandbox, app lifecycle)
System Services (control, network, backup…)   ← microservices
Kernel / Linux
\`\`\`

Everything above the permission boundary is app territory. Everything below belongs to the core and stays stable, tested and documented.

## What local-first means here

Local-first is not a marketing word for us — it is an architecture decision:

| Question | Answer |
| --- | --- |
| Where does my data live? | On your hardware |
| Do I need an account? | No — rumahl has no accounts |
| Does it work offline? | The core does, by design |
| Can I reach it remotely? | With a VPN you control |

> [!NOTE]
> rumahl OS is in development. This post describes the direction of the project, not a finished product.

## Where we are

The foundations are taking shape: the platform services, permission system, image lifecycle and SDK surface. Next up are the desktop experience, app packaging and reliable integration contracts.

If you want to follow along, star the project on [GitHub](https://github.com/rumahl) and read the [documentation](/docs).
`})),w,T=e((()=>{w=`---
title: "One home for every service"
slug: "one-home-for-every-service"
excerpt: "rumahl is becoming an open integration platform: keep your NAS, cloud and smart home, and bring them together without dependencies or limitations."
category: "Announcement"
date: "2026-10-20"
author: "The rumahl team"
coverClass: "cover-green"
tags: ["Announcement", "Integrations"]
featured: true
---

rumahl OS is not trying to become the next TrueNAS, Nextcloud or Home Assistant. It is becoming the place where those systems come together.

That is a meaningful change in direction. Instead of replacing the software you already trust, rumahl adds a shared home around it: one place to reach your services, one consistent experience for everyday tasks, and one open contract for new integrations.

## No dependencies. No limitations.

Our new motto is simple: **your home needs no dependencies, and no limitations.**

That means an integrated service must keep working when rumahl is offline. It keeps its own data, its own interface and its own lifecycle. rumahl connects it; it does not own it.

## Three ways to integrate

- **Connected** — link an existing service over its API or URL. Nothing is installed on the other system.
- **Enhanced** — add the open rumahl Connector to an existing installation for deeper capabilities such as snapshots, health and updates.
- **Native** — let rumahl install and manage a supported system, with maintained builds and automatic updates.

The level describes who manages installation and updates. It does not describe permissions. Capabilities such as \`storage.snapshots.create\` or \`system.health.read\` decide what an integration can actually do.

## External and native, both first-class

You will not have to replace an existing TrueNAS, OpenMediaVault, Nextcloud or Home Assistant installation to benefit from rumahl. Connect it where it runs, or choose a native installation when you want rumahl to manage the lifecycle.

An external installation with a connector can expose the same capabilities as a native one. Only the installation, update and lifecycle responsibilities differ.

## Two surfaces, the same services

The original apps stay complete. TrueNAS keeps managing ZFS, Home Assistant keeps its full automation engine and Nextcloud keeps its own settings.

At the same time, native rumahl apps bring their strengths together: rumahl Home for lights, sensors and rooms; rumahl Files for local storage, NAS volumes and private clouds; rumahl System for health and updates across services.

These apps use provider interfaces, so no rumahl app depends on a single project. Home Assistant is one smart-home provider, not the definition of rumahl Home.

## Open by default

The connector specification will be public. That lets the community add systems rumahl does not officially support yet, without waiting for a fork.

Where we maintain modified builds, those changes will be visible on GitHub, tracked against upstream and updated together with security fixes. A fork is a last resort, not the default integration strategy.

## What comes next

The documentation now covers the integration model, capabilities, connectors, providers and the path from an existing installation to a native one. The first focus is storage, private clouds and smart home — the places where a shared home is most useful.

The core idea stays the same: your hardware, your data, your rules. It just got a wider scope.
`})),E,ue=e((()=>{E=`---
title: "rumahl OS 0.1.0 “Preview”"
slug: "release-0-1-0"
excerpt: "The first public preview of rumahl OS — the local-first foundation."
category: "Release"
date: "2026-05-28"
author: "The rumahl team"
coverClass: "cover-green"
tags: ["Release", "major"]
---

rumahl OS 0.1.0 is called “Preview”. The first public preview of rumahl OS — the local-first foundation.

## Highlights

- Local-first foundation
- Rust microservices
- Web interface on port 8126

## Changelog

### Added

- Initial Rust workspace with the core microservices
- Web interface and API on port 8126
- SQLite-backed system state

### Changed

- Renamed the project to rumahl (from “rumah” + l)
`})),D,de=e((()=>{D=`---
title: "rumahl OS 0.2.0 “First Light”"
slug: "release-0-2-0"
excerpt: "Atomic updates, the read-only root filesystem and health monitoring."
category: "Release"
date: "2026-06-15"
author: "The rumahl team"
coverClass: "cover-green"
tags: ["Release", "minor"]
---

rumahl OS 0.2.0 is called “First Light”. Atomic updates, the read-only root filesystem and health monitoring.

## Highlights

- RAUC A/B updates with rollback
- Read-only SquashFS root
- rumahl-watchdog health monitoring

## Changelog

### Added

- RAUC A/B atomic updates with rollback
- Read-only SquashFS root filesystem
- rumahl-watchdog health monitoring and failover

### Fixed

- Boot no longer fails when the data partition is dirty
`})),O,fe=e((()=>{O=`---
title: "rumahl OS 0.3.0 “Foundation”"
slug: "release-0-3-0"
excerpt: "Containerized services, the dashboard and first-boot setup."
category: "Release"
date: "2026-06-30"
author: "The rumahl team"
coverClass: "cover-green"
tags: ["Release", "minor"]
---

rumahl OS 0.3.0 is called “Foundation”. Containerized services, the dashboard and first-boot setup.

## Highlights

- Docker Compose stack
- Dashboard with widget grid
- First-boot wizard

## Changelog

### Added

- Docker Compose deployment for Linux servers
- Dashboard with a widget grid
- First-boot wizard and admin account

### Changed

- rumahl-supervisor manages all service containers
`})),k,pe=e((()=>{k=`---
title: "rumahl OS 0.4.0 “Boundary”"
slug: "release-0-4-0"
excerpt: "The permission system, app sandbox and the first audit log."
category: "Release"
date: "2026-07-15"
author: "The rumahl team"
coverClass: "cover-green"
tags: ["Release", "minor"]
---

rumahl OS 0.4.0 is called “Boundary”. The permission system, app sandbox and the first audit log.

## Highlights

- Permission system as the trust boundary
- App sandbox with AppArmor
- Hash-chained audit logs

## Changelog

### Added

- Permission checks at the API gateway
- App sandbox and AppArmor profiles
- Hash-chained audit logs

### Security

- Destructive operations now require explicit confirmation
`})),A,me=e((()=>{A=`---
title: "rumahl OS 0.5.0 “Homestead”"
slug: "release-0-5-0"
excerpt: "The Files app, automatic backups and encrypted restore."
category: "Release"
date: "2026-07-29"
author: "The rumahl team"
coverClass: "cover-green"
tags: ["Release", "minor"]
---

rumahl OS 0.5.0 is called “Homestead”. The Files app, automatic backups and encrypted restore.

## Highlights

- Files app with drag & drop
- Encrypted backups to USB, NAS or remote
- Restore from backup

## Changelog

### Added

- Files app with drag & drop, shares and trash
- Automatic encrypted backups
- Restore flow after failure or migration

### Changed

- Downloads now run in the background

### Fixed

- Large uploads no longer time out on slow connections
`})),j,M=e((()=>{j=`---
title: "rumahl OS 0.6.0 “Marketplace”"
slug: "release-0-6-0"
excerpt: "Apps move to a public repository, with open contracts and permissions."
category: "Release"
date: "2026-08-12"
author: "The rumahl team"
coverClass: "cover-green"
tags: ["Release", "minor"]
---

rumahl OS 0.6.0 is called “Marketplace”. Apps move to a public repository, with open contracts and permissions.

## Highlights

- Public apps repository on GitHub
- Apps submitted via pull request
- Permission model for apps

## Changelog

### Added

- Public apps repository (rumahl/apps)
- Pull-request workflow for app submissions
- App manifest schema and validation

### Changed

- Apps now declare permissions in the manifest

### Security

- Capabilities are enforced by the platform, never exceeded
`})),N,P=e((()=>{N=`---
title: "rumahl OS 0.7.0 “Blueprint”"
slug: "release-0-7-0"
excerpt: "Architecture documentation, the first REST API surface and open app contracts."
category: "Release"
date: "2026-08-27"
author: "The rumahl team"
coverClass: "cover-green"
tags: ["Release", "minor"]
---

rumahl OS 0.7.0 is called “Blueprint”. Architecture documentation, the first REST API surface and open app contracts.

## Highlights

- Published architecture and security documentation
- Documented app contracts
- First REST API endpoints

## Changelog

### Added

- Architecture, security and app-contract documentation
- REST API for apps and releases
- App manifest schema and validation

### Changed

- Service ports documented and stabilized

### Fixed

- Corrected audit log ordering under concurrent writes
`})),F,I=e((()=>{F=`---
title: "rumahl OS 0.8.0 “Compass”"
slug: "release-0-8-0"
excerpt: "Runtime permission dialogs, platform diagnostics and selectable update channels."
category: "Release"
date: "2026-09-10"
author: "The rumahl team"
coverClass: "cover-green"
tags: ["Release", "minor"]
---

rumahl OS 0.8.0 is called “Compass”. This development milestone focuses on runtime permission dialogs, platform foundations and selectable update channels.

## Highlights

- Platform service diagnostics
- Runtime permission dialogs for apps
- Update channels: stable, beta, alpha

## Changelog

### Added

- Platform service diagnostics and status reporting
- Permission dialogs at runtime for app capabilities
- Update channel selection in the update center

### Changed

- Faster service discovery through rumahl-core
- Dashboard widgets can now be rearranged

### Fixed

- Watchdog no longer restarts healthy services on slow disks
`})),L,R=e((()=>{L=`---
title: "Security by design"
slug: "security-by-design"
excerpt: "Defense in depth, permissions as a trust boundary and a clear way to report vulnerabilities — how rumahl approaches security."
category: "Security"
date: "2026-07-30"
author: "The rumahl team"
readTime: 6
coverClass: "cover-green"
tags: ["Security", "Privacy", "Engineering"]
---
# Every layer has one job

rumahl implements a defense-in-depth model: a compromise at one level should not reach the next.

## The five layers

| Layer | Mechanisms |
| --- | --- |
| Authentication & authorization | JWT, API keys, PIN, RBAC |
| Network security | Domain whitelist, IP access control, sandbox |
| Data protection | AES-256-GCM, hash-chained audit logs |
| Threat detection | Intrusion detection, auto-lockdown, alerts |
| Platform security | AppArmor, Docker isolation, read-only filesystem |

## Permissions are the trust boundary

Every API call is checked against an explicit permission **at the gateway**, before your code runs. Apps request permissions at registration and at runtime.

> [!IMPORTANT]
> A denied permission can never be bypassed from inside the app.

## Updates you can trust

- Buildroot LTS Linux with a read-only SquashFS root
- RAUC A/B updates with automatic rollback
- AppArmor mandatory access control

## Reporting a vulnerability

We take reports seriously. Please report privately — never in a public issue.

- Email **security@rumahl.com**
- Or open a private security advisory on GitHub

See the [Security page](/security) for scope, severity scoring, disclosure and why we do not offer bounties.
`})),z,he=e((()=>{z=`---
title: "Why local-first matters"
slug: "why-local-first"
excerpt: "The cloud made everything convenient and everything dependent. Local-first is a different trade-off — and a better one for the place you call home."
category: "Philosophy"
date: "2026-08-24"
author: "The rumahl team"
readTime: 5
cover: "/images/editorial/network-unsplash.jpg"
featured: true
tags: ["Local-first", "Privacy", "Design"]
---
# Convenience has a hidden cost

The cloud is wonderful until it is not. A provider changes its terms, a service shuts down, a subscription price doubles, a network goes down — and suddenly the things you rely on are out of reach.

Local-first flips the default: **your data and your services live with you**, and the cloud becomes an option rather than a requirement.

## Three principles

1. **Your hardware.** The system runs where you decide it runs.
2. **Your data.** Files stay close, and backups are yours to keep.
3. **Your rules.** You choose which apps and services you use.

## What changes in practice

- Photos are backed up to a device in your home, not to a stranger's data centre.
- Automations keep working when the internet does not.
- There are no accounts at all — apps come from a public repository, not a sign-in.

> [!TIP]
> You do not need a data centre. A Raspberry Pi 4 with an SSD is enough for most homes.

## The honest trade-offs

Local-first is not magic. You are responsible for your hardware, your backups and your updates. That is exactly why we invest in atomic updates, a security model and clear documentation.

## How we think about the cloud

Cloud features should be **optional and obvious**. When a feature needs the internet, we say so. When it does not, it should work anyway.

That is the promise: a home that is yours first, connected second.
`}));function B(e){let t=e.trim();if(t.startsWith(`"`)&&t.endsWith(`"`))try{return JSON.parse(t)}catch{return t.slice(1,-1)}return t.startsWith(`'`)&&t.endsWith(`'`)?t.slice(1,-1):t}function ge(e){return e.trim().replace(/^\[/,``).replace(/\]$/,``).split(`,`).map(e=>B(e)).filter(Boolean)}function _e(e){let t=/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(e);if(!t)return{data:{},body:e};let n={};for(let e of t[1].split(/\r?\n/)){let t=/^([A-Za-z0-9_-]+):\s*(.*)$/.exec(e.trim());if(!t)continue;let[,r,i]=t;i.startsWith(`[`)?n[r]=ge(i):i===`true`||i===`false`?n[r]=i===`true`:i!==``&&!Number.isNaN(Number(i))?n[r]=Number(i):n[r]=B(i)}return{data:n,body:e.slice(t[0].length)}}function V(e,t=``){return typeof e==`string`?e:t}function ve(e){return Array.isArray(e)?e.map(String):typeof e==`string`&&e?[e]:[]}function ye(e,t){if(typeof t==`number`&&t>0)return t;let n=e.replace(/```[\s\S]*?```/g,` `).split(/\s+/).filter(Boolean).length;return Math.max(1,Math.round(n/200))}function be(e,t){let n=e.split(`/`).pop().replace(/\.md$/,``),{data:r,body:i}=_e(t),a=i.trim();return{slug:V(r.slug,n),title:V(r.title,n),excerpt:V(r.excerpt),category:V(r.category,`Article`),date:V(r.date),author:V(r.author,`The rumahl team`),readTime:ye(a,r.readTime),cover:r.cover?V(r.cover):void 0,coverClass:r.coverClass?V(r.coverClass):void 0,tags:ve(r.tags),featured:r.featured===!0,body:a}}function xe(e,t=`en`){try{return new Date(e).toLocaleDateString(t===`de`?`de-DE`:`en-GB`,{day:`numeric`,month:`long`,year:`numeric`})}catch{return e}}var H,U,W,G=e((()=>{se(),ce(),le(),T(),ue(),de(),fe(),pe(),me(),M(),P(),I(),R(),he(),H=Object.assign({"../content/blog/a-home-for-your-files.md":x,"../content/blog/apps-in-the-open.md":S,"../content/blog/introducing-rumahl-os.md":C,"../content/blog/one-home-for-every-service.md":w,"../content/blog/release-0-1-0.md":E,"../content/blog/release-0-2-0.md":D,"../content/blog/release-0-3-0.md":O,"../content/blog/release-0-4-0.md":k,"../content/blog/release-0-5-0.md":A,"../content/blog/release-0-6-0.md":j,"../content/blog/release-0-7-0.md":N,"../content/blog/release-0-8-0.md":F,"../content/blog/security-by-design.md":L,"../content/blog/why-local-first.md":z}),U=Object.entries(H).map(([e,t])=>be(e,t)).sort((e,t)=>e.date<t.date?1:e.date>t.date?-1:0),W=U.map(e=>({slug:e.slug,title:e.title,excerpt:e.excerpt,category:e.category,date:e.date,author:e.author,readTime:e.readTime,cover:e.cover,coverClass:e.coverClass,tags:e.tags,featured:e.featured})),Array.from(new Set(U.map(e=>e.category))).sort(),Array.from(new Set(U.flatMap(e=>e.tags))).sort()})),K,q=e((()=>{K=[{version:`0.8.0`,name:`Compass`,date:`2026-09-10`,type:`minor`,summary:`Runtime permission dialogs, platform foundations and selectable update channels.`,highlights:[`Platform service foundations and diagnostics`,`Runtime permission dialogs for apps`,`Update channels: stable, beta, alpha`],changelog:[{type:`Added`,items:[`Platform service diagnostics`,`Permission dialogs at runtime for app capabilities`,`Update channel selection in the update center`]},{type:`Changed`,items:[`Faster service discovery through rumahl-core`,`Dashboard widgets can now be rearranged`]},{type:`Fixed`,items:[`Watchdog no longer restarts healthy services on slow disks`]}]},{version:`0.7.0`,name:`Blueprint`,date:`2026-08-27`,type:`minor`,summary:`Architecture documentation, the first REST API surface and open app contracts.`,highlights:[`Published architecture and security documentation`,`Documented app contracts`,`First REST API endpoints`],changelog:[{type:`Added`,items:[`Architecture, security and app-contract documentation`,`REST API for apps and releases`,`App manifest schema and validation`]},{type:`Changed`,items:[`Service ports documented and stabilized`]},{type:`Fixed`,items:[`Corrected audit log ordering under concurrent writes`]}]},{version:`0.6.0`,name:`Marketplace`,date:`2026-08-12`,type:`minor`,summary:`Apps move to a public repository, with open contracts and permissions.`,highlights:[`Public apps repository on GitHub`,`Apps submitted via pull request`,`Permission model for apps`],changelog:[{type:`Added`,items:[`Public apps repository (rumahl/apps)`,`Pull-request workflow for app submissions`,`App manifest schema and validation`]},{type:`Changed`,items:[`Apps now declare permissions in the manifest`]},{type:`Security`,items:[`Capabilities are enforced by the platform, never exceeded`]}]},{version:`0.5.0`,name:`Homestead`,date:`2026-07-29`,type:`minor`,summary:`The Files app, automatic backups and encrypted restore.`,highlights:[`Files app with drag & drop`,`Encrypted backups to USB, NAS or remote`,`Restore from backup`],changelog:[{type:`Added`,items:[`Files app with drag & drop, shares and trash`,`Automatic encrypted backups`,`Restore flow after failure or migration`]},{type:`Changed`,items:[`Downloads now run in the background`]},{type:`Fixed`,items:[`Large uploads no longer time out on slow connections`]}]},{version:`0.4.0`,name:`Boundary`,date:`2026-07-15`,type:`minor`,summary:`The permission system, app sandbox and the first audit log.`,highlights:[`Permission system as the trust boundary`,`App sandbox with AppArmor`,`Hash-chained audit logs`],changelog:[{type:`Added`,items:[`Permission checks at the API gateway`,`App sandbox and AppArmor profiles`,`Hash-chained audit logs`]},{type:`Security`,items:[`Destructive operations now require explicit confirmation`]}]},{version:`0.3.0`,name:`Foundation`,date:`2026-06-30`,type:`minor`,summary:`Containerized services, the dashboard and first-boot setup.`,highlights:[`Docker Compose stack`,`Dashboard with widget grid`,`First-boot wizard`],changelog:[{type:`Added`,items:[`Docker Compose deployment for Linux servers`,`Dashboard with a widget grid`,`First-boot wizard and admin account`]},{type:`Changed`,items:[`rumahl-supervisor manages all service containers`]}]},{version:`0.2.0`,name:`First Light`,date:`2026-06-15`,type:`minor`,summary:`Atomic updates, the read-only root filesystem and health monitoring.`,highlights:[`RAUC A/B updates with rollback`,`Read-only SquashFS root`,`rumahl-watchdog health monitoring`],changelog:[{type:`Added`,items:[`RAUC A/B atomic updates with rollback`,`Read-only SquashFS root filesystem`,`rumahl-watchdog health monitoring and failover`]},{type:`Fixed`,items:[`Boot no longer fails when the data partition is dirty`]}]},{version:`0.1.0`,name:`Preview`,date:`2026-05-28`,type:`major`,summary:`The first public preview of rumahl OS — the local-first foundation.`,highlights:[`Local-first foundation`,`Rust microservices`,`Web interface on port 8126`],changelog:[{type:`Added`,items:[`Initial Rust workspace with the core microservices`,`Web interface and API on port 8126`,`SQLite-backed system state`]},{type:`Changed`,items:[`Renamed the project to rumahl (from “rumah” + l)`]}]}],K[0]}));function Se(e){let t=e.trim().toLowerCase();return t?$.map(e=>{let n=e.title.toLowerCase(),r=e.description.toLowerCase(),i=0;return n===t&&(i+=100),n.startsWith(t)&&(i+=50),n.includes(t)&&(i+=25),r.includes(t)&&(i+=10),(e.category+` `+e.title+` `+e.description).toLowerCase().includes(t)&&(i+=5),{entry:e,score:i}}).filter(e=>e.score>0).sort((e,t)=>t.score-e.score).map(e=>e.entry):[]}var J,Y,X,Z,Q,$,Ce=e((()=>{ie(),m(),v(),b(),G(),q(),J=t(),Y={os:{key:`os`,name:`rumahl OS`,navLabel:`rumahl OS`,tagline:`A local platform for apps and home services.`,href:`/os`,icon:u,eyebrow:`rumahl OS`,title:(0,J.jsxs)(J.Fragment,{children:[`A local platform.`,(0,J.jsx)(`br`,{}),`In development.`]}),description:`rumahl OS is an independent open-source project. Its Rust platform, local accounts and browser shell are available for development; broader service integrations are still being built.`,cta:{label:`Read the documentation`,href:`/docs`},stats:[{value:`Native + external`,label:`integrations`},{value:`Open`,label:`connector spec`},{value:`Your`,label:`hardware, your rules`}],highlights:[{icon:l,title:`Integrates, does not replace`,text:`The integration design uses service APIs and keeps existing systems independent. Individual providers are still in development.`},{icon:d,title:`Two surfaces, one home`,text:`Use the complete original apps or the native rumahl Home, Files and System apps.`},{icon:c,title:`Capabilities, not lock-in`,text:`External and native installations are judged by what they support — not by who installed them.`}],gallery:[{eyebrow:`STORAGE`,title:`Storage integration`,text:`The proposed storage model covers volumes, shares and snapshots. TrueNAS and OpenMediaVault adapters are development targets, not generally available integrations.`,icon:o,link:{label:`Storage integrations`,href:`/integrations`}},{eyebrow:`PRIVATE CLOUD`,title:`Private cloud integration`,text:`The Nextcloud integration design keeps the upstream application and its accounts independent. Shared identity requires explicit configuration and provider support.`,icon:n,link:{label:`Connect a service`,href:`/docs/external-integrations`}},{eyebrow:`SMART HOME`,title:`Smart-home integration`,text:`The intended Home Assistant integration would expose selected entities through a provider while retaining the original automation interface.`,icon:d,link:{label:`Read the provider model`,href:`/developers/connectors`}}],specs:[{title:`Platform`,rows:[{label:`Positioning`,value:`Open integration platform for the home`},{label:`Integrations`,value:`Connected, Enhanced and Native`},{label:`Runs on`,value:`Your own hardware`},{label:`Internet connection`,value:`Not required for local operation`},{label:`Status`,value:`In development`}]},{title:`Independence`,rows:[{label:`Service lifecycle`,value:`Owned by each service`},{label:`rumahl offline`,value:`Integrated services keep running`},{label:`Connector spec`,value:`Open, in development`},{label:`Providers`,value:`Community-extensible`}]},{title:`Accounts & privacy`,rows:[{label:`Accounts`,value:`Local accounts required for authenticated access`},{label:`Data collection`,value:`None`},{label:`Tracking & profiling`,value:`None`},{label:`Identity`,value:`Scoped, per service`}]}],faq:[{q:`Does rumahl replace TrueNAS or Nextcloud?`,a:`No. rumahl OS is the place where your services come together. TrueNAS keeps managing storage, Nextcloud keeps being your private cloud, and rumahl connects both without taking ownership of them.`},{q:`Can I connect an existing installation?`,a:`Support depends on the provider implementation. The Connected, Enhanced and Native levels describe the intended architecture. Check the integration documentation for current availability.`},{q:`Do my services keep working without rumahl?`,a:`Yes. Integration must not create a new dependency. Your NAS, cloud and smart home stay operational if rumahl is offline, and you can always reach their original interfaces.`},{q:`Do I need an account?`,a:`The running platform uses local accounts. The developer server generates one on first start; image accounts are provisioned locally. A central rumahl account is not required.`},{q:`How are native builds updated?`,a:`For the planned native level, maintained builds will be published on GitHub with their upstream changes visible. Updates and security fixes should be automated where possible, with rollback available. The current OS image already separates system and data volumes and checks schema versions before startup.`}],comparison:{columns:[{name:`External`,note:`Your existing installation`},{name:`Native`,note:`Installed through rumahl`}],rows:[{label:`Keeps the original interface`,values:[!0,!0]},{label:`Can expose the same capabilities`,values:[!0,!0]},{label:`Managed by rumahl`,values:[!1,!0]},{label:`Automatic rumahl updates`,values:[!1,!0]},{label:`Works without rumahl`,values:[!0,!0]}]}},integrations:{key:`integrations`,name:`Integrations`,navLabel:`Integrations`,tagline:`Provider contracts and implementation status.`,href:`/integrations`,icon:l,eyebrow:`OPEN INTEGRATIONS`,title:(0,J.jsxs)(J.Fragment,{children:[`Independent services.`,(0,J.jsx)(`br`,{}),`A local platform.`]}),description:`The project is developing open contracts for external and native services. TrueNAS, OpenMediaVault, Nextcloud and Home Assistant are integration targets; the documentation records current implementation boundaries.`,cta:{label:`Read the integration docs`,href:`/docs/integrations`},stats:[{value:`3`,label:`integration levels`},{value:`Open`,label:`connector specification`},{value:`0`,label:`forced migrations`}],highlights:[{icon:ee,title:`Connected`,text:`Link an existing service through its API or URL. Nothing needs to be installed on the other system.`},{icon:l,title:`Enhanced`,text:`Add the open rumahl Connector to an existing installation for snapshots, health checks and updates.`},{icon:u,title:`Native`,text:`The native level is being built for systems that rumahl installs and manages directly, with maintained builds and automatic updates.`}],gallery:[{eyebrow:`STORAGE`,title:`Storage providers`,text:`Storage providers are intended to expose volumes, shares and snapshots without replacing the upstream storage system. Provider implementation is ongoing.`,icon:o,link:{label:`Connect storage`,href:`/docs/external-integrations`}},{eyebrow:`PRIVATE CLOUD`,title:`Nextcloud provider design`,text:`Use Nextcloud as the full application or bring files into the rumahl Files experience through a provider.`,icon:s,link:{label:`Read the provider model`,href:`/developers/connectors`}},{eyebrow:`SMART HOME`,title:`Smart-home providers`,text:`The proposed Home provider would expose selected entities for everyday control. The upstream automation interface remains independent.`,icon:a,link:{label:`Integrate Home Assistant`,href:`/help/connect-existing-service`}}],specs:[{title:`Integration levels`,rows:[{label:`Connected`,value:`API or URL, no extra installation`},{label:`Enhanced`,value:`Existing system + rumahl Connector`},{label:`Native`,value:`Installed and managed by rumahl`}]},{title:`Capabilities`,rows:[{label:`Model`,value:`Namespaced, explicit and revocable`},{label:`Examples`,value:`storage.*, home.*, system.*`},{label:`Tied to installation level`,value:`No`},{label:`Community providers`,value:`Yes`}]},{title:`Ownership`,rows:[{label:`Data ownership`,value:`Stays with the service`},{label:`Service lifecycle`,value:`Owned by the service`},{label:`rumahl dependency`,value:`None for service operation`},{label:`Connector spec`,value:`In development`}]}],faq:[{q:`What is the difference between Connected, Enhanced and Native?`,a:`Connected links an existing service over its API. Enhanced adds the optional rumahl Connector to that installation. Native means rumahl installs and manages a supported system. The level describes the installation route, not the permissions.`},{q:`Can an external installation do everything a native one can?`,a:`Often, yes. Capabilities are negotiated with the service. An external installation with a connector can expose the same capabilities as a native one; only installation, updates and lifecycle differ.`},{q:`Do you fork every integrated project?`,a:`No. Integration should happen through adapters, APIs and additional components first. A fork or modified build is only used when an integration cannot be achieved otherwise, and its changes stay visible on GitHub.`},{q:`Can the community add integrations?`,a:`Yes. Connectors and providers are developed in public through the app package contract. The broader connector specification is being finalised in the open, so the community can add systems rumahl does not support yet.`}],comparison:{columns:[{name:`Original app`,note:`Complete upstream interface`},{name:`rumahl app`,note:`Unified native experience`}],rows:[{label:`Full specialised functionality`,values:[!0,!0]},{label:`Consistent across providers`,values:[!1,!0]},{label:`Requires the service to stay independent`,values:[!0,!0]},{label:`Community-extensible`,values:[!0,!0]}]}},features:{key:`features`,name:`Features`,navLabel:`Features`,tagline:`The details that connect across your services.`,href:`/features`,icon:ae,eyebrow:`DESIGNED AS ONE PLATFORM`,title:(0,J.jsxs)(J.Fragment,{children:[`The details connect.`,(0,J.jsx)(`br`,{}),`Explicit permissions`]}),description:`One experience across storage, clouds, smart home and apps — with capabilities, permissions and system services under your control.`,cta:{label:`Explore the documentation`,href:`/docs`},stats:[{value:`Files`,label:`in one place`},{value:`Apps`,label:`shared contracts`},{value:`Local-first`,label:`foundation`}],highlights:[{icon:s,title:`A place for everything`,text:`Bring local files, NAS volumes and private clouds into one consistent view.`},{icon:l,title:`Open to every provider`,text:`Native and external services use the same capability contracts.`},{icon:i,title:`Local at heart`,text:`Your core system stays local. Local identity, no tracking and no data collection.`}],gallery:[{eyebrow:`ORGANISE`,title:`Everything in its place.`,text:`A structure that grows with you, so your digital life stays findable and yours.`,icon:s,link:{label:`Read the foundations`,href:`/developers/architecture`}},{eyebrow:`CONNECT`,title:`Your connection, your choice.`,text:`Use a VPN you control. Remote access never replaces the local foundation.`,icon:oe,link:{label:`Remote access explained`,href:`/help/remote-access`}},{eyebrow:`MAKE IT YOURS`,title:`Bend it to your home.`,text:`Personalise the interface, add the apps you want and modify the platform itself.`,icon:te,link:{label:`App development`,href:`/docs/integration-capabilities`}}],specs:[{title:`Core`,rows:[{label:`Files`,value:`One personal space`},{label:`Apps`,value:`First-party and third-party`},{label:`Development status`,value:`Early platform development`}]},{title:`Access`,rows:[{label:`Local access`,value:`Always the foundation`},{label:`Remote access`,value:`Your own VPN`},{label:`Account needed`,value:`None`}]},{title:`Privacy`,rows:[{label:`Data collection`,value:`None`},{label:`Tracking & advertising`,value:`None`},{label:`Server logs`,value:`Website delivery only`}]}],faq:[{q:`What makes rumahl different?`,a:`The core is local-first. Your hardware, your data and your rules come before any optional service — and nothing about your use is tracked or collected.`},{q:`Can I reach my system remotely?`,a:`Yes — through a VPN you control. Remote access never replaces the local foundation.`},{q:`Can I change how rumahl looks and behaves?`,a:`Yes. rumahl is designed to be personalisable, extensible and modifiable, and the platform source is open.`},{q:`Where can I learn more?`,a:`The documentation covers the platform foundations, accounts, apps and remote access.`}]}},X=`https://github.com/rumahl/rumahl`,Z=[{id:`project`,label:`Project`,href:`/os`,columns:[{title:`Overview`,links:[{label:`rumahl OS`,href:`/os`,description:`An independent open-source platform.`},{label:`Integrations`,href:`/integrations`,description:`External and native services.`},{label:`Features`,href:`/features`,description:`The details across your services.`}]},{title:`Foundations`,links:[{label:`Architecture`,href:`/developers/architecture`,description:`How the platform fits together.`},{label:`Documentation`,href:`/docs`,description:`Guides for your home.`},{label:`Releases`,href:`/releases`,description:`Milestones and changelogs.`}]}],featured:{eyebrow:`BUILT IN THE OPEN`,title:`An independent open-source platform.`,text:`Source code, documentation and ongoing development.`,href:X,icon:r}},{id:`docs`,label:`Docs`,href:`/docs`,columns:[{title:`Get started`,links:[{label:`Start here`,href:`/docs/start-here`,description:`Project status and reading paths.`},{label:`Getting started`,href:`/docs/quick-start`,description:`Your first local session.`},{label:`Troubleshooting`,href:`/docs/troubleshooting`,description:`Diagnose setup and login problems.`},{label:`Installation`,href:`/docs/installation`,description:`Run it on your hardware.`},{label:`Integrations`,href:`/docs/integrations`,description:`The open integration model.`},{label:`Existing installations`,href:`/docs/external-integrations`,description:`Connect what you already run.`},{label:`Capabilities`,href:`/docs/integration-capabilities`,description:`What a service can do.`},{label:`Remote access`,href:`/help/remote-access`,description:`Your connection, your choice.`}]}],featured:{eyebrow:`USER DOCUMENTATION`,title:`Understand and try rumahl.`,text:`Guides for integrations, setup and support.`,href:`/docs`,icon:o}},{id:`developers`,label:`Developers`,href:`/developers`,columns:[{title:`Start`,links:[{label:`Developer documentation`,href:`/developers`,description:`Separate from the user docs.`},{label:`Developer setup`,href:`/developers/getting-started`,description:`Run the real platform locally.`},{label:`Repository guide`,href:`/developers/repository-guide`,description:`Locate modules and trace requests.`},{label:`Contributing`,href:`/developers/contributing`,description:`Prepare your first contribution.`},{label:`Architecture`,href:`/developers/architecture`,description:`Core, services and boundaries.`}]},{title:`Platform`,links:[{label:`App packages`,href:`/developers/app-packages`,description:`Manifest, signing and runtimes.`},{label:`App hosting`,href:`/developers/app-hosting`,description:`Catalog, leases and the bridge.`},{label:`Identity & OIDC`,href:`/developers/identity-oidc`,description:`Local accounts and clients.`},{label:`HTTP API`,href:`/developers/http-api`,description:`Shell, app and recovery routes.`}]},{title:`Frontend & UI`,links:[{label:`Storybook`,href:`/developers/storybook`,description:`The living design-system reference.`},{label:`Shell & UI contracts`,href:`/developers/shell-contracts`,description:`Routing, snapshots and themes.`},{label:`Testing & release`,href:`/developers/testing-release`,description:`The check matrix.`}]}],featured:{eyebrow:`DEVELOPER DOCUMENTATION`,title:`Build against the real platform.`,text:`Signed packages, capabilities, OIDC and Storybook — kept separate from user docs.`,href:`/developers`,icon:re}},{id:`community`,label:`Community`,href:`/blog`,columns:[{title:`Read`,links:[{label:`Blog`,href:`/blog`,description:`Notes from the project.`},{label:`Releases`,href:`/releases`,description:`Every release and changelog.`},{label:`About the project`,href:`/about`,description:`Where “rumahl” comes from.`}]},{title:`Contribute`,links:[{label:`Contributing`,href:`/legal/contributing`,description:`Report bugs, send pull requests.`},{label:`Code of Conduct`,href:`/legal/code-of-conduct`,description:`How we treat each other.`},{label:`Security`,href:`/security`,description:`Report a vulnerability.`}]},{title:`Connect`,links:[{label:`Forum`,href:`https://community.rumahl.com`,description:`The rumahl community on Discourse.`},{label:`GitHub`,href:X,description:`The source repository.`},{label:`Discussions`,href:X+`/discussions`,description:`Ask, propose, discuss.`},{label:`Issues`,href:X+`/issues`,description:`Bugs and feature requests.`}]}],featured:{eyebrow:`BUILT IN THE OPEN`,title:`Built in the open.`,text:`Apache-2.0 and shaped by its community.`,href:X,icon:ne}}],Q=[{label:`Support`,href:`/help`}],$=[{title:`Home`,description:`An independent open-source project for local apps and home services.`,href:`/`,category:`rumahl`},{title:`Integrations`,description:`Connect TrueNAS, Nextcloud, Home Assistant and more — external or native.`,href:`/integrations`,category:`Project`},{title:`Live demo`,description:`Try a running rumahl OS instance in your browser.`,href:`/demo`,category:`Project`},{title:`GitHub`,description:`Source repository, issues and discussions.`,href:X,category:`Community`},{title:`About the project`,description:`Where “rumahl” comes from and what the mark means.`,href:`/about`,category:`rumahl`},{title:`Brand guidelines`,description:`Naming, logo, wordmark, construction, colour, partner lockups and downloadable assets.`,href:`/brand`,category:`rumahl`},{title:`Get rumahl`,description:`Plan your install: device, services and guide.`,href:`/get-rumahl`,category:`rumahl`},{title:`Blog`,description:`Stories from the home: announcements and engineering notes.`,href:`/blog`,category:`Blog`},{title:`Releases`,description:`Every rumahl OS release with highlights and changelog.`,href:`/releases`,category:`Releases`},{title:`Security`,description:`Report a vulnerability, severity scoring and disclosure.`,href:`/security`,category:`Security`},{title:`Documentation`,description:`Understand your digital home.`,href:`/docs`,category:`Docs`},{title:`Support center`,description:`A little help. A lot less friction.`,href:`/help`,category:`Support`},{title:`Legal`,description:`All policies and terms in one place.`,href:`/legal`,category:`Legal`},{title:`Apps`,description:`Browse apps in the public repository and install them.`,href:`https://github.com/rumahl/apps`,category:`Products`},...Object.values(Y).map(e=>({title:e.name,description:e.description,href:e.href,category:`Products`})),...p.map(e=>({title:e.title,description:e.summary,href:`/docs/`+e.slug,category:`Docs`})),...f.map(e=>({title:e.title,description:e.summary,href:`/help/`+e.slug,category:`Support`})),...h.map(e=>({title:e.title,description:e.summary,href:`/developers/`+e.slug,category:`Developers`})),{title:`Developer documentation`,description:`Architecture, app packages, OIDC, HTTP API and Storybook — separate from user docs.`,href:`/developers`,category:`Developers`},{title:`rumahl Design`,description:`Reference documentation for RWDS and RUI, the two rumahl design systems.`,href:`/design`,category:`Design`},{title:`Design documentation`,description:`Tokens, components, theming, adoption and contribution for RWDS and RUI.`,href:`/design/docs`,category:`Design`},{title:`Design Storybook`,description:`The RWDS and RUI Storybook builds.`,href:`/design/storybook`,category:`Design`},{title:`RWDS components`,description:`Browse the RWDS Storybook in a custom component explorer.`,href:`/design/rwds/components`,category:`Design`},{title:`RUI components`,description:`Browse the RUI Storybook in a custom component explorer.`,href:`/design/rui/components`,category:`Design`},{title:`Color Table Generator`,description:`Generate an accessible RWDS accent scale and tinted neutrals from a seed colour.`,href:`/design/color`,category:`Design`},{title:`Design glossary`,description:`Plain-language definitions for RWDS, RUI, tokens, components and stories.`,href:`/design/glossary`,category:`Design`},{title:`rumahl Web Design System`,description:`Tokens, typography, layout, surfaces, motion and components for rumahl.com.`,href:`/design/rwds`,category:`Design`},{title:`rumahl UI`,description:`The OS design system, component library and Storybook.`,href:`/design/rui`,category:`Design`},{title:`RWDS vs RUI`,description:`How the two design systems differ and what they share.`,href:`/design/systems`,category:`Design`},{title:`Design resources`,description:`Source, Storybook, contribution rules and where each system lives.`,href:`/design/resources`,category:`Design`},...y.map(e=>({title:e.title,description:e.summary,href:`/design/docs/`+e.slug,category:`Design`})),...W.map(e=>({title:e.title,description:e.excerpt,href:`/blog/`+e.slug,category:`Blog`})),...K.map(e=>({title:`rumahl OS ${e.version}${e.name?` “${e.name}”`:``}`,description:e.summary,href:`/releases`,category:`Releases`})),{title:`Privacy Policy`,description:`How we collect, use and protect your personal data.`,href:`/legal/privacy`,category:`Legal`},{title:`Terms of Service`,description:`Your rights and responsibilities when using our website.`,href:`/legal/tos`,category:`Legal`},{title:`Imprint`,description:`Mandatory provider information in accordance with § 5 DDG.`,href:`/legal/impressum`,category:`Legal`},{title:`Cookie Policy`,description:`Which cookies and local storage the website uses.`,href:`/legal/cookies`,category:`Legal`},{title:`Contributing Guidelines`,description:`How to report bugs, propose features and submit pull requests.`,href:`/legal/contributing`,category:`Community`},{title:`Code of Conduct`,description:`How we treat each other across all projects and discussions.`,href:`/legal/code-of-conduct`,category:`Community`},{title:`Apps (repository)`,description:`Apps live in github.com/rumahl/apps and are submitted by pull request.`,href:`/legal/apps`,category:`Community`},{title:`Trademark Policy`,description:`How the rumahl name and logo may be used.`,href:`/legal/trademark`,category:`Community`}]}));export{v as _,Se as a,xe as c,U as d,y as f,g,_ as h,Y as i,G as l,h as m,Q as n,q as o,b as p,Z as r,K as s,Ce as t,W as u};