/**
 * RWDS — rumahl Web Design System, component entry point.
 *
 * Layer 1 (primitives, layout, surfaces, data) is the reusable component API.
 * Layer 2 re-exports the website compositions (header, footer, media, docs)
 * that are built from those primitives. Storybook and the design microsite
 * import from here.
 */
import './rwds.css';

export {Button, TextLink, Tag, Eyebrow, Heading, Text} from './primitives';
export {Container, Section, Grid, Stack} from './layout';
export {Card, Callout, Disclosure, Figure} from './surfaces';
export {DataTable, Swatch, CodeBlock} from './data';

export {Hero} from '../rumahl/hero';
export {Navigation as Header} from '../rumahl/navigation';
export {HomeAbout, HomePaths, HomeCommunity, HomePrivacy} from '../rumahl/home';
export {HomeIntegrations} from '../rumahl/integrations';
export {Footer, News} from '../rumahl/sections';
export {Lineup} from '../rumahl/lineup';
export {Installer} from '../rumahl/installer';
export {EditorialImage} from '../rumahl/home-continuation';
export {HighlightCarousel} from '../rumahl/highlight-carousel';
export {DeviceArt} from '../rumahl/device-art';
export {ProductStats, ProductHighlights, FeatureGallery, ScrollGallery, ComparisonTable, SpecsSection, FaqSection} from '../rumahl/showcase';
export {DocsCard} from './docs-card';
export {DocsSidebar} from './docs-sidebar';
