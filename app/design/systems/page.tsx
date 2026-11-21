import type {Metadata} from 'next';
import {Button, Callout, Card, DataTable, Grid, Heading, Section, Stack, Text, TextLink} from '@/components/rwds';
import {PageHeader} from '@/components/design/page-header';

export const metadata: Metadata = {
  title: 'RWDS vs RUI — rumahl Design',
  description: 'How the rumahl Web Design System and rumahl UI differ, what they share and the rules that keep them separate.',
  alternates: {canonical: '/design/systems'},
};

export default function SystemsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Comparison and boundaries"
        title="RWDS and RUI: which system applies?"
        lead="This page defines the boundary between the web and operating-system design systems. Use it when a change could affect both, or when deciding where a new component belongs."
        actions={
          <>
            <Button href="/design/rwds">RWDS reference</Button>
            <Button href="/design/rui" variant="secondary">RUI reference</Button>
          </>
        }
      />

      <Section>
        <Stack gap="lg">
          <Heading level={2}>At a glance</Heading>
          <DataTable
            columns={['Dimension', 'RWDS', 'RUI']}
            rows={[
              ['Surface', 'Websites, docs, help, blog, campaigns', 'rumahl OS shell and installed apps'],
              ['Package', 'Website theme and page components', '@rumahl/ui component library'],
              ['Token namespace', 'Website roles such as --surface and --accent', '--rumahl-ui-*'],
              ['Typography', 'Editorial display and long-form body copy', 'OS UI scale, controls and window chrome'],
              ['Surfaces', 'Sections, cards, glass navigation, editorial imagery', 'Glass, solid and floating materials over wallpapers'],
              ['Layout', '1320px editorial frame and content hierarchy', 'Windows, toolbars, panels, app and mobile layouts'],
              ['Motion', 'Editorial reveals and calm state transitions', 'Window, control and material motion'],
              ['Documentation', 'This design site', 'Storybook and /developers/storybook'],
            ]}
          />
        </Stack>
      </Section>

      <Section tone="alt">
        <Stack gap="lg">
          <Heading level={2}>What the systems are not</Heading>
          <Grid columns={2}>
            <Card title="RUI is not a website system">
              <Text>RUI is built for the OS shell and installed apps. Its density, window chrome, materials and interaction model assume an operating system. Using it for a website is not meaningful, even if a component renders in a browser.</Text>
            </Card>
            <Card title="RWDS is not an OS kit">
              <Text>RWDS covers pages, documentation and editorial surfaces. It has no window manager, shell controls or wallpaper materials. Those belong to RUI.</Text>
            </Card>
          </Grid>
          <Callout title="Rendering is not the same as fit" tone="important">
            A component can render in a browser and still be wrong for the surface. The question is not whether it displays, but whether its focus, density and semantics match the job.
          </Callout>
        </Stack>
      </Section>

      <Section>
        <Stack gap="lg">
          <Heading level={2}>Shared and different</Heading>
          <Grid columns={2}>
            <Card title="Shared constraints">
              <Text>The rumahl name, wordmark and green brand family. Inter as the primary face. Semantic colour roles instead of hard-coded values. Keyboard access, visible focus and reduced motion. Light and dark as expressions of the same system.</Text>
            </Card>
            <Card title="Deliberately different">
              <Text>Component inventories, input assumptions (reading versus operating), material rules, token namespaces and release cycles.</Text>
            </Card>
          </Grid>
        </Stack>
      </Section>

      <Section>
        <Stack gap="lg">
          <Heading level={2}>Governance</Heading>
          <Grid columns={3}>
            <Card title="No cross-imports">RWDS does not import RUI components or CSS. RUI does not consume website page components.</Card>
            <Card title="Share the brand, not the code">A shared colour or typeface is a design decision. Reusing a component across surfaces needs its own decision.</Card>
            <Card title="Document in the right place">Web system changes belong here. OS component changes belong in Storybook and the developer documentation.</Card>
          </Grid>
          <Callout title="Rule of thumb">
            If a component needs a window manager, it is RUI. If it needs a reading column, it is RWDS. If it needs both, it is usually two components that share a brand token.
          </Callout>
        </Stack>
      </Section>

      <Section>
        <Stack gap="lg">
          <Heading level={2}>Common mistakes</Heading>
          <Grid columns={2}>
            <Card title="Choosing RUI because it renders">A component that renders in a browser is not automatically right for a website. Check the focus, density and semantics of the surface.</Card>
            <Card title="Changing the shared brand locally">A brand colour or typeface is a cross-system decision. Do not change it inside one system without reviewing the other.</Card>
            <Card title="Importing components across systems">RWDS and RUI are not one package. Reusing a component across surfaces usually means building two components with a shared decision.</Card>
            <Card title="Confusing palette and system">A new accent family or tint changes the palette. It does not change layout, type, spacing or motion, so it is still RWDS.</Card>
          </Grid>
        </Stack>
      </Section>

      <Section tone="alt">
        <Stack gap="lg">
          <Heading level={2}>Decision guide</Heading>
          <Text>A page, article, docs entry or campaign uses RWDS. A shell, window, settings page or app control uses RUI.</Text>
          <TextLink href="/design/resources">Resources and adoption</TextLink>
        </Stack>
      </Section>
    </>
  );
}
