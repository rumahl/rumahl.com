// @ts-nocheck
import type {Meta, StoryObj} from '@storybook/react-vite';
import {ProductPage} from '../../../components/rumahl/product-page';

const meta = {
  title: 'Website/Product page',
  parameters: {layout: 'fullscreen'},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const rumahlOS: Story = {
  render: () => <ProductPage product="os" />,
};

export const Integrations: Story = {
  render: () => <ProductPage product="integrations" />,
};

export const rumahlAI: Story = {
  render: () => <ProductPage product="ai" />,
};
