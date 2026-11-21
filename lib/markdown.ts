import {docs, help, type Article, type ArticleSection} from '@/components/rumahl/knowledge';
import {developerDocs} from '@/components/rumahl/developer-docs';
import {designDocs} from '@/components/design/design-docs';
import {posts, type BlogPost} from '@/lib/blog';
import {releases, type Release} from '@/lib/releases';
import {company} from '@/lib/legal/company';
import {privacy} from '@/lib/legal/content/privacy';
import {tos} from '@/lib/legal/content/tos';
import {impressum} from '@/lib/legal/content/impressum';
import {cookies} from '@/lib/legal/content/cookies';
import {contributing} from '@/lib/legal/content/contributing';
import {codeOfConduct} from '@/lib/legal/content/code-of-conduct';
import {trademark} from '@/lib/legal/content/trademark';
import {apps} from '@/lib/legal/content/apps';
import {osPrivacy} from '@/lib/legal/content/os-privacy';
import {osTos} from '@/lib/legal/content/os-tos';
import type {BilingualDoc, LegalBlock} from '@/lib/legal/types';
import {
  brandClearSpace,
  brandColourPolicy,
  brandColorGuidance,
  brandConstruction,
  brandDoNot,
  brandDownloads,
  brandIntro,
  brandLockupSpecs,
  brandMinSizes,
  brandNaming,
  brandPartnerExample,
  brandPartnerRules,
  brandPermissions,
  brandProductLogoRules,
  brandProductLogos,
  brandParts,
  brandRules,
  brandColorFiles,
  brandSpectrum,
  brandTintGuide,
  brandTintedBackgrounds,
  brandTintNote,
  brandTints,
  brandTrademarkNote,
  brandTypography,
} from '@/content/brand';

export const SITE_URL = 'https://rumahl.com';

export type MarkdownDoc = {
  /** Canonical HTML path, e.g. /docs/installation. */
  path: string;
  title: string;
  description?: string;
  body: string;
  updated?: string;
};

type ArticleSet = {
  base: string;
  label: string;
  description: string;
  articles: Article[];
};

const articleSets: ArticleSet[] = [
  {
    base: 'docs',
    label: 'Documentation',
    description: 'User guides for rumahl OS: project status, setup, integrations, permissions and troubleshooting.',
    articles: docs,
  },
  {
    base: 'help',
    label: 'Support',
    description: 'Answers and practical guides for everyday questions about rumahl OS.',
    articles: help,
  },
  {
    base: 'developers',
    label: 'Developer documentation',
    description: 'API reference, architecture, app packages, identity, shell contracts and release checks.',
    articles: developerDocs,
  },
  {
    base: 'design/docs',
    label: 'Design documentation',
    description: 'RWDS and RUI: tokens, components, theming, adoption, versioning and contribution.',
    articles: designDocs,
  },
];

const legalDocs: Record<string, {label: string; doc: BilingualDoc}> = {
  privacy: {label: 'Privacy Policy', doc: privacy},
  tos: {label: 'Terms of Service', doc: tos},
  impressum: {label: 'Imprint', doc: impressum},
  cookies: {label: 'Cookie Policy', doc: cookies},
  contributing: {label: 'Contributing Guidelines', doc: contributing},
  'code-of-conduct': {label: 'Code of Conduct', doc: codeOfConduct},
  trademark: {label: 'Trademark Policy', doc: trademark},
  apps: {label: 'Apps', doc: apps},
  'rumahlos/privacy': {label: 'rumahl OS Privacy Policy', doc: osPrivacy},
  'rumahlos/tos': {label: 'rumahl OS Terms', doc: osTos},
};

function absolute(path: string): string {
  return SITE_URL + (path.startsWith('/') ? path : '/' + path);
}

function quote(value: string): string {
  return JSON.stringify(value);
}

function frontmatter(fields: [string, string | undefined][]): string {
  const entries = fields.filter((entry): entry is [string, string] => Boolean(entry[1]));
  if (entries.length === 0) return '';
  return ['---', ...entries.map(([key, value]) => `${key}: ${quote(value)}`), '---', '', ''].join('\n');
}

