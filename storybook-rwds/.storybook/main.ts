import path from 'node:path';
import {fileURLToPath} from 'node:url';
import type {StorybookConfig} from '@storybook/react-vite';

const here = path.dirname(fileURLToPath(import.meta.url));
const websiteRoot = path.resolve(here, '../..');

/** Storybook for the rumahl Web Design System (RWDS). */
const config: StorybookConfig = {
  framework: {name: '@storybook/react-vite', options: {}},
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-docs'],
  staticDirs: [
    {from: '../../public/images', to: '/images'},
    {from: '../fonts', to: '/fonts'},
  ],
  viteFinal: (config) => {
    config.resolve = config.resolve ?? {};
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      '@': websiteRoot,
      'next/link': path.resolve(here, '../shims/next-link.tsx'),
      'next/navigation': path.resolve(here, '../shims/next-navigation.ts'),
    };
    return config;
  },
};

export default config;
