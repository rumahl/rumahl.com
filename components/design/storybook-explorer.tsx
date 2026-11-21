'use client';
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import Link from 'next/link';
import {ArrowUpRight, Monitor, Moon, Search, Sun} from 'lucide-react';
import {NestedNav, type NestedNavGroup} from '@/components/rwds/nested-nav';
import {ArticleToc} from '@/components/rumahl/article-toc';
import {ButtonDocs} from './button-docs';
import styles from './storybook-explorer.module.css';

type Entry = {
  id: string;
  title: string;
  name: string;
  type: 'story' | 'docs';
  importPath?: string;
};
type Index = {entries?: Record<string, Entry>};
type PreviewScheme = 'auto' | 'light' | 'dark';
type RuiGlobals = {accent: string; material: string; fill: string; device: string; background: string; wallpaper: string};

const areaDescriptions: Record<string, string> = {
  'Components/Docs cards': 'Documentation cards use a compact cover, title, summary and metadata row to lead into long-form documentation.',
  'Components/Docs content': 'Rich documentation content: Markdown, callouts, checklists and highlighted code.',
  'Components/Docs sidenav': 'The shared nested sidebar used by the documentation and this component explorer.',
  'Components/Header': 'The main website header, navigation and actions.',
  'Components/Image slideshow': 'Editorial image slideshows in full and compact variants.',
  'Components/Images': 'Editorial images and the neutral device artwork used across the site.',
  'Components/Mega panel': 'The expanded project navigation panel with grouped links and a featured destination.',
  'Components/Search': 'Search overlays and fields for site navigation, documentation and RUI apps.',
  'RWDS/Button': 'Buttons across primary, secondary, ghost, inverse, small and disabled states.',
  'RWDS/Callout': 'Notes, tips, important messages and warnings.',
  'RWDS/Card': 'Content surfaces with optional eyebrow, footer, padding and link behaviour.',
  'RWDS/CodeBlock': 'Syntax-highlighted code shared with the documentation.',
  'RWDS/Color Table Generator': 'The interactive generator for accessible accent scales and tinted neutral surfaces.',
  'RWDS/DataTable': 'Responsive data tables with an emphasised first column.',
  'RWDS/Disclosure': 'Native expandable content that works without JavaScript.',
  'RWDS/Figure': 'Images with fixed aspect ratios and captions.',
  'RWDS/Foundations': 'Colour roles and motion foundations for RWDS.',
  'RWDS/Heading & Text': 'The typographic scale and running text used across the website.',
  'RWDS/Layout': 'Containers, sections, grids and vertical rhythm.',
  'RWDS/Swatch': 'Colour-role previews that follow the active light or dark theme.',
  'RWDS/Tag': 'Status and category labels in neutral, accent and warning tones.',
  'RWDS/TextLink': 'Inline navigation links with a clear hover and focus state.',
  'Website/Actual components': 'The actual website components: hero, home sections, integrations, news, footer, lineup and installer.',
  'Website/Docs article': 'The documentation article layout with sidebar, prose, metadata and table of contents.',
  'Website/Product page': 'The actual product page templates and their shared sections.',
  'Website/Showcase': 'Product-page showcase components: statistics, highlights, galleries, comparison, specifications and FAQ.',
};

const storyDescriptions: Record<string, string> = {
  'components-docs-cards--documentation-cards': 'A three-column card row for documentation entry points, with area label, title, summary, reading time and a read link.',
  'components-docs-content--content-elements': 'Documentation primitives in context: Markdown, callouts, checklists and code with copy support.',
  'components-docs-sidenav--documentation-sidenav': 'The nested documentation navigation with groups, areas, active paths and a stable scroll position.',
  'components-header--site-header': 'The full website header with project navigation, search, theme control and the primary call to action.',
  'components-header--minimal-header': 'The reduced header used in focused contexts where the primary call to action is intentionally absent.',
  'components-image-slideshow--highlight-slideshow': 'The full editorial slideshow with image overlays, captions, navigation dots, autoplay and photo credits.',
  'components-image-slideshow--compact-slideshow': 'The compact slideshow variant with captions below the image and arrow navigation.',
  'components-images--editorial-image-story': 'An editorial image with a focal point, optional action and visible photographer credit.',
  'components-images--device-artwork': 'Neutral device artwork used by the installation planner for small boards, mini PCs and servers.',
  'components-search--search-overlay': 'The search overlay with grouped results, keyboard hints and result navigation.',
  'components-search--docs-search': 'The documentation search field with the familiar keyboard shortcut and clear action.',
  'rwds-button--all-variants': 'All button variants and sizes side by side: primary, secondary, ghost, inverse, small and disabled.',
  'rwds-button--playground': 'A configurable button with variant, size, link and disabled controls.',
  'rwds-button--as-link': 'A primary action rendered as a link, preserving the same visual contract.',
  'rwds-card--with-footer': 'A card with an optional eyebrow, body copy and a footer action.',
  'rwds-card--interactive': 'A whole-card link with a clear hover and focus state.',
  'rwds-callout--all-tones': 'All callout tones together: note, tip, important and warning.',
  'rwds-disclosure--faq': 'Native FAQ disclosures with one section open and one closed.',
  'rwds-figure--ratios': 'The supported image ratios side by side: 16:9, 4:3 and 1:1.',
  'rwds-heading-text--scale': 'The complete heading scale from display to small, with the semantic level separate from the visual size.',
  'rwds-heading-text--text-scale': 'Lead, body, small and strong text, each with its intended role.',
  'rwds-layout--section-tones': 'Default, alternate and inverse sections, showing the tone system.',
  'rwds-layout--containers': 'Narrow, content and wide containers with the same vertical rhythm.',
  'rwds-swatch--all-roles': 'All colour roles in the current light or dark theme.',
  'rwds-tag--tones': 'Neutral, accent and warning tags at a glance.',
  'website-actual-components--hero-component': 'The current homepage hero with the new face message, primary actions and editorial background.',
  'website-actual-components--home-sections': 'The homepage sections after the hero, including the integration principles and ways to get started.',
  'website-actual-components--integrations': 'The integration model: levels, provider surfaces, capabilities and independence.',
  'website-actual-components--updates-and-footer': 'News and the full website footer, including the consolidated four-column link structure.',
  'website-actual-components--installation-planner': 'The installation planner with device selection, requirements and the current development-build guidance.',
  'website-docs-article--article-design': 'The complete documentation article layout with sidebar, prose and table of contents.',
};

type ComponentDoc = {
  when?: string[];
  anatomy?: string[];
  variants?: {label: string; text: string}[];
  behavior?: string[];
  specs?: {columns: string[]; rows: string[][]};
  guidelines?: {do: string; dont: string}[];
  accessibility?: string[];
  related?: {label: string; href: string}[];
};

