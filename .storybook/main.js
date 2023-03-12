module.exports = {
  "stories": ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "outputDir": "./docs/",
  // "addons": [{
  //   name: "@storybook/addon-docs",
  //   options: {
  //     docs: false
  //   }
  // }, "@storybook/addon-mdx-gfm"],
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
  // addons: [{
  //   name: '@storybook/addon-docs',
  //   options: {
  //     docs: false
  //   }
  // }],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
    {
      name: '@storybook/addon-links',
      options: {
        links: [
          { name: 'Google', url: 'https://www.google.com' },
          { name: 'GitHub', url: 'https://github.com' },
        ],
      },
    },
  ],
  "framework": {
    name: "@storybook/react-webpack5",
    options: {}
  },
  docs: {
    autodocs: true
  }
};

// .storybook/main.js
