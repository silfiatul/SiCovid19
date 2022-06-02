const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    proxy: {
      '/': 'http://localhost:3000/',
      contentBase: path.resolve(__dirname, 'dist'),
    },
  },
});
