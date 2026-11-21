'use client';
import {useState} from 'react';
import {ArrowUpRight, Layers, Palette} from 'lucide-react';

const systems = [
  {
    id: 'rwds',
    name: 'RWDS Storybook',
    short: 'RWDS',
    icon: Palette,
    source: 'storybook-rwds in the website repository',
    src: '/design/storybook/rwds/',
  },
  {
    id: 'rui',
    name: 'RUI Storybook',
    short: 'RUI',
    icon: Layers,
    source: 'frontend/packages/storybook in rumahl/rumahl',
    src: '/design/storybook/rui/',
  },
] as const;

export function StorybookViewer() {
  const [active, setActive] = useState<'rwds' | 'rui'>('rwds');
  const current = systems.find((system) => system.id === active)!;

  return (
    <div className="ds-storybook">
      <div className="ds-sb-tabs" role="tablist" aria-label="Storybook">
        {systems.map((system) => (
          <button
            key={system.id}
            type="button"
            role="tab"
            aria-selected={active === system.id}
            data-active={active === system.id}
            onClick={() => setActive(system.id)}
          >
            <system.icon size={16} />
            {system.name}
          </button>
        ))}
      </div>
      <div className="ds-sb-bar">
        <span>{current.source}</span>
        <a href={current.src} target="_blank" rel="noreferrer">
          Open full screen <ArrowUpRight size={14} />
        </a>
      </div>
      <iframe
        key={current.id}
        className="ds-sb-frame"
        src={current.src}
        title={current.name}
        loading="lazy"
      />
    </div>
  );
}
