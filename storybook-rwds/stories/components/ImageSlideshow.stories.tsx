import type {Meta, StoryObj} from '@storybook/react-vite';
import {HighlightCarousel} from '../../../components/rumahl/highlight-carousel';
import {editorialPhotos} from '../../../content/homepage';

const meta = {
  title: 'Components/Image slideshow',
  parameters: {layout: 'fullscreen'},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const slides = [
  {
    title: 'Connect what you already run.',
    text: 'Keep your NAS, private cloud and smart home where they are. rumahl connects them over open APIs.',
    photo: editorialPhotos.hardware,
    link: {label: 'How integration works', href: '#example'},
  },
  {
    title: 'One home, not one vendor.',
    text: 'External or native, every service keeps its own lifecycle.',
    photo: editorialPhotos.network,
    link: {label: 'Read the capability model', href: '#example'},
  },
  {
    title: 'Built in the open.',
    text: 'Apache-2.0 source, transparent development and an architecture you can read end to end.',
    photo: {...editorialPhotos.hardware, position: '85% 40%'},
    link: {label: 'Read the source', href: '#example'},
  },
];

export const HighlightSlideshow: Story = {
  render: () => <HighlightCarousel title="Get to know rumahl." slides={slides} />,
};

export const CompactSlideshow: Story = {
  render: () => <HighlightCarousel compact title="A little closer to home." slides={slides} />,
};
