import type {Meta, StoryObj} from '@storybook/react-vite';
import {Eyebrow, Heading, Text} from '../../../components/rwds';

const meta = {
  title: 'RWDS/Heading & Text',
  component: Heading,
  tags: ['autodocs'],
  args: {children: 'Your services. One home.', level: 2, size: 'lg'},
  argTypes: {
    level: {control: 'inline-radio', options: [1, 2, 3, 4], description: 'Semantic element (h1–h4).'},
    size: {control: 'inline-radio', options: ['display', 'xl', 'lg', 'md', 'sm'], description: 'Visual scale, independent of the level.'},
    children: {control: 'text'},
  },
  parameters: {layout: 'padded', docs: {description: {component: 'Headings separate the semantic level from the visual size. Use one `display` heading per page and keep the levels in order.'}}},
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Scale: Story = {
  render: () => (
    <div style={{display: 'grid', gap: 22, maxWidth: 900}}>
      <Eyebrow>Display · 44–80px</Eyebrow>
      <Heading level={1} size="display">No dependencies. No limitations.</Heading>
      <Eyebrow>XL · 34–56px</Eyebrow>
      <Heading level={2} size="xl">Semantic tokens, not raw values.</Heading>
      <Eyebrow>LG · 26–38px</Eyebrow>
      <Heading level={2} size="lg">A section title for documentation.</Heading>
      <Eyebrow>MD · 22px</Eyebrow>
      <Heading level={3} size="md">A card title</Heading>
      <Eyebrow>SM · 16px</Eyebrow>
      <Heading level={4} size="sm">A small label heading</Heading>
    </div>
  ),
};

export const TextScale: Story = {
  render: () => (
    <div style={{display: 'grid', gap: 18, maxWidth: 760}}>
      <Eyebrow>Lead · 18px</Eyebrow>
      <Text size="lead">A lead paragraph introduces a page in two or three sentences.</Text>
      <Eyebrow>Body · 16px</Eyebrow>
      <Text>Body copy keeps a line length of roughly 68 characters for comfortable reading.</Text>
      <Eyebrow>Small · 14px</Eyebrow>
      <Text size="small">Small text is used for metadata and captions.</Text>
      <Eyebrow>Strong</Eyebrow>
      <Text tone="strong">Strong text uses the foreground colour for emphasis.</Text>
    </div>
  ),
};
