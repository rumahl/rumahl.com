import type {Meta, StoryObj} from '@storybook/react-vite';
import {Grid, Swatch} from '../../../components/rwds';

const meta = {
  title: 'RWDS/Swatch',
  component: Swatch,
  tags: ['autodocs'],
  args: {token: '--accent', description: 'Accent'},
  argTypes: {token: {control: 'select', options: ['--accent', '--accent-secondary', '--background', '--surface', '--surface-glass', '--foreground', '--foreground-muted', '--border']}, description: {control: 'text'}},
  parameters: {layout: 'padded', docs: {description: {component: 'Preview of a colour role. Switch the Appearance toolbar to see light and dark values of the same token.'}}},
} satisfies Meta<typeof Swatch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {render: (args) => <div style={{maxWidth: 220}}><Swatch {...args} /></div>};

export const AllRoles: Story = {
  render: () => (
    <Grid columns={4} gap="sm">
      {['--accent', '--accent-secondary', '--background', '--surface', '--surface-glass', '--foreground', '--foreground-muted', '--border'].map((token) => (
        <Swatch key={token} token={token} />
      ))}
    </Grid>
  ),
};
