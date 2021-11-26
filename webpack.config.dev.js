const path = require('path');
const common = require('./webpack.config.common');

console.log('[Webpack] DEV environment');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  ...common,
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    compress: false,
    port: 9090,
  },
};
