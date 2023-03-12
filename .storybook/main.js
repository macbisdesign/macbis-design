module.exports = {
  "stories": ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": [{
    name: "@storybook/addon-docs",
    options: {
      docs: false
    }
  }, "@storybook/addon-mdx-gfm"],
  // "parameters": {
  //   previewTabs: {
  //     'storybook/docs/panel': {
  //       hidden: true,
  //     },
  //   },
  //   options: {
  //     theme: {
  //       base: 'light',
  //       brandImage: '../public/images/macbislogo2022.JPG',
  //     },
  //   },
  // },
  addons: [{
    name: '@storybook/addon-docs',
    options: {
      docs: false
    }
  }],
  "framework": {
    name: "@storybook/react-webpack5",
    options: {}
  },
  docs: {
    autodocs: true
  }
};