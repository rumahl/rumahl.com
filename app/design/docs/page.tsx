import type {Metadata} from 'next';
import {DesignDocsHome} from '@/components/design/design-docs-home';

export const metadata: Metadata = {
  title: 'Design documentation — RWDS & RUI',
  description:
    'Reference documentation for the rumahl Web Design System and rumahl UI: tokens, components, theming, adoption and contribution.',
  alternates: {canonical: '/design/docs', types: {'text/markdown': '/design/docs.md'}},
};

export default function Page() {
  return <DesignDocsHome />;
}
