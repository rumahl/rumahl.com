import type {Metadata} from 'next';
import {Button, Callout, DataTable, Heading, Section, Stack, TextLink} from '@/components/rwds';
import {PageHeader} from '@/components/design/page-header';

export const metadata: Metadata = {
  title: 'Glossary — rumahl Design',
  description: 'Plain-language glossary for the rumahl design systems: RWDS, RUI, tokens, components, stories and more.',
  alternates: {canonical: '/design/glossary'},
};

export default function GlossaryPage() {
  return (
    <>
      <PageHeader
        eyebrow="rumahl design systems · glossary"
        title="Words we use, explained."
        lead="A short glossary for the terms in the design documentation. It starts with the two abbreviations that cause the most confusion: RWDS and RUI."
        actions={
          <>
            <Button href="/design" variant="secondary">Design overview</Button>
            <Button href="/design/systems" variant="secondary">RWDS and RUI comparison</Button>
          </>
        }
        tags={['Plain language', 'Two systems', 'Reference']}
      />

      <Section>
        <Stack gap="lg">
          <Heading level={2}>The two systems</Heading>
          <DataTable
            columns={['Term', 'What it means', 'Where it is used']}
            rows={[
              [
                'RWDS',
                <span key="rwds"><strong>rumahl Web Design System.</strong> The design system for websites and documentation: tokens, typography, layout, content surfaces and web components.</span>,
                <span key="rwds-where">rumahl.com, docs, help, blog, this design site</span>,
              ],
              [
                'RUI',
                <span key="rui"><strong>rumahl UI.</strong> The design system and component library for the rumahl OS shell and installed apps. It is not intended for websites.</span>,
                <span key="rui-where">OS shell, windows, controls, installed apps</span>,
              ],
              [
                'Design system',
                'A shared set of rules, tokens and components for building a consistent product surface. It is more than a component library: it also defines usage, accessibility and boundaries.',
                'RWDS and RUI',
              ],
            ]}
          />
          <Callout title="One sentence" tone="important">
            RWDS makes websites; RUI makes the operating system. RUI is not a website design system, even if a component can render in a browser.
          </Callout>
        </Stack>
      </Section>

      <Section tone="alt">
        <Stack gap="lg">
          <Heading level={2}>Building blocks</Heading>
          <DataTable
            columns={['Term', 'What it means', 'Example']}
            rows={[
              ['Token', 'A named value. Components use the name, not a raw colour or size, so a theme can change the value.', <code key="token">--accent</code>],
              ['Primitive', 'A small reusable building block with a focused job.', 'Button, Heading, Text, Card'],
              ['Component', 'A reusable UI piece made from primitives and behaviour.', 'Navigation, DocsCard, ColorTableGenerator'],
              ['Pattern', 'A composition of components for a recurring job.', 'Docs page, component explorer, homepage section'],
              ['Provider', 'The thing that supplies data or capabilities to an app or a native surface.', 'Home Assistant, TrueNAS, Nextcloud'],
              ['Theme', 'Data that supplies token values and presentation rules without changing component behaviour.', 'Light, dark, a custom RWDS accent'],
              ['Presentation theme', 'The colour theme used to present the design site itself, not the default theme of the documented system.', 'The violet theme on this site'],
            ]}
          />
        </Stack>
      </Section>

      <Section>
        <Stack gap="lg">
          <Heading level={2}>Documentation and tooling</Heading>
          <DataTable
            columns={['Term', 'What it means', 'Where to go']}
            rows={[
              [
                'Storybook',
                'The living component reference. It contains stories, docs pages, controls and addons for a design system.',
                <TextLink key="storybook" href="/design/storybook">Storybook overview</TextLink>,
              ],
              [
                'Story',
                'One isolated component state or composed example inside Storybook.',
                <TextLink key="story" href="/design/rwds/components">Component explorer</TextLink>,
              ],
              [
                'Docs page',
                'A Storybook page that explains a component and combines its documentation with examples.',
                <TextLink key="docs" href="/design/storybook">Storybook overview</TextLink>,
              ],
              [
                'Component explorer',
                'The custom UI on this site that reads a Storybook index and shows one story at a time inside the normal documentation layout.',
                <TextLink key="explorer" href="/design/rwds/components">RWDS components</TextLink>,
              ],
              [
                'Color table',
                'A 50–950 colour scale generated from a seed colour, with semantic roles and contrast checks.',
                <TextLink key="color" href="/design/color">Color Table Generator</TextLink>,
              ],
            ]}
          />
        </Stack>
      </Section>

      <Section tone="alt">
        <Stack gap="lg">
          <Heading level={2}>Quality terms</Heading>
          <DataTable
            columns={['Term', 'What it means']}
            rows={[
              ['Contrast ratio', 'The measured difference in luminance between text and its background. WCAG uses ratios such as 4.5:1 for normal text.'],
              ['WCAG AA', 'A level of the Web Content Accessibility Guidelines. For normal text it requires a contrast ratio of at least 4.5:1.'],
              ['Reduced motion', 'A user preference that removes non-essential motion. RWDS and RUI both respect it.'],
              ['Semantic token', 'A token named by role (accent, surface, text) rather than by value (green, white, dark).'],
              ['Responsive', 'A layout that adapts to available width without changing the information hierarchy.'],
            ]}
          />
        </Stack>
      </Section>

      <Section>
        <Callout title="Still unsure?" tone="note">
          Use the design overview for the system model, or open the comparison for the boundary rules. <TextLink href="/design">Design overview</TextLink> · <TextLink href="/design/systems">Comparison</TextLink>
        </Callout>
      </Section>
    </>
  );
}
