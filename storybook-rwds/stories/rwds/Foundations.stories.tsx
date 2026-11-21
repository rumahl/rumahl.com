import type {Meta, StoryObj} from '@storybook/react-vite';
import {Container, Grid, Heading, Section, Stack, Swatch, Text} from '../../../components/rwds';

const meta = {
  title: 'RWDS/Foundations',
  tags: ['autodocs'],
  parameters: {layout: 'fullscreen', docs: {description: {component: 'Tokens that every RWDS component reads: colour roles, the type scale and motion. Components never hard-code these values.'}}},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Colour: Story = {
  render: () => (
    <Section>
      <Container>
        <Stack gap="lg">
          <Heading level={2} size="lg">Colour roles</Heading>
          <Grid columns={4} gap="sm">
            {['--accent', '--accent-secondary', '--background', '--surface', '--surface-glass', '--foreground', '--foreground-muted', '--border'].map((token) => (
              <Swatch key={token} token={token} />
            ))}
          </Grid>
          <Text>Switch the Appearance toolbar to compare light and dark values of the same roles.</Text>
        </Stack>
      </Container>
    </Section>
  ),
};

export const Motion: Story = {
  render: () => (
    <Section>
      <Container>
        <Stack gap="lg">
          <Heading level={2} size="lg">Motion</Heading>
          <Grid columns={3}>
            <div><Heading level={3} size="md">State · 0.2s</Heading><Text>Colour, border and background changes.</Text></div>
            <div><Heading level={3} size="md">Surface · 0.35s</Heading><Text>Panels and menus fade or slide in.</Text></div>
            <div><Heading level={3} size="md">Reveal · up to 0.7s</Heading><Text>Editorial reveals never delay reading. Reduced motion removes them.</Text></div>
          </Grid>
        </Stack>
      </Container>
    </Section>
  ),
};
