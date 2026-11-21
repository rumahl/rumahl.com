import type {Meta, StoryObj} from '@storybook/react-vite';
import {Figure} from '../../../components/rwds';

const meta = {
  title: 'RWDS/Figure',
  component: Figure,
  tags: ['autodocs'],
  args: {src: '/images/editorial/hardware-unsplash.jpg', alt: 'A Raspberry Pi circuit board.', ratio: '16:9', caption: 'Photo: Harrison Broadbent / Unsplash'},
  argTypes: {
    src: {control: 'text'},
    alt: {control: 'text', description: 'Describe the image content, or leave empty only for decorative images.'},
    ratio: {control: 'inline-radio', options: ['16:9', '4:3', '1:1']},
    caption: {control: 'text'},
  },
  parameters: {layout: 'padded', docs: {description: {component: 'Image with a fixed aspect ratio, so layouts do not shift while images load.'}}},
} satisfies Meta<typeof Figure>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {render: (args) => <div style={{maxWidth: 640}}><Figure {...args} /></div>};

export const Ratios: Story = {
  render: () => (
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 18}}>
      <Figure src="/images/editorial/hardware-unsplash.jpg" alt="Raspberry Pi circuit board" ratio="16:9" caption="16:9 · Harrison Broadbent / Unsplash" />
      <Figure src="/images/editorial/network-unsplash.jpg" alt="Ethernet switch" ratio="4:3" caption="4:3 · User_Pascal / Unsplash" />
      <Figure src="/images/editorial/network-unsplash.jpg" alt="Ethernet switch" ratio="1:1" caption="1:1 · User_Pascal / Unsplash" />
    </div>
  ),
};
