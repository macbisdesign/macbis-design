module.exports = {
  "stories": ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "outputDir": "./docs/",
  // addons: [{
  //   name: '@storybook/addon-docs',
  //   options: {
  //     docs: false
  //   }
  // }],
  // addons: [
  //   {
  //     name: '@storybook/addon-docs',
  //     options: {
  //       configureJSX: true,
  //     },
  //   },
  //   {
  //     name: '@storybook/addon-links',
  //     options: {
  //       links: [
  //         { name: 'Google', url: 'https://www.google.com' },
  //         { name: 'GitHub', url: 'https://github.com' },
  //       ],
  //     },
  //   },
  // ],
  addons: [
    // ... other addons ...

    {
      name: '@storybook/addon-docs',
      options: {
        // ... other options ...

        // Add a link to the toolbar
        toolbar: {
          title: 'My Link',
          href: 'https://example.com',
        },
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
