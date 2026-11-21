import {addons} from 'storybook/manager-api';
import {create} from 'storybook/theming';

const rumahlDesign = create({
  base: 'light',
  brandTitle: 'RWDS · rumahl Design',
  brandUrl: '/design/rwds',
  brandTarget: '_self',
  colorPrimary: '#4f46e5',
  colorSecondary: '#6b5cf0',
  appBg: '#e9e5f7',
  appContentBg: '#f8f6fe',
  appPreviewBg: '#f8f6fe',
  appBorderColor: '#d8d2ea',
  appBorderRadius: 8,
  fontBase: '"Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
  fontCode: 'ui-monospace, "SF Mono", Menlo, monospace',
  textColor: '#1b1829',
  textMutedColor: '#67617b',
  textInverseColor: '#f0edfa',
  barBg: '#f8f6fe',
  barTextColor: '#67617b',
  barHoverColor: '#4f46e5',
  barSelectedColor: '#4f46e5',
  inputBg: '#ffffff',
  inputBorder: '#d8d2ea',
  inputTextColor: '#1b1829',
  inputBorderRadius: 6,
});

addons.setConfig({theme: rumahlDesign, panelPosition: 'bottom'});