function fenceFor(content: string): string {
  const longest = Math.max(2, ...Array.from(content.matchAll(/`+/g), (match) => match[0].length));
  return '`'.repeat(longest + 1);
}

function tableCell(value: string): string {
  return value.replace(/\|/g, '\\|').replace(/\r?\n/g, '<br>');
}

function tableMarkdown(columns: string[], rows: string[][]): string {
  return [
    `| ${columns.map(tableCell).join(' | ')} |`,
    `| ${columns.map(() => '---').join(' | ')} |`,
    ...rows.map((row) => `| ${row.map(tableCell).join(' | ')} |`),
  ].join('\n');
}

function calloutMarkdown(tone: string, title: string | undefined, text: string): string {
  const body = [title ? `**${title}**` : '', text].filter(Boolean).join('\n\n');
  const quoted = body
    .split('\n')
    .map((line) => (line ? `> ${line}` : '>'))
    .join('\n');
  return `> [!${tone.toUpperCase()}]\n${quoted}`;
}

function sectionMarkdown(section: ArticleSection): string {
  const blocks: string[] = [`## ${section.title}`];
  if (section.text) blocks.push(section.text);
  if (section.markdown) blocks.push(section.markdown);
  if (section.list?.length) blocks.push(section.list.map((item) => `- ${item}`).join('\n'));
  if (section.steps?.length) blocks.push(section.steps.map((item, index) => `${index + 1}. ${item}`).join('\n'));
  if (section.endpoints) {
    blocks.push(`### ${section.endpoints.title}`);
    if (section.endpoints.note) blocks.push(section.endpoints.note);
    blocks.push(
      tableMarkdown(
        ['Method', 'Path', 'Purpose'],
        section.endpoints.rows.map((row) => [row.method, row.path, row.purpose])
      )
    );
  }
  if (section.code) {
    const fence = fenceFor(section.code.content);
    blocks.push(`${fence}${section.code.language}\n${section.code.content}\n${fence}`);
  }
  if (section.callout) {
    blocks.push(calloutMarkdown(section.callout.tone, section.callout.title, section.callout.text));
  }
  if (section.checklist) {
    const checklist = [
      section.checklist.title ? `**${section.checklist.title}**` : '',
      ...section.checklist.items.map((item) => `- [ ] ${item}`),
    ].filter(Boolean);
    blocks.push(checklist.join('\n'));
  }
  if (section.table) blocks.push(tableMarkdown(section.table.columns, section.table.rows));
  return blocks.join('\n\n');
}

export function articleMarkdown(
  article: Article,
  base: string,
  options: {frontmatter?: boolean} = {}
): string {
  const path = '/' + base + '/' + article.slug;
  const header = options.frontmatter === false
    ? ''
    : frontmatter([
        ['title', article.title],
        ['description', article.summary],
        ['url', absolute(path)],
        ['section', article.area],
        ['group', article.group],
        ['updated', article.updated],
      ]);
  const meta = [
    `**Area:** ${article.area}`,
    `**Group:** ${article.group}`,
    `**Updated:** ${article.updated}`,
    `**Reading time:** ${article.readTime} min`,
    `**HTML:** ${absolute(path)}`,
  ].join('  \n');
  const body = [header + `# ${article.title}`, `> ${article.summary}`, meta, ...article.sections.map(sectionMarkdown)]
    .filter(Boolean)
    .join('\n\n');
  return body + '\n';
}

function articleIndexMarkdown(set: ArticleSet): string {
  const groups = Array.from(new Set(set.articles.map((article) => article.group)));
  const body = groups
    .map((group) => {
      const entries = set.articles
        .filter((article) => article.group === group)
        .map((article) => `- [${article.title}](${absolute('/' + set.base + '/' + article.slug + '.md')}) — ${article.summary}`)
        .join('\n');
      return `## ${group}\n\n${entries}`;
    })
    .join('\n\n');
  return (
    frontmatter([
      ['title', set.label],
      ['description', set.description],
      ['url', absolute('/' + set.base)],
    ]) +
    `# ${set.label}\n\n> ${set.description}\n\n` +
    body +
    '\n'
  );
}

export function blogMarkdown(post: BlogPost): string {
  const path = '/blog/' + post.slug;
  const body = post.body.trim().replace(/^#\s+/, '## ');
  const header = frontmatter([
    ['title', post.title],
    ['description', post.excerpt],
    ['url', absolute(path)],
    ['date', post.date],
    ['author', post.author],
    ['category', post.category],
    ['tags', post.tags.join(', ')],
  ]);
  return (
    header +
    `# ${post.title}\n\n` +
    (post.excerpt ? `> ${post.excerpt}\n\n` : '') +
    [
      `**Published:** ${post.date}`,
      `**Author:** ${post.author}`,
      `**Category:** ${post.category}`,
      `**HTML:** ${absolute(path)}`,
    ].join('  \n') +
    `\n\n${body}\n`
  );
}

function blogIndexMarkdown(): string {
  const list = posts
    .map((post) => `- [${post.title}](${absolute('/blog/' + post.slug + '.md')}) — ${post.excerpt} (${post.date}, ${post.category})`)
    .join('\n');
  return (
    frontmatter([
      ['title', 'rumahl blog'],
      ['description', 'Articles, announcements and release notes from the rumahl project.'],
      ['url', absolute('/blog')],
    ]) +
    `# Blog\n\n> Articles, announcements and release notes from the independent rumahl project.\n\n${list}\n`
  );
}

function releaseMarkdown(release: Release): string {
  const heading = `## rumahl OS ${release.version}${release.name ? ` “${release.name}”` : ''}`;
  const blocks = [
    heading,
    `**Date:** ${release.date}  \n**Type:** ${release.type}  \n**Summary:** ${release.summary}`,
  ];
  if (release.highlights?.length) {
    blocks.push(['### Highlights', ...release.highlights.map((item) => `- ${item}`)].join('\n\n'));
  }
  if (release.changelog?.length) {
    blocks.push(
      '### Changelog\n\n' +
        release.changelog
          .map((group) => `#### ${group.type}\n\n${group.items.map((item) => `- ${item}`).join('\n')}`)
          .join('\n\n')
    );
  }
  return blocks.join('\n\n');
}

function releasesMarkdown(): string {
  const path = '/releases';
  return (
    frontmatter([
      ['title', 'rumahl OS releases'],
      ['description', 'Every rumahl OS release with highlights and a full changelog.'],
      ['url', absolute(path)],
    ]) +
    `# Releases\n\n> Every rumahl OS release with highlights and a full changelog. rumahl OS is in development.\n\n` +
    releases.map(releaseMarkdown).join('\n\n---\n\n') +
    '\n'
  );
}

function legalBlockMarkdown(block: LegalBlock): string {
  switch (block.type) {
    case 'markdown':
      return block.text;
    case 'p':
    case 'note':
      return block.type === 'note' ? `> ${block.text}` : block.text;
    case 'ul':
      return block.items.map((item) => `- ${item}`).join('\n');
    case 'table':
      return tableMarkdown(block.headers, block.rows);
  }
}

function legalMarkdown(key: string, entry: {label: string; doc: BilingualDoc}): string {
  const doc = entry.doc.en;
  const path = '/legal/' + key;
  return (
    frontmatter([
      ['title', doc.title],
      ['description', doc.subtitle],
      ['url', absolute(path)],
      ['effective', doc.effective],
      ['updated', doc.updated],
      ['version', doc.version],
    ]) +
    `# ${doc.title}\n\n> ${doc.subtitle}\n\n` +
    `**Effective:** ${doc.effective}  \n**Updated:** ${doc.updated}  \n**Version:** ${doc.version}  \n**HTML:** ${absolute(path)}\n\n` +
    doc.sections
      .map((section) => `## ${section.title}\n\n${section.blocks.map(legalBlockMarkdown).join('\n\n')}`)
      .join('\n\n') +
    '\n'
  );
}

function legalIndexMarkdown(): string {
  const list = Object.entries(legalDocs)
    .map(([key, entry]) => `- [${entry.label}](${absolute('/legal/' + key + '.md')}) — ${entry.doc.en.subtitle}`)
    .join('\n');
  return (
    frontmatter([
      ['title', 'Legal'],
      ['description', 'All rumahl website and OS policies in one place.'],
      ['url', absolute('/legal')],
    ]) +
    `# Legal\n\n> All policies and terms in one place.\n\n${list}\n`
  );
}

function homeMarkdown(): string {
  const latest = releases[0];
  const recent = posts.slice(0, 4);
  return (
    frontmatter([
      ['title', 'rumahl — Give your home a new face.'],
      ['description', 'rumahl OS brings independent home services together on hardware you control.'],
      ['url', absolute('/')],
    ]) +
    `# rumahl\n\n> Integrate, don't replace. rumahl OS brings independent home services together on hardware you control. The open-source platform is still in active development.\n\n` +
    `## What it is\n\nrumahl OS is an independent open-source platform for apps and home services. It connects existing services or provides native ones, keeps their lifecycles independent, and runs on your own hardware. The current builds are development environments, not a finished consumer installation.\n\n` +
    `## Explore\n\n- [Live demo](${absolute('/demo')}) — try the shell, apps and widgets in a browser.\n- [Documentation](${absolute('/docs.md')}) — start with the project status and setup paths.\n- [Integrations](${absolute('/integrations')}) — the Connected, Enhanced and Native model.\n- [Developer documentation](${absolute('/developers.md')}) — architecture, app packages and contracts.\n- [Brand guidelines](${absolute('/brand.md')}) — naming, wordmark, monogram, colour, usage and downloads.\n\n` +
    `## Latest release\n\n${latest ? `rumahl OS ${latest.version}${latest.name ? ` “${latest.name}”` : ''} (${latest.date}) — ${latest.summary}\n` : ''}\n` +
    `## Recent writing\n\n${recent.map((post) => `- [${post.title}](${absolute('/blog/' + post.slug + '.md')}) — ${post.excerpt}`).join('\n')}\n`
  );
}

const aboutMarkdownBody = `# About the project

> rumahl is an independent open-source project, not a company. It explores a local platform for apps and home services.

## Current work and participation

The platform is in active development. The developer server and QEMU image are for exploration and testing; broader integrations and installation paths remain work in progress.

Contributions can be small: reproduce an issue, improve an explanation, test a change or discuss a proposed contract. There is no commercial support offering or promised response time.

- [Read the getting-started guide](${absolute('/docs/quick-start.md')})
- [Contribute to rumahl](${absolute('/developers/contributing.md')})

## Where the name comes from

In Bahasa Indonesia and Bahasa Melayu, **rumah** means house or home — the place where your life happens. The name reflects the project's focus on software that runs on your own hardware.

The word became **rumahl**: “rumah” plus one letter, made into a mark.

## Pronunciation

| Version | Value | Note |
| --- | --- | --- |
| English (phonetic) | ROO-mahl | rhymes with “room” + “mall” |
| IPA | /ˈruː.mɑːl/ | stress on the first syllable |
| Bahasa Indonesia | ru-mahl | same spelling, soft “r” |
| Bahasa Melayu | ru-mahl | “rumah” with an “l” |

## The mark

The wordmark is lowercase and geometric — calm, like the OS itself. The same “r” shape appears nine times across the wordmark and doubles as the standalone icon: it sits in the header, the launcher and the app icons of rumahl OS.

- Lowercase wordmark, drawn as one shape
- The “r” is the brand icon — it appears nine times in the wordmark
- The final “l” is the straight stem
- Any single solid colour; white or black on photography
- The icon and the wordmark are separate marks — never combined

Read the full [brand guidelines](${absolute('/brand.md')}) for naming, construction, clear space, colour, usage and downloads.

## Values

- **Local:** runs on your hardware, inside your home.
- **Open:** connects external and native services through public contracts.
- **Independent:** no forced migration, no lock-in and no dependency on rumahl.
`;

function aboutMarkdown(): string {
  return frontmatter([
    ['title', 'About the project — rumahl'],
    ['description', 'An independent open-source project, its direction and the origin of its name.'],
    ['url', absolute('/about')],
  ]) + aboutMarkdownBody;
}

function brandMarkdown(): string {
  const parts = brandParts
    .map(
      (part) =>
        `### ${part.title}\n\n${part.text}\n\n- Asset: [${part.assetLabel}](${absolute(part.asset)})\n- File: \`${part.asset}\``
    )
    .join('\n\n');
  const rules = brandRules
    .map((group) => `### ${group.title}\n\n${group.items.map((item) => `- ${item}`).join('\n')}`)
    .join('\n\n');
  const spectrum = [
    `**On light:** ${brandSpectrum.light.map((colour) => `\`${colour}\``).join(', ')}`,
    '',
    `**On dark:** ${brandSpectrum.dark.map((colour) => `\`${colour}\``).join(', ')}`,
    '',
    `**Light tint:** \`hsl(hue ${brandTints.light.saturation}% ${brandTints.light.lightness}%)\` · **Dark tint:** \`hsl(hue ${brandTints.dark.saturation}% ${brandTints.dark.lightness}%)\``,
    '',
    'These are representative rumahl tones at the approved tints. Every hue is allowed at the matching tint; the brand page includes an interactive colour wheel. The same rule applies to the monogram.',
  ].join('\n');
  const downloads = brandDownloads
    .map((download) => `- [${download.title}](${absolute(download.href)}) — ${download.description} (${download.meta})`)
    .join('\n');
  const avatarDownloads = brandDownloads
    .filter((download) => /avatar/i.test(download.title))
    .map((download) => `- [${download.title}](${absolute(download.href)}) — ${download.description} (${download.meta})`)
    .join('\n');
  const colourGuidance = brandColorGuidance.map((item) => `- ${item}`).join('\n');
  const tintedBackgrounds = brandTintedBackgrounds
    .map((background) => `- ${background.name}: \`${background.value}\``)
    .join('\n');
  const productLogos = [
    ...brandProductLogoRules.map((rule) => `- ${rule}`),
    '',
    'Examples: ' + brandProductLogos.map((logo) => `r | ${logo.name} (${logo.surface})`).join(', ') + '.',
  ].join('\n');
  const tintGuide = [
    '1. Pick any hue H from 0–360.',
    '2. Choose the light tint for light surfaces or the dark tint for dark surfaces.',
    '3. Apply the formula and check contrast.',
    '',
    ...brandTintGuide.map(
      (tint) => `- **${tint.mode} tint:** \`hsl(H ${tint.saturation}% ${tint.lightness}%)\` — ${tint.surfaces}`
    ),
    '',
    `For H = 150: light \`hsl(150 ${brandTints.light.saturation}% ${brandTints.light.lightness}%)\`, dark \`hsl(150 ${brandTints.dark.saturation}% ${brandTints.dark.lightness}%)\`.`,
    '',
    brandTintNote,
  ].join('\n');
  const colorFileLinks = brandColorFiles
    .map((file) => `- [${file.label}](${absolute(file.href)}) (${file.meta})`)
    .join('\n');
  const sizes = [
    '| Version | Minimum | Note |',
    '| --- | --- | --- |',
    ...brandMinSizes.map((size) => `| ${size.label} | ${size.value} | ${size.note} |`),
  ].join('\n');
  const construction = [
    '| Letter | r parts | Role |',
    '| --- | --- | --- |',
    ...brandConstruction.parts.map((part) => `| ${part.letter} | ${part.count} | ${part.note} |`),
  ].join('\n');
  const partners = [
    'Both variants are allowed: `rumahl wordmark × partner` and `rumahl monogram × partner`. Never use the wordmark and monogram together in one lockup.',
    '',
    ...brandLockupSpecs.map((spec) => `- ${spec}`),
    '',
    ...brandPartnerRules.map((rule) => `- ${rule}`),
    '',
    `Example: ${brandPartnerExample.name}. ${brandPartnerExample.note}`,
    '',
    `Example asset: [Home Assistant official logomark](${absolute(brandPartnerExample.src)})`,
    '',
    `Home Assistant guidelines: ${brandPartnerExample.source}`,
  ].join('\n');
  const permissions = [
    '### Allowed',
    '',
    ...brandPermissions.allowed.map((item) => `- ${item}`),
    '',
    '### Ask first',
    '',
    ...brandPermissions.ask.map((item) => `- ${item}`),
    '',
    '### Not allowed',
    '',
    ...brandPermissions.notAllowed.map((item) => `- ${item}`),
  ].join('\n');
  const naming = [
    brandNaming.intro,
    '',
    `**Write:** ${brandNaming.write.map((item) => `\`${item}\``).join(', ')}`,
    '',
    `**Do not write:** ${brandNaming.dontWrite.map((item) => `“${item}”`).join(', ')}`,
    '',
    ...brandNaming.notes.map((note) => `- ${note}`),
  ].join('\n');
  const doNot = brandDoNot.map((item) => `- ${item}`).join('\n');
  return (
    frontmatter([
      ['title', 'Brand guidelines — rumahl'],
      ['description', 'The rumahl wordmark and monogram: naming, avatars, separate marks, construction, clear space, colour, partner lockups, permissions and downloadable SVG assets.'],
      ['url', absolute('/brand')],
    ]) +
    `# rumahl brand guidelines\n\n> ${brandIntro}\n\n` +
    `## Naming\n\n${naming}\n\n` +
    `## Versions\n\n${parts}\n\n` +
    `## Avatars\n\nUse the monogram, never the wordmark. Center the mark in a square so it survives a round crop. Light tints, dark backgrounds and any single solid colour are allowed. Do not add a second mark or text.\n\n${avatarDownloads}\n\n` +
    `## Product logos\n\nProduct logos identify an official rumahl surface. The r matches the total line height of the product name (1× the Inter font size); the i dot and g descender may extend beyond the r. The name is set in Inter Medium 500. Product logos are reserved and may not be used by third parties.\n\n${productLogos}\n\n` +
    `## Construction\n\n${brandConstruction.text}\n\n${construction}\n\n> ${brandConstruction.note}\n\n` +
    `## Clear space\n\n${brandClearSpace.text}\n\n${brandClearSpace.rule}\n\n${sizes}\n\nThe brand page shows the clear space as a dashed boundary and the minimum sizes at actual size. The monogram minimum is 16 px high; the wordmark minimum is 72 px wide.\n\n**Partner lockup:** both marks the same height, equal gap on each side of the ×, and at least x clear space around the whole lockup.\n\n` +
    `## Usage\n\n${rules}\n\n` +
    `## Colour\n\n${brandColourPolicy}\n\n${spectrum}\n\n### How to build a colour\n\n${tintGuide}\n\n### When to use colour\n\n${colourGuidance}\n\n### Light tinted backgrounds\n\n${tintedBackgrounds}\n\nLight tints are allowed. Keep the mark one solid colour and check the contrast against the background.\n\n` +
    `## Typography\n\nThe website uses **${brandTypography.family}** (${brandTypography.fallback}). ${brandTypography.note}\n\n` +
    `## Do not\n\n${doNot}\n\n` +
    `## Partner lockup\n\n${partners}\n\n` +
    `## Permissions\n\n${permissions}\n\n` +
    `## Downloads\n\n- [All brand assets (ZIP)](${absolute('/brand/rumahl-brandmark.zip')})\n${downloads}\n\n${colorFileLinks}\n\n` +
    `## Trademarks\n\n${brandTrademarkNote}\n\nRead the [trademark policy](${absolute('/legal/trademark.md')}).\n`
  );
}

