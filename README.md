# rumahl website

The website for [rumahl OS](https://github.com/rumahl/rumahl), an independent
open-source project developing a local platform for apps and home services.
rumahl is not presented as a company. Implemented functionality and planned
integrations must be clearly distinguished.

Built with Next.js and the vinext/Vite runtime. The site carries the real rumahl
brand identity (rumahl green `#28694c`, Inter, the "r" logomark) and focuses on
the open-source project and its community: integrations, documentation,
architecture, contributing, security and releases.

## Documentation separation

User documentation lives under `/docs`, support articles under `/help`, and
developer documentation under `/developers`. The developer section has its own
index, search, navigation and article set; it is not mixed into the user docs.
It includes the API reference at `/developers/api` and the app-building path at
`/developers/build-app`. The user docs start with a visual path chooser, a
status board and a system map before the article index.

`/design` is a separate design microsite for the two rumahl design systems:

- **RWDS** — the rumahl Web Design System used by this website.
- **RUI** — rumahl UI, the component library and design system of rumahl OS,
  documented through Storybook.

The microsite has its own navigation, footer, styling, documentation portal and
Storybook viewer so it can move to `design.rumahl.com` without restructuring the
main site.

### Design docs and Storybooks

- Design documentation: `/design/docs` with its own sidebar, article pages and
  search, using the same documentation surface as the main docs.
- System toggle: the design site switches between **Overview**, **Web · RWDS**
  and **OS · RUI**. Each system has its own overview and component explorer;
  shared pages cover docs, Storybook, comparison and resources.
- Glossary: `/design/glossary` explains RWDS, RUI and the other design-system
  terms in plain language.
- Component explorers: `/design/rwds/components` and `/design/rui/components`
  read the existing Storybook indexes and show individual stories in a custom UI.
- Color Table Generator: `/design/color` builds an accessible 50–950 accent
  scale and tinted neutral surfaces from a seed colour. Typography, spacing,
  radii and motion stay fixed so the RWDS identity is preserved.
- RUI Storybook: static build from `rumahl/rumahl` published at
  `public/design/storybook/rui/`.
- RWDS Storybook: standalone Storybook package in `storybook-rwds/`, published at
  `public/design/storybook/rwds/`.
- Shared RWDS tokens: `app/rwds-tokens.css`, imported by the website and the
  RWDS Storybook.

To rebuild both Storybooks and refresh the published copies:

```sh
scripts/sync-storybooks.sh
```

Set `RUMAHL_REPO` if the rumahl repository is not at `../rumahl`.

## Integration model

rumahl connects services at three levels:

- **Connected** — an existing service is linked over its API or URL.
- **Enhanced** — the optional rumahl Connector adds deeper capabilities.
- **Native** — rumahl installs and manages a supported system, with maintained
  builds published and updated through GitHub.

Capabilities such as `storage.snapshots.create` or `system.health.read` define
what an integration can do. The installation level never grants permissions.
The connector specification and provider interfaces are public so the community
can add new integrations.

## Live demo

The homepage and `/demo` embed a running rumahl OS instance in an `<iframe>`.
The instance is external and configurable — the website never bundles the OS.

```sh
cp .env.example .env
# then set the URL of a hosted instance, a QEMU image, or your own device:
NEXT_PUBLIC_RUMAHL_DEMO_URL=https://demo.rumahl.com
```

The public deployment uses `https://demo.rumahl.com`, which is also the default
when the variable is empty.

## Community & blog (Discourse)

The community platform is a self-hosted [Discourse](https://www.discourse.org/)
at `https://community.rumahl.com` (see the separate `discourse` project for the
Docker setup). Articles and release notes are authored as Discourse topics and
rendered on this website in its own design — comments are the topic replies,
shown inline.

The website fetches content server-side at request time and falls back to the
local Markdown articles in `content/blog` whenever Discourse is not configured
or unreachable.

```sh
# .env
DISCOURSE_URL=https://community.rumahl.com
DISCOURSE_API_KEY=            # optional (private instance / rate limits)
DISCOURSE_API_USERNAME=website
DISCOURSE_BLOG_CATEGORY=blog
DISCOURSE_RELEASES_CATEGORY=releases
DISCOURSE_REVALIDATE=300
```

## Markdown and AI access

Every editorial page has a Markdown representation generated from the same
content as the HTML view:

- Append `.md` to a URL, for example `/docs/installation.md` or `/brand.md`.
- `/docs/ai.md` is the agent-oriented documentation entry point with status, answering rules and machine-readable links.
- Send `Accept: text/markdown` to receive Markdown directly.
- Add `?format=md` as an explicit fallback.

The compact index at `/llms.txt` follows the llms.txt convention and links to
the Markdown version of every guide, support article, developer document,
design document, blog post and legal page. `/llms-full.txt` contains the
complete text in one file. Markdown responses advertise their canonical HTML
page in a `Link` header.

Documentation has its own stable entry point because it changes frequently:
`/docs/llms.txt` indexes user docs, support, developer docs and design docs;
`/docs/llms-full.txt` contains that full documentation set only. Both are linked
from the site-wide `/llms.txt`.

The implementation lives in `lib/markdown.ts`, the route handlers under
`app/md/`, and the content-negotiation rewrite in `proxy.ts`.

## Brand guidelines

`/brand` is the structured brand-guidelines page: naming, logo, avatars,
wordmark, product logos, construction, clear space, minimum sizes, colour, usage
examples, partner lockups, permissions and trademarks. It has a sticky section navigation
and per-section asset links, plus a complete ZIP download at
`/brand/rumahl-brandmark.zip`. The monogram and the wordmark are separate marks
and are never combined into a lockup. Product logos such as `r | Design` and
`r | OS` combine the r with a product name at the same total line height — 1× the
Inter font size — set in Inter Medium; the i dot and g descender may extend
beyond the r. They are reserved for official rumahl surfaces and may not be used
by third parties. All hues are allowed, but the tint must
match: light surfaces use a deeper tint, dark surfaces a lighter tint, and the
whole mark keeps one colour value; on photography only white or black is used.
The colour section shows representative rumahl tones on both light and dark
surfaces, explains how the approved tints are built (`hsl(H 42% 34%)` light,
`hsl(H 55% 68%)` dark), explains when colour is useful, shows light tinted
backgrounds, and includes an interactive hue wheel. The mark inside the wheel
cycles through the hue range at the selected approved tint until a colour is
selected. CSS and JSON colour tokens are published alongside the assets. Avatars use the monogram at several sizes with light, dark
and sand backgrounds. The construction study shows the whole wordmark as a
contour with all nine r parts highlighted. Partner lockups are allowed with
either the rumahl wordmark or the monogram on the left and a × between the
marks; both marks use the same visual height and the same gap on each side of
the ×. They are never merged. The Home Assistant example uses the official Open
Home Foundation logomark and follows the Home Assistant name-and-logo guidelines.
The About page links to the brand guidelines. The name and logo remain governed
by the trademark policy.

## Development

```sh
pnpm install --frozen-lockfile
pnpm dev          # start the dev server (port 3000, or the next free port)
pnpm run build    # build the deployable site
pnpm start        # preview the built site locally
```

## Other commands

- `pnpm lint` — ESLint
- `pnpm exec tsc --noEmit` — type check
- `pnpm db:generate` — generate Drizzle migrations (only if D1 is enabled)

## Project layout

- `app/` — routes (home, docs, help, developers, design, legal, blog, releases, demo, integrations, …)
- `components/rumahl/` — brand, navigation, sections and the live-demo frame
- `components/rumahl/integrations.tsx` — integration homepage section
- `components/rumahl/knowledge.ts` — user docs, support articles and FAQs
- `components/rumahl/developer-docs.ts` — separate developer documentation
- `components/design/` · `app/design/` — independent RWDS/RUI design microsite and Color Table Generator
- `storybook-rwds/` — Storybook for the website design system
- `content/homepage.ts` — editorial homepage modules
- `content/brand.ts` — brandmark, colour and usage content for `/brand`
- `content/blog/*.md` — fallback articles (used until Discourse is connected)
- `lib/discourse.ts` — server-side Discourse client (blog, releases, comments)
- `lib/markdown.ts` — Markdown serializers for pages, guides, blog, releases and legal
- `public/brand/` — original SVG brandmark assets, ZIP download and usage notes
- `public/icons/partners/` — official partner marks with source and trademark notes
- `lib/` — blog, releases and legal content

The developer documentation reflects the real rumahl repository and its linked
`rumahl-host` worktree: Rust platform service, signed app packages, capabilities,
OIDC, shell contracts and the `@rumahl/ui` Storybook.
- `public/` — images and favicon

## Open source

The site is part of the rumahl project. See the main repository's
[contributing guide](https://github.com/rumahl/rumahl/blob/main/CONTRIBUTING.md),
[code of conduct](https://github.com/rumahl/rumahl/blob/main/CONTRIBUTING.md)
and [trademark policy](https://github.com/rumahl/rumahl/blob/main/TRADEMARK.md).

## Editorial approach

Keep the existing visual design while writing factual project documentation.
Avoid absolute promises about compatibility, security, support or feature
availability. Describe development status and link to the relevant guide.

User guides in `components/rumahl/knowledge.ts` start with project status,
local setup, a first session and troubleshooting. Developer guides in
`components/rumahl/developer-docs.ts` cover setup, repository boundaries,
troubleshooting, contributions and technical reference. Both article arrays
feed the existing navigation, search and article routes.

Technical additions were checked against the local rumahl source and its
`CONTRIBUTING.md`, `docs/development.md` and frontend package scripts on
20 October 2026. Recheck commands when the platform changes. Project operator
details are centralized in `lib/legal/company.ts`; its historical export name
is retained for compatibility with the legal document imports.

## Photography

Follow [IMAGE_POLICY.md](IMAGE_POLICY.md): human-made, relevant photography only; no AI images. Image provenance is recorded in `content/photo-sources.json`, and public credits are available at `/photography`.
