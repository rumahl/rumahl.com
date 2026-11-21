import type {Meta, StoryObj} from '@storybook/react-vite';
import {ArrowUpRight, Search, X} from 'lucide-react';

const meta = {
  title: 'Components/Search',
  parameters: {layout: 'fullscreen'},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const SearchOverlay: Story = {
  render: () => (
    <div className="sb-page">
      <div style={{position: 'relative', minHeight: 420, border: '1px solid var(--border)', borderRadius: 24, overflow: 'hidden', background: 'var(--surface)'}}>
        <div className="nav-search" style={{position: 'absolute'}}>
          <Search size={18} />
          <input placeholder="Search rumahl" defaultValue="integrations" aria-label="Search" />
          <button className="nav-search-close" aria-label="Close search"><X size={16} /></button>
        </div>
        <div className="nav-search-panel" style={{position: 'relative', top: 70, margin: 16}}>
          <span className="nav-search-label">DESIGN</span>
          <div className="nav-search-list">
            {['Design documentation', 'RWDS reference', 'RUI reference'].map((title, index) => (
              <button className="nav-search-result" data-active={index === 0} key={title}>
                <span className="nav-search-cat">Design</span>
                <span className="nav-search-body"><strong>{title}</strong><span>Reference documentation for the design systems.</span></span>
                <ArrowUpRight size={16} />
              </button>
            ))}
          </div>
          <div className="nav-search-footer"><span><kbd>↑</kbd><kbd>↓</kbd> navigate</span><span><kbd>↵</kbd> open</span><span><kbd>esc</kbd> close</span></div>
        </div>
      </div>
    </div>
  ),
};

export const DocsSearch: Story = {
  render: () => (
    <div className="sb-page">
      <div className="content-search" style={{maxWidth: 700}}>
        <Search size={19} />
        <input placeholder="Search the documentation…" aria-label="Search documentation" />
        <kbd>Ctrl K</kbd>
      </div>
    </div>
  ),
};