const componentContent: Record<string, ComponentDoc> = {
  'RWDS/Button': {
    when: [
      'An action that changes something, such as Save, Delete or Enable.',
      'Confirming or dismissing a dialog or menu.',
      'Opening a dialog or another focused surface.',
    ],
    anatomy: [
      'Container: background, border and pill-shaped radius.',
      'Label: the action text, written in sentence case.',
      'Optional icon: before or after the label when it helps recognition.',
      'Disabled state: reduced emphasis, not selectable and skipped by keyboard navigation.',
    ],
    variants: [
      {label: 'Primary', text: 'The main action in a section. Use one primary action per group.'},
      {label: 'Secondary', text: 'An alternative or cancel action with less visual weight.'},
      {label: 'Ghost', text: 'A low-emphasis action for secondary navigation or inline controls.'},
      {label: 'Inverse', text: 'A high-contrast action for dark or image-led surfaces.'},
    ],
    behavior: [
      'Enabled: uses the colours of its variant.',
      'Hover: background changes to the accent colour.',
      'Focus: a visible focus ring appears for keyboard users.',
      'Pressed: the surface responds immediately without moving the layout.',
      'Disabled: reduced opacity and no action.',
    ],
    specs: {
      columns: ['Size', 'Height', 'Padding', 'Font size'],
      rows: [
        ['Medium', '44px', '20px', '14px'],
        ['Small', '36px', '14px', '13px'],
      ],
    },
    guidelines: [
      {do: 'Use one primary action per section.', dont: 'Do not give cancel the same visual weight as the main action.'},
      {do: 'Use sentence case for labels.', dont: 'Do not capitalise every word.'},
      {do: 'Use a text link when the action navigates somewhere else.', dont: 'Do not use a button for navigation.'},
    ],
    accessibility: [
      'Tab moves focus to the button and away from it.',
      'Enter or Space activates the focused button.',
      'The focus ring is visible for keyboard focus.',
      'Disabled buttons are skipped by the keyboard.',
      'Icon-only buttons need an accessible name.',
    ],
    related: [
      {label: 'RWDS components documentation', href: '/design/docs/rwds-components'},
      {label: 'RWDS reference', href: '/design/rwds'},
      {label: 'Storybook controls guide', href: '/developers/storybook'},
    ],
  },
  'RWDS/TextLink': {
    when: ['Use for navigation to another page or section.', 'Use for an inline action that should read like a link.'],
    behavior: ['Underlines on hover.', 'Shows the shared focus ring for keyboard users.', 'External links are marked and opened explicitly.'],
    guidelines: [
      {do: 'Use descriptive link text.', dont: 'Do not use “click here”.'},
      {do: 'Use a button for actions that change state.', dont: 'Do not use a link for an in-place action.'},
    ],
  },
  'RWDS/Tag': {
    when: ['Show a status, category or short metadata value.', 'Mark the current subject or a warning state.'],
    behavior: ['Neutral is the default.', 'Accent marks the current subject.', 'Warning marks unfinished or risky states.'],
    guidelines: [
      {do: 'Keep labels short and specific.', dont: 'Do not use a tag as a button.'},
      {do: 'Combine the label with text.', dont: 'Do not rely on colour alone.'},
    ],
  },
  'RWDS/Heading & Text': {
    when: ['Establish a page, section or card hierarchy.', 'Introduce long-form content with a lead paragraph.'],
    anatomy: ['Semantic level: the HTML heading level.', 'Visual size: display, XL, LG, MD or SM.', 'Lead, body, small and strong text roles.'],
    behavior: ['Display type scales fluidly with the viewport.', 'Body copy keeps a comfortable reading measure.', 'Strong text uses the foreground colour.'],
    guidelines: [
      {do: 'Keep heading levels in order.', dont: 'Do not choose a heading level for its size alone.'},
      {do: 'Use one display heading per page.', dont: 'Do not skip from H1 to H4 for visual effect.'},
    ],
  },
  'RWDS/Layout': {
    when: ['Build a page from consistent horizontal frames and vertical sections.', 'Create responsive columns or vertical rhythm.'],
    anatomy: ['Container: narrow, content or wide frame.', 'Section: default, alternate or inverse tone.', 'Grid: two to four responsive columns.', 'Stack: vertical rhythm between children.'],
    behavior: ['Columns collapse by available width.', 'Sections carry consistent vertical spacing.', 'Containers share the same page gutters.'],
    guidelines: [
      {do: 'Use the smallest structure that expresses the layout.', dont: 'Do not nest sections just to add spacing.'},
      {do: 'Use Stack for vertical rhythm.', dont: 'Do not add one-off margins between children.'},
    ],
  },
  'RWDS/Card': {
    when: ['Group related content into a distinct surface.', 'Link to a topic, app or documentation area.'],
    anatomy: ['Optional eyebrow.', 'Title.', 'Body content.', 'Optional footer action.', 'Surface, border and padding.'],
    variants: [
      {label: 'Surface', text: 'A card on the normal surface colour.'},
      {label: 'Plain', text: 'No surface fill; only the border separates the content.'},
      {label: 'Interactive', text: 'The whole card becomes a link with hover and focus states.'},
    ],
    behavior: ['Cards in a grid align their footer actions.', 'Interactive cards have a visible focus state.', 'Padding can be increased for feature cards.'],
    guidelines: [
      {do: 'Use a card for a self-contained topic.', dont: 'Do not put every paragraph in a card.'},
      {do: 'Put the action in the footer.', dont: 'Do not use multiple competing actions in one card.'},
    ],
  },
  'RWDS/Callout': {
    when: ['Add context that the reader should know.', 'Highlight a tip, rule or risk.'],
    behavior: ['Note is the default.', 'Warning is reserved for actions that can lose data or break something.', 'The title is optional; the body carries the message.'],
    guidelines: [
      {do: 'Keep the message short and actionable.', dont: 'Do not use warnings for ordinary context.'},
      {do: 'Use the tone that matches the consequence.', dont: 'Do not stack multiple callouts in a row.'},
    ],
  },
  'RWDS/Disclosure': {
    when: ['Hide secondary detail until the reader asks for it.', 'Build an FAQ from native disclosure elements.'],
    behavior: ['Works without JavaScript.', 'Can start open or closed.', 'The summary is always visible.'],
    guidelines: [
      {do: 'Make the summary describe the hidden content.', dont: 'Do not use disclosure for primary navigation.'},
      {do: 'Keep the answer focused.', dont: 'Do not hide essential warnings by default.'},
    ],
  },
  'RWDS/Figure': {
    when: ['Show an image with a predictable aspect ratio.', 'Add a caption or photo credit.'],
    behavior: ['The image reserves space before it loads.', 'The ratio can be 16:9, 4:3 or 1:1.', 'The caption sits below the image.'],
    guidelines: [
      {do: 'Write a meaningful alt text.', dont: 'Do not use an image as the only source of information.'},
      {do: 'Keep captions and credits complete.', dont: 'Do not crop away the context without a reason.'},
    ],
  },
  'RWDS/DataTable': {
    when: ['Compare values across rows.', 'Document token roles, sizes or supported states.'],
    behavior: ['The table scrolls horizontally when needed.', 'The first column is emphasised.', 'Dense mode reduces cell padding.'],
    guidelines: [
      {do: 'Use clear column headers.', dont: 'Do not use a table for page layout.'},
      {do: 'Keep cell content concise.', dont: 'Do not hide the important value in a footnote.'},
    ],
  },
  'RWDS/Swatch': {
    when: ['Document a colour token.', 'Show the light and dark value of the same semantic role.'],
    behavior: ['The swatch follows the active theme.', 'The token name is always shown.', 'The swatch is a preview, not an input control.'],
    guidelines: [
      {do: 'Pair the swatch with its token and role.', dont: 'Do not use colour alone to identify a role.'},
    ],
  },
  'RWDS/CodeBlock': {
    when: ['Show a short code example.', 'Document a token, manifest or command.'],
    behavior: ['Syntax highlighting is shared with the documentation.', 'The copy action is available.', 'Long lines scroll horizontally.'],
    guidelines: [
      {do: 'Declare the language.', dont: 'Do not paste unrelated full files.'},
      {do: 'Keep the example focused.', dont: 'Do not include secrets or real credentials.'},
    ],
  },
  'RWDS/Color Table Generator': {
    when: ['Adopt a different accent family.', 'Create a systematic palette with accessible roles.'],
    behavior: ['The seed is the 500 step.', 'Light and dark roles are chosen from the scale.', 'Neutral surfaces can be tinted.', 'The output is copy-ready CSS.'],
    guidelines: [
      {do: 'Keep typography, spacing, radii and motion fixed.', dont: 'Do not treat a new accent as a new design system.'},
      {do: 'Check contrast before using the output.', dont: 'Do not force an inaccessible accent role.'},
    ],
    accessibility: ['Check normal-text contrast before copying the CSS.', 'Use the generated accent roles rather than raw scale steps in interactive surfaces.', 'Test the result in both light and dark mode.'],
  },
  'RWDS/Foundations': {
    when: ['Understand the colour and motion roles behind every RWDS component.'],
    behavior: ['Colour roles adapt to light and dark.', 'Motion is restrained and respects reduced-motion preferences.'],
    guidelines: [
      {do: 'Use semantic roles in components.', dont: 'Do not hard-code colours or timings.'},
    ],
  },
  'Components/Docs cards': {
    when: ['Link into documentation from an overview page.', 'Group related guides by area.'],
    anatomy: ['Cover and area label.', 'Title.', 'Summary.', 'Reading time and read action.', 'Optional metadata.'],
    behavior: ['The whole card is a link.', 'Cards align in a responsive grid.', 'The active area colour comes from the documentation accent.'],
    guidelines: [
      {do: 'Write a summary that helps the reader choose.', dont: 'Do not repeat the title in the summary.'},
      {do: 'Keep the reading time realistic.', dont: 'Do not use the cover as the only information.'},
    ],
  },
  'Components/Docs content': {
    when: ['Write long-form documentation.', 'Add notes, checklists or code inside an article.'],
    anatomy: ['Headings and paragraphs.', 'Lists and tables.', 'Callouts and checklists.', 'Code blocks with copy actions.'],
    behavior: ['Markdown is rendered with the shared documentation styles.', 'Code can be copied.', 'Long content stays in a readable measure.'],
    guidelines: [
      {do: 'Use headings in a logical order.', dont: 'Do not use bold text as a heading.'},
      {do: 'Use a callout for a real exception.', dont: 'Do not decorate every paragraph.'},
    ],
  },
  'Components/Docs sidenav': {
    when: ['Navigate nested documentation.', 'Keep the current area and article visible.'],
    behavior: ['One group and one area are open at a time.', 'The active path opens automatically.', 'The scroll position is preserved while toggling.'],
    guidelines: [
      {do: 'Keep group and area labels short.', dont: 'Do not add more than three levels without a design review.'},
      {do: 'Use the shared NestedNav.', dont: 'Do not build a one-off sidebar per section.'},
    ],
    accessibility: ['The navigation has a descriptive label.', 'The active item uses aria-current.', 'Groups and areas expose their expanded state.'],
  },
  'Components/Header': {
    when: ['Provide global navigation and the primary account or theme actions.'],
    anatomy: ['Brand.', 'Main navigation.', 'Search and theme controls.', 'Primary call to action.'],
    behavior: ['Sticky at the top.', 'Condenses on scroll.', 'Collapses into the mobile navigation on narrow screens.'],
    guidelines: [
      {do: 'Keep the primary action obvious.', dont: 'Do not add every link to the top level.'},
    ],
    accessibility: ['The main navigation has a label.', 'The current page uses aria-current.', 'The mobile toggle exposes its expanded state.'],
  },
  'Components/Image slideshow': {
    when: ['Show a small set of editorial highlights.', 'Combine imagery with short explanatory copy.'],
    behavior: ['Autoplay is optional and can be paused.', 'The slideshow respects reduced motion.', 'Photo credits remain visible.'],
    guidelines: [
      {do: 'Use images that explain the adjacent content.', dont: 'Do not use decorative stock photography as a product screenshot.'},
      {do: 'Keep captions short.', dont: 'Do not hide essential information in a slide.'},
    ],
    accessibility: ['Provide meaningful alt text.', 'Expose pause and play controls.', 'Keep credit links reachable by keyboard.'],
  },
  'Components/Images': {
    when: ['Add editorial imagery to a story or section.', 'Show neutral device artwork in device-related content.'],
    behavior: ['Images use fixed ratios and focal points.', 'Editorial images keep a visible credit.', 'Device art scales with the surrounding layout.'],
    guidelines: [
      {do: 'Choose imagery connected to the content.', dont: 'Do not present stock photography as a rumahl screenshot.'},
    ],
    accessibility: ['Describe the image content in alt text.', 'Keep credits readable and linked.'],
  },
  'Components/Mega panel': {
    when: ['Group a larger navigation area into columns.', 'Offer a featured destination alongside links.'],
    behavior: ['Opens from the top navigation.', 'Groups links by purpose.', 'The featured card provides one strong destination.'],
    guidelines: [
      {do: 'Keep descriptions short and distinct.', dont: 'Do not repeat the same destination in several columns.'},
    ],
    accessibility: ['The trigger exposes its expanded state.', 'Links remain reachable by keyboard.', 'The panel has a clear heading structure.'],
  },
  'Components/Search': {
    when: ['Find an app, setting, file, documentation page or site content.', 'Offer results without leaving the current context.'],
    behavior: ['Opens from the navigation or keyboard shortcut.', 'Results update while typing.', 'Groups results by source.', 'Supports keyboard selection.'],
    guidelines: [
      {do: 'Show the result category and title.', dont: 'Do not hide the search behind an account.'},
      {do: 'Keep the query visible while results are shown.', dont: 'Do not reset the query when a result is previewed.'},
    ],
    accessibility: ['The input has an accessible label.', 'Results expose the active option.', 'Escape closes the search.'],
  },
  'Website/Actual components': {
    when: ['Inspect the actual website compositions instead of static examples.'],
    behavior: ['These stories import the real website components.', 'They use the production stylesheet and tokens.', 'Page-level stories include their normal surrounding sections.'],
    guidelines: [
      {do: 'Use the actual component stories for visual review.', dont: 'Do not recreate a page from static markup when a real story exists.'},
    ],
  },
  'Website/Docs article': {
    when: ['Review the complete documentation reading experience.'],
    behavior: ['The sidebar, article, metadata and table of contents work together.', 'The prose uses the shared documentation styles.', 'The layout collapses for narrow screens.'],
    guidelines: [
      {do: 'Keep the sidebar and article hierarchy consistent.', dont: 'Do not add a second competing navigation.'},
    ],
  },
  'Website/Product page': {
    when: ['Review the real product page composition.'],
    behavior: ['The page combines the hero, highlights, gallery, specs, comparison and FAQ.', 'All sections use the production website styles.'],
    guidelines: [
      {do: 'Reuse the shared product sections.', dont: 'Do not create a product page from unrelated one-off blocks.'},
    ],
  },
  'Website/Showcase': {
    when: ['Review the shared product-page building blocks.'],
    behavior: ['Statistics, highlights, galleries, comparison, specifications and FAQ are composed from real data.', 'Each block can be used independently.'],
    guidelines: [
      {do: 'Keep the data source close to the component.', dont: 'Do not duplicate product data inside the showcase component.'},
    ],
  },
  'Foundations/Color': {
    when: ['Choose a semantic colour role for an RUI surface, text or action.'],
    behavior: ['Roles resolve differently in light and dark mode.', 'The accent family can change without changing the component contract.'],
    guidelines: [
      {do: 'Use semantic roles such as surface, text and accent.', dont: 'Do not hard-code raw colour values in components.'},
      {do: 'Check the role in both themes.', dont: 'Do not rely on colour alone to communicate state.'},
    ],
  },
  'Foundations/Typography': {
    when: ['Choose a type role for an RUI heading, label or running text.'],
    behavior: ['Type roles combine size, weight and line height.', 'Text scales with the operating-system density.'],
    guidelines: [
      {do: 'Keep heading levels in a logical order.', dont: 'Do not use type size as a replacement for structure.'},
    ],
  },
  'Foundations/Materials': {
    when: ['Choose the surface treatment for windows, panels, popovers and trays.'],
    behavior: ['Glass, floating and solid materials change depth, not layout.', 'Materials adapt to the active theme and wallpaper.'],
    guidelines: [
      {do: 'Use one material per layer.', dont: 'Do not mix several materials just for visual variety.'},
      {do: 'Check text contrast on the chosen material.', dont: 'Do not use glass where the content needs maximum contrast.'},
    ],
  },
  'Components/Button': {
    when: ['Trigger an action in an RUI window, toolbar or form.', 'Offer a primary, secondary or quiet action.'],
    anatomy: ['Label.', 'Optional leading or trailing icon.', 'Optional loading state.', 'Size and tone.'],
    behavior: ['Primary is the main action in a group.', 'Secondary supports the main action.', 'Destructive is reserved for irreversible actions.', 'Loading keeps the label and blocks repeated activation.'],
    guidelines: [
      {do: 'Use one primary action per group.', dont: 'Do not use destructive styling for a reversible action.'},
      {do: 'Keep labels as verbs.', dont: 'Do not use an icon-only button without an accessible label.'},
    ],
  },
  'Components/Inputs': {
    when: ['Collect short text, numbers or search terms.', 'Edit a value inside a form or settings page.'],
    behavior: ['Labels stay visible above the field.', 'Help and error text use the same slot below the field.', 'Validation does not replace the label.'],
    guidelines: [
      {do: 'Use a persistent label.', dont: 'Do not use placeholder text as the only label.'},
      {do: 'Describe the expected format before validation fails.', dont: 'Do not rely on colour alone for errors.'},
    ],
  },
  'Components/Dialog': {
    when: ['Ask for confirmation before a consequential action.', 'Collect a short input without leaving the current context.'],
    behavior: ['The dialog traps focus while open.', 'Escape and the close action dismiss it.', 'The backdrop is not a second primary action.'],
    guidelines: [
      {do: 'Keep the title and primary action specific.', dont: 'Do not open a dialog from another dialog.'},
    ],
    accessibility: ['Move focus into the dialog when it opens.', 'Return focus to the trigger when it closes.', 'Give the dialog an accessible name.', 'Keep Escape working unless dismissing would lose unsaved work.'],
  },
  'Components/Tabs': {
    when: ['Switch between related views in the same context.', 'Split settings into a small number of panels.'],
    behavior: ['One tab is selected at a time.', 'Arrow keys move between tabs.', 'The selected panel stays mounted when appropriate.'],
    guidelines: [
      {do: 'Use short, parallel tab labels.', dont: 'Do not use tabs for sequential steps.'},
      {do: 'Keep the number of tabs small.', dont: 'Do not hide the primary action in an extra tab.'},
    ],
    accessibility: ['Use tab, tablist and tabpanel semantics.', 'Move focus with the arrow keys.', 'Connect each tab to its panel.'],
  },
  'Components/Select': {
    when: ['Choose one or more values from a known set.', 'Replace a long radio or checkbox list in a compact form.'],
    behavior: ['The trigger shows the current value.', 'The popover supports keyboard navigation.', 'Search filters larger option sets.'],
    guidelines: [
      {do: 'Keep option labels specific.', dont: 'Do not use a select for an on/off decision.'},
      {do: 'Preserve the current value on open.', dont: 'Do not reset the selection when the popover closes.'},
    ],
  },
  'Components/Notice': {
    when: ['Report success, information, a warning or an error in context.'],
    behavior: ['The tone matches the consequence.', 'Dismissible notices keep the message available in the log when needed.', 'Actions stay optional.'],
    guidelines: [
      {do: 'Put the most important sentence first.', dont: 'Do not use a notice for ordinary body copy.'},
    ],
  },
  'Components/Accordion': {
    when: ['Group related settings or details into expandable sections.', 'Reduce the initial height of a long panel.'],
    behavior: ['Headers stay visible.', 'The expanded state is explicit.', 'One or several sections can be open depending on the context.'],
    guidelines: [
      {do: 'Make the header describe the hidden content.', dont: 'Do not hide essential status inside a closed section.'},
    ],
  },
  'Components/List': {
    when: ['Show a collection of apps, files, settings or search results.', 'Support selection or navigation in a compact row layout.'],
    behavior: ['Rows share a consistent height and alignment.', 'Selection is visible without relying on hover.', 'Sections and group labels keep longer lists readable.'],
    guidelines: [
      {do: 'Keep the primary label first.', dont: 'Do not put every action on every row.'},
    ],
  },
  'Components/Navbar': {
    when: ['Provide the top-level navigation and window actions for an RUI app.'],
    anatomy: ['App identity.', 'Navigation or view switch.', 'Search and global actions.', 'Window controls.'],
    behavior: ['The bar stays attached to the window.', 'Actions collapse on narrow widths.', 'The current view is visible.'],
    guidelines: [
      {do: 'Keep the global actions consistent across apps.', dont: 'Do not put page-specific actions in the global navbar.'},
    ],
    accessibility: ['Give the navigation an accessible name.', 'Expose the current view.', 'Keep every action reachable by keyboard.'],
  },
  'Components/Sidenav': {
    when: ['Navigate between major areas inside an RUI app.', 'Persist navigation while the content area changes.'],
    behavior: ['Groups can collapse.', 'The active area stays visible.', 'The width adapts to the window.'],
    guidelines: [
      {do: 'Keep group labels short.', dont: 'Do not use the sidenav for page actions.'},
    ],
  },
  'Components/Window': {
    when: ['Frame an RUI application with its title bar, navigation and content area.'],
    behavior: ['The window follows the RUI material and elevation.', 'The content area owns its scrolling.', 'Narrow windows collapse secondary chrome.'],
    guidelines: [
      {do: 'Use the shared window shell.', dont: 'Do not recreate window chrome inside an app.'},
    ],
  },
  'Components/Page heading': {
    when: ['Introduce a settings, app or documentation page.'],
    anatomy: ['Optional eyebrow.', 'Title.', 'Optional description.', 'Page-level actions.'],
    behavior: ['The heading stays aligned with the content below.', 'Actions wrap before the title becomes unreadable.'],
    guidelines: [
      {do: 'Use one page heading per view.', dont: 'Do not repeat the navigation label in the description.'},
    ],
  },
  'Components/Toast': {
    when: ['Confirm a completed action without blocking the current task.'],
    behavior: ['Toasts appear briefly.', 'An optional action stays available while the toast is visible.', 'Repeated messages are grouped.'],
    guidelines: [
      {do: 'Keep the message short.', dont: 'Do not use a toast for an error that needs a decision.'},
    ],
    accessibility: ['Announce the message without moving focus.', 'Keep important actions reachable.', 'Allow enough time to read the message.'],
  },
  'Components/Table': {
    when: ['Compare structured values across rows.', 'Show files, processes or settings with several attributes.'],
    behavior: ['Columns size to their content.', 'The table scrolls when the window is narrow.', 'Sorting and selection expose their state.'],
    guidelines: [
      {do: 'Keep headers explicit.', dont: 'Do not use a table as a layout grid.'},
    ],
    accessibility: ['Use table header semantics.', 'Expose the sorted column.', 'Keep row actions labelled.'],
  },
  'Primitives/Text': {
    when: ['Render running text, labels or secondary descriptions in an RUI surface.'],
    behavior: ['The role selects size, weight and colour.', 'Long text keeps a readable measure.'],
    guidelines: [
      {do: 'Choose the role by meaning.', dont: 'Do not override the role with one-off font sizes.'},
    ],
  },
  'Primitives/Box': {
    when: ['Apply padding, surface, border or radius to a region.'],
    behavior: ['Box is layout-only and does not add interaction.', 'Spacing and surface roles come from the theme.'],
    guidelines: [
      {do: 'Use Box for structure.', dont: 'Do not attach behaviour to a presentational Box.'},
    ],
  },
  'Primitives/Flex': {
    when: ['Arrange a small group of elements in a row or column.'],
    behavior: ['Gap, alignment and wrapping follow the layout tokens.', 'Flex does not change the semantics of its children.'],
    guidelines: [
      {do: 'Use Flex for one-dimensional layout.', dont: 'Do not build a page grid from deeply nested Flex containers.'},
    ],
  },
  'Primitives/IconButton': {
    when: ['Trigger a compact action where an icon is unambiguous.'],
    behavior: ['The icon inherits the current text colour.', 'Hover, focus and disabled states match Button.'],
    guidelines: [
      {do: 'Provide an accessible label.', dont: 'Do not use an icon-only action for a destructive step without confirmation.'},
    ],
  },
};

