// .storybook/webpack.config.js

const path = require('path');

module.exports = ({ config, mode }) => {
  // Add publicPath option to output object
  config.output.publicPath = '/';
  
  // Return the updated config object
  return config;
};
