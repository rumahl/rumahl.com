import type {Meta, StoryObj} from '@storybook/react-vite';
import {Card, Tag, TextLink} from '../../../components/rwds';

const meta = {
  title: 'RWDS/Card',
  component: Card,
  tags: ['autodocs'],
  args: {title: 'Documentation', children: 'A short description of what the reader will find here.', padding: 'md', tone: 'surface'},
  argTypes: {
    title: {control: 'text'},
    children: {control: 'text'},
    padding: {control: 'inline-radio', options: ['md', 'lg']},
    tone: {control: 'inline-radio', options: ['surface', 'plain']},
    href: {control: 'text', description: 'Makes the whole card a link.'},
    eyebrow: {control: false},
    footer: {control: false},
  },
  parameters: {layout: 'padded', docs: {description: {component: 'Content surface with title, body and an optional footer. Put the call to action in the footer so cards in a grid align.'}}},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const WithFooter: Story = {
  args: {footer: <TextLink href="#example">Open the reference</TextLink>, eyebrow: <Tag tone="accent">RWDS</Tag>},
  render: (args) => <div style={{maxWidth: 380}}><Card {...args} /></div>,
};

export const Interactive: Story = {
  args: {href: '#example', title: 'Whole card is a link', children: 'Hover to see the border change.'},
  render: (args) => <div style={{maxWidth: 380}}><Card {...args} /></div>,
};

export const Plain: Story = {args: {tone: 'plain', title: 'Plain card', children: 'No surface, only the border.'}};