function securityMarkdown(): string {
  return (
    frontmatter([
      ['title', 'Security — rumahl'],
      ['description', 'How to report a vulnerability, what qualifies, severity scoring, coordinated disclosure and bounties.'],
      ['url', absolute('/security')],
    ]) +
    `# Security at rumahl\n\n> We take the security of our software and your home seriously. Report suspected vulnerabilities privately — never in a public issue.\n\n` +
    `## Reporting a vulnerability\n\n- **Report privately:** email ${company.securityEmail} or open a private security advisory on GitHub.\n- **Include the details:** affected project and version, description, reproduction steps, potential impact and proof of concept. Remove credentials and personal data.\n- **Keep it confidential:** give the project time to investigate and fix the issue before public disclosure.\n- **We respond:** we acknowledge within the target for the severity and credit reporters once a fix is released, unless anonymity is requested.\n\nFor sensitive reports you can request a PGP key. Never include passwords, tokens, recovery codes or personal data.\n\n` +
    `## Non-qualifying reports\n\n- Missing security headers or best-practice hardening without concrete impact.\n- Self-XSS or issues requiring the victim to paste code into their own console.\n- Attacks requiring physical access to the device or an already compromised host.\n- Social engineering, phishing or physical security issues.\n- Denial-of-service, brute-force or volumetric attacks.\n- Automated scanner output without a validated, reproducible finding.\n- Issues in outdated browsers, plugins or unsupported platforms.\n- Already public, already reported or third-party services we do not control.\n\n` +
    `## Severity scoring\n\n| Severity | CVSS score | Target response |\n| --- | --- | --- |\n| Critical | 9.0 – 10.0 | Acknowledge within 24 hours; fix as soon as possible |\n| High | 7.0 – 8.9 | Acknowledge within 48 hours |\n| Medium | 4.0 – 6.9 | Acknowledge within 5 business days |\n| Low | 0.1 – 3.9 | Acknowledge within 10 business days |\n\nA CVSS score is not the only factor. Reachability, required privileges, user interaction and real-world impact also matter.\n\n` +
    `## Public disclosure and CVE assignment\n\n- Work with the reporter on a disclosure timeline; the default is 90 days from acknowledgement.\n- Publish earlier with agreement when a fix is ready.\n- Request a CVE ID for confirmed vulnerabilities. GitHub acts as the CNA for the rumahl repositories.\n- Publish a GitHub security advisory and credit the reporter unless they prefer to remain anonymous.\n\n` +
    `## Bounties\n\nrumahl and all of its projects are open source, and none of them offer a bug bounty. There are no monetary rewards for vulnerability reports. Valid reports are investigated, confirmed issues are fixed and reporters are credited in the security advisory.\n\n` +
    `## Other issues\n\n- [GitHub issues](https://github.com/rumahl) — reproducible bugs and feature requests.\n- [Contributing](${absolute('/legal/contributing.md')}) — how to write a good bug report and submit a pull request.\n- [Support](${absolute('/help.md')}) — guides and everyday answers.\n`
  );
}

