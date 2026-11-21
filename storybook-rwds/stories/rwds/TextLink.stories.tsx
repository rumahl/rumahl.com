import type {Meta, StoryObj} from '@storybook/react-vite';
import {TextLink} from '../../../components/rwds';

const meta = {
  title: 'RWDS/TextLink',
  component: TextLink,
  tags: ['autodocs'],
  args: {children: 'Open the reference', href: '/design/rwds', external: false},
  argTypes: {children: {control: 'text'}, href: {control: 'text'}, external: {control: 'boolean'}},
  parameters: {layout: 'centered', docs: {description: {component: 'Inline navigation. Underlines on hover; always keep the link text descriptive.'}}},
} satisfies Meta<typeof TextLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const External: Story = {args: {href: 'https://github.com/rumahl/rumahl', children: 'Source on GitHub', external: true}};
