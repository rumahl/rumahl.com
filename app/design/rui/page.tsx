import type {Metadata} from 'next';
import {Button, Callout, Card, DataTable, Grid, Heading, Section, Stack, Text, TextLink} from '@/components/rwds';
import {PageHeader} from '@/components/design/page-header';

export const metadata: Metadata = {
  title: 'RUI — rumahl UI',
  description: 'Reference for rumahl UI: scope, tokens, materials, components, theming and Storybook.',
  alternates: {canonical: '/design/rui'},
};

const storybookUrl = process.env.NEXT_PUBLIC_STORYBOOK_URL;

export default function RUIPage() {
  return (
    <>
      <PageHeader
        eyebrow="RUI · Operating system"
        title={
          <>
            rumahl <em style={{fontStyle: 'normal', color: 'var(--design-accent)'}}>UI</em>
          </>
        }
        lead="RUI is the design system and component library of the rumahl OS shell and its apps. It is not a website design system: its density, materials, window chrome and interaction model are built for the OS, so using it on a website is not meaningful even where a component can technically render. Storybook is the detailed reference."
        actions={
          <>
            <Button href="/design/rui/components">Component explorer</Button>
            <Button href="/design/storybook" variant="secondary">Storybook builds</Button>
            {storybookUrl ? (
              <Button href={storybookUrl} variant="secondary" external>
                Hosted Storybook
              </Button>
            ) : null}
          </>
        }
        tags={['In development']}
      />

      <Section tone="alt">
        <Stack gap="lg">
          <Heading level={2}>Purpose and boundary</Heading>
          <Callout title="Not for websites" tone="important">
            RUI is an operating-system design system. It is not intended for websites, documentation pages or marketing surfaces. Those belong to RWDS. RUI components may render in a browser, but their focus and semantics are the OS shell.
          </Callout>
          <Grid columns={3}>
            <Card title="Package boundary">RUI ships components, hooks, icons, styles and tests as one package. It is not a loose set of CSS classes.</Card>
            <Card title="Theme contract">A theme is a validated set of tokens, optional CSS and safe templates. Switching themes needs no rebuild.</Card>
            <Card title="Accessibility">Native elements, accessible names, associated errors, visible focus and the Storybook a11y addon are part of the contract.</Card>
          </Grid>
          <Text>The shell owns behaviour. Themes change appearance. Apps add content only through defined interfaces.</Text>
        </Stack>
      </Section>

      <Section>
        <Stack gap="lg">
          <Heading level={2}>Tokens</Heading>
          <Text>RUI tokens are projected onto the shell root as <code>--rumahl-ui-*</code> custom properties. Components read tokens; a theme supplies the values.</Text>
          <DataTable
            columns={['Group', 'Purpose']}
            rows={[
              [<code key="c">color.*</code>, 'Accent, surfaces, text, canvas, panel, outline and shadow'],
              [<code key="m">material.*</code>, 'Blur, saturation, opacity and glass strength'],
              [<code key="s">shape.*</code>, 'Corner radii and icon sizes'],
              [<code key="mo">motion.*</code>, 'Durations and easing'],
              [<code key="t">typography.*</code>, 'UI and display faces and the type scale'],
              [<code key="l">layout.*</code>, 'Layout primitives for shell and app surfaces'],
              [<code key="w">texture.wallpaper</code>, 'Wallpaper-aware surface treatment'],
            ]}
          />
        </Stack>
      </Section>

      <Section tone="alt">
        <Stack gap="lg">
          <Heading level={2}>Materials</Heading>
          <Grid columns={3}>
            <Card title="Glass">The default control material for navigation and controls over the OS surface.</Card>
            <Card title="Solid">Flat, opaque surfaces where translucency would reduce clarity.</Card>
            <Card title="Floating">An element state for controls over a picture or another surface. A floating control is its own island.</Card>
          </Grid>
        </Stack>
      </Section>

      <Section>
        <Stack gap="lg">
          <Heading level={2}>Component groups</Heading>
          <DataTable
            columns={['Group', 'Examples']}
            rows={[
              ['Window & chrome', 'Window, toolbar, tray, menu bar'],
              ['Controls', 'Button, inputs, select, search, stepper, colour picker'],
              ['Feedback', 'Badge, notice, toast, progress, skeleton, tooltip'],
              ['Navigation', 'Tabs, steps, breadcrumbs, sidenav, navbar, list'],
              ['Overlays', 'Dialog, anchored popover, menus'],
              ['Layouts', 'App layout, settings, mobile shell, launcher, split views'],
            ]}
          />
        </Stack>
      </Section>

      <Section>
        <Stack gap="lg">
          <Heading level={2}>Working with RUI</Heading>
          <Grid columns={3}>
            <Card title="Use the package">Import components, hooks, icons, styles and providers from @rumahl/ui. Do not copy component CSS into an app.</Card>
            <Card title="Theme with tokens">Wrap the surface in ThemeProvider and let the shell resolve the active theme. Components read tokens, not local colours.</Card>
            <Card title="Check in Storybook">Use the component explorer or the full Storybook to inspect states, layouts, theming and accessibility before shipping.</Card>
          </Grid>
          <Callout title="Not covered by RUI" tone="important">
            Websites, documentation pages, editorial layouts and marketing surfaces belong to RWDS. RUI is an operating-system system and is not intended for websites.
          </Callout>
        </Stack>
      </Section>

      <Section tone="alt">
        <Callout title="Further reading">
          <TextLink href="/design/rui/components">Component explorer</TextLink> · <TextLink href="/developers/storybook">Storybook guide</TextLink> · <TextLink href="/design/systems">RWDS and RUI comparison</TextLink>
        </Callout>
      </Section>

      <Section tone="alt">
        <Stack gap="lg">
          <Heading level={2}>Theming</Heading>
          <Grid columns={2}>
            <Card title="Theme model">
              <Text>An id, a name and supported modes, token values for colour, material, shape, motion, typography, layout and texture, optional CSS and safe slot templates.</Text>
            </Card>
            <Card title="Runtime">
              <Text>ThemeProvider projects the active tokens onto the document root. The shell resolves the theme from account and device preferences.</Text>
            </Card>
          </Grid>
          <Callout title="Stability">Token IDs and component props are a public contract and follow semver: add, deprecate, then remove.</Callout>
        </Stack>
      </Section>

      <Section>
        <Callout title="Boundary rule" tone="important">
          RUI does not style the website. RWDS owns the web canvas and long-form reading. <TextLink href="/design/systems">Read the comparison</TextLink>
        </Callout>
      </Section>
    </>
  );
}