function getRumahlMarkdown(): string {
  return (
    frontmatter([
      ['title', 'Get rumahl — Plan your install'],
      ['description', 'Choose a device and services, see the requirements and save a personalised installation plan.'],
      ['url', absolute('/get-rumahl')],
    ]) +
    `# Get rumahl\n\n> Plan your future setup: pick a device, choose the services you want and save a tailored installation plan. This planner is a preview of planned hardware support.\n\n` +
    `Current builds are the developer server and the Buildroot QEMU image. There is no public hardware installer yet, and no account is required.\n\n` +
    `- [Installation guide](${absolute('/docs/installation.md')})\n- [Quick start](${absolute('/docs/quick-start.md')})\n- [Live demo](${absolute('/demo')})\n`
  );
}

function simplePage(
  path: string,
  title: string,
  description: string,
  extra: string
): string {
  return (
    frontmatter([
      ['title', `${title} — rumahl`],
      ['description', description],
      ['url', absolute(path)],
    ]) +
    `# ${title}\n\n> ${description}\n\n${extra}\n`
  );
}

function designIndexMarkdown(): string {
  return simplePage(
    '/design',
    'rumahl Design',
    'Reference documentation for RWDS, the rumahl Web Design System, and RUI, the design system for rumahl OS.',
    `RWDS is used for websites, documentation and editorial surfaces. RUI is the operating-system design system and is not intended for websites.\n\n- [Design documentation](${absolute('/design/docs.md')})\n- [RWDS](${absolute('/design/rwds')}) — the web design system\n- [RUI](${absolute('/design/rui')}) — the OS design system\n- [Storybook](${absolute('/design/storybook')})\n- [Color Table Generator](${absolute('/design/color')})\n- [Glossary](${absolute('/design/glossary')})\n- [Comparison](${absolute('/design/systems')})\n- [Resources](${absolute('/design/resources')})`
  );
}

