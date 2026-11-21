import type {Metadata} from 'next';
import {Button, Callout, Card, CodeBlock, DataTable, Disclosure, Eyebrow, Grid, Heading, Section, Stack, Swatch, Tag, Text, TextLink} from '@/components/rwds';
import {PageHeader} from '@/components/design/page-header';

export const metadata: Metadata = {
  title: 'RWDS — rumahl Web Design System',
  description: 'Reference for the rumahl Web Design System: tokens, typography, layout, surfaces, motion and components.',
  alternates: {canonical: '/design/rwds'},
};

const colourRoles: [string, string, string][] = [
  ['--accent', 'Accent', 'Primary action and brand signal'],
  ['--accent-secondary', 'Accent secondary', 'Links and quiet emphasis'],
  ['--accent-hover', 'Accent hover', 'Hover and pressed state for primary actions'],
  ['--accent-contrast', 'Accent contrast', 'Text on accent surfaces'],
  ['--background', 'Background', 'Page canvas'],
  ['--surface', 'Surface', 'Cards, panels and documentation'],
  ['--surface-glass', 'Surface glass', 'Sticky navigation and overlays'],
  ['--foreground', 'Foreground', 'Primary text'],
  ['--foreground-muted', 'Foreground muted', 'Secondary copy and metadata'],
  ['--border', 'Border', 'Hairline separation'],
];

const primitives: [string, string, string][] = [
  ['Button', 'Actions as links or buttons. Variants: primary, secondary, ghost, inverse.', 'Components/Actions'],
  ['TextLink', 'Inline links with a clear hover state.', 'Components/Actions'],
  ['Tag', 'Status and category labels. Tones: neutral, accent, warning.', 'Components/Tag'],
  ['Heading & Text', 'Titles and running text, each with a visual size and a semantic level.', 'Foundations/Typography'],
  ['Container & Section', 'Width frames and vertical sections with tone and spacing.', 'Foundations/Layout'],
  ['Grid & Stack', 'Responsive columns and vertical rhythm.', 'Foundations/Layout'],
  ['Card', 'Content surface with title, body and footer. Optionally a link.', 'Components/Card'],
  ['Callout', 'Notes, tips and warnings.', 'Components/Callout'],
  ['Disclosure', 'Native expandable content, accessible without JavaScript.', 'Components/Disclosure'],
  ['Figure', 'Image with a fixed aspect ratio and caption.', 'Components/Figure'],
  ['DataTable', 'Responsive table with a shared header style.', 'Components/DataTable'],
  ['Swatch & CodeBlock', 'Token preview and highlighted code.', 'Foundations/Color'],
];

