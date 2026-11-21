import type {Meta, StoryObj} from '@storybook/react-vite';
import {ArrowUpRight} from 'lucide-react';

const meta = {
  title: 'Components/Mega panel',
  parameters: {layout: 'fullscreen'},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const MegaPanel: Story = {
  render: () => (
    <div className="sb-page" style={{paddingTop: 30}}>
      <div className="mega-panel-inner" style={{maxWidth: 1100}}>
        <div className="mega-columns">
          {[
            ['Overview', ['rumahl OS', 'Integrations', 'Features', 'Live demo']],
            ['Foundations', ['Architecture', 'Documentation', 'Releases']],
          ].map(([title, links]) => (
            <div className="mega-column" key={title as string}>
              <span className="eyebrow muted">{title}</span>
              {(links as string[]).map((label) => (
                <a className="mega-link" href="#example" key={label}><strong>{label}</strong><span>A short description of the destination.</span></a>
              ))}
            </div>
          ))}
        </div>
        <a className="mega-featured" href="#example">
          <span className="mega-featured-icon"><ArrowUpRight size={22} /></span>
          <span className="eyebrow">BUILT IN THE OPEN</span>
          <strong>One home for every service.</strong>
          <span className="mega-featured-text">Open integrations, without lock-in or forced migrations.</span>
          <span className="mega-featured-cta">Learn more <ArrowUpRight size={14} /></span>
        </a>
      </div>
    </div>
  ),
};
