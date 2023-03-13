module.exports = {
  "stories": ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
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
