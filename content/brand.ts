/**
 * Brandmark content shared by the /brand page and the Markdown view.
 * Keep the mark description factual: it is the supplied rumahl wordmark,
 * not a redrawn or generated approximation.
 *
 * The monogram and wordmark are separate marks. They must never be combined
 * into a lockup. The construction study shows the wordmark made of repeated
 * “r” parts, but is documentation, not a combined logo.
 */

export const brandNaming = {
  intro:
    'Write the name as one word, always lowercase in running text. The operating system is rumahl OS. In code and package names, use lowercase rumahl.',
  write: ['rumahl', 'rumahl OS', 'Nextcloud for rumahl', 'rumahl-nextcloud'],
  dontWrite: ['Rumahl', 'Rumahl OS', 'rumahl Nextcloud', 'Nextcloud by rumahl'],
  notes: [
    'In running text, write rumahl in lowercase, one word.',
    'The operating system is rumahl OS: lowercase rumahl, capital OS.',
    'In code and package names, use lowercase rumahl, for example @rumahl/ui or rumahl-nextcloud.',
    'For integrations and partner projects, lead with your own name: Nextcloud for rumahl or rumahl-nextcloud. Do not write rumahl Nextcloud or Nextcloud by rumahl.',
  ],
} as const;

export const brandIntro =
  'The rumahl brandmark is one lowercase word, drawn as one shape. The first letter — the “r” — is also the standalone icon. The icon and the wordmark are separate marks and are never displayed together as a combined logo.';

export const brandParts = [
  {
    id: 'monogram',
    title: 'Monogram',
    label: 'The “r”',
    text: 'Used for app icons, the launcher, favicons and places where the full wordmark would be too small. Keep the supplied proportions. Never place the wordmark beside it.',
    asset: '/brand/rumahl-mark.svg',
    assetLabel: 'Download monogram (SVG)',
  },
  {
    id: 'wordmark',
    title: 'Wordmark',
    label: 'rumahl',
    text: 'The primary brandmark for headers, documents, presentations and editorial covers. The word is lowercase and geometric. Never add the monogram beside it.',
    asset: '/brand/rumahl-wordmark.svg',
    assetLabel: 'Download wordmark (SVG)',
  },
] as const;

export const brandConstruction = {
  eyebrow: 'Construction',
  title: 'One r. Nine parts.',
  text: 'The wordmark as contour, with each r part highlighted. The same r shape builds r, u, m, a and h; the l remains the straight stem.',
  note: 'The monogram and the wordmark remain separate marks.',
  parts: [
    {
      letter: 'r',
      count: '1×',
      note: 'The wordmark begins with the icon itself.',
    },
    {
      letter: 'u',
      count: '2×',
      note: 'Two r parts, one rotated and joined to the other.',
    },
    {
      letter: 'm',
      count: '4×',
      note: 'Four r parts form the two arches and stems.',
    },
    {
      letter: 'a',
      count: '1×',
      note: 'One r part forms the right side of the a.',
    },
    {
      letter: 'h',
      count: '1×',
      note: 'One r part forms the right side of the h.',
    },
    {
      letter: 'l',
      count: 'stem',
      note: 'The final l is the straight stem.',
    },
  ],
} as const;

export const brandClearSpace = {
  title: 'Clear space and size',
  text: 'Keep at least the height of the monogram free around the mark. Nothing — type, images, borders or other logos — belongs inside that space. The same rule applies to the wordmark, the monogram and partner lockups.',
  rule: 'x = the height of the “r”',
};

export const brandLockupSpecs = [
  'Both marks use the same visual height.',
  'Use the same gap on each side of the ×.',
  'Keep at least x clear space around the whole lockup; x = the height of the rumahl mark.',
  'If the partner’s own clear-space rule is larger, use the larger value.',
] as const;

export const brandMinSizes = [
  {label: 'Monogram', value: '16 px', note: 'Digital minimum'},
  {label: 'Wordmark', value: '72 px wide', note: 'Digital minimum'},
  {label: 'Print', value: '12 mm wide', note: 'Wordmark minimum'},
];

export const brandRules = [
  {
    title: 'Do',
    items: [
      'Use the supplied SVG files without redrawing or re-typesetting them.',
      'Use any single solid colour. The whole mark keeps one colour value.',
      'On photography, use white or black only.',
      'Preserve the proportions and leave the documented clear space.',
      'Treat the monogram and the wordmark as separate marks.',
    ],
  },
  {
    title: 'Do not',
    items: [
      'Combine the monogram and the wordmark into a lockup.',
      'Stretch, squeeze, rotate or outline the mark.',
      'Add shadows, bevels, gradients or decorative containers.',
      'Use several colours in one mark.',
      'Use the mark to imply endorsement, partnership or official support.',
    ],
  },
] as const;

