import type {Metadata} from 'next';
import {RuiNativeExplorer} from '@/components/design/rui-native/rui-native-explorer';

export const metadata: Metadata = {
  title: 'RUI components — rumahl Design',
  description: 'Native RUI components rendered directly from the source, with Storybook as the complete reference.',
  alternates: {canonical: '/design/rui/components'},
};

export default function Page() {
  return <RuiNativeExplorer />;
}
