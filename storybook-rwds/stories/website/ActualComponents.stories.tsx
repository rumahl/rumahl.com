import type {Meta, StoryObj} from '@storybook/react-vite';
import {
  Hero,
  HomeAbout,
  HomePaths,
  HomeCommunity,
  HomePrivacy,
  HomeIntegrations,
  Footer,
  News,
  Lineup,
  Installer,
} from '../../../components/rwds';

const meta = {
  title: 'Website/Actual components',
  parameters: {layout: 'fullscreen'},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeroComponent: Story = {
  render: () => <Hero />,
};

export const HomeSections: Story = {
  render: () => (
    <div>
      <HomeAbout />
      <HomePaths />
      <HomeCommunity />
      <HomePrivacy />
    </div>
  ),
};

export const Integrations: Story = {
  render: () => <HomeIntegrations />,
};


export const UpdatesAndFooter: Story = {
  render: () => (
    <div>
      <News />
      <Footer />
    </div>
  ),
};

export const ProductLineup: Story = {
  render: () => <Lineup />,
};

export const InstallationPlanner: Story = {
  render: () => <Installer />,
};

