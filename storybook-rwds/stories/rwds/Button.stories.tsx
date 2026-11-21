import type {Meta, StoryObj} from '@storybook/react-vite';
import {Button} from '../../../components/rwds';

const meta = {
  title: 'RWDS/Button',
  component: Button,
  tags: ['autodocs'],
  args: {children: 'Read the reference', variant: 'primary', size: 'md', disabled: false},
  argTypes: {
    variant: {control: 'inline-radio', options: ['primary', 'secondary', 'ghost', 'inverse']},
    size: {control: 'inline-radio', options: ['md', 'sm']},
    children: {control: 'text'},
    href: {control: 'text', description: 'Renders a link when set, otherwise a button.'},
    external: {control: 'boolean'},
    disabled: {control: 'boolean'},
    icon: {control: false},
    onClick: {action: 'clicked'},
  },
  parameters: {layout: 'centered', docs: {description: {component: 'Primary call to action. Use `href` for navigation and a button for in-page actions. Keep one primary action per section.'}}},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const AsLink: Story = {args: {href: '/design/rwds', children: 'RWDS reference'}};

export const AllVariants: Story = {
  parameters: {layout: 'padded'},
  render: () => (
    <div style={{display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center'}}>
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="inverse">Inverse</Button>
      <Button size="sm">Small</Button>
      <Button disabled>Disabled</Button>
    </div>
  ),
};
