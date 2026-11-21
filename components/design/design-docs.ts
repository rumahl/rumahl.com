import type {Article} from '@/components/rumahl/knowledge';

export const designDocs: Article[] = [
  {
    slug: 'overview',
    title: 'Design systems overview',
    summary:
      'What the rumahl design documentation covers, how RWDS and RUI relate, and which system applies to a given surface.',
    area: 'Overview',
    group: 'Start here',
    readTime: 4,
    updated: '20 October 2026',
    featured: true,
    sections: [
      {
        title: 'Two systems',
        text: 'rumahl has two design systems. They share brand and accessibility constraints, but they are separate implementations with separate tokens, components and release cycles. The design site switches between Overview, Web · RWDS and OS · RUI in the header. Each system has its own overview and component explorer; shared pages cover docs, Storybook, comparison and resources.',
        table: {
          columns: ['System', 'Surface', 'Reference'],
          rows: [
            ['RWDS — rumahl Web Design System', 'Websites, documentation, help, editorial content', '/design/rwds'],
            ['RUI — rumahl UI', 'rumahl OS shell and installed apps', '/design/rui'],
          ],
        },
      },
      {
        title: 'Which system applies?',
        list: [
          'A page, article, documentation entry or campaign uses RWDS.',
          'A shell, window, settings page, control or app surface uses RUI.',
          'A shared brand decision affects both and must be evaluated as a cross-system change.',
          'A component that seems to fit both surfaces is usually two components with a shared brand token.',
        ],
      },
      {
        title: 'RUI is not a website system',
        text: 'RUI is built for the operating-system shell. Its density, window chrome, materials and interaction model assume an OS surface. Using RUI on a website is not meaningful, even where a component can technically render in a browser. Conversely, RWDS is not an OS kit.',
        callout: {
          tone: 'important',
          title: 'Rendering is not fit',
          text: 'A component can display in a browser and still be wrong for the surface. Choose the system by focus, density and semantics, not by whether it renders.',
        },
      },
      {
        title: 'What this documentation contains',
        text: 'The design docs cover tokens, components, theming, adoption, versioning and contribution. Storybook is the canonical component reference for RUI. RWDS is documented in these pages and has its own Storybook for web components.',
        list: [
          'RWDS tokens and components',
          'RUI scope, tokens, materials and theming',
          'Adoption and versioning notes',
          'Contribution rules and the boundary between the systems',
        ],
      },
      {
        title: 'Related documentation',
        list: [
          'Storybook: /design/storybook',
          'Comparison and boundary rules: /design/systems',
          'Source and tooling: /design/resources',
          'Platform developer documentation: /developers',
        ],
      },
    ],
  },
  {
    slug: 'versioning',
    title: 'Versioning & compatibility',
    summary:
      'How RWDS and RUI evolve, what counts as a breaking change and why the two systems are not versioned as one package.',
    area: 'Overview',
    group: 'Start here',
    readTime: 4,
    updated: '20 October 2026',
    sections: [
      {
        title: 'Separate release surfaces',
        text: 'RWDS follows the website and its content. RUI follows the OS frontend and the @rumahl/ui package. A release of one system does not imply a release of the other.',
      },
      {
        title: 'Compatibility rules',
        list: [
          'Token roles and component props are treated as contracts.',
          'New tokens, variants and props are additive within a major version.',
          'Removing or redefining a public token or prop is a breaking change.',
          'RUI component props and theme token IDs follow semver.',
          'RWDS theme roles must keep their semantic meaning across website releases.',
          'Deprecate first, then remove in a new major version.',
        ],
      },
      {
        title: 'Storybook and fixtures',
        text: 'RUI keeps component stories and tests next to the components. RWDS keeps web stories in its own Storybook. Both should be updated together with the implementation they document.',
      },
      {
        title: 'No combined package',
        callout: {
          tone: 'important',
          title: 'Do not collapse the systems',
          text: 'RWDS and RUI may share a brand palette, but they are not a single versioned package. Importing one into the other creates accidental compatibility promises.',
        },
      },
    ],
  },
  {
    slug: 'rwds-tokens',
    title: 'RWDS tokens',
    summary:
      'The semantic colour, typography, shape, spacing and motion roles used by the rumahl website.',
    area: 'Web design system',
    group: 'RWDS',
    readTime: 5,
    updated: '18 November 2026',
    featured: true,
    sections: [
      {
        title: 'Token source',
        text: 'RWDS tokens are CSS custom properties defined in the website theme. The shared values live in app/rwds-tokens.css; the website imports them into its global stylesheet.',
        code: {
          language: 'css',
          content:
            ':root {\n  --background: #e8ece7;\n  --surface: #f8faf7;\n  --foreground: #18201c;\n  --foreground-muted: #5f6a62;\n  --accent: #28694c;\n  --accent-hover: #1f5a41;\n  --accent-secondary: #3f8a68;\n  --border: #d3dbd1;\n}',
        },
      },
      {
        title: 'Colour roles',
        table: {
          columns: ['Token', 'Role'],
          rows: [
            ['--accent', 'Primary brand and action signal'],
            ['--accent-secondary', 'Quiet emphasis and secondary iconography'],
            ['--accent-hover', 'Hover and pressed state for primary actions'],
            ['--accent-contrast', 'Text on accent surfaces'],
            ['--background', 'Page canvas'],
            ['--surface', 'Cards, panels and documentation'],
            ['--surface-glass', 'Sticky navigation and overlays'],
            ['--foreground', 'Primary text'],
            ['--foreground-muted', 'Secondary copy and metadata'],
            ['--border', 'Hairline separation'],
          ],
        },
      },
      {
        title: 'Accent families',
        text: 'RWDS supports multiple accent families. A project can generate a different scale without changing the fixed identity: semantic roles, typography, spacing, radii, surfaces and motion stay the same.',
        list: [
          'The seed colour is the 500 step of a 50–950 scale.',
          'Light and dark semantic roles are picked from steps that meet contrast.',
          'Only the accent family changes; layout and type do not.',
          'Use the Color Table Generator at /design/color to create and validate a scale.',
        ],
      },
      {
        title: 'Typography, spacing and shape',
        list: [
          'Inter is the primary text and display face.',
          'JetBrains Mono is reserved for code, tokens and technical labels.',
          'Display tracking stops at -0.035em so large headings stay legible.',
          'Body copy uses 1.65 line height and a 68ch measure (45–75 characters).',
          'Spacing steps: 4, 8, 12, 16, 24, 32, 48, 64 and 96px.',
          'Interactive targets are at least 44px high; compact filters keep 40px.',
          'Radii: 12–28px for cards, 20–40px for sections, pill-shaped actions.',
          'The content frame is 1320px with 56px desktop gutters.',
        ],
      },
      {
        title: 'Rules',
        list: [
          'Components read semantic roles, never hard-coded colours.',
          'Light and dark provide values for the same roles.',
          'New tokens must be additive and documented before use.',
          'RWDS tokens do not use the RUI --rumahl-ui-* namespace.',
        ],
      },
    ],
  },
  {
    slug: 'color-tables',
    title: 'Colour tables & multiple palettes',
    summary:
      'How RWDS supports different accent families without losing its identity, and how to generate an accessible colour table.',
    area: 'Web design system',
    group: 'RWDS',
    readTime: 6,
    updated: '20 October 2026',
    featured: true,
    sections: [
      {
        title: 'One identity, several accents',
        text: 'RWDS is not tied to rumahl green. A project can use blue, violet or amber and still be an RWDS surface. What makes the system recognisable is the role model, typography, spacing, radii, surfaces and motion — not a single hue. The neutral surfaces can also be tinted from the seed hue, with a strength control.',
        callout: {
          tone: 'important',
          title: 'Change the accent, not the system',
          text: 'A colour table changes the accent family, the neutral tint and the contrast colour on accent surfaces. It does not change layout, type, spacing or motion. Changing those would be a different design system, not a palette.',
        },
      },
      {
        title: 'Generate a table',
        text: 'The Color Table Generator turns a seed colour into a systematic 50–950 scale, tinted neutral surfaces, semantic light and dark roles, contrast readings and copy-ready CSS.',
        list: [
          'Open the generator: /design/color',
          'Enter a hex value or pick a colour.',
          'Compare the light and dark previews.',
          'Check the contrast column before copying the CSS.',
        ],
      },
      {
        title: 'Scale rules',
        list: [
          'The seed is the 500 step.',
          'Lighter steps move toward the paper tone; darker steps move toward ink.',
          'Hue stays fixed; chroma is reduced at the extremes so the scale does not turn neon or muddy.',
          'Neutral surfaces are derived from the same hue with a low chroma. The tint slider controls how much hue enters the background.',
          'Each step lists its contrast against the generated light and dark backgrounds.',
          'Light accent roles are chosen from steps that meet normal-text contrast; dark roles are chosen from the lighter end.',
        ],
      },
      {
        title: 'Semantic roles',
        table: {
          columns: ['Token', 'Role', 'How it is chosen'],
          rows: [
            ['--accent', 'Primary action and brand signal', 'A step that meets contrast with the theme canvas'],
            ['--accent-secondary', 'Hover, links and quiet emphasis', 'A neighbouring step in the same scale'],
            ['--accent-contrast', 'Text on accent surfaces', 'White or ink, whichever contrasts more'],
            ['--background / --surface', 'Page and content surfaces', 'Tinted neutrals from the seed hue and tint strength'],
            ['--foreground / --foreground-muted', 'Text roles', 'Tinted text roles that keep the same semantic meaning'],
          ],
        },
      },
      {
        title: 'Contrast',
        text: 'The generator marks 4.5:1 or higher as passing for normal text. Contrast is checked against the generated light and dark backgrounds. Accent roles that cannot reach that threshold are a warning: choose a darker or lighter seed or reduce the tint rather than forcing the role.',
        callout: {
          tone: 'warning',
          title: 'Do not force a failing accent',
          text: 'If a seed cannot produce an accessible accent on the chosen canvas, fix the seed or the canvas. Do not hard-code a text colour to compensate.',
        },
      },
      {
        title: 'CSS output',
        text: 'Paste the generated variables into the project theme. The output overrides the accent family and the neutral surfaces; typography, spacing, radii and motion stay unchanged.',
        code: {
          language: 'css',
          content:
            ':root {\n  --accent: #17543a;\n  --accent-secondary: #28694c;\n  --accent-contrast: #ffffff;\n  --background: #e8ece7;\n  --surface: #f8faf7;\n  --foreground: #18201c;\n  --border: #d3dbd1;\n}\n\n[data-theme="dark"] {\n  --accent: #52896e;\n  --accent-secondary: #28694c;\n  --accent-contrast: #0f1512;\n  --background: #0f1512;\n  --surface: #161f1a;\n  --foreground: #eef4f0;\n  --border: #30443a;\n}',
        },
      },
      {
        title: 'Boundary with RUI',
        text: 'RUI does not use the RWDS accent table. It has its own token namespace, materials and theme model. Do not apply an RWDS palette to RUI components or the other way around.',
      },
    ],
  },
  {
    slug: 'rwds-components',
    title: 'RWDS components',
    summary:
      'The web surfaces and components covered by the rumahl Web Design System, and where their boundaries are.',
    area: 'Web design system',
    group: 'RWDS',
    readTime: 5,
    updated: '20 October 2026',
    sections: [
      {
        title: 'Scope',
        text: 'RWDS covers the surfaces served by rumahl.com: navigation, editorial sections, documentation, help, blog, releases and the design microsite itself.',
      },
      {
        title: 'Inventory',
        table: {
          columns: ['Group', 'Surfaces'],
          rows: [
            ['Primitives', 'Button, TextLink, Tag, Eyebrow, Heading and Text'],
            ['Layout', 'Container, Section, Grid and Stack'],
            ['Surfaces', 'Card, Callout, Disclosure and Figure'],
            ['Data', 'DataTable, Swatch and CodeBlock'],
            ['Navigation', 'Sticky navigation, mega panels, mobile navigation, search and theme switch'],
            ['Editorial', 'Heroes, highlights, stories, collections and invitation blocks'],
            ['Documentation', 'Docs home, article layout, sidebar, table of contents, search and cards'],
            ['Actions', 'Pill buttons, text links, tags and metadata rows'],
            ['Media', 'Editorial photography, device art and branded compositions'],
            ['Colour', 'Color Table Generator for multiple accent families'],
          ],
        },
      },
      {
        title: 'Not in RWDS',
        list: [
          'OS window controls and window chrome',
          'Shell toolbars, trays and menu bars',
          'OS materials and wallpaper-aware surfaces',
          'Installed app layouts and mobile OS shells',
          'Components that require the RUI token namespace',
          'RUI itself: it is an operating-system system and is not intended for websites',
        ],
      },
      {
        title: 'Storybook',
        text: 'The RWDS Storybook renders the actual website components from components/rwds: primitives, header, footer, media, slideshow, docs cards, sidebar, article design and the page compositions.',
        list: [
          'Open the RWDS component explorer: /design/rwds/components',
          'Open the RUI component explorer: /design/rui/components',
          'Open the full Storybook: /design/storybook',
          'Inspect source: the website components and app/design/design.css',
          'Check the comparison before reusing an OS component: /design/systems',
        ],
      },
    ],
  },
  {
    slug: 'rwds-adoption',
    title: 'Adopting RWDS',
    summary:
      'Practical steps for using the rumahl web design language in another project, including tokens, components and licensing checks.',
    area: 'Web design system',
    group: 'RWDS',
    readTime: 4,
    updated: '20 October 2026',
    sections: [
      {
        title: 'What you can reuse',
        list: [
          'Semantic token roles and their light/dark values',
          'Typography scale and spacing rhythm',
          'Surface, border and elevation rules',
          'Documentation and content-card patterns',
          'Motion and reduced-motion rules',
        ],
      },
      {
        title: 'What you need to adapt',
        list: [
          'Navigation structure and information architecture',
          'Page composition and editorial imagery',
          'Product-specific content and status labels',
          'Any website-specific build integration',
        ],
      },
      {
        title: 'Steps',
        steps: [
          'Start from the token roles and define light and dark values for your project.',
          'Build the type scale and layout frame before adding components.',
          'Implement only the components you need; do not copy unused page sections.',
          'Check keyboard access, focus visibility and reduced motion.',
          'Review the licence and trademark rules before publishing.',
        ],
      },
      {
        title: 'Boundary',
        text: 'RWDS is a web system. If your project needs OS windows, shell controls or app surfaces, use RUI or build a separate surface instead of stretching RWDS.',
      },
    ],
  },
  {
    slug: 'rui-overview',
    title: 'RUI overview',
    summary:
      'The scope and architecture of rumahl UI, the design system and component library of the rumahl OS shell.',
    area: 'OS design system',
    group: 'RUI',
    readTime: 5,
    updated: '20 October 2026',
    featured: true,
    sections: [
      {
        title: 'Scope',
        text: 'RUI covers the rumahl OS shell and installed apps: windows, toolbars, controls, overlays, navigation, layouts and themes. It is a component package, not a website skin.',
        callout: {
          tone: 'important',
          title: 'Not for websites',
          text: 'RUI is an operating-system design system. It is not intended for websites or documentation pages. Those use RWDS. RUI components may render in a browser, but their focus and semantics are the OS shell.',
        },
        list: [
          'Package: @rumahl/ui in the rumahl frontend workspace',
          'Living component reference: Storybook',
          'Token namespace: --rumahl-ui-*',
          'Used by first-party and installed app surfaces',
        ],
      },
      {
        title: 'Architecture',
        list: [
          'Components, hooks, icons, styles and tests are versioned together.',
          'The shell owns behaviour; themes change presentation.',
          'Apps add content only through defined interfaces.',
          'Third-party app UI runs in an isolated context, not in the trusted shell.',
        ],
      },
      {
        title: 'Component groups',
        table: {
          columns: ['Group', 'Examples'],
          rows: [
            ['Window & chrome', 'Window, toolbar, tray, menu bar'],
            ['Controls', 'Button, inputs, select, search, stepper, color picker'],
            ['Feedback', 'Badge, notice, toast, progress, skeleton, tooltip'],
            ['Navigation', 'Tabs, steps, breadcrumbs, sidenav, navbar, list'],
            ['Overlays', 'Dialog, anchored popover, menus'],
            ['Layouts', 'App layout, settings, mobile shell, launcher, split views'],
          ],
        },
      },
      {
        title: 'Reference',
        list: [
          'Storybook: /design/storybook',
          'Developer Storybook guide: /developers/storybook',
          'Shell and UI contracts: /developers/shell-contracts',
        ],
      },
    ],
  },
  {
    slug: 'rui-tokens',
    title: 'RUI tokens & materials',
    summary:
      'The token namespaces, material states and wallpaper-aware surfaces used by rumahl UI.',
    area: 'OS design system',
    group: 'RUI',
    readTime: 5,
    updated: '20 October 2026',
    sections: [
      {
        title: 'Token namespace',
        text: 'RUI tokens are projected onto the shell root as --rumahl-ui-* custom properties. Components read those tokens; a theme supplies the values.',
        code: {
          language: 'css',
          content:
            '--rumahl-ui-color-accent\n--rumahl-ui-color-canvas-background\n--rumahl-ui-color-panel-background\n--rumahl-ui-color-text-primary\n--rumahl-ui-shape-radius-window\n--rumahl-ui-material-opacity',
        },
      },
      {
        title: 'Token groups',
        table: {
          columns: ['Group', 'Purpose'],
          rows: [
            ['color.*', 'Accent, surfaces, text, canvas, panel, outline and shadow'],
            ['material.*', 'Blur, saturation, opacity and glass strength'],
            ['shape.*', 'Corner radii and icon sizes'],
            ['motion.*', 'Durations and easing'],
            ['typography.*', 'UI and display faces, and the type scale'],
            ['layout.*', 'Layout primitives for shell and app surfaces'],
            ['texture.wallpaper', 'Wallpaper-aware surface treatment'],
            ['icon.gradient', 'Icon finish and brand detail'],
          ],
        },
      },
      {
        title: 'Material states',
        list: [
          'Glass: default control material for navigation and controls over the OS surface.',
          'Solid: flat, opaque surfaces where translucency would reduce clarity.',
          'Floating: an element state for controls that hover over a picture or another surface.',
          'A floating control is its own island; a bar is only for adjacent controls.',
        ],
      },
      {
        title: 'Rules',
        list: [
          'Components do not hard-code colours or radii.',
          'Themes must be able to restyle components through tokens.',
          'A theme cannot replace protected shell behaviour.',
          'Reduced-motion and focus states are part of the contract.',
        ],
      },
    ],
  },
  {
    slug: 'rui-theming',
    title: 'RUI theming',
    summary:
      'How RUI themes are defined as data, registered with the theme SDK and projected onto the shell.',
    area: 'OS design system',
    group: 'RUI',
    readTime: 5,
    updated: '20 October 2026',
    sections: [
      {
        title: 'Theme model',
        text: 'A theme is data: a validated set of tokens, optional CSS and safe templates. It is not arbitrary JavaScript and it does not replace shell behaviour.',
        list: [
          'id, name and supported modes',
          'Token values for colour, material, shape, motion, typography, layout and texture',
          'Optional theme-specific CSS',
          'Safe slot templates where a theme may provide structure',
        ],
      },
      {
        title: 'Example',
        code: {
          language: 'ts',
          content:
            'import { defineTheme, registerTheme } from "@rumahl/ui/sdk";\n\nexport const ocean = registerTheme(defineTheme({\n  id: "com.example.ocean",\n  name: "Ocean",\n  tokens: {\n    "color.accent": "#0b6ea8",\n    "color.canvas.background": "#071a24",\n    "color.panel.background": "#0d2733",\n    "color.text.primary": "#eaf4f9",\n    "shape.radius.window": "16px"\n  },\n  modes: ["light", "dark"]\n}));',
        },
      },
      {
        title: 'Runtime',
        list: [
          'ThemeProvider projects the active tokens onto the document root.',
          'The shell resolves the theme from account and device preferences.',
          'A theme switch produces a new configuration revision and stylesheet.',
          'Components only read tokens, so no component rebuild is needed.',
        ],
      },
      {
        title: 'Reference',
        text: 'The Storybook theme toolbar and the theme guides demonstrate the active token set and registered themes.',
      },
    ],
  },
  {
    slug: 'rui-adoption',
    title: 'Adopting RUI',
    summary:
      'How to use @rumahl/ui and its themes in an app, and which checks are required before shipping.',
    area: 'OS design system',
    group: 'RUI',
    readTime: 4,
    updated: '20 October 2026',
    sections: [
      {
        title: 'Use the package',
        text: 'RUI is consumed as @rumahl/ui inside the rumahl frontend workspace. Import styles once, wrap the app in ThemeProvider and I18nProvider, then use components from the package.',
      },
      {
        title: 'Checks',
        list: [
          'Component behaviour and accessibility tests pass.',
          'Stories cover default, variants, states and floating/glass overrides.',
          'Tokens are used instead of hard-coded values.',
          'Light and dark themes both render correctly.',
          'Reduced motion and keyboard focus are verified.',
        ],
      },
      {
        title: 'Boundary',
        text: 'RUI is not a website kit. Do not import it into RWDS pages to reuse a control; either build the web component in RWDS or reconsider the surface.',
      },
      {
        title: 'Reference',
        list: [
          'Storybook: /design/storybook',
          'Developer Storybook guide: /developers/storybook',
          'Package source: frontend/packages/ui',
        ],
      },
    ],
  },
  {
    slug: 'storybook',
    title: 'Storybook',
    summary:
      'The two Storybook builds: RUI from the rumahl repository and the RWDS Storybook for the website design system.',
    area: 'Tooling',
    group: 'Process',
    readTime: 4,
    updated: '20 October 2026',
    featured: true,
    sections: [
      {
        title: 'Two Storybooks',
        table: {
          columns: ['Storybook', 'System', 'Source'],
          rows: [
            ['RUI Storybook', 'rumahl UI', 'frontend/packages/storybook in rumahl/rumahl'],
            ['RWDS Storybook', 'rumahl Web Design System', 'storybook-rwds in the website repository'],
          ],
        },
        text: 'Both are static builds hosted under /design/storybook. Use /design/rwds/components and /design/rui/components to browse individual stories in a custom UI; the full Storybooks remain available for controls, addons and deep inspection. The RWDS Storybook imports the actual website components from components/rwds, including Header, titles, containers, media, image slideshow, docs cards, sidebar and article design. It uses the production website stylesheet, so the reference matches rumahl.com rather than the design microsite.',
      },
      {
        title: 'Run locally',
        code: {
          language: 'bash',
          content:
            '# RUI\npnpm --dir frontend install --frozen-lockfile\npnpm --dir frontend storybook\n\n# RWDS\npnpm --dir storybook-rwds install --ignore-workspace\npnpm --dir storybook-rwds storybook',
        },
      },
      {
        title: 'Build',
        code: {
          language: 'bash',
          content:
            'pnpm --dir frontend build-storybook\npnpm --dir storybook-rwds build-storybook',
        },
      },
      {
        title: 'Boundary',
        text: 'Do not merge the two Storybooks into one package. They depend on different surfaces, tokens and release cycles.',
      },
    ],
  },
  {
    slug: 'contributing',
    title: 'Contributing',
    summary:
      'How to propose and implement changes to RWDS or RUI without coupling the two systems.',
    area: 'Process',
    group: 'Process',
    readTime: 5,
    updated: '20 October 2026',
    featured: true,
    sections: [
      {
        title: 'Identify the surface',
        steps: [
          'Decide whether the change affects the website, the operating system or the shared brand.',
          'Choose RWDS, RUI or a cross-system brand decision.',
          'Check the existing tokens, components and stories before adding anything new.',
          'Open the change against the matching source and documentation.',
        ],
      },
      {
        title: 'RWDS contributions',
        list: [
          'Use semantic tokens and document any new role.',
          'Check light and dark, long-form readability and mobile layout.',
          'Update the RWDS Storybook when a shared web component changes.',
          'Do not import RUI components or the --rumahl-ui-* namespace.',
        ],
      },
      {
        title: 'RUI contributions',
        list: [
          'Add or update a component, story and test together.',
          'Keep component props and token IDs semver-stable.',
          'Use native elements and verify the a11y addon.',
          'Update Storybook and the developer documentation.',
        ],
      },
      {
        title: 'Cross-system changes',
        callout: {
          tone: 'important',
          title: 'Brand is shared, code is not',
          text: 'A shared palette or typeface change affects both systems and needs one decision. Reusing a component across surfaces needs a separate decision and usually means building two components.',
        },
      },
      {
        title: 'Review checklist',
        list: [
          'The change belongs to the correct system.',
          'Existing tokens or components were reused where possible.',
          'Accessibility and reduced motion were checked.',
          'Documentation and Storybook are updated.',
          'No cross-imports or accidental compatibility promises were introduced.',
        ],
      },
    ],
  },
];

export const designDocQuickLinks: {label: string; slug: string}[] = [
  {label: 'Overview', slug: 'overview'},
  {label: 'RWDS tokens', slug: 'rwds-tokens'},
  {label: 'RWDS components', slug: 'rwds-components'},
  {label: 'Colour tables', slug: 'color-tables'},
  {label: 'RUI overview', slug: 'rui-overview'},
  {label: 'RUI theming', slug: 'rui-theming'},
  {label: 'Storybook', slug: 'storybook'},
  {label: 'Contributing', slug: 'contributing'},
];
