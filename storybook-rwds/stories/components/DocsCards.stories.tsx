import type {Meta, StoryObj} from '@storybook/react-vite';
import {DocsCard} from '../../../components/rwds/docs-card';
import {docs} from '../../../components/rumahl/knowledge';

const meta = {
  title: 'Components/Docs cards',
  parameters: {layout: 'fullscreen'},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const DocumentationCards: Story = {
  render: () => (
    <div className="portal-scope content-main" style={{paddingTop: 0}}>
      <section className="content-section">
        <div className="content-grid">
          {docs.slice(0, 4).map((article) => (
            <DocsCard key={article.slug} article={article} href={'/docs/' + article.slug} />
          ))}
        </div>
      </section>
    </div>
  ),
};
