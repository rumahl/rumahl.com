import type {Meta, StoryObj} from '@storybook/react-vite';
import {ArticleView} from '../../../components/rumahl/portal';
import {docs} from '../../../components/rumahl/knowledge';

const meta = {
  title: 'Website/Docs article',
  parameters: {layout: 'fullscreen'},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const article = docs.find((item) => item.slug === 'installation') ?? docs[0];

export const ArticleDesign: Story = {
  render: () => (
    <div className="portal-scope content-main" style={{paddingTop: 0, '--content-accent': 'var(--accent)'} as React.CSSProperties}>
      <ArticleView article={article} kind="docs" />
    </div>
  ),
};
