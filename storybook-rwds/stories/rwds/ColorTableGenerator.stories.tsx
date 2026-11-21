import type {Meta, StoryObj} from '@storybook/react-vite';
import {ColorTableGenerator} from '../../../components/design/color-table-generator';

const meta = {
  title: 'RWDS/Color Table Generator',
  component: ColorTableGenerator,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {description: {component: 'Interactive generator for an accessible RWDS accent scale. The seed is the 500 step; accent roles and tinted neutral surfaces are generated for light and dark. Typography, spacing, radii and motion stay fixed.'}},
  },
} satisfies Meta<typeof ColorTableGenerator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Generator: Story = {};
