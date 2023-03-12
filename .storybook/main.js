module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
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
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        docs: false,
      },
    },
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}