import type {Metadata} from 'next';
import {PortalShell, DeveloperHome} from '@/components/rumahl/portal';

export const metadata: Metadata = {
  title: 'Developer documentation — APIs, apps and architecture — rumahl',
  description:
    'Build for rumahl: API reference, architecture, signed app packages, capabilities, OIDC, shell contracts and the Storybook design system.',
  alternates: {
    canonical: '/developers',
    types: {'text/markdown': '/developers.md'},
  },
};

export default function Page() {
  return (
    <PortalShell kind="developers">
      <DeveloperHome />
    </PortalShell>
  );
}