function staticPageMarkdown(path: string): string | null {
  switch (path) {
    case '/':
      return homeMarkdown();
    case '/about':
      return aboutMarkdown();
    case '/brand':
      return brandMarkdown();
    case '/security':
      return securityMarkdown();
    case '/get-rumahl':
      return getRumahlMarkdown();
    case '/design':
      return designIndexMarkdown();
    case '/design/rwds':
      return simplePage(
        '/design/rwds',
        'RWDS — rumahl Web Design System',
        'Tokens, typography, layout, surfaces, motion and components for rumahl websites and documentation.',
        `RWDS is the design system for rumahl.com, docs, help, editorial pages and other reading-heavy web surfaces. It uses semantic website tokens, Inter, a green accent and light/dark themes.\n\n- [Design documentation](${absolute('/design/docs.md')})\n- [RWDS components](${absolute('/design/rwds/components')})\n- [Storybook](${absolute('/design/storybook')})\n- [Color Table Generator](${absolute('/design/color')})`
      );
    case '/design/rui':
      return simplePage(
        '/design/rui',
        'RUI — rumahl UI',
        'The design system for the rumahl OS shell and installed apps.',
        `RUI is the operating-system design system. Its density, window chrome, materials and interaction model assume an OS surface; it is not intended for websites. RUI components and stories live in the rumahl repository.\n\n- [RUI components](${absolute('/design/rui/components')})\n- [Storybook](${absolute('/design/storybook')})\n- [Comparison](${absolute('/design/systems')})`
      );
    case '/design/storybook':
      return simplePage(
        '/design/storybook',
        'Design Storybook',
        'The published Storybook builds for RWDS and RUI.',
        `Storybook is the canonical component reference for the rumahl design systems. RWDS components document website surfaces; RUI stories document the OS shell and installed apps.\n\n- [RWDS components](${absolute('/design/rwds/components')})\n- [RUI components](${absolute('/design/rui/components')})\n- [Design resources](${absolute('/design/resources')})`
      );
    case '/design/color':
      return simplePage(
        '/design/color',
        'Color Table Generator',
        'Build an accessible RWDS accent scale and tinted neutral surfaces from a seed colour.',
        `The generator creates an accessible 50–950 accent scale and tinted neutral surfaces from a seed colour. Typography, spacing, radii and motion stay fixed so the RWDS identity is preserved. Contrast is checked against the generated light and dark backgrounds; 4.5:1 or higher passes for normal text.`
      );
    case '/design/glossary':
      return simplePage(
        '/design/glossary',
        'Design glossary',
        'Plain-language definitions for RWDS, RUI, tokens, components, stories and the terms used in the design documentation.',
        `- **RWDS:** rumahl Web Design System, used for websites and documentation.\n- **RUI:** rumahl UI, the design system for the OS shell and installed apps.\n- **Token:** a named design decision such as colour, spacing or type.\n- **Component:** a reusable interface part with a documented contract.\n- **Story:** an isolated example of a component state in Storybook.`
      );
    case '/design/systems':
      return simplePage(
        '/design/systems',
        'RWDS vs RUI',
        'How the two rumahl design systems differ and what they share.',
        `RWDS and RUI share brand and accessibility constraints, but they are separate implementations with separate tokens, components and release cycles. A website, documentation page or editorial surface uses RWDS. A shell, window or app surface uses RUI. A shared brand decision affects both and must be evaluated as a cross-system change.`
      );
    case '/design/resources':
      return simplePage(
        '/design/resources',
        'Design resources',
        'Source, tooling, Storybook builds and contribution rules for the rumahl design systems.',
        `Source and licence information is in the rumahl repository. The name and logo stay governed by the trademark policy even when a design system is adopted. RWDS follows the website; RUI follows the OS frontend and the @rumahl/ui package.\n\n- [Trademark policy](${absolute('/legal/trademark.md')})\n- [Design documentation](${absolute('/design/docs.md')})\n- [Brand guidelines](${absolute('/brand.md')})`
      );
    case '/demo':
      return simplePage(
        '/demo',
        'Live demo',
        'Try a running rumahl OS instance in your browser.',
        `The demo shows interface behavior with sample data. It does not connect to your home services, install software on your machine or verify hardware compatibility.\n\n- [Documentation](${absolute('/docs.md')})\n- [Installation](${absolute('/docs/installation.md')})`
      );
    case '/integrations':
      return simplePage(
        '/integrations',
        'Integrations',
        'The Connected, Enhanced and Native model for bringing existing and new services into rumahl.',
        `rumahl connects services at three levels: **Connected** (an existing service over its API or URL), **Enhanced** (the optional rumahl Connector adds deeper capabilities) and **Native** (rumahl installs and manages a supported system). The installation level never grants permissions; capabilities do.\n\n- [Integration documentation](${absolute('/docs/integrations.md')})\n- [External installations](${absolute('/docs/external-integrations.md')})\n- [Capabilities](${absolute('/docs/integration-capabilities.md')})\n- [Provider contracts](${absolute('/developers/connectors.md')})`
      );
    case '/os':
      return simplePage(
        '/os',
        'rumahl OS',
        'An independent open-source platform for apps and home services on your own hardware.',
        `rumahl OS is in active development. Its Rust platform, local accounts and browser shell are available for development; broader service integrations are still being built.\n\n- [Start here](${absolute('/docs/start-here.md')})\n- [Installation](${absolute('/docs/installation.md')})\n- [Developer documentation](${absolute('/developers.md')})\n- [Releases](${absolute('/releases.md')})`
      );
    case '/features':
      return simplePage(
        '/features',
        'Features',
        'The details that connect across storage, clouds, smart home and apps.',
        `One experience across storage, clouds, smart home and apps — with capabilities, permissions and system services under your control.\n\n- [Documentation](${absolute('/docs.md')})\n- [Integrations](${absolute('/integrations')})\n- [Architecture](${absolute('/developers/architecture.md')})`
      );
    case '/photography':
      return simplePage(
        '/photography',
        'Photography and credits',
        'The human-made photography used on the rumahl website, with photographer attribution.',
        `The website uses documented, human-made photography only. Each image is credited to its photographer and linked to its source. See the [photo sources](https://github.com/rumahl/website/blob/main/content/photo-sources.json) for provenance.`
      );
    case '/legal':
      return legalIndexMarkdown();
    default:
      return null;
  }
}

