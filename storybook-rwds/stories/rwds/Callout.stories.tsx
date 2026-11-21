import type {Meta, StoryObj} from '@storybook/react-vite';
import {Callout} from '../../../components/rwds';

const meta = {
  title: 'RWDS/Callout',
  component: Callout,
  tags: ['autodocs'],
  args: {title: 'Note', children: 'Context the reader should know, but does not need to act on.', tone: 'note'},
  argTypes: {
    title: {control: 'text'},
    children: {control: 'text'},
    tone: {control: 'inline-radio', options: ['note', 'tip', 'important', 'warning']},
  },
  parameters: {layout: 'padded', docs: {description: {component: 'Highlighted text for context. Use `warning` only when an action can lose data or break something.'}}},
} satisfies Meta<typeof Callout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const AllTones: Story = {
  render: () => (
    <div style={{display: 'grid', gap: 14, maxWidth: 720}}>
      <Callout title="Note">Context for the reader.</Callout>
      <Callout title="Tip" tone="tip">A helpful shortcut.</Callout>
      <Callout title="Important" tone="important">A rule that must be followed.</Callout>
      <Callout title="Warning" tone="warning">An action that can break something.</Callout>
    </div>
  ),
};
