import type {Metadata} from 'next';
import {Button, Callout, Card, Grid, Heading, Section, Stack, Text, TextLink} from '@/components/rwds';
import {PageHeader} from '@/components/design/page-header';
import {StorybookViewer} from '@/components/design/storybook-viewer';

export const metadata: Metadata = {
  title: 'Storybook — rumahl design systems',
  description: 'The RUI Storybook from rumahl/rumahl and the RWDS Storybook for the rumahl Web Design System.',
  alternates: {canonical: '/design/storybook'},
};

export default function StorybookPage() {
  return (
    <>
      <PageHeader
        eyebrow="Storybook · two systems"
        title="Component references for RWDS and RUI"
        lead="Both Storybooks are static builds hosted here. The RUI Storybook comes from rumahl/rumahl; the RWDS Storybook is built from the website design system."
        actions={
          <>
            <Button href="/design/docs/storybook" variant="secondary">Storybook notes</Button>
            <TextLink href="/design/systems">Compare the systems</TextLink>
          </>
        }
      />
      <Section tone="alt">
        <Stack gap="lg">
          <Heading level={2}>How to use the builds</Heading>
          <Grid columns={3}>
            <Card title="Browse one story">Use the component explorer for the selected system. It embeds a single story in the normal documentation layout.</Card>
            <Card title="Inspect in detail">Open the story in a new tab or open the full Storybook for controls, addons, theming and accessibility checks.</Card>
            <Card title="Keep the source">The design site only frames the build. Update the Storybook source and rebuild; the explorer reads the new index automatically.</Card>
          </Grid>
          <Callout title="Two Storybooks, two systems" tone="note">
            RWDS components live in the website repository. RUI components live in rumahl/rumahl. Do not merge the builds or import one system into the other.
          </Callout>
        </Stack>
      </Section>

      <Section>
        <Stack gap="lg">
          <StorybookViewer />
          <Grid columns={2}>
            <Card title="RWDS Storybook" footer={<div style={{display: 'flex', gap: 12, flexWrap: 'wrap'}}><TextLink href="/design/rwds/components">Component explorer</TextLink><TextLink href="/design/rwds">RWDS reference</TextLink></div>}>
              <Text>Foundations, the website components through components/rwds, and the documentation surfaces with the production stylesheet.</Text>
            </Card>
            <Card title="RUI Storybook" footer={<div style={{display: 'flex', gap: 12, flexWrap: 'wrap'}}><TextLink href="/design/rui/components">Component explorer</TextLink><TextLink href="/design/rui">RUI reference</TextLink></div>}>
              <Text>The canonical component reference for the OS shell and installed apps, with foundations, layouts, themes and accessibility checks.</Text>
            </Card>
          </Grid>
        </Stack>
      </Section>
    </>
  );
}
