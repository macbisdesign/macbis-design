import { create } from '@storybook/theming';

export default create({
  base: 'light',
  brandTitle: 'Macbis',
  brandUrl: 'https://example.com',
  brandImage: 'https://i.ibb.co/7n22Qdv/MACBIS-Logo-2022.jpg',
  brandTarget: '_self',
  colorPrimary: '#F9F9F9',
  colorSecondary: 'white',

  // UI
  appBg: '#2a4362',
  appContentBg: '#F9F9F9',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Cabin", sans-serif',
  fontCode: 'monospace',
  fontSize: 24,


  // Text colors
  textColor: 'white',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: 'black',
  barBg: '#2a4362',
  // barBorderColor: 'red',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'white',
  inputBorderRadius: 4,
});
// .storybook/YourTheme.js