const genericAccessibility = [
  'Use the keyboard to move through the examples; focus is always visible.',
  'Check contrast and target size for every interactive state.',
  'Open the full Storybook for the component-specific a11y addon report.',
];

const genericWhen = (area: string) => [
  `Use ${area} when it is the clearest match for the task and its documented variants cover the state you need.`,
  'Check the examples for layout, interaction and accessibility before introducing a custom pattern.',
];

const genericBehavior = [
  'The component keeps the same interaction contract across the preview themes.',
  'Supported states such as hover, focus, disabled, selected and open are shown in the examples.',
  'Changing the appearance settings does not change the component API.',
];

const genericGuidelines = [
  {do: 'Use the documented variants and tokens.', dont: 'Do not create a one-off visual variant for a single page.'},
  {do: 'Keep labels and content specific.', dont: 'Do not rely on colour alone to carry meaning.'},
];

function genericRelated(system: 'RWDS' | 'RUI') {
  return [
    {label: system === 'RWDS' ? 'RWDS reference' : 'RUI reference', href: system === 'RWDS' ? '/design/rwds' : '/design/rui'},
    {label: 'Design documentation', href: '/design/docs'},
    {label: 'Storybook overview', href: '/design/storybook'},
    {label: 'RWDS and RUI comparison', href: '/design/systems'},
  ];
}