export function resolveMarkdown(path: string[]): MarkdownDoc | null {
  const clean = path.map((part) => part.trim()).filter(Boolean);
  if (clean.length === 0 || (clean.length === 1 && clean[0] === 'index')) {
    const body = homeMarkdown();
    return {path: '/', title: 'rumahl', description: 'An independent open-source platform for local apps and home services.', body};
  }

  if (clean[0] === 'brand') {
    return {
      path: '/brand',
      title: 'Brand guidelines',
      description: 'The rumahl wordmark and monogram: naming, avatars, separate marks, construction, clear space, colour, partner lockups, permissions and downloadable SVG assets.',
      body: brandMarkdown(),
    };
  }

  if (clean[0] === 'legal') {
    const key = clean.slice(1).join('/');
    if (!key || key === 'index') {
      return {
        path: '/legal',
        title: 'Legal',
        description: 'All rumahl website and OS policies in one place.',
        body: legalIndexMarkdown(),
      };
    }
    const entry = legalDocs[key];
    if (!entry) return null;
    return {
      path: '/legal/' + key,
      title: entry.label,
      description: entry.doc.en.subtitle,
      updated: entry.doc.en.updated,
      body: legalMarkdown(key, entry),
    };
  }

  if (clean[0] === 'blog') {
    if (clean.length === 1 || (clean.length === 2 && clean[1] === 'index')) {
      return {
        path: '/blog',
        title: 'Blog',
        description: 'Articles, announcements and release notes from the rumahl project.',
        body: blogIndexMarkdown(),
      };
    }
    const slug = clean.slice(1).join('/');
    const post = posts.find((entry) => entry.slug === slug);
    if (!post) return null;
    return {
      path: '/blog/' + slug,
      title: post.title,
      description: post.excerpt,
      updated: post.date,
      body: blogMarkdown(post),
    };
  }

  if (clean[0] === 'releases') {
    return {
      path: '/releases',
      title: 'Releases',
      description: 'Every rumahl OS release with highlights and a full changelog.',
      updated: releases[0]?.date,
      body: releasesMarkdown(),
    };
  }

  if (clean[0] === 'docs' && clean.length === 2 && clean[1] === 'ai') {
    return {
      path: '/docs/ai.md',
      title: 'rumahl documentation for AI agents',
      description: 'Agent-oriented Markdown entry point with current status, answering rules and machine-readable links.',
      updated: '2026-11-21',
      body: docsAgentMarkdown(),
    };
  }

  let set: ArticleSet | undefined;
  let slugParts: string[] = [];
  if (clean[0] === 'design' && clean[1] === 'docs') {
    set = articleSets.find((entry) => entry.base === 'design/docs');
    slugParts = clean.slice(2);
  } else {
    set = articleSets.find((entry) => entry.base === clean[0]);
    slugParts = clean.slice(1);
  }

  if (set) {
    if (slugParts.length === 0 || (slugParts.length === 1 && slugParts[0] === 'index')) {
      return {
        path: '/' + set.base,
        title: set.label,
        description: set.description,
        body: articleIndexMarkdown(set),
      };
    }
    const slug = slugParts.join('/');
    const article = set.articles.find((entry) => entry.slug === slug);
    if (!article) return null;
    return {
      path: '/' + set.base + '/' + slug,
      title: article.title,
      description: article.summary,
      updated: article.updated,
      body: articleMarkdown(article, set.base),
    };
  }

  const staticPage = staticPageMarkdown('/' + clean.join('/'));
  if (staticPage) {
    return {
      path: '/' + clean.join('/'),
      title: clean.join(' / '),
      body: staticPage,
    };
  }

  return null;
}

