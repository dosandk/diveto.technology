const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    port: 9000,
    hot: true,
    compress: true,
    publicPath: '/',
    contentBase: path.resolve(__dirname, '../dist/client'),
    historyApiFallback: true,
  }
});
