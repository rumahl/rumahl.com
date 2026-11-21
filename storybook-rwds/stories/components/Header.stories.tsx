import type {Meta, StoryObj} from '@storybook/react-vite';
import {Header as Navigation} from '../../../components/rwds';

const meta = {
  title: 'Components/Header',
  parameters: {layout: 'fullscreen'},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const SiteHeader: Story = {
  render: () => <Navigation />,
};

export const MinimalHeader: Story = {
  render: () => <Navigation minimal />,
};