export function markdownHeaders(doc?: MarkdownDoc): Headers {
  const headers = new Headers({
    'Content-Type': 'text/markdown; charset=utf-8',
    Vary: 'Accept',
    'Cache-Control': 'public, max-age=0, s-maxage=300, stale-while-revalidate=86400',
  });
  if (doc) headers.set('Link', `<${absolute(doc.path)}>; rel="canonical"`);
  return headers;
}

function documentationSections(): string {
  return articleSets
    .map((set) => {
      const entries = set.articles
        .map((article) => `- [${article.title}](${absolute('/' + set.base + '/' + article.slug + '.md')}): ${article.summary}`)
        .join('\n');
      return `## ${set.label}\n\n${entries}`;
    })
    .join('\n\n');
}

export function docsLlmsTxt(): string {
  return `# rumahl documentation

> The documentation entry point for language models: user guides, support articles, developer documentation and design documentation for rumahl OS and the rumahl project.

Canonical site: ${absolute('/')}
Agent entry point: ${absolute('/docs/ai.md')}
Full documentation: ${absolute('/docs/llms-full.txt')}
All site content: ${absolute('/llms.txt')}
Full site content: ${absolute('/llms-full.txt')}

This entry point covers documentation only. Blog posts, releases, legal documents, brand guidelines and product pages are linked from ${absolute('/llms.txt')}.

${documentationSections()}
`;
}

