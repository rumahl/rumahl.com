import type {Meta, StoryObj} from '@storybook/react-vite';
import {DocsSidebar} from '../../../components/rwds/docs-sidebar';
import {docs} from '../../../components/rumahl/knowledge';

const meta = {
  title: 'Components/Docs sidenav',
  parameters: {layout: 'fullscreen'},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const DocumentationSidenav: Story = {
  render: () => (
    <div className="portal-scope content-main" style={{paddingTop: 0}}>
      <div style={{maxWidth: 320, padding: 24}}>
        <DocsSidebar articles={docs} currentSlug="installation" hrefFor={(slug) => '/docs/' + slug} />
      </div>
    </div>
  ),
};
