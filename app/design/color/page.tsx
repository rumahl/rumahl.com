import type {Metadata} from 'next';
import {Button, Callout, Card, Grid, Heading, Section, Stack, Text, TextLink} from '@/components/rwds';
import {PageHeader} from '@/components/design/page-header';
import {ColorTableGenerator} from '@/components/design/color-table-generator';

export const metadata: Metadata = {
  title: 'Color Table Generator — rumahl Design',
  description: 'Generate an accessible RWDS accent scale from a seed colour while keeping the design-system identity fixed.',
  alternates: {canonical: '/design/color'},
};

export default function ColorPage() {
  return (
    <>
      <PageHeader
        eyebrow="RWDS · Colour"
        title={
          <>
            Color Table <em style={{fontStyle: 'normal', color: 'var(--design-accent)'}}>Generator</em>
          </>
        }
        lead="RWDS supports different accent families. Pick a seed colour and generate a systematic 50–950 scale, tinted neutral surfaces and accessible light and dark roles, without changing the layout, type, spacing or motion that make rumahl recognisable."
        actions={
          <>
            <Button href="/design/rwds">RWDS reference</Button>
            <Button href="/design/docs/color-tables" variant="secondary">Colour-table rules</Button>
          </>
        }
        tags={['Accent families', 'WCAG contrast', 'CSS output']}
      />

      <Section>
        <ColorTableGenerator />
      </Section>

      <Section tone="alt">
        <Stack gap="lg">
          <Heading level={2}>What changes and what stays</Heading>
          <Grid columns={3}>
            <Card title="Changes">The accent scale, the tinted neutral surfaces, the semantic roles and the contrast colour on accent surfaces.</Card>
            <Card title="Stays fixed">Typography, spacing, radii, motion, component structure and the semantic role model.</Card>
            <Card title="Validated">Every scale step shows its contrast against the generated light and dark backgrounds. Accent roles are chosen from steps that meet normal-text contrast.</Card>
          </Grid>
          <Callout title="Identity is the system, not one hue" tone="important">
            A project can use blue, violet or amber without becoming a different design system. What preserves the identity is the role model and the fixed typography, spacing and motion.
          </Callout>
          <TextLink href="/design/systems">Read how RWDS differs from RUI</TextLink>
        </Stack>
      </Section>

      <Section tone="alt">
        <Stack gap="lg">
          <Heading level={2}>How to apply the output</Heading>
          <Grid columns={3}>
            <Card title="1. Copy the CSS">Use the generated variables for the accent family and the neutral surfaces. Keep the rest of the theme unchanged.</Card>
            <Card title="2. Check the contrast">Use the table to confirm that the selected accent meets normal-text contrast on both backgrounds. Fix the seed or reduce the tint if it does not.</Card>
            <Card title="3. Keep the identity">Typography, spacing, radii, motion and component structure stay fixed. A palette change is not a new design system.</Card>
          </Grid>
          <Callout title="Do not apply this to RUI" tone="important">
            The RWDS colour table is for the web system. RUI has its own token namespace, materials and theme model.
          </Callout>
        </Stack>
      </Section>

      <Section>
        <Stack gap="lg">
          <Heading level={2}>RWDS is a web system</Heading>
          <Text>RWDS is built for websites and documentation. RUI is the operating-system design system. RUI is not intended for websites: its density, window chrome, materials and interaction model are designed for the OS shell, even where a component can technically render in a browser.</Text>
          <TextLink href="/design/systems">Open the system comparison</TextLink>
        </Stack>
      </Section>
    </>
  );
}
