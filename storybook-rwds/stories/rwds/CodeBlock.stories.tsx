import type {Meta, StoryObj} from '@storybook/react-vite';
import {CodeBlock} from '../../../components/rwds';

const meta = {
  title: 'RWDS/CodeBlock',
  component: CodeBlock,
  tags: ['autodocs'],
  args: {language: 'css', code: '.card {\n  background: var(--surface);\n  color: var(--foreground);\n  border: 1px solid var(--border);\n}'},
  argTypes: {language: {control: 'text'}, code: {control: 'text'}},
  parameters: {layout: 'padded', docs: {description: {component: 'Syntax-highlighted code shared with the documentation.'}}},
} satisfies Meta<typeof CodeBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {render: (args) => <div style={{maxWidth: 680}}><CodeBlock {...args} /></div>};

export const TypeScript: Story = {args: {language: 'ts', code: 'import {Button} from "@/components/rwds";\n\n<Button href="/design/rwds">RWDS reference</Button>;'}, render: (args) => <div style={{maxWidth: 680}}><CodeBlock {...args} /></div>};
