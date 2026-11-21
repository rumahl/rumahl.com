import type {Metadata} from 'next';
import {Button, Callout, Card, Grid, Heading, Section, Stack, Text, TextLink} from '@/components/rwds';
import {PageHeader} from '@/components/design/page-header';

export const metadata: Metadata = {
  title: 'Resources — rumahl Design',
  description: 'Source, Storybook builds, adoption notes and contribution rules for the rumahl design systems.',
  alternates: {canonical: '/design/resources'},
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources and adoption"
        title="Source, tooling and adoption notes"
        lead="Where each system lives, how to run its documentation, what to check before adopting it and how to propose changes without coupling RWDS and RUI."
        actions={
          <>
            <Button href="/design/storybook">Storybook builds</Button>
            <Button href="https://github.com/rumahl/rumahl" variant="secondary" external>
              Source on GitHub
            </Button>
          </>
        }
      />

      <Section>
        <Stack gap="lg">
          <Heading level={2}>Where each system lives</Heading>
          <Grid columns={2}>
            <Card title="RWDS" footer={<TextLink href="/design/rwds">Open the RWDS reference</TextLink>}>
              <Text>The website application and its components. Theme tokens live in the global website stylesheet and the RWDS component layer in components/rwds.</Text>
            </Card>
            <Card title="RUI" footer={<TextLink href="/design/rui">Open the RUI reference</TextLink>}>
              <Text>The OS UI kit: @rumahl/ui, shell layouts, components, themes and Storybook stories in frontend/packages.</Text>
            </Card>
          </Grid>
        </Stack>
      </Section>

      <Section tone="alt">
        <Stack gap="lg">
          <Heading level={2}>Storybook</Heading>
          <Text>RUI has its own Storybook from the rumahl repository. RWDS has a Storybook for the website components. Both are published under /design/storybook.</Text>
          <Grid columns={2}>
            <Card title="Glossary" footer={<TextLink href="/design/glossary">Open the glossary</TextLink>}>
              <Text>Plain-language definitions for RWDS, RUI, tokens, components, stories and the terms used in this documentation.</Text>
            </Card>
            <Card title="Color Table Generator" footer={<TextLink href="/design/color">Open the generator</TextLink>}>
              <Text>Generate an accessible 50–950 accent scale and tinted neutrals from a seed colour. Typography, spacing, radii and motion stay fixed.</Text>
            </Card>
            <Card title="Run RWDS locally">
              <Text>Install the package once with <code>pnpm --dir storybook-rwds install --ignore-workspace</code>, then run <code>pnpm --dir storybook-rwds storybook</code>.</Text>
            </Card>
            <Card title="Rebuild the published copies">
              <Text>Run <code>scripts/sync-storybooks.sh</code> from the website repository. Set RUMAHL_REPO if the rumahl repository is elsewhere.</Text>
            </Card>
          </Grid>
        </Stack>
      </Section>

      <Section>
        <Stack gap="lg">
          <Heading level={2}>Before you adopt a system</Heading>
          <Grid columns={3}>
            <Card title="1. Choose by surface">A website or documentation page uses RWDS. A shell, window or app control uses RUI.</Card>
            <Card title="2. Check the contract">RWDS uses semantic website tokens. RUI uses --rumahl-ui-* tokens and component props with semver stability.</Card>
            <Card title="3. Read the boundary">No cross-imports. If a component needs both surfaces, split it into two components with a shared brand decision.</Card>
          </Grid>
          <Callout title="Licence and brand">
            Source and licence information is in the rumahl repository. The name and logo stay governed by the trademark policy even when a design system is adopted.
          </Callout>
        </Stack>
      </Section>

      <Section tone="alt">
        <Stack gap="lg">
          <Heading level={2}>Contributing</Heading>
          <Grid columns={3}>
            <Card title="RWDS">Use semantic tokens, document any new role, check light and dark, long-form readability and mobile layout.</Card>
            <Card title="RUI">Add or change a component, its story and its test together. Keep token IDs and props semver-stable.</Card>
            <Card title="Shared brand">A brand change affects both systems. Treat it as a cross-system decision, not a local style change.</Card>
          </Grid>
        </Stack>
      </Section>
    </>
  );
}