export const brandColourPolicy =
  'All hues are allowed, but the tint has to match the background. Use the light tint on light surfaces and the dark tint on dark surfaces. The whole mark keeps one colour value. On photography or video, the mark must be white or black only. Light tints are allowed as backgrounds.';

export const brandTints = {
  light: {saturation: 42, lightness: 34},
  dark: {saturation: 55, lightness: 68},
} as const;

export const brandTintGuide = [
  {
    mode: 'Light',
    saturation: brandTints.light.saturation,
    lightness: brandTints.light.lightness,
    surfaces: 'Light surfaces, paper, pale tints',
  },
  {
    mode: 'Dark',
    saturation: brandTints.dark.saturation,
    lightness: brandTints.dark.lightness,
    surfaces: 'Dark surfaces, deep green, dark UI',
  },
] as const;

export const brandTintNote =
  'The tint is a starting point, not a lock. Small adjustments for contrast, accessibility or a special surface are allowed; keep the hue and the same overall depth. The drawing, not the exact colour, carries the mark.';

export const brandColorFiles = [
  {label: 'Colour tokens, CSS', href: '/brand/rumahl-colors.css', meta: 'CSS'},
  {label: 'Colour tokens, JSON', href: '/brand/rumahl-colors.json', meta: 'JSON'},
] as const;

export const brandTypography = {
  family: 'Inter',
  fallback: 'system-ui, Segoe UI, Roboto, Noto Sans, sans-serif',
  note: 'The website uses Inter for the interface and JetBrains Mono for code, labels and measured details. The wordmark itself is a supplied drawing and must not be recreated with a font.',
};

export const brandDownloads = [
  {
    title: 'Monogram',
    description: 'The standalone “r” in rumahl green.',
    href: '/brand/rumahl-mark.svg',
    meta: 'SVG · 122 × 215',
  },
  {
    title: 'Wordmark',
    description: 'The full lowercase wordmark in rumahl green.',
    href: '/brand/rumahl-wordmark.svg',
    meta: 'SVG · 1212 × 283',
  },
  {
    title: 'Ink monogram',
    description: 'The “r” in ink for one-colour light reproduction.',
    href: '/brand/rumahl-mark-black.svg',
    meta: 'SVG · 122 × 215',
  },
  {
    title: 'Ink wordmark',
    description: 'The full wordmark in ink.',
    href: '/brand/rumahl-wordmark-black.svg',
    meta: 'SVG · 1212 × 283',
  },
  {
    title: 'White monogram',
    description: 'The “r” in white for dark surfaces and photographs.',
    href: '/brand/rumahl-mark-white.svg',
    meta: 'SVG · 122 × 215',
  },
  {
    title: 'White wordmark',
    description: 'The full wordmark in white for dark surfaces and photographs.',
    href: '/brand/rumahl-wordmark-white.svg',
    meta: 'SVG · 1212 × 283',
  },
  {
    title: 'App icon',
    description: 'The square green treatment for app icons and launchers.',
    href: '/brand/rumahl-app-icon.svg',
    meta: 'SVG · 512 × 512',
  },
  {
    title: 'Avatar, light',
    description: 'Square avatar with a light green tint. Safe for a round crop.',
    href: '/brand/rumahl-avatar-light.svg',
    meta: 'SVG · 1024 × 1024',
  },
  {
    title: 'Avatar, dark',
    description: 'Square avatar with a deep green background and a light mark.',
    href: '/brand/rumahl-avatar-dark.svg',
    meta: 'SVG · 1024 × 1024',
  },
  {
    title: 'Avatar, sand',
    description: 'Square avatar with a light sand tint and an ink mark.',
    href: '/brand/rumahl-avatar-sand.svg',
    meta: 'SVG · 1024 × 1024',
  },
] as const;

export const brandColorGuidance = [
  'Use ink or rumahl green as the default. These are the clearest choices for most applications.',
  'All hues are allowed, but only at the approved tint. The light tint is deeper; the dark tint is lighter. A coloured logo is not always the most useful.',
  'Match the tint to the background and check contrast. Light tints are allowed as backgrounds.',
  'On photography or video, use white or black only.',
] as const;