function resolveDoc(areaKey: string, area: string, system: 'RWDS' | 'RUI'): ComponentDoc {
  const explicit = componentContent[areaKey] ?? {};
  return {
    when: explicit.when ?? genericWhen(area),
    anatomy: explicit.anatomy,
    variants: explicit.variants,
    behavior: explicit.behavior ?? genericBehavior,
    specs: explicit.specs,
    guidelines: explicit.guidelines ?? genericGuidelines,
    accessibility: explicit.accessibility ?? genericAccessibility,
    related: explicit.related ?? genericRelated(system),
  };
}

const DESIGN_PREVIEW_TOKENS = `:root{--accent:#4f46e5;--accent-secondary:#6b5cf0;--accent-contrast:#ffffff;--teal:#6b5cf0;--purple:#8d7cf5;--blue:#4f46e5;--cyan:#d8d1ff;--violet:#2d2470;--background:#e9e5f7;--surface:#f8f6fe;--surface-glass:rgba(248,246,254,.80);--foreground:#1b1829;--foreground-muted:#67617b;--border:#d8d2ea} :root[data-theme="dark"]{--accent:#b9b0ff;--accent-secondary:#d0c8ff;--accent-contrast:#0f1512;--teal:#b9b0ff;--purple:#d0c8ff;--blue:#b9b0ff;--cyan:#e2dcff;--violet:#2d2470;--background:#121020;--surface:#1a1729;--surface-glass:rgba(26,23,41,.84);--foreground:#f0edfa;--foreground-muted:#a9a2be;--border:#312c46}`;

