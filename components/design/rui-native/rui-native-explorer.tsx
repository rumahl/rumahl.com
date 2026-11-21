'use client';

import {Component, createElement, useEffect, useMemo, useRef, useState, type CSSProperties, type ComponentType, type ElementType, type ReactNode} from 'react';
import Link from 'next/link';
import {ArrowUpRight, Check, Copy, Monitor, Moon, Search, Sun} from 'lucide-react';
import {NestedNav, type NestedNavGroup} from '@/components/rwds/nested-nav';
import {ArticleToc} from '@/components/rumahl/article-toc';
import {I18nProvider} from '@rumahl/ui/i18n';
import {defaultTokens, TOKEN_IDS, tokenVariable} from '@rumahl/ui/tokens';
import {paletteTokens} from '@rumahl/ui/palette';
import '@rumahl/ui/materials.css';
import '@rumahl/ui/recipes.css';
import '@rumahl/ui/base.css';
import '@rumahl/ui/default-theme.css';
import '@rumahl/ui/components/controls.css';
import '@rumahl/ui/components/scrollbars.css';
import '@rumahl/ui/primitives.css';
import '@rumahl/ui/interactive.css';
import '@rumahl/ui/settings.css';
import '@rumahl/ui/group.css';
import '@rumahl/ui/command.css';
import '@rumahl/ui/glass.css';
import '@rumahl/ui/menubar.css';
import '@rumahl/ui/phone.css';
import '@rumahl/ui/nav.css';
import '@rumahl/ui/chrome.css';
import explorerStyles from '../storybook-explorer.module.css';
import styles from './rui-native.module.css';

type StoryContext = {
  globals: Record<string, string>;
  parameters: Record<string, unknown>;
  args: Record<string, unknown>;
  id: string;
  title: string;
  name: string;
  viewMode: 'story';
  loaded: Record<string, never>;
  hooks: Record<string, never>;
};

type StoryDef = {
  key: string;
  name: string;
  args?: Record<string, unknown> | undefined;
  render?: ((args: Record<string, unknown>, context: StoryContext) => ReactNode) | undefined;
  parameters?: Record<string, unknown> | undefined;
};

type StoryMeta = {
  title?: string;
  component?: ElementType;
  args?: Record<string, unknown>;
  parameters?: Record<string, unknown>;
};

type StoryModule = {
  default?: StoryMeta;
  [key: string]: unknown;
};

type NativeArea = {
  title: string;
  group: string;
  area: string;
  meta: StoryMeta;
  stories: StoryDef[];
  source: string;
};

type StorybookDocsParameters = {
  docs?: {
    description?: {
      component?: string;
    };
  };
};

const STORYBOOK_ROOT = '/design/storybook/rui';
const GROUP_ORDER = ['Components', 'Primitives', 'System', 'Layout'];
const ACCENTS = {
  default: defaultTokens['color.accent'],
  blue: '#0b84ff',
  mint: '#22c7a9',
  rose: '#f45b85',
  amber: '#ff9f0a',
  violet: '#8b5cf6',
} as const;
const WALLPAPERS = {
  monstera: {label: 'Monstera', url: '/wallpapers/monstera.jpg', tone: '#0c1619'},
  rodenn: {label: 'Roden', url: '/wallpapers/wallpaper-john-rodenn.jpg', tone: '#202225'},
  towner: {label: 'Towner', url: '/wallpapers/wallpaper-john-towner.jpg', tone: '#202225'},
  jonny: {label: 'Jonny', url: '/wallpapers/wallpaper-jonny-james.jpg', tone: '#202225'},
} as const;
type WallpaperKey = keyof typeof WALLPAPERS;
type SurfaceChoice = 'window' | 'canvas' | 'none';

const storyModules = import.meta.glob('../../../../rumahl/frontend/packages/ui/src/components/**/*.stories.tsx', {eager: true}) as Record<string, StoryModule>;

function humanize(value: string) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function slug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function areaLabel(group: string) {
  if (group === 'Components') return 'All components';
  if (group === 'Primitives') return 'All primitives';
  if (group === 'System') return 'System components';
  return 'Layouts';
}

