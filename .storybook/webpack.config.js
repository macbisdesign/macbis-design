const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({ config }) => {
  config.plugins.push(new HtmlWebpackPlugin({
    title: 'My Storybook',
  }));

  return config;
};

