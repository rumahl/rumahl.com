import type {Meta, StoryObj} from '@storybook/react-vite';
import {DataTable} from '../../../components/rwds';

const meta = {
  title: 'RWDS/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  args: {
    columns: ['System', 'Surface', 'Reference'],
    rows: [
      ['RWDS', 'Websites and documentation', '/design/rwds'],
      ['RUI', 'OS shell and installed apps', '/design/rui'],
    ],
    dense: false,
  },
  argTypes: {columns: {control: 'object'}, rows: {control: 'object'}, dense: {control: 'boolean'}, caption: {control: 'text'}},
  parameters: {layout: 'padded', docs: {description: {component: 'Table with a shared header style. The first column is emphasised. Rows are arrays of cells; cells can be React nodes.'}}},
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {render: (args) => <div style={{maxWidth: 820}}><DataTable {...args} /></div>};

export const Dense: Story = {args: {dense: true}, render: (args) => <div style={{maxWidth: 820}}><DataTable {...args} /></div>};