export function docsAgentMarkdown(): string {
  return `---
title: "rumahl documentation for AI agents"
description: "Agent-oriented Markdown entry point for rumahl OS documentation, current status, APIs and machine-readable sources."
url: "${absolute('/docs/ai.md')}"
canonical: "${absolute('/docs')}"
updated: "2026-11-21"
---

# rumahl documentation for AI agents

> This file is the direct Markdown entry point for AI agents that need to answer questions about rumahl OS or the rumahl project. It summarizes the current status, points to the canonical sources and lists every documentation article in Markdown.

## Current status

- rumahl OS is an independent open-source project in active development.
- The available test paths are the browser demo, the native developer server on Linux or WSL2 and the Buildroot QEMU image.
- There is no public signed hardware installer and no supported consumer device list yet.
- Service integrations are documented, but provider support varies and is not general availability.
- App packages, capabilities, settings, consent, brokered network access and the app bridge exist for development. A polished public app catalog and general self-service installation are not released.
- There is no stable update channel or user-facing rollback workflow yet.

Use the status labels on the documentation pages. Do not infer availability from a described target, a capability name or a source-code contract.

## Canonical sources

- Documentation HTML: ${absolute('/docs')}
- This agent entry point: ${absolute('/docs/ai.md')}
- Compact documentation index: ${absolute('/docs/llms.txt')}
- Full documentation text: ${absolute('/docs/llms-full.txt')}
- Developer documentation: ${absolute('/developers')}
- API reference: ${absolute('/developers/api')}
- Site-wide AI index: ${absolute('/llms.txt')}
- Full site text: ${absolute('/llms-full.txt')}

Every editorial page has a Markdown representation. Append \`.md\` to the page URL, send \`Accept: text/markdown\` or add \`?format=md\`.

## Rules for answering

- Prefer the current documentation over older blog posts, release notes or plans.
- State the project status when a feature is proposed, planned or still in development.
- Distinguish user documentation from developer contracts and from RUI or RWDS design documentation.
- Do not claim production readiness, guaranteed compatibility, a support offering or general hardware availability.
- When quoting an API, use the route, method and authorization boundary documented in ${absolute('/developers/api')}.
- Link to the canonical HTML page or the matching \`.md\` document.

## Documentation index

${documentationSections()}
`;
}

export function docsLlmsFullTxt(): string {
  const bodies = articleSets
    .map(
      (set) =>
        `<!-- ${set.label} -->\n\n` +
        set.articles.map((article) => articleMarkdown(article, set.base, {frontmatter: false})).join('\n\n---\n\n')
    )
    .join('\n\n---\n\n');

  return `# rumahl documentation — full text

> Complete documentation content: user guides, support articles, developer documentation and design documentation. Blog, releases, legal and brand content live in the site-wide full text.

Canonical site: ${absolute('/')}
Documentation index: ${absolute('/docs/llms.txt')}
Agent entry point: ${absolute('/docs/ai.md')}
All site content: ${absolute('/llms.txt')}
Full site content: ${absolute('/llms-full.txt')}

${bodies}
`;
}

export function llmsTxt(): string {
  const articles = (set: ArticleSet) =>
    set.articles
      .map((article) => `- [${article.title}](${absolute('/' + set.base + '/' + article.slug + '.md')}): ${article.summary}`)
      .join('\n');

  const legal = Object.entries(legalDocs)
    .map(([key, entry]) => `- [${entry.label}](${absolute('/legal/' + key + '.md')}): ${entry.doc.en.subtitle}`)
    .join('\n');

  return `# rumahl

> rumahl OS is an independent open-source platform for local apps and home services. It connects existing services or provides native ones, keeps their lifecycles independent, and runs on hardware you control. The project is in active development and is not a company.

Canonical site: ${absolute('/')}
Markdown access: append \`.md\` to any page URL, or send \`Accept: text/markdown\`.
Full text: ${absolute('/llms-full.txt')}
Documentation entry point: ${absolute('/docs/llms.txt')}
Agent entry point: ${absolute('/docs/ai.md')}
Full documentation: ${absolute('/docs/llms-full.txt')}

## Start here

- [Start here: what rumahl is today](${absolute('/docs/start-here.md')}): project status, ways to explore and reading paths.
- [Installation](${absolute('/docs/installation.md')}): run the developer server or the Buildroot QEMU image.
- [Quick start](${absolute('/docs/quick-start.md')}): the shortest path to a first local session.
- [About the project](${absolute('/about.md')}): the name, pronunciation and brandmark.
- [Brand guidelines](${absolute('/brand.md')}): naming, logo, avatars, wordmark, construction, colour, usage, partner lockups and downloads.
- [Security](${absolute('/security.md')}): private vulnerability reporting and disclosure.

## Documentation

${articles(articleSets[0])}

## Support

${articles(articleSets[1])}

## Developer documentation

${articles(articleSets[2])}

## Design documentation

${articles(articleSets[3])}

## Blog and releases

- [Blog](${absolute('/blog.md')}): articles, announcements and notes from the project.
- [Releases](${absolute('/releases.md')}): every rumahl OS release with highlights and changelog.
${posts
  .map((post) => `- [${post.title}](${absolute('/blog/' + post.slug + '.md')}): ${post.excerpt}`)
  .join('\n')}

## Legal

${legal}

## Notes for language models

- Prefer the Markdown views over the HTML pages. They contain the same editorial content without navigation, scripts or visual-only elements.
- The project is in development. Do not describe planned integrations as available. Check the status language in the individual document.
- The website does not require an account and does not use advertising or analytics cookies.
- rumahl is an independent open-source project, not a company.
`;
}

export function llmsFullTxt(): string {
  const articleBodies = articleSets
    .map(
      (set) =>
        `<!-- ${set.label} -->\n\n` +
        set.articles.map((article) => articleMarkdown(article, set.base, {frontmatter: false})).join('\n\n---\n\n')
    )
    .join('\n\n---\n\n');

  const blogBodies = posts.map((post) => blogMarkdown(post)).join('\n\n---\n\n');
  const legalBodies = Object.entries(legalDocs)
    .map(([key, entry]) => legalMarkdown(key, entry))
    .join('\n\n---\n\n');

  return `# rumahl — full content

> This file contains the complete editorial content of the rumahl website: documentation, support articles, developer documentation, design documentation, blog posts, releases, legal documents and the main project pages. It is intended for language models and other tools that need a single readable source.

Canonical site: ${absolute('/')}
Markdown access: append \`.md\` to any page URL.
Index: ${absolute('/llms.txt')}

## Project pages

${[homeMarkdown(), aboutMarkdown(), brandMarkdown(), securityMarkdown(), getRumahlMarkdown()].join('\n\n---\n\n')}

## Documentation, support, developer and design content

${articleBodies}

## Blog

${blogBodies}

## Releases

${releasesMarkdown()}

## Legal

${legalBodies}
`;
}
