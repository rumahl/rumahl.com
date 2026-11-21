# RWDS Storybook

Storybook for the **rumahl Web Design System (RWDS)**, the design system used by
rumahl.com. It does not document rumahl UI (RUI); RUI has its own Storybook in
`frontend/packages/storybook` in the rumahl repository.

## Run

```sh
pnpm --dir storybook-rwds install --ignore-workspace
pnpm --dir storybook-rwds approve-builds --all --ignore-workspace
pnpm --dir storybook-rwds storybook
# http://localhost:6007
```

pnpm may report the optional `esbuild` postinstall as ignored until it is
approved. Running `approve-builds` once is enough for the local installation.

## Build the static site

```sh
pnpm --dir storybook-rwds build-storybook
# output: storybook-rwds/dist
```

The deployed copy lives at `public/design/storybook/rwds/`. Replace it after a
build:

```sh
rm -rf public/design/storybook/rwds
cp -a storybook-rwds/dist public/design/storybook/rwds
```

The RUI Storybook is published alongside it at
`public/design/storybook/rui/`. It is built from `rumahl/rumahl` with
`pnpm --dir frontend build-storybook`, not from this package.

## Scope

The Storybook renders the actual RWDS website components through
`components/rwds`, plus the shared website styles from `app/globals.css`. It does
not render the design microsite or RUI.

- RWDS primitives: Button, TextLink, Tag, Heading, Text, Container, Section, Grid,
  Stack, Card, Callout, Disclosure, Figure, DataTable, Swatch and CodeBlock
- Foundations: colour roles, typography, containers, layout, surfaces and motion
- Header and footer: actual website navigation and footer
- Titles and text: display title, section title, card title, eyebrow, lead and body
- Containers and spacing: section frame and documentation content frame
- Media: actual EditorialImage, DeviceArt and the Embla-based HighlightCarousel
- Docs components: DocsCard, DocsSidebar, DocsContent and the full ArticleView
- Actions, cards, mega panel, search, showcase, product-page patterns, tables and FAQ
- Actual page components: Hero, Home sections, Integrations, News, Footer, Lineup,
  Installer and ProductPage
- Color Table Generator: interactive accent-scale generation with contrast checks

`next/link` and `next/navigation` are shimmed for Storybook so the actual
website components render outside the Next.js runtime. `public/images` is served
as a static directory so editorial images resolve in stories. The production
components and CSS remain the source of truth.

The stories use the real RWDS tokens from `app/rwds-tokens.css` and the website
design styles. Do not import `@rumahl/ui` or the `--rumahl-ui-*` namespace here.