export const brandTintedBackgrounds = [
  {name: 'Mist green', value: '#EEF4EE'},
  {name: 'Sand', value: '#F6F1E7'},
  {name: 'Mist blue', value: '#EEF0F7'},
  {name: 'Rose', value: '#F7EEF2'},
  {name: 'Sky', value: '#E8F1F6'},
  {name: 'Stone', value: '#F2F0EC'},
] as const;

export const brandPartnerExample = {
  name: 'Home Assistant',
  src: '/icons/partners/home-assistant-logomark-color.svg',
  source: 'https://contributors.home-assistant.io/brand/name-and-logo/',
  note: 'Home Assistant is a trademark of the Open Home Foundation. Used for identification only; no endorsement or partnership is implied. Commercial use requires written permission from the Open Home Foundation.',
} as const;

export const brandPartnerRules = [
  'Follow the partner’s own brand guidelines. For Home Assistant, use the official mark, write “Home Assistant” in full with capital H and A, and follow the Open Home Foundation’s permission rules.',
  'A partner lockup uses separate marks with a × between them. Never merge, overlap or redraw either mark.',
  'Use the official partner file and colours. Do not recolour, crop or put a partner logomark in a square or coloured container unless their guidelines allow it.',
  'Use a calm, neutral surface. On photography, use the partner’s approved version; rumahl stays white or black.',
  'Use a partner mark only for a real, current relationship. Do not imply endorsement or support that does not exist.',
] as const;

/** Representative rumahl tones at the approved light and dark tints. */
export const brandSpectrum = {
  light: [
    '#1f4a37',
    '#28694c',
    '#2f8f6f',
    '#3f6b56',
    '#5f7a4a',
    '#7c8a4a',
    '#b0793a',
    '#a05a3a',
    '#4f6370',
    '#18201c',
  ],
  dark: [
    '#8fd6b6',
    '#6cc79b',
    '#5fc79f',
    '#8fd0b4',
    '#c2c77a',
    '#d7c08a',
    '#d9ad6b',
    '#e0a080',
    '#a9c4b6',
    '#f8faf7',
  ],
} as const;

export const brandDoNot = [
  'Do not combine the monogram and the wordmark into a lockup.',
  'Do not stretch, rotate, outline or re-typeset the mark.',
  'Do not add gradients, shadows, bevels or decorative containers.',
  'Do not use more than one colour value in a mark.',
  'Do not use a colour other than white or black on photography.',
  'Do not merge, overlap or recolour a partner mark.',
  'Do not use a rumahl product logo or imply an official rumahl product.',
  'Do not imply endorsement, partnership or official support.',
] as const;

export const brandProductLogos = [
  {name: 'Design', surface: 'rumahl Design'},
  {name: 'OS', surface: 'rumahl OS'},
] as const;

export const brandProductLogoRules = [
  'The r icon matches the total line height of the product name (1× the font size). Ascenders and descenders — the i dot and the g — may extend beyond the r; that is allowed.',
  'Set the product name in Inter Medium 500, title case, with tight tracking.',
  'Use a 1px divider with equal gaps on both sides.',
  'Use one solid colour per product logo.',
  'Product logos are reserved for rumahl product surfaces. Third parties may not use them or imply an official product.',
] as const;

export const brandPermissions = {
  allowed: [
    'Use the unmodified wordmark or monogram to refer to the rumahl project in articles, documentation, talks and links.',
    'Use the mark in a personal or community context that accurately describes the project.',
    'Use any single solid colour, including white or black on photography.',
    'Link the mark to rumahl.com or the project repository.',
  ],
  ask: [
    'Commercial use that could suggest endorsement or an official relationship.',
    'Co-branding, partner lockups, merchandise, domain names, app icons or product names.',
    'Any use that changes the mark, combines it with another mark or places it in a new context.',
  ],
  notAllowed: [
    'Combine the monogram and the wordmark into a lockup.',
    'Redraw, stretch, rotate, outline or re-typeset the mark.',
    'Add gradients, shadows, multiple colours or decorative containers.',
    'Use the mark on photography in any colour other than white or black.',
    'Use a rumahl product logo such as “r | Design” or “r | OS”, or present your product as an official rumahl product.',
    'Imply endorsement, partnership or official support.',
    'Use the mark as your own product, app or company identity.',
  ],
} as const;

export const brandTrademarkNote =
  'The rumahl name, brandmark and product logos are governed by the trademark policy. The source code is available under Apache-2.0; the brandmark and product logos are not automatically licensed for every use. Ask before using the mark in a way that suggests endorsement or an official relationship.';