function storyDescription(entry: Entry, system: 'RWDS' | 'RUI') {
  const explicit = storyDescriptions[entry.id];
  if (explicit) return explicit;
  const area = entry.title.split('/').slice(1).join(' / ') || entry.title;
  if (entry.type === 'docs') return `The native ${system} Storybook documentation for ${area}. It includes the component's usage, live examples, states and API notes.`;
  const collection = /^(all variants|overview|sizes|colors|colored variants|colored states|states|variants)$/i.test(entry.name);
  return `${entry.name} is a live example of ${area} in the ${system} Storybook. ${collection ? 'It collects the supported variants and states in one preview.' : 'It shows one supported state or variant.'} The rest of the component documentation is below.`;
}

function StoryPreview({
  entry,
  system,
  base,
  globals,
  previewGlobals,
  previewTheme,
  active,
}: {
  entry: Entry;
  system: 'RWDS' | 'RUI';
  base: string;
  globals: string;
  previewGlobals: Record<string, string>;
  previewTheme: 'design' | 'default';
  active: boolean;
}) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const holderRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const isDocsEntry = entry.type === 'docs';
  const nativeDocs = isDocsEntry && system === 'RUI';
  const displayName = isDocsEntry ? `${entry.title.split('/').slice(1).join(' / ') || entry.title} documentation` : entry.name;
  const iframeHref = `${base}/iframe?id=${encodeURIComponent(entry.id)}&viewMode=${entry.type === 'docs' ? 'docs' : 'story'}`;
  const storyHref = `${iframeHref}&globals=${encodeURIComponent(globals)}`;
  const controlsHref = `${base}/?path=/${entry.type === 'docs' ? 'docs' : 'story'}/${entry.id}&addonPanel=storybook/controls/panel`;
  const tall = entry.title.startsWith('Website/') || entry.title.startsWith('Patterns/');

  const applyPreview = useCallback(() => {
    const frame = iframeRef.current;
    if (!frame) return;
    const doc = frame.contentDocument;
    if (system === 'RWDS' && previewTheme === 'design' && doc) {
      let style = doc.getElementById('design-site-preview-theme') as HTMLStyleElement | null;
      if (!style) {
        style = doc.createElement('style');
        style.id = 'design-site-preview-theme';
        doc.head.appendChild(style);
      }
      style.textContent = DESIGN_PREVIEW_TOKENS;
    } else if (doc) {
      doc.getElementById('design-site-preview-theme')?.remove();
    }
    try {
      const win = frame.contentWindow as (Window & {__STORYBOOK_ADDONS_CHANNEL__?: {emit: (event: string, payload: unknown) => void}}) | null;
      win?.__STORYBOOK_ADDONS_CHANNEL__?.emit('updateGlobals', {globals: previewGlobals});
    } catch (error) {
      void error;
    }
  }, [system, previewTheme, previewGlobals]);

  useEffect(() => {
    applyPreview();
  }, [applyPreview]);

  useEffect(() => {
    if (active) {
      const frame = requestAnimationFrame(() => setShouldLoad(true));
      return () => cancelAnimationFrame(frame);
    }
    const element = holderRef.current;
    if (!element || typeof IntersectionObserver === 'undefined') {
      setShouldLoad(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([observation]) => {
        if (observation.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {rootMargin: '320px'}
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [active]);

  return (
    <article className={styles.storyCard} data-active={active ? true : undefined} id={`story-${entry.id}`}>
      <div className={styles.storyHead}>
        <div className={styles.storyIntro}>
          <span className={styles.storyKind}>{isDocsEntry ? (nativeDocs ? 'Native docs page' : 'Docs page') : 'Story'}</span>
          <h3>{displayName}</h3>
          <p>{storyDescription(entry, system)}</p>
        </div>
        <div className={styles.storyLinks}>
          <a href={storyHref} target="_blank" rel="noreferrer">{isDocsEntry ? 'Open docs' : 'Open story'} <ArrowUpRight size={12} /></a>
          <a href={controlsHref} target="_blank" rel="noreferrer">{isDocsEntry ? 'Storybook' : 'Controls'} <ArrowUpRight size={12} /></a>
        </div>
      </div>
      <div className={styles.frameWrap} ref={holderRef}>
        {shouldLoad ? (
          <iframe
            ref={iframeRef}
            className={styles.frame}
            data-tall={tall ? true : undefined}
            data-docs={nativeDocs ? true : undefined}
            src={iframeHref}
            title={`${system} Storybook: ${entry.title} / ${entry.name}`}
            loading="lazy"
            onLoad={applyPreview}
          />
        ) : (
          <button
            type="button"
            className={styles.framePlaceholder}
            data-tall={tall ? true : undefined}
            data-docs={nativeDocs ? true : undefined}
            onClick={() => setShouldLoad(true)}
          >
            <span>Load preview</span>
            <small>{entry.name} · {tall ? 'page example' : 'component example'}</small>
          </button>
        )}
      </div>
      {nativeDocs ? (
        <div className={styles.docsHint}>
          <span>Native RUI docs · scroll inside the panel</span>
          <a href={storyHref} target="_blank" rel="noreferrer">Open full docs <ArrowUpRight size={12} /></a>
        </div>
      ) : null}
      {entry.importPath ? <span className={styles.source}>{entry.importPath}</span> : null}
    </article>
  );
}

export function StorybookExplorer({system, base}: {system: 'RWDS' | 'RUI'; base: string}) {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('');
  const [activeId, setActiveId] = useState('');
  const [ruiStoryId, setRuiStoryId] = useState('');
  const [siteScheme, setSiteScheme] = useState<'light' | 'dark'>('light');
  const [previewScheme, setPreviewScheme] = useState<PreviewScheme>('auto');
  const [previewTheme, setPreviewTheme] = useState<'design' | 'default'>('default');
  const [ruiGlobals, setRuiGlobals] = useState<RuiGlobals>({accent: 'default', material: 'glass', fill: 'solid', device: 'desktop', background: 'window', wallpaper: 'monstera'});

  useEffect(() => {
    const controller = new AbortController();
    fetch(`${base}/index.json`, {signal: controller.signal})
      .then((response) => {
        if (!response.ok) throw new Error('index');
        return response.json() as Promise<Index>;
      })
      .then((data) => {
        const list = Object.values(data.entries ?? {})
          .filter((entry) => entry.type === 'story' || entry.type === 'docs')
          .sort((a, b) => a.title.localeCompare(b.title) || a.name.localeCompare(b.name));
        setEntries(list);
        const preferred = system === 'RWDS'
          ? list.find((entry) => entry.id === 'rwds-button--all-variants')
            ?? list.find((entry) => entry.title === 'RWDS/Button' && entry.type === 'story')
          : list.find((entry) => entry.id === 'components-button--docs')
            ?? list.find((entry) => entry.title === 'Components/Button' && entry.type === 'docs')
            ?? list.find((entry) => entry.type === 'docs')
            ?? list.find((entry) => entry.type === 'story');
        setActiveId(preferred?.id ?? list.find((entry) => entry.type === 'story')?.id ?? list[0]?.id ?? '');
      })
      .catch((reason) => {
        if (reason?.name !== 'AbortError') setError(true);
      });
    return () => controller.abort();
  }, [base, system]);

  useEffect(() => {
    const read = () => {
      const attr = document.documentElement.dataset.theme;
      const dark = attr ? attr === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
      setSiteScheme(dark ? 'dark' : 'light');
    };
    const frame = requestAnimationFrame(read);
    const observer = new MutationObserver(read);
    observer.observe(document.documentElement, {attributes: true, attributeFilter: ['data-theme']});
    window.addEventListener('rumahl-theme-change', read);
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    media.addEventListener('change', read);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('rumahl-theme-change', read);
      media.removeEventListener('change', read);
    };
  }, []);

  const componentGroups = useMemo<NestedNavGroup[]>(() => {
    const q = query.trim().toLowerCase();
    const filtered = q ? entries.filter((entry) => `${entry.title} ${entry.name}`.toLowerCase().includes(q)) : entries;
    const map = new Map<string, Map<string, string>>();
    for (const entry of filtered) {
      const [group, ...rest] = entry.title.split('/');
      const area = rest.join(' / ') || 'General';
      const areas = map.get(group) ?? new Map<string, string>();
      areas.set(group + '/' + area, area);
      map.set(group, areas);
    }
    return [...map.entries()].map(([group, areas]) => ({
      id: group,
      label: group,
      areas: [{
        id: group + '/all',
        label: group === 'Website' ? 'Website components' : group === 'RWDS' ? 'RWDS components' : group === 'Components' ? (system === 'RUI' ? 'All components' : 'Components') : group,
        items: [...areas.entries()]
          .sort((a, b) => a[1].localeCompare(b[1]))
          .map(([areaKey, label]) => ({id: areaKey, label, onSelect: () => {
            const first = entries.find((entry) => entry.title === areaKey && (system === 'RUI' ? entry.type === 'docs' : false))
              ?? entries.find((entry) => entry.title === areaKey);
            if (first) setActiveId(first.id);
          }})),
      }],
    }));
  }, [entries, query, system]);

  const scheme = previewScheme === 'auto' ? siteScheme : previewScheme;
  const previewGlobals = useMemo<Record<string, string>>(() => {
    const next: Record<string, string> = {scheme};
    if (system === 'RUI') {
      next.accent = ruiGlobals.accent;
      next.material = ruiGlobals.material;
      next.fill = ruiGlobals.fill;
      next.device = ruiGlobals.device;
      next.background = ruiGlobals.background;
      next.wallpaper = ruiGlobals.wallpaper;
    }
    return next;
  }, [scheme, system, ruiGlobals]);
  const globals = useMemo(() => Object.entries(previewGlobals).map(([key, value]) => `${key}:${value}`).join(';'), [previewGlobals]);

  const active = entries.find((entry) => entry.id === activeId);
  const [activeGroup, ...activeRest] = active?.title.split('/') ?? [];
  const activeArea = activeRest.join(' / ') || active?.title || '';
  const activeAreaKey = active?.title ?? '';
  const areaEntries = active ? entries.filter((entry) => entry.title === active.title) : [];
  const storyEntries = areaEntries.filter((entry) => entry.type === 'story');
  const nativeDocs = areaEntries.find((entry) => entry.type === 'docs');
  const selectedEntry = areaEntries.find((entry) => entry.id === activeId);
  const lead = selectedEntry ?? (system === 'RUI' ? nativeDocs : undefined) ?? areaEntries[0];
  const otherStories = areaEntries.filter((entry) => entry.id !== lead?.id && entry.type === 'story');
  const isRui = system === 'RUI';
  const preferredStory = storyEntries.find((entry) => /^(all variants|overview|playground)$/i.test(entry.name)) ?? storyEntries[0];
  const selectedStory = entries.find((entry) => entry.id === ruiStoryId && entry.title === activeAreaKey) ?? preferredStory;
  const selectedStoryHref = selectedStory ? `${base}/?path=/story/${selectedStory.id}&addonPanel=storybook/controls/panel` : null;
  const groupRole = activeGroup === 'Foundations' ? 'a foundation of the visual language'
    : activeGroup === 'Primitives' ? 'a low-level layout primitive'
    : activeGroup === 'Layout' ? 'a composed application or device layout'
    : activeGroup === 'Patterns' ? 'a reusable interaction pattern'
    : activeGroup === 'Hooks' ? 'a reusable behavior hook'
    : activeGroup === 'Guides' ? 'a guide for building with the system'
    : 'a component of the design system';
  const areaDescription = isRui
    ? `${activeArea} is documented natively in the RUI Storybook. The embedded page below is the original RUI documentation, including its examples, states and API notes.`
    : areaDescriptions[activeAreaKey] ?? (activeArea ? `${activeArea} is ${groupRole} in ${system}. The live examples below show its states, variants and behaviour in context.` : 'Select a component from the sidebar to see its documentation.');
  const systemText = system === 'RWDS'
    ? 'These stories render the actual RWDS website components with the production website stylesheet and tokens.'
    : 'The native RUI Storybook is embedded in an isolated same-origin frame. The explorer shell uses RWDS, but no RWDS tokens or styles are injected into the RUI content.';
  const doc = resolveDoc(activeAreaKey, activeArea || 'this component', system);
  const accessibility = doc.accessibility ?? genericAccessibility;
  const related = doc.related ?? genericRelated(system);
  const hasVariants = Boolean(doc.variants?.length || otherStories.length);
  const toc = isRui ? [
    {id: 'overview', label: 'Overview'},
    ...(storyEntries.length ? [{id: 'stories', label: 'Stories'}] : []),
    {id: 'in-code', label: 'In code'},
    {id: 'related', label: 'Related'},
  ] : [
    {id: 'overview', label: 'Overview'},
    ...(doc.when ? [{id: 'when-to-use', label: 'When to use'}] : []),
    ...(doc.anatomy ? [{id: 'anatomy', label: 'Anatomy'}] : []),
    ...(hasVariants ? [{id: 'variants', label: 'Variants'}] : []),
    ...(doc.behavior ? [{id: 'behavior', label: 'Behavior'}] : []),
    ...(doc.specs ? [{id: 'specs', label: 'Specs'}] : []),
    ...(doc.guidelines ? [{id: 'guidelines', label: 'Guidelines'}] : []),
    {id: 'accessibility', label: 'Accessibility'},
    {id: 'in-code', label: 'In code'},
    {id: 'related', label: 'Related'},
  ];

  const activeHref = active ? `${base}/?path=/${active.type === 'docs' ? 'docs' : 'story'}/${active.id}&addonPanel=storybook/controls/panel` : `${base}/`;

  return (
    <div className="portal-scope content-main" style={{'--content-accent': 'var(--design-accent, var(--accent))'} as React.CSSProperties}>
      <div className="content-layout" data-width={isRui ? 'wide' : undefined}>
        <NestedNav
          groups={componentGroups}
          activeId={activeAreaKey}
          ariaLabel={`${system} Storybook components`}
          forceOpen={query.trim().length > 0}
          header={
            <div className={styles.listHead}>
              <div className={styles.search}>
                <Search size={14} />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search components and stories…"
                  aria-label="Search components and stories"
                />
              </div>
              <span className={styles.count}>{entries.length} entries</span>
              {error ? <p className={styles.empty}>The Storybook index could not be loaded.</p> : null}
              {!error && entries.length === 0 ? <p className={styles.empty}>Loading stories…</p> : null}
            </div>
          }
        />
        <article className="content-article">
          <div className={`content-mobile-nav ${styles.mobileSelect}`}>
            <label htmlFor={`${system}-component-select`}>Component</label>
            <select id={`${system}-component-select`} value={activeAreaKey} onChange={(event) => {
              const first = entries.find((entry) => entry.title === event.target.value);
              if (first) setActiveId(first.id);
            }}>
              {componentGroups.flatMap((group) =>
                group.areas.map((area) => (
                  <optgroup label={group.label} key={area.id}>
                    {area.items.map((item) => (
                      <option value={item.id} key={item.id}>{item.label}</option>
                    ))}
                  </optgroup>
                ))
              )}
            </select>
          </div>
          <header>
            <span className="content-eyebrow">{system} Storybook{activeGroup ? ` · ${activeGroup}` : ' · component explorer'}</span>
            <h1>{active ? activeArea : `${system} Storybook`}</h1>
            <p className="lead">{active ? areaDescription : 'Select an area from the sidebar to inspect its components.'}</p>
            <div className="meta">
              <span>{areaEntries.length} {areaEntries.length === 1 ? 'entry' : 'entries'} in this area</span>
              <span>{entries.length} total entries</span>
            </div>
            <div className={styles.headerLinks}>
              <a href={activeHref} target="_blank" rel="noreferrer">{isRui ? 'Open native docs' : 'Open active story controls'} <ArrowUpRight size={12} /></a>
              <a href={`${base}/`} target="_blank" rel="noreferrer">Full Storybook <ArrowUpRight size={12} /></a>
            </div>
          </header>
          <div className="content-prose">
            <div className={styles.toolbarWrap} data-static={isRui ? true : undefined}>
              <div className={styles.toolbar} role="toolbar" aria-label="Preview settings">
                <span className={styles.toolbarLabel}>Appearance</span>
                <div className={styles.appearance} role="group" aria-label="Appearance">
                  {([
                    ['auto', 'Auto appearance', Monitor],
                    ['light', 'Light appearance', Sun],
                    ['dark', 'Dark appearance', Moon],
                  ] as const).map(([value, label, Icon]) => (
                    <button
                      key={value}
                      type="button"
                      data-active={previewScheme === value}
                      aria-pressed={previewScheme === value}
                      aria-label={label}
                      title={label}
                      onClick={() => setPreviewScheme(value)}
                    >
                      <Icon size={14} />
                    </button>
                  ))}
                </div>
                {system === 'RWDS' ? (
                  <label className={styles.compactControl}>
                    <span>Theme</span>
                    <select value={previewTheme} onChange={(event) => setPreviewTheme(event.target.value as 'design' | 'default')}>
                      <option value="default">Storybook default</option>
                      <option value="design">Design site</option>
                    </select>
                  </label>
                ) : (
                  <>
                    <label className={styles.compactControl}><span>Accent</span><select value={ruiGlobals.accent} onChange={(event) => setRuiGlobals((current) => ({...current, accent: event.target.value}))}><option value="default">Default</option><option value="blue">Blue</option><option value="mint">Mint</option><option value="rose">Rose</option><option value="amber">Amber</option><option value="violet">Violet</option></select></label>
                    <label className={styles.compactControl}><span>Material</span><select value={ruiGlobals.material} onChange={(event) => setRuiGlobals((current) => ({...current, material: event.target.value}))}><option value="glass">Glass</option><option value="floating">Floating</option><option value="solid">Solid</option></select></label>
                    <label className={styles.compactControl}><span>Device</span><select value={ruiGlobals.device} onChange={(event) => setRuiGlobals((current) => ({...current, device: event.target.value}))}><option value="desktop">Desktop</option><option value="tablet">Tablet</option><option value="phone">Phone</option></select></label>
                    <details className={styles.more}>
                      <summary>More</summary>
                      <div className={styles.morePanel}>
                        <label className={styles.compactControl}><span>Fill</span><select value={ruiGlobals.fill} onChange={(event) => setRuiGlobals((current) => ({...current, fill: event.target.value}))}><option value="solid">Solid</option><option value="fluid">Fluid</option></select></label>
                        <label className={styles.compactControl}><span>Surface</span><select value={ruiGlobals.background} onChange={(event) => setRuiGlobals((current) => ({...current, background: event.target.value}))}><option value="window">Window</option><option value="canvas">Canvas</option><option value="none">None</option></select></label>
                        <label className={styles.compactControl}><span>Wallpaper</span><select value={ruiGlobals.wallpaper} onChange={(event) => setRuiGlobals((current) => ({...current, wallpaper: event.target.value}))}><option value="monstera">Monstera</option><option value="rodenn">Roden</option><option value="towner">Towner</option><option value="jonny">Jonny</option></select></label>
                      </div>
                    </details>
                  </>
                )}
                <a className={styles.controlsLink} href={activeHref} target="_blank" rel="noreferrer">{isRui ? 'Native docs' : 'Storybook controls'} <ArrowUpRight size={12} /></a>
              </div>
            </div>
            {!lead ? (
              <section id="overview">
                <h2>Overview</h2>
                <p>{systemText}</p>
                <p>Each component page follows the same documentation structure: overview, usage, anatomy, variants, behaviour, specifications, guidelines, accessibility, implementation notes and related components.</p>
                {error ? <p>The Storybook index could not be loaded. Check the static Storybook build and reload the page.</p> : <p>The Storybook index is loading. The component list will appear in the sidebar as soon as it is available.</p>}
              </section>
            ) : null}
            {lead ? (
              <>
                <section id="overview">
                  <h2>Overview</h2>
                  <p>{isRui ? 'The native documentation below is loaded directly from the RUI Storybook build. Use the appearance controls above to inspect it with a different accent, material or device.' : areaDescription}</p>
                  <p>{systemText}</p>
                  <div className={styles.leadExample}>
                    <StoryPreview
                      entry={lead}
                      system={system}
                      base={base}
                      globals={globals}
                      previewGlobals={previewGlobals}
                      previewTheme={previewTheme}
                      active
                    />
                  </div>
                </section>
                {activeAreaKey === 'RWDS/Button' ? null : isRui ? (
                  <>
                    {storyEntries.length > 0 ? (
                      <section id="stories">
                        <h2>Stories</h2>
                        <p>Choose a story from the native RUI build. The selected example is rendered below with the current RUI appearance settings.</p>
                        <div className={styles.storyTabs} role="group" aria-label={`${activeArea} stories`}>
                          {storyEntries.map((entry) => (
                            <button
                              key={entry.id}
                              type="button"
                              className={styles.storyTab}
                              data-active={selectedStory?.id === entry.id}
                              aria-pressed={selectedStory?.id === entry.id}
                              onClick={() => setRuiStoryId(entry.id)}
                            >
                              {entry.name}
                            </button>
                          ))}
                        </div>
                        {selectedStory ? (
                          <div className={styles.exampleStack}>
                            <StoryPreview
                              entry={selectedStory}
                              system={system}
                              base={base}
                              globals={globals}
                              previewGlobals={previewGlobals}
                              previewTheme={previewTheme}
                              active
                            />
                          </div>
                        ) : null}
                      </section>
                    ) : null}
                    <section id="in-code">
                      <h2>In code</h2>
                      <p>This component explorer embeds the native RUI Storybook build. The source path and the original docs and story pages are linked below.</p>
                      {active?.importPath ? <p className={styles.source}>{active.importPath}</p> : null}
                      <div className={styles.headerLinks}>
                        <a href={activeHref} target="_blank" rel="noreferrer">Open native docs <ArrowUpRight size={12} /></a>
                        {selectedStoryHref ? <a href={selectedStoryHref} target="_blank" rel="noreferrer">Open selected story <ArrowUpRight size={12} /></a> : null}
                        <a href={`${base}/`} target="_blank" rel="noreferrer">Full Storybook <ArrowUpRight size={12} /></a>
                      </div>
                    </section>
                    <section id="related">
                      <h2>Related</h2>
                      <ul>{related.map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}</ul>
                    </section>
                  </>
                ) : (
                  <>
                {doc.when ? (
                  <section id="when-to-use">
                    <h2>When to use</h2>
                    <ul>{doc.when.map((item) => <li key={item}>{item}</li>)}</ul>
                  </section>
                ) : null}
                {doc.anatomy ? (
                  <section id="anatomy">
                    <h2>Anatomy</h2>
                    <ul>{doc.anatomy.map((item) => <li key={item}>{item}</li>)}</ul>
                  </section>
                ) : null}
                {hasVariants ? (
                  <section id="variants">
                    <h2>Variants</h2>
                    {doc.variants ? (
                      <ul className={styles.variantList}>
                        {doc.variants.map((variant) => (
                          <li key={variant.label}><strong>{variant.label}</strong><span>{variant.text}</span></li>
                        ))}
                      </ul>
                    ) : null}
                    {otherStories.length > 0 ? (
                      <div className={styles.exampleStack}>
                        {otherStories.map((entry) => (
                          <StoryPreview
                            key={entry.id}
                            entry={entry}
                            system={system}
                            base={base}
                            globals={globals}
                            previewGlobals={previewGlobals}
                            previewTheme={previewTheme}
                            active={entry.id === activeId}
                          />
                        ))}
                      </div>
                    ) : null}
                  </section>
                ) : null}
                {doc.behavior ? (
                  <section id="behavior">
                    <h2>Behavior</h2>
                    <ul>{doc.behavior.map((item) => <li key={item}>{item}</li>)}</ul>
                  </section>
                ) : null}
                {doc.specs ? (
                  <section id="specs">
                    <h2>Specs</h2>
                    <div className={styles.specTableWrap}>
                      <table className={styles.specTable}>
                        <thead><tr>{doc.specs.columns.map((column) => <th key={column}>{column}</th>)}</tr></thead>
                        <tbody>{doc.specs.rows.map((row) => <tr key={row.join('-')}>{row.map((cell, index) => <td key={cell + index}>{cell}</td>)}</tr>)}</tbody>
                      </table>
                    </div>
                  </section>
                ) : null}
                {doc.guidelines ? (
                  <section id="guidelines">
                    <h2>Guidelines</h2>
                    <div className={styles.guidelines}>
                      {doc.guidelines.map((guideline) => (
                        <div className={styles.guideline} key={guideline.do}>
                          <div><span>Do</span><p>{guideline.do}</p></div>
                          <div><span>Don&apos;t</span><p>{guideline.dont}</p></div>
                        </div>
                      ))}
                    </div>
                  </section>
                ) : null}
                <section id="accessibility">
                  <h2>Accessibility</h2>
                  <ul>{accessibility.map((item) => <li key={item}>{item}</li>)}</ul>
                </section>
                <section id="in-code">
                  <h2>In code</h2>
                  <p>These examples are rendered from the existing Storybook build. The source path is shown for orientation.</p>
                  {active?.importPath ? <p className={styles.source}>{active.importPath}</p> : null}
                  <div className={styles.headerLinks}>
                    <a href={activeHref} target="_blank" rel="noreferrer">Open Storybook controls <ArrowUpRight size={12} /></a>
                    <a href={`${base}/`} target="_blank" rel="noreferrer">Full Storybook <ArrowUpRight size={12} /></a>
                  </div>
                </section>
                <section id="related">
                  <h2>Related</h2>
                  <ul>{related.map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}</ul>
                </section>
                  </>
                )}
              </>
            ) : (
              <div className={styles.state}>{error ? 'The Storybook index could not be loaded. Open the full Storybook instead.' : 'Loading the Storybook index…'}</div>
            )}
          </div>
          {lead && activeAreaKey === 'RWDS/Button' ? <ButtonDocs base={base} /> : null}
        </article>
        <ArticleToc items={toc} />
      </div>
    </div>
  );
}
