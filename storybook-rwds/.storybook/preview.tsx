import type {Preview} from '@storybook/react-vite';
import {useEffect} from 'react';
import './fonts.css';
import '../../components/rwds/rwds.css';
import '../../app/globals.css';
import '../../app/knowledge.css';
import './preview.css';

function Theme({scheme, children}: {scheme: 'light' | 'dark'; children: React.ReactNode}) {
  useEffect(() => {
    document.documentElement.dataset.theme = scheme;
    document.documentElement.style.colorScheme = scheme;
    return () => {
      delete document.documentElement.dataset.theme;
      document.documentElement.style.colorScheme = '';
    };
  }, [scheme]);
  return <div className="rwds-preview">{children}</div>;
}

const preview: Preview = {
  tags: ['autodocs'],
  globalTypes: {
    scheme: {
      description: 'RWDS appearance',
      toolbar: {
        title: 'Appearance',
        icon: 'contrast',
        items: [
          {value: 'light', title: 'Light', icon: 'sun'},
          {value: 'dark', title: 'Dark', icon: 'moon'},
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {scheme: 'light'},
  decorators: [
    (Story, context) => (
      <Theme scheme={(context.globals.scheme as 'light' | 'dark') ?? 'light'}>
        <Story />
      </Theme>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    controls: {expanded: true},
    a11y: {test: 'error'},
    options: {storySort: {order: ['Foundations', 'Components', 'Patterns']}},
  },
};

export default preview;
