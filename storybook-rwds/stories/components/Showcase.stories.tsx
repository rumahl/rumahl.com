import type {Meta, StoryObj} from '@storybook/react-vite';
import {
  ComparisonTable,
  FaqSection,
  FeatureGallery,
  ProductHighlights,
  ProductStats,
  ScrollGallery,
  SpecsSection,
} from '../../../components/rumahl/showcase';
import {products} from '../../../components/rumahl/catalog';

const meta = {
  title: 'Website/Showcase',
  parameters: {layout: 'fullscreen', docs: {description: {component: 'Product-page building blocks from the website: statistics, highlight cards, galleries, comparison, specifications and FAQ. These render the same data the product pages use.'}}},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const os = products.os;

export const Stats: Story = {render: () => <ProductStats stats={os.stats} />};

export const Highlights: Story = {render: () => <ProductHighlights eyebrow="Get the highlights" title="Get the highlights." highlights={os.highlights} />};

export const Gallery: Story = {render: () => <FeatureGallery items={os.gallery} />};

export const ScrollingGallery: Story = {render: () => <ScrollGallery eyebrow="Details" title="A closer look." items={os.gallery} />};

export const Comparison: Story = {render: () => <ComparisonTable comparison={os.comparison ?? {columns: [], rows: []}} />};

export const Specifications: Story = {render: () => <SpecsSection groups={os.specs} />};

export const FAQ: Story = {render: () => <FaqSection items={os.faq} />};
