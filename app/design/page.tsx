import {Button, Callout, Card, DataTable, Grid, Heading, Section, Stack, Text, TextLink} from '@/components/rwds';
import {PageHeader} from '@/components/design/page-header';

export default function DesignHome() {
  return (
    <>
      <PageHeader
        eyebrow="rumahl design systems"
        title={
          <>
            Design documentation for <em style={{fontStyle: 'normal', color: 'var(--design-accent)'}}>RWDS and RUI</em>
          </>
        }
        lead="Reference documentation for the two rumahl design systems: RWDS is the rumahl Web Design System for websites. RUI is the rumahl UI design system for the operating system. Use the Overview / Web Design System / OS Design System toggle in the header to switch between the shared overview and the two systems."
        actions={
          <>
            <Button href="/design/rwds">Web design system (RWDS)</Button>
            <Button href="/design/rui" variant="secondary">OS design system (RUI)</Button>
            <Button href="/design/docs" variant="secondary">Design docs</Button>
            <TextLink href="/design/storybook">Storybook</TextLink>
            <TextLink href="/design/color">Color generator</TextLink>
          </>
        }
        tags={['Status: in development', 'Two separate systems', 'Source available']}
      />

      <Section>
        <Stack gap="lg">
        <Heading level={2}>What do RWDS and RUI mean?</Heading>
        <Grid columns={2}>
          <Card
            eyebrow={<span className="rwds-tag" data-tone="accent">RWDS · Web Design System</span>}
            title="For websites and documentation"
            footer={<TextLink href="/design/rwds">Open the web design system</TextLink>}
          >
            <Text><strong>RWDS</strong> stands for <strong>rumahl Web Design System</strong>. It is used for rumahl.com, docs, help, blog and editorial surfaces: semantic tokens, typography, navigation, content surfaces and motion for reading-heavy pages.</Text>
          </Card>
          <Card
            eyebrow={<span className="rwds-tag" data-tone="accent">RUI · OS Design System</span>}
            title="For the operating system — not for websites"
            footer={<TextLink href="/design/rui">Open the OS design system</TextLink>}
          >
            <Text><strong>RUI</strong> stands for <strong>rumahl UI</strong>. It is the design system for the rumahl OS shell and installed apps. It is not intended for websites; those belong to RWDS.</Text>
          </Card>
        </Grid>
        <TextLink href="/design/glossary">What do the abbreviations mean? Open the glossary</TextLink>
        </Stack>
      </Section>

      <Section>
        <Stack gap="lg">
          <Heading level={2}>How to use this site</Heading>
          <Grid columns={4} gap="sm">
            <Card title="1. Choose a system">Use the Overview / Web Design System (RWDS) / OS Design System (RUI) toggle in the header. The navigation then shows the pages for that section or system.</Card>
            <Card title="2. Open a component">Components opens the component explorer for the selected system, with the Storybook story embedded in the docs layout.</Card>
            <Card title="3. Try a palette">The Color Table Generator creates an accessible accent scale and tinted neutrals for RWDS.</Card>
            <Card title="4. Read the docs">The docs cover tokens, components, adoption, versioning and the boundary between the systems.</Card>
          </Grid>
        </Stack>
      </Section>

      <Section tone="alt">
        <Stack gap="lg">
        <Heading level={2}>Current state</Heading>
        <DataTable
          columns={['System', 'Surface', 'Current state', 'Reference']}
          rows={[
            ['RWDS', 'rumahl.com, docs, help, blog, this site', 'In use. Tokens and components are documented here.', <TextLink key="r" href="/design/rwds">/design/rwds</TextLink>],
            ['RUI', 'rumahl OS shell and installed apps', 'In development. Storybook is the canonical component reference.', <TextLink key="u" href="/design/rui">/design/rui</TextLink>],
          ]}
        />
        </Stack>
      </Section>

      <Section>
        <Stack gap="lg">
        <Grid columns={2}>
          <Card title="Working on rumahl">
            <Text>Website and documentation work uses RWDS. Shell, window, control and app-surface work uses RUI. A shared brand change needs a decision that covers both.</Text>
            <TextLink href="/design/systems">Read the boundary rules</TextLink>
          </Card>
          <Card title="Adopting a system">
            <Text>Pick the system for your surface, check the token and component contract, then read the versioning notes before integrating it.</Text>
            <TextLink href="/design/resources">Open adoption notes</TextLink>
          </Card>
        </Grid>
        <Callout title="Why the design site is violet" tone="note">
          The design site uses a violet wayfinding accent and violet-tinted neutrals so it is visually distinct from the main rumahl website. RWDS component examples and the rumahl brand keep their green accent.
        </Callout>
        <Callout title="Documentation follows implementation">
          Where a system is unfinished, the relevant page states its current scope and limitations.
        </Callout>
        </Stack>
      </Section>
    </>
  );
}
