import type {Meta, StoryObj} from '@storybook/react-vite';
import {Disclosure} from '../../../components/rwds';

const meta = {
  title: 'RWDS/Disclosure',
  component: Disclosure,
  tags: ['autodocs'],
  args: {summary: 'What is a token?', children: 'A named, semantic value such as --accent. Components read tokens; themes supply the values.', defaultOpen: false},
  argTypes: {summary: {control: 'text'}, children: {control: 'text'}, defaultOpen: {control: 'boolean'}},
  parameters: {layout: 'padded', docs: {description: {component: 'Native `details` element. Works without JavaScript and is announced correctly by assistive technology.'}}},
} satisfies Meta<typeof Disclosure>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {render: (args) => <div style={{maxWidth: 720}}><Disclosure {...args} /></div>};

export const FAQ: Story = {
  render: () => (
    <div style={{maxWidth: 720}}>
      <Disclosure summary="Does rumahl replace TrueNAS or Nextcloud?" defaultOpen>No. rumahl connects them. The services keep their own data, interfaces and lifecycles.</Disclosure>
      <Disclosure summary="Can I keep my existing installation?">Yes. Connect it over its API, or add the optional connector.</Disclosure>
    </div>
  ),
};
