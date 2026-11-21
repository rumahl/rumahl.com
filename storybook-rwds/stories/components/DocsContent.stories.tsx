import type {Meta, StoryObj} from '@storybook/react-vite';
import {Callout, Checklist} from '../../../components/rumahl/content-elements';
import {RichMarkdown, MarkdownCode} from '../../../components/rumahl/rich-markdown';

const meta = {
  title: 'Components/Docs content',
  parameters: {layout: 'fullscreen'},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const ContentElements: Story = {
  render: () => (
    <div className="sb-page" style={{maxWidth: 820}}>
      <div className="content-prose">
        <section>
          <h2>Rich documentation content</h2>
          <RichMarkdown>{`rumahl connects **external** and native services through explicit capabilities. See [the integration model](/docs/integrations) for the broader context.`}</RichMarkdown>
          <Callout tone="note" title="Documentation note" text="Callouts use the same typography, spacing and accent treatment as the main website docs." />
          <Checklist id="docs-content-example" title="Review checklist" items={['Check the tokens', 'Check the components', 'Check light and dark']} />
          <MarkdownCode language="json" content={'{\n  "system": "RWDS",\n  "scope": "web"\n}'} />
        </section>
      </div>
    </div>
  ),
};