export default function RWDSPage() {
  return (
    <>
      <PageHeader
        eyebrow="RWDS · Web"
        title={
          <>
            rumahl Web <em style={{fontStyle: 'normal', color: 'var(--design-accent)'}}>Design System</em>
          </>
        }
        lead="RWDS is the design system for rumahl on the web. It is built for websites, documentation and editorial surfaces. This reference covers its tokens, typography, layout, surfaces, motion and components. RUI is the operating-system design system and is not intended for web pages."
        actions={
          <>
            <Button href="#foundations">Foundations</Button>
            <Button href="#components" variant="secondary">Components</Button>
            <Button href="/design/rwds/components" variant="secondary">Component explorer</Button>
            <Button href="/design/color" variant="secondary">Color generator</Button>
            <TextLink href="/design/rui">Compare with RUI</TextLink>
          </>
        }
        tags={['In use on rumahl.com']}
      />

      <Section tone="alt" id="principles">
        <Stack gap="lg">
          <Heading level={2}>Constraints for the web surface</Heading>
          <Grid columns={3}>
            <Card title="Content before chrome">Surfaces stay quiet, borders stay hairline, and navigation recedes so the content carries the page.</Card>
            <Card title="Readable hierarchy">Display type, line breaks and vertical space exist to make technical content easy to scan.</Card>
            <Card title="Explicit interaction">Links, focus states and status stay visible. Nothing important depends on hover alone.</Card>
          </Grid>
          <Callout title="Web only" tone="important">
            RWDS is not an OS kit. Windows, shell controls and wallpaper materials belong to RUI. Use RWDS for pages, documentation and editorial content.
          </Callout>
        </Stack>
      </Section>

      <Section id="foundations">
        <Stack gap="lg">
          <Heading level={2}>Colour roles</Heading>
          <Text>Components read semantic roles, never raw values. Light and dark are two values for the same roles. RWDS supports multiple accent families; a project can change the accent and the neutral tint without changing the layout, type, spacing or motion.</Text>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center'}}>
            <Button href="/design/color">Open the Color Table Generator</Button>
            <TextLink href="/design/docs/color-tables">Read the colour-table rules</TextLink>
          </div>
          <Grid columns={4} gap="sm">
            {colourRoles.map(([token, name]) => (
              <Swatch key={token} token={token} description={name} />
            ))}
          </Grid>
          <Callout title="Presentation note" tone="note">
            This design site is shown on its own violet-tinted neutral theme. The rumahl website and the RWDS default still use the green accent and green-tinted neutrals. The token values are the source of truth.
          </Callout>
          <DataTable
            columns={['Token', 'Role', 'Use']}
            rows={colourRoles.map(([token, name, use]) => [<code key={token}>{token}</code>, name, use])}
          />
          <Callout title="Theme contract" tone="important">
            A component that hard-codes a colour is outside RWDS. Add a role first, then use it.
          </Callout>
        </Stack>
      </Section>

      <Section>
        <Stack gap="lg">
          <Heading level={2}>Typography</Heading>
          <Text>Inter carries display and body text. JetBrains Mono is reserved for code and technical labels.</Text>
          <Stack gap="lg">
            <Stack gap="sm">
              <Eyebrow>Display · 44–80px</Eyebrow>
              <Heading level={2} size="display">A local platform. An open project.</Heading>
            </Stack>
            <Stack gap="sm">
              <Eyebrow>XL · 34–56px</Eyebrow>
              <Heading level={2} size="xl">Semantic tokens, not raw values.</Heading>
            </Stack>
            <Stack gap="sm">
              <Eyebrow>LG · 26–38px</Eyebrow>
              <Heading level={2} size="lg">Section title for documentation.</Heading>
            </Stack>
            <Stack gap="sm">
              <Eyebrow>MD · 22px</Eyebrow>
              <Heading level={3} size="md">Card title</Heading>
            </Stack>
            <Stack gap="sm">
              <Eyebrow>Lead · 18px</Eyebrow>
              <Text size="lead">A lead paragraph introduces a page in two or three sentences.</Text>
            </Stack>
            <Stack gap="sm">
              <Eyebrow>Body · 16px</Eyebrow>
              <Text>Body copy keeps a line length of roughly 68 characters for comfortable reading.</Text>
            </Stack>
          </Stack>
          <Grid columns={3}>
            <Card title="Measure">Keep running text between 45 and 75 characters. Long measures get more line height, not less.</Card>
            <Card title="Targets">Interactive elements are at least 44px high. Compact filter controls keep a 40px minimum.</Card>
            <Card title="Contrast">Body text meets 4.5:1 and large text meets 3:1 in both themes. Status labels use a darker amber for small text.</Card>
          </Grid>
        </Stack>
      </Section>

      <Section tone="alt" id="components">
        <Stack gap="lg">
          <Heading level={2}>Components</Heading>
          <Text>These are the primitives in the website design system. Each one has a Storybook story with controls.</Text>
          <DataTable
            columns={['Component', 'Purpose', 'Storybook']}
            rows={primitives.map(([name, purpose, story]) => [
              <code key={name}>{name}</code>,
              purpose,
              <TextLink key={name + 's'} href="/design/storybook">{story}</TextLink>,
            ])}
          />
        </Stack>
      </Section>

      <Section>
        <Stack gap="lg">
          <Heading level={2}>Examples</Heading>
          <Stack gap="sm">
            <Eyebrow>Button variants</Eyebrow>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center'}}>
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button size="sm">Small</Button>
            </div>
          </Stack>
          <Stack gap="sm">
            <Eyebrow>Tags</Eyebrow>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 8}}>
              <Tag>Neutral</Tag>
              <Tag tone="accent">Accent</Tag>
              <Tag tone="warning">Warning</Tag>
            </div>
          </Stack>
          <Grid columns={2}>
            <Callout title="Note">Use a note for context that the reader should know but does not need to act on.</Callout>
            <Callout title="Warning" tone="warning">Use a warning when an action can break something or lose data.</Callout>
          </Grid>
          <Stack gap="sm">
            <Eyebrow>Disclosure</Eyebrow>
            <Disclosure summary="What is a token?" defaultOpen>
              A named, semantic value such as <code>--accent</code>. Components read tokens; themes supply the values.
            </Disclosure>
            <Disclosure summary="Can I use raw colours?">
              Only inside a token definition. Components must not hard-code colours or radii.
            </Disclosure>
          </Stack>
          <CodeBlock language="css" code={'.card {\n  background: var(--surface);\n  color: var(--foreground);\n  border: 1px solid var(--border);\n  border-radius: 22px;\n}'} />
        </Stack>
      </Section>

      <Section tone="alt">
        <Stack gap="lg">
          <Heading level={2}>Layout, surfaces and motion</Heading>
          <Grid columns={3}>
            <Card title="Layout">Content frame 1320px. Gutters 56px on desktop, 32px on tablet and 22–24px on mobile. Section padding 56–96px.</Card>
            <Card title="Surfaces">Page on <code>--background</code>, content on <code>--surface</code> with a hairline border, navigation on <code>--surface-glass</code>.</Card>
            <Card title="Motion">State changes take 0.16s, surfaces 0.24s, editorial reveals up to 0.7s. Easing is exponential ease-out; reduced motion removes all of it.</Card>
          </Grid>
        </Stack>
      </Section>

      <Section tone="alt">
        <Stack gap="lg">
          <Heading level={2}>Working with RWDS</Heading>
          <Grid columns={2}>
            <Card title="Start with the page structure">
              <Text>Choose the page pattern first: documentation, editorial, product or campaign. Then compose it from Container, Section, Grid and Stack.</Text>
              <ul>
                <li>Use one display heading per page.</li>
                <li>Keep the reading column below roughly 680px.</li>
                <li>Use surface and alt sections to separate topics, not decoration.</li>
              </ul>
            </Card>
            <Card title="Then use the components">
              <Text>Buttons, cards, callouts, disclosures, figures and tables have a defined API and a Storybook story. Reuse them instead of rebuilding a page pattern.</Text>
              <ul>
                <li>Prefer semantic tokens over local colour values.</li>
                <li>Check light and dark, keyboard focus and reduced motion.</li>
                <li>Use the generator for a new accent family, not for a new layout.</li>
              </ul>
            </Card>
          </Grid>
          <Grid columns={2}>
            <Card title="Do">
              <ul>
                <li>Use the documented components and tokens.</li>
                <li>Keep the typography, spacing and motion consistent.</li>
                <li>Test long-form content and narrow viewports.</li>
                <li>Update the Storybook with the component.</li>
              </ul>
            </Card>
            <Card title="Don't">
              <ul>
                <li>Do not import RUI into a website.</li>
                <li>Do not hard-code colours or radii.</li>
                <li>Do not treat a new accent as a new design system.</li>
                <li>Do not use a page block as a reusable component.</li>
              </ul>
            </Card>
          </Grid>
        </Stack>
      </Section>

      <Section>
        <Callout title="Further reading">
          <TextLink href="/design/rwds/components">Component explorer</TextLink> · <TextLink href="/design/docs/color-tables">Colour tables</TextLink> · <TextLink href="/design/docs/rwds-components">RWDS components docs</TextLink>
        </Callout>
      </Section>

      <Section>
        <Callout title="Boundary rule" tone="important">
          RWDS does not import RUI, and RUI does not style the website. <TextLink href="/design/systems">Read the comparison</TextLink>
        </Callout>
      </Section>
    </>
  );
}
