import type {Metadata} from 'next';
import {StorybookExplorer} from '@/components/design/storybook-explorer';

export const metadata: Metadata = {
  title: 'RWDS components — rumahl Design',
  description: 'Browse the RWDS Storybook component by component in the normal documentation layout.',
  alternates: {canonical: '/design/rwds/components'},
};

export default function Page() {
  return <StorybookExplorer system="RWDS" base="/design/storybook/rwds" />;
}
