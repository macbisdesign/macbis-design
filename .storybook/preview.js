import { defineCustomElements } from '../loader';
defineCustomElements();

export const parameters = {
  options: {
    storySort: {
      order: ['Overview', 'Content', 'Components'],
      // order: ['Intro', 'Pages', ['Home', 'Login', 'Admin'], 'Design System', '*', 'WIP'],
    },
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  previewTabs: {
    canvas: { hidden: false },
    docs: { hidden: false },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}