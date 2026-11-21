import type {Meta, StoryObj} from '@storybook/react-vite';
import {Tag} from '../../../components/rwds';

const meta = {
  title: 'RWDS/Tag',
  component: Tag,
  tags: ['autodocs'],
  args: {children: 'In development', tone: 'neutral'},
  argTypes: {tone: {control: 'inline-radio', options: ['neutral', 'accent', 'warning']}, children: {control: 'text'}},
  parameters: {layout: 'centered', docs: {description: {component: 'Status or category label. Use `accent` for the current subject, `warning` for unfinished or risky states.'}}},
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Tones: Story = {
  render: () => (
    <div style={{display: 'flex', gap: 8, flexWrap: 'wrap'}}>
      <Tag>Neutral</Tag>
      <Tag tone="accent">Accent</Tag>
      <Tag tone="warning">Warning</Tag>
    </div>
  ),
};