function buildAreas(): NativeArea[] {
  const areas: NativeArea[] = [];
  for (const [path, module] of Object.entries(storyModules)) {
    const meta = module.default;
    if (!meta?.title) continue;
    const folder = path.split('/').slice(-2, -1)[0] ?? 'Component';
    const title = meta.title === 'General' ? `Components/${folder}` : meta.title;
    const [group, ...rest] = title.split('/');
    const area = rest.join(' / ') || group;
    const stories = Object.entries(module)
      .filter(([key]) => key !== 'default')
      .map(([key, value]): StoryDef | null => {
        if (!value || typeof value !== 'object' || Array.isArray(value)) return null;
        const story = value as StoryDef;
        return {
          key,
          name: typeof story.name === 'string' && story.name.length > 0 ? story.name : humanize(key),
          args: story.args,
          render: typeof story.render === 'function' ? story.render : undefined,
          parameters: story.parameters,
        };
      })
      .filter((story): story is StoryDef => story !== null)
      .sort((a, b) => (a.key < b.key ? -1 : a.key > b.key ? 1 : 0));
    if (stories.length === 0) continue;
    const source = path.split('/src/')[1]?.replace(/\\/g, '/') ?? path;
    areas.push({title, group, area, meta, stories, source});
  }
  return areas.sort((a, b) => {
    const groupDelta = GROUP_ORDER.indexOf(a.group) - GROUP_ORDER.indexOf(b.group);
    return groupDelta !== 0 ? groupDelta : a.area < b.area ? -1 : a.area > b.area ? 1 : 0;
  });
}

const nativeAreas = buildAreas();
const defaultArea = nativeAreas.find((area) => area.title === 'Components/Button') ?? nativeAreas[0];
const fallbackArea: NativeArea = {title: '', group: 'Components', area: 'Component', meta: {}, stories: [], source: ''};

function preferredStory(area: NativeArea): StoryDef | undefined {
  if (area.title === 'Components/Button') {
    return area.stories.find((story) => /^(all variants|allvariants)$/i.test(story.key)) ?? area.stories[0];
  }
  if (area.title === 'Components/Inputs') {
    return area.stories.find((story) => /^text$/i.test(story.key))
      ?? area.stories.find((story) => /^(default|overview|playground)$/i.test(story.key))
      ?? area.stories[0];
  }
  return area.stories.find((story) => /^(default|overview|playground|primary|text|basic|standard)$/i.test(story.key))
    ?? area.stories[0];
}

const BUTTON_STORY_COPY: Record<string, string> = {
  AllVariants: 'All four action roles in one row: secondary, primary, danger and ghost.',
  Active: 'The persistent pressed or selected state keeps the action visibly current.',
  AsLink: 'A native anchor that keeps the same visual contract as the button.',
  BackgroundColor: 'Explicit fill colours, independent of the accent role.',
  ColoredStates: 'Hover, active and disabled states with a custom colour.',
  ColoredVariants: 'Every button variant rendered with a custom accent colour.',
  Colors: 'The RUI accent palette applied to primary actions.',
  Danger: 'A destructive action with a clear label and a distinct tone.',
  Disabled: 'The non-interactive state; explain the reason in visible text.',
  Flat: 'The flat fill without the glass material.',
  Floating: 'A control that sits over a picture or another surface.',
  Ghost: 'A low-emphasis action with no fill.',
  GlassSaturation: 'A comparison of glass strength and saturations.',
  Joined: 'Adjacent actions with flat shared corners.',
  Loading: 'In-place progress that keeps the width and blocks repeated activation.',
  OverImage: 'A floating action over the desktop picture.',
  Primary: 'The accent-tinted call to action; use one per view or region.',
  Secondary: 'The everyday glass action and the default button.',
  Sizes: 'The complete xs–xl size scale.',
  Small: 'The compact sm control.',
  Success: 'In-place success feedback that keeps the button width.',
  WithIcons: 'Leading and trailing icon composition.',
  WithTooltip: 'A button with the native RUI tooltip.',
};

function storyCopy(area: NativeArea, story: StoryDef) {
  if (area.title === 'Components/Button') return BUTTON_STORY_COPY[story.key] ?? `${story.name} is a native RUI Button story.`;
  return `${story.name} is a native ${area.area} story rendered directly from RUI.`;
}

