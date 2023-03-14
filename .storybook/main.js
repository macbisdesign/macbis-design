module.exports = {
  "stories": ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  output: {
    // Set the public path for the deployed Storybook
    // Replace `repository` with the name of your repository
    publicPath: '/',
  },
  addons: [{
    name: "@storybook/addon-docs",
    options: {
      toolbar: {
        title: "My Link",
        href: "https://example.com"
      }
    }
  }, "@storybook/addon-mdx-gfm"],
  "framework": {
    name: "@storybook/react-webpack5",
    options: {}
  },
  docs: {
    autodocs: true
  }
};

// .storybook/main.js