module.exports = {
  "stories": ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  // output: {
  //   // Set the public path for the deployed Storybook
  //   // Replace `repository` with the name of your repository
  //   publicPath: '/',
  // },
  outputDir: './docs',
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    "@storybook/addon-mdx-gfm",
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
  ],
  // addons: [{
  //   name: "@storybook/addon-docs",
  //   options: {
  //     toolbar: {
  //       title: "My Link",
  //       href: "https://example.com"
  //     }
  //   }
  // }, "@storybook/addon-mdx-gfm"],
  "framework": {
    name: "@storybook/react-webpack5",
    options: {}
  },
  docs: {
    autodocs: true
  }
};

// module.exports = {
//   stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
//   addons: [
//     '@storybook/addon-links',
//     '@storybook/addon-essentials',
//     {
//       name: '@storybook/addon-docs',
//       options: {
//         configureJSX: true,
//         babelOptions: {},
//         sourceLoaderOptions: null,
//       },
//     },
//   ],
// };


// .storybook/main.js