function docsDescription(area: NativeArea) {
  const parameters = area.meta.parameters as StorybookDocsParameters | undefined;
  return parameters?.docs?.description?.component;
}

function firstParagraph(text?: string) {
  if (!text) return undefined;
  const line = text.split('\n').map((part) => part.trim()).find((part) => part && !part.startsWith('#') && !part.startsWith('-'));
  return line?.replace(/\*\*(.*?)\*\*/g, '$1').replace(/`([^`]+)`/g, '$1');
}

function cleanInline(text: string) {
  return text.replace(/\*\*(.*?)\*\*/g, '$1').replace(/`([^`]+)`/g, '$1');
}

function NativeDocsText({text}: {text?: string}) {
  if (!text) return null;
  const blocks: ReactNode[] = [];
  let list: string[] = [];
  const flush = () => {
    if (!list.length) return;
    blocks.push(
      <ul key={`list-${blocks.length}`}>
        {list.map((item, index) => <li key={`${item}-${index}`}>{cleanInline(item)}</li>)}
      </ul>
    );
    list = [];
  };
  for (const line of text.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed) {
      flush();
      continue;
    }
    if (trimmed.startsWith('## ')) {
      flush();
      blocks.push(<h3 className={styles.subheading} key={`heading-${blocks.length}`}>{cleanInline(trimmed.slice(3))}</h3>);
      continue;
    }
    if (trimmed.startsWith('- ')) {
      list.push(trimmed.slice(2));
      continue;
    }
    if (list.length > 0) {
      list[list.length - 1] = `${list[list.length - 1]} ${trimmed}`;
      continue;
    }
    blocks.push(<p key={`paragraph-${blocks.length}`}>{cleanInline(trimmed)}</p>);
  }
  flush();
  return <div className={styles.docsText}>{blocks}</div>;
}

function SpecTable({title, columns, rows}: {title: string; columns: string[]; rows: string[][]}) {
  return (
    <div className={styles.specBlock}>
      <h3 className={styles.subheading}>{title}</h3>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead><tr>{columns.map((column) => <th key={column}>{column}</th>)}</tr></thead>
          <tbody>{rows.map((row) => <tr key={row.join('|')}>{row.map((cell, index) => <td key={`${cell}-${index}`}>{cell}</td>)}</tr>)}</tbody>
        </table>
      </div>
    </div>
  );
}

function CodeSample({title, code}: {title: string; code: string}) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    void navigator.clipboard?.writeText(code).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    }).catch(() => undefined);
  };
  return (
    <div className={styles.codeCard}>
      <div className={styles.codeHead}>
        <span>{title}</span>
        <button type="button" className={styles.copy} onClick={copy}>
          {copied ? <Check size={12} /> : <Copy size={12} />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre className={styles.code}><code>{code}</code></pre>
    </div>
  );
}

function StoryHost({area, story, args, context}: {area: NativeArea; story: StoryDef; args: Record<string, unknown>; context: StoryContext}) {
  const Component = area.meta.component as ComponentType<Record<string, unknown>> | undefined;
  if (story.render) return <>{story.render(args, context)}</>;
  if (!Component) return <p>This story does not expose a component.</p>;
  return createElement(Component, args);
}

function NativeStory({area, story, globals}: {area: NativeArea; story: StoryDef; globals: Record<string, string>}) {
  const args = useMemo(() => ({...(area.meta.args ?? {}), ...(story.args ?? {})}), [area.meta.args, story.args]);
  const context = useMemo<StoryContext>(() => ({
    globals,
    parameters: {...(area.meta.parameters ?? {}), ...(story.parameters ?? {})},
    args,
    id: `${slug(area.title)}--${slug(story.key)}`,
    title: area.title,
    name: story.name,
    viewMode: 'story',
    loaded: {},
    hooks: {},
  }), [area.meta.parameters, area.title, args, globals, story.key, story.name, story.parameters]);

  return <StoryHost area={area} story={story} args={args} context={context} />;
}

