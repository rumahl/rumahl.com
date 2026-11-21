import type {Meta, StoryObj} from '@storybook/react-vite';
import {Container, Grid, Section, Stack, Card} from '../../../components/rwds';

const meta = {
  title: 'RWDS/Layout',
  component: Section,
  tags: ['autodocs'],
  args: {tone: 'default', spacing: 'default', children: null},
  argTypes: {
    tone: {control: 'inline-radio', options: ['default', 'alt', 'inverse']},
    spacing: {control: 'inline-radio', options: ['default', 'tight']},
  },
  parameters: {layout: 'fullscreen', docs: {description: {component: '`Section` is the vertical unit, `Container` the horizontal frame, `Grid` the responsive columns and `Stack` the vertical rhythm. Pick the smallest one that expresses the structure.'}}},
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

const sample = (label: string) => (
  <Card title={label}>Content inside the container.</Card>
);

export const SectionTones: Story = {
  render: () => (
    <div>
      <Section>
        <Stack gap="sm">
          <strong>Default section</strong>
        </Stack>
      </Section>
      <Section tone="alt">
        <strong>Alternate section (surface)</strong>
      </Section>
      <Section tone="inverse">
        <strong style={{color: 'var(--white)'}}>Inverse section (dark band)</strong>
      </Section>
    </div>
  ),
};

export const Containers: Story = {
  render: () => (
    <div>
      <Section>
        <Container width="narrow">{sample('Narrow · 760px · reading')}</Container>
      </Section>
      <Section>
        <Container width="content">{sample('Content · 1040px · documentation')}</Container>
      </Section>
      <Section>
        <Container width="wide">{sample('Wide · 1240px · pages')}</Container>
      </Section>
    </div>
  ),
};

export const Grids: Story = {
  render: () => (
    <Section>
      <Stack gap="lg">
        <Grid columns={2}>{sample('Two columns')}{sample('Two columns')}</Grid>
        <Grid columns={3}>{sample('Three columns')}{sample('Three columns')}{sample('Three columns')}</Grid>
        <Grid columns={4} gap="sm">{sample('Four')}{sample('Four')}{sample('Four')}{sample('Four')}</Grid>
      </Stack>
    </Section>
  ),
};