class StoryBoundary extends Component<{children: ReactNode; href: string}, {failed: boolean}> {
  state = {failed: false};
  static getDerivedStateFromError() {
    return {failed: true};
  }
  render() {
    if (this.state.failed) {
      return (
        <div style={{display: 'grid', gap: 10, placeItems: 'center', padding: 32, textAlign: 'center'}}>
          <strong>This native story could not be rendered.</strong>
          <a href={this.props.href} target="_blank" rel="noreferrer" style={{fontSize: 12, fontWeight: 600}}>
            Open it in Storybook
          </a>
        </div>
      );
    }
    return this.props.children;
  }
}

export function RuiNativeExplorer() {
  const [activeTitle, setActiveTitle] = useState(defaultArea?.title ?? '');
  const [storyKey, setStoryKey] = useState('');
  const [query, setQuery] = useState('');
  const [scheme, setScheme] = useState<'auto' | 'light' | 'dark'>('auto');
  const [siteScheme, setSiteScheme] = useState<'light' | 'dark'>('light');
  const [material, setMaterial] = useState<'glass' | 'floating' | 'solid'>('glass');
  const [accent, setAccent] = useState<keyof typeof ACCENTS>('default');
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'phone'>('desktop');
  const [surface, setSurface] = useState<SurfaceChoice>('window');
  const [wallpaper, setWallpaper] = useState<WallpaperKey>('monstera');
  const tabsRef = useRef<HTMLDivElement>(null);

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

  const selectedArea = nativeAreas.find((area) => area.title === activeTitle) ?? defaultArea ?? fallbackArea;
  const selectedStory = selectedArea.stories.find((story) => story.key === storyKey) ?? preferredStory(selectedArea);
  const docsText = docsDescription(selectedArea);
  const lead = firstParagraph(docsText) ?? `${selectedArea.area} is a native RUI component. Browse its states and variants below; the full generated reference stays in Storybook.`;
  const mode = scheme === 'auto' ? siteScheme : scheme;
  const seed = ACCENTS[accent];
  const tokens = useMemo(() => ({...defaultTokens, ...paletteTokens(seed, {mode})}), [mode, seed]);
  const tokenStyle = useMemo(() => Object.fromEntries(TOKEN_IDS.map((id) => [tokenVariable(id), tokens[id]])) as CSSProperties, [tokens]);
  const selectedWallpaper = WALLPAPERS[wallpaper];
  const stageBackground = surface === 'window'
    ? `${selectedWallpaper.tone} url("${selectedWallpaper.url}") center / cover no-repeat`
    : surface === 'none'
      ? 'transparent'
      : 'var(--rumahl-ui-color-canvas-background)';
  const showAppSurface = surface === 'window' && selectedStory?.parameters?.windowSurface !== false;
  const storyGlobals = useMemo<Record<string, string>>(() => ({
    scheme: mode,
    material,
    fill: 'solid',
    accent,
    device,
    background: surface,
    wallpaper,
  }), [accent, device, material, mode, surface, wallpaper]);
  const deviceWidth = device === 'tablet' ? 820 : device === 'phone' ? 390 : '100%';
  const areaId = slug(selectedArea.title);
  const docsHref = `${STORYBOOK_ROOT}/?path=/docs/${areaId}--docs`;
  const storyHref = selectedStory
    ? `${STORYBOOK_ROOT}/?path=/story/${areaId}--${slug(selectedStory.key)}`
    : `${STORYBOOK_ROOT}/`;
  const isButton = selectedArea.title === 'Components/Button';
  const filteredAreas = useMemo(() => {
    const queryText = query.trim().toLowerCase();
    if (!queryText) return nativeAreas;
    return nativeAreas.filter((area) => `${area.group} ${area.area} ${area.title}`.toLowerCase().includes(queryText));
  }, [query]);

  useEffect(() => {
    const root = document.documentElement;
    for (const id of TOKEN_IDS) root.style.setProperty(tokenVariable(id), tokens[id]);
    return () => {
      for (const id of TOKEN_IDS) root.style.removeProperty(tokenVariable(id));
    };
  }, [tokens]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const container = tabsRef.current;
      const activeTab = container?.querySelector<HTMLElement>('[data-active="true"]');
      if (!container || !activeTab || container.clientWidth === 0) return;
      const containerRect = container.getBoundingClientRect();
      const tabRect = activeTab.getBoundingClientRect();
      const tabCenter = tabRect.left - containerRect.left + container.scrollLeft + tabRect.width / 2;
      const next = tabCenter - container.clientWidth / 2;
      container.scrollTo({left: Math.max(0, next), behavior: 'auto'});
    });
    return () => cancelAnimationFrame(frame);
  }, [selectedArea.title, selectedStory?.key]);

  const groups: NestedNavGroup[] = GROUP_ORDER.flatMap((group) => {
    const items = filteredAreas
      .filter((area) => area.group === group)
      .map((area) => ({
        id: area.title,
        label: area.area,
        onSelect: () => {
          setActiveTitle(area.title);
          setStoryKey('');
          window.scrollTo({top: 0, behavior: 'smooth'});
        },
      }));
    if (!items.length) return [];
    return [{
      id: group,
      label: group,
      areas: [{id: `${group}/all`, label: areaLabel(group), items}],
    }];
  });

  const toc = [
    {id: 'overview', label: 'Overview'},
    {id: 'usage', label: 'Usage'},
    ...(isButton ? [{id: 'specs', label: 'Specs'}] : []),
    {id: 'accessibility', label: 'Accessibility'},
    {id: 'in-code', label: 'In code'},
    {id: 'related', label: 'Related'},
  ];

  const buttonCode = `import { Button, ButtonLink } from "@rumahl/ui/components";
import "@rumahl/ui/materials.css";
import "@rumahl/ui/default-theme.css";
import "@rumahl/ui/components/controls.css";

<Button variant="primary">Save changes</Button>
<Button variant="secondary" size="sm">Cancel</Button>
<Button variant="danger">Delete</Button>
<Button variant="primary" loading>Saving…</Button>
<ButtonLink href="/settings">Open settings</ButtonLink>`;

  const componentName = (selectedArea.meta.component as {displayName?: string; name?: string} | undefined)?.displayName
    ?? (selectedArea.meta.component as {name?: string} | undefined)?.name
    ?? 'Component';
  const genericCode = `import { ${componentName} } from "@rumahl/ui/components";
import "@rumahl/ui/materials.css";
import "@rumahl/ui/default-theme.css";
import "@rumahl/ui/components/controls.css";`;

  if (!selectedArea.title) return <div className="content-main"><p>No native RUI components were found.</p></div>;

  const related = isButton ? [
    {label: 'Button group', text: 'Joined groups of related actions.', href: `${STORYBOOK_ROOT}/?path=/docs/components-button-group--docs`, external: true},
    {label: 'IconButton', text: 'Compact icon-only actions with an accessible name.', href: `${STORYBOOK_ROOT}/?path=/docs/primitives-icon-button--docs`, external: true},
    {label: 'SplitButton', text: 'A primary action with a secondary menu.', href: `${STORYBOOK_ROOT}/?path=/docs/components-split-button--docs`, external: true},
    {label: 'Toolbar', text: 'Group actions in a native RUI toolbar.', href: `${STORYBOOK_ROOT}/?path=/docs/components-toolbar--docs`, external: true},
  ] : [
    {label: 'Storybook documentation', text: 'Generated props, controls and the complete story set.', href: docsHref, external: true},
    {label: 'Full RUI Storybook', text: 'Foundations, guides, layouts and every component.', href: `${STORYBOOK_ROOT}/`, external: true},
    {label: 'RUI reference', text: 'Scope, tokens, materials and theming.', href: '/design/rui', external: false},
    {label: 'RWDS and RUI comparison', text: 'Why the two systems stay separate.', href: '/design/systems', external: false},
  ];

  return (
    <div className="portal-scope content-main" style={{'--content-accent': 'var(--design-accent, var(--accent))'} as CSSProperties}>
      <div className="content-layout">
        <NestedNav
          groups={groups}
          activeId={selectedArea.title}
          ariaLabel="RUI native components"
          forceOpen={query.trim().length > 0}
          header={
            <div className={explorerStyles.listHead}>
              <div className={explorerStyles.search}>
                <Search size={14} />
                <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search components…" aria-label="Search RUI components" />
              </div>
              <span className={explorerStyles.count}>{nativeAreas.length} native components</span>
              <a className={styles.sidebarLink} href={`${STORYBOOK_ROOT}/`} target="_blank" rel="noreferrer">
                Full RUI Storybook <ArrowUpRight size={12} />
              </a>
              <p className={styles.sidebarNote}>Examples render directly from the RUI source. Storybook remains the complete reference.</p>
            </div>
          }
        />
        <article className="content-article">
          <div className={`content-mobile-nav ${explorerStyles.mobileSelect}`}>
            <label htmlFor="rui-native-component">Component</label>
            <select
              id="rui-native-component"
              value={selectedArea.title}
              onChange={(event) => {
                setActiveTitle(event.target.value);
                setStoryKey('');
              }}
            >
              {GROUP_ORDER.flatMap((group) => {
                const items = nativeAreas.filter((area) => area.group === group);
                if (!items.length) return [];
                return (
                  <optgroup label={group} key={group}>
                    {items.map((area) => <option value={area.title} key={area.title}>{area.area}</option>)}
                  </optgroup>
                );
              })}
            </select>
          </div>
          <header>
            <span className="content-eyebrow">RUI · Native components</span>
            <h1>{selectedArea.area}</h1>
            <p className="lead">{lead}</p>
            <div className="meta">
              <span>{selectedArea.stories.length} {selectedArea.stories.length === 1 ? 'story' : 'stories'}</span>
              <span>Rendered directly from RUI</span>
            </div>
            <div className={explorerStyles.headerLinks}>
              <a href={docsHref} target="_blank" rel="noreferrer">Storybook docs <ArrowUpRight size={12} /></a>
              <a href={`${STORYBOOK_ROOT}/`} target="_blank" rel="noreferrer">Full Storybook <ArrowUpRight size={12} /></a>
            </div>
          </header>

          <div className={explorerStyles.toolbarWrap} data-static>
            <div className={explorerStyles.toolbar} role="toolbar" aria-label="RUI preview settings">
              <span className={explorerStyles.toolbarLabel}>Appearance</span>
              <div className={explorerStyles.appearance} role="group" aria-label="Appearance">
                {([
                  ['auto', 'Auto appearance', Monitor],
                  ['light', 'Light appearance', Sun],
                  ['dark', 'Dark appearance', Moon],
                ] as const).map(([value, label, Icon]) => (
                  <button
                    key={value}
                    type="button"
                    data-active={scheme === value}
                    aria-pressed={scheme === value}
                    aria-label={label}
                    title={label}
                    onClick={() => setScheme(value)}
                  >
                    <Icon size={14} />
                  </button>
                ))}
              </div>
              <label className={explorerStyles.compactControl}><span>Accent</span><select value={accent} onChange={(event) => setAccent(event.target.value as keyof typeof ACCENTS)}><option value="default">Default</option><option value="blue">Blue</option><option value="mint">Mint</option><option value="rose">Rose</option><option value="amber">Amber</option><option value="violet">Violet</option></select></label>
              <label className={explorerStyles.compactControl}><span>Material</span><select value={material} onChange={(event) => setMaterial(event.target.value as typeof material)}><option value="glass">Glass</option><option value="floating">Floating</option><option value="solid">Solid</option></select></label>
              <label className={explorerStyles.compactControl}><span>Device</span><select value={device} onChange={(event) => setDevice(event.target.value as typeof device)}><option value="desktop">Desktop</option><option value="tablet">Tablet</option><option value="phone">Phone</option></select></label>
              <label className={explorerStyles.compactControl}><span>Surface</span><select value={surface} onChange={(event) => setSurface(event.target.value as SurfaceChoice)}><option value="window">Window</option><option value="canvas">Canvas</option><option value="none">None</option></select></label>
              <label className={explorerStyles.compactControl}><span>Wallpaper</span><select value={wallpaper} onChange={(event) => { setWallpaper(event.target.value as WallpaperKey); setSurface('window'); }}>{Object.entries(WALLPAPERS).map(([key, paper]) => <option value={key} key={key}>{paper.label}</option>)}</select></label>
              <a className={explorerStyles.controlsLink} href={`${STORYBOOK_ROOT}/`} target="_blank" rel="noreferrer">Full Storybook <ArrowUpRight size={12} /></a>
            </div>
          </div>

          <section id="overview" className={styles.previewSection}>
            <div className={styles.previewHead}>
              <div>
                <span className={styles.kicker}>Native preview</span>
                <h2>Overview</h2>
              </div>
              <span className={styles.nativeLabel}>No iframe</span>
            </div>
            <p className={styles.sectionLead}>The component is rendered directly from the RUI source. Choose a story to inspect its states; the generated reference stays in Storybook.</p>
            <div key={selectedArea.title} ref={tabsRef} className={explorerStyles.storyTabs} role="group" aria-label={`${selectedArea.area} stories`}>
              {selectedArea.stories.map((story) => (
                <button
                  key={story.key}
                  type="button"
                  className={explorerStyles.storyTab}
                  data-active={selectedStory?.key === story.key}
                  aria-pressed={selectedStory?.key === story.key}
                  onClick={() => setStoryKey(story.key)}
                >
                  {story.name}
                </button>
              ))}
            </div>
            <article className={explorerStyles.storyCard}>
              <div className={explorerStyles.storyHead}>
                <div className={explorerStyles.storyIntro}>
                  <span className={explorerStyles.storyKind}>Native RUI story</span>
                  <h3>{selectedStory?.name ?? 'Preview'}</h3>
                  <p>{selectedStory ? storyCopy(selectedArea, selectedStory) : 'Choose a story to preview it.'}</p>
                </div>
                <div className={explorerStyles.storyLinks}>
                  <a href={storyHref} target="_blank" rel="noreferrer">Open in Storybook <ArrowUpRight size={12} /></a>
                </div>
              </div>
              <div className={explorerStyles.frameWrap}>
                <div
                  className={`shell ${styles.stage}`}
                  data-theme="com.rumahl.default"
                  data-scheme={mode}
                  data-material={material}
                  data-fill="solid"
                  style={{...tokenStyle, background: stageBackground, colorScheme: mode, fontFamily: 'var(--rumahl-ui-typography-family)'}}
                >
                  {showAppSurface ? <div aria-hidden className={`rumahl-app-surface ${styles.appSurface}`} /> : null}
                  <div className={styles.stageInner} style={{maxWidth: deviceWidth}}>
                    <StoryBoundary href={storyHref}>
                      <I18nProvider locale="en">
                        {selectedStory ? <NativeStory key={`${selectedArea.title}:${selectedStory.key}`} area={selectedArea} story={selectedStory} globals={storyGlobals} /> : null}
                      </I18nProvider>
                    </StoryBoundary>
                  </div>
                </div>
              </div>
              {selectedArea.source ? <span className={explorerStyles.source}>{selectedArea.source}</span> : null}
            </article>
            <p className={styles.previewNote}>Rendered directly from the RUI component source. Storybook remains the full reference.</p>
          </section>

          <div className="content-prose">
            <section id="usage">
              <h2>Usage</h2>
              {docsText ? <NativeDocsText text={docsText} /> : <p>{selectedArea.area} is a native RUI component. Choose a story above to inspect the supported states; the generated props and API reference live in Storybook.</p>}
            </section>

            {isButton ? (
              <section id="specs">
                <h2>Specs</h2>
                <SpecTable
                  title="Variants"
                  columns={['Variant', 'Role']}
                  rows={[
                    ['secondary', 'Everyday action; the default glass control.'],
                    ['primary', 'Accent-tinted call to action; use one per view or region.'],
                    ['ghost', 'No fill; low emphasis in toolbars and inline contexts.'],
                    ['danger', 'Destructive action; never the default action.'],
                  ]}
                />
                <SpecTable
                  title="Sizes"
                  columns={['Size', 'Height', 'Use']}
                  rows={[
                    ['xs', '26 px', 'Dense desktop toolbars.'],
                    ['sm', '30 px', 'Compact rows and secondary controls.'],
                    ['md', '36 px', 'Default size.'],
                    ['lg', '44 px', 'Prominent actions and touch surfaces.'],
                    ['xl', '52 px', 'Large surfaces and onboarding.'],
                  ]}
                />
                <SpecTable
                  title="States"
                  columns={['State', 'Behavior']}
                  rows={[
                    ['floating', 'Sits over a picture or another surface; treat it as its own island.'],
                    ['glass={false}', 'Flat fill without the glass material.'],
                    ['active', 'Persistent pressed or selected state.'],
                    ['loading', 'Shows a spinner, sets aria-busy and disables the button.'],
                    ['success', 'In-place success feedback that keeps the button width.'],
                    ['disabled', '50% opacity and no pointer interaction.'],
                  ]}
                />
                <SpecTable
                  title="Props"
                  columns={['Prop', 'Type', 'Description']}
                  rows={[
                    ['variant', "'primary' | 'secondary' | 'ghost' | 'danger'", 'Visual role of the action.'],
                    ['size', "'xs' | 'sm' | 'md' | 'lg' | 'xl'", 'Shared control size scale.'],
                    ['color', 'string', 'Overrides the accent for this element only.'],
                    ['backgroundColor', 'string', 'Explicit fill colour, independent of color.'],
                    ['leftIcon / rightIcon', 'ReactNode', 'Optional leading or trailing icon.'],
                    ['loading', 'boolean', 'Spinner, aria-busy and disabled interaction.'],
                    ['success', 'boolean', 'In-place success state.'],
                    ['active', 'boolean', 'Persistent pressed or selected state.'],
                    ['floating', 'boolean', 'Element state for controls over a background.'],
                    ['glass', 'boolean', 'Set false for a flat fill.'],
                    ['leftFlat / rightFlat', 'boolean', 'Flat corners for joined actions.'],
                    ['noSidePadding', 'boolean', 'Removes horizontal padding for icon-only content.'],
                    ['insetFocus', 'boolean', 'Draws the focus ring inside the button.'],
                    ['native props', 'button / anchor props', 'onClick, type, aria-* and other native props are forwarded.'],
                  ]}
                />
              </section>
            ) : null}

            <section id="accessibility">
              <h2>Accessibility</h2>
              {isButton ? (
                <ul>
                  <li><code>Button</code> renders a native <code>button</code>; <code>ButtonLink</code> renders an anchor with the same visual contract.</li>
                  <li>Keep a visible label. Icon-only actions need an <code>aria-label</code> and enough spacing.</li>
                  <li><code>loading</code> sets <code>aria-busy</code> and disables the control; announce the result after the action completes.</li>
                  <li>The focus ring uses the RUI accent and remains visible in light and dark appearances.</li>
                  <li><code>danger</code> must be supported by a clear label and confirmation; do not rely on red alone.</li>
                  <li>Use xs and sm only in dense, pointer-led surfaces; larger steps keep touch targets comfortable.</li>
                </ul>
              ) : (
                <ul>
                  <li>The examples use the native RUI element and interaction model.</li>
                  <li>Keep visible labels and accessible names; icon-only controls need an explicit name.</li>
                  <li>Focus, disabled and selected states are part of the component contract and follow the active theme.</li>
                  <li>Open the Storybook docs for the generated accessibility report and component-specific keyboard notes.</li>
                </ul>
              )}
            </section>

            <section id="in-code">
              <h2>In code</h2>
              <p>Import from <code>@rumahl/ui/components</code> and load the RUI styles once at the app root. The examples below are the same components rendered above.</p>
              <CodeSample title={isButton ? 'Button usage' : `${selectedArea.area} import`} code={isButton ? buttonCode : genericCode} />
              <p><a className={explorerStyles.controlsLink} href={docsHref} target="_blank" rel="noreferrer">Open the generated Storybook docs <ArrowUpRight size={12} /></a></p>
            </section>

            <section id="related">
              <h2>Related</h2>
              <div className={styles.relatedGrid}>
                {related.map((item) => (
                  item.external ? (
                    <a className={styles.relatedCard} href={item.href} target="_blank" rel="noreferrer" key={item.label}>
                      <strong>{item.label} <ArrowUpRight size={13} /></strong>
                      <span>{item.text}</span>
                    </a>
                  ) : (
                    <Link className={styles.relatedCard} href={item.href} key={item.label}>
                      <strong>{item.label} <ArrowUpRight size={13} /></strong>
                      <span>{item.text}</span>
                    </Link>
                  )
                ))}
              </div>
            </section>
          </div>
        </article>
        <ArticleToc items={toc} />
      </div>
    </div>
  );
}
