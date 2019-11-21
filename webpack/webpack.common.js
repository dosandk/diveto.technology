const jsLoaders = require('./loaders/js-loaders');
const fileLoaders = require('./loaders/file-loaders');
const CopyPlugin = require('copy-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  target: 'web',
  entry: [path.join(__dirname, '../client/index.js')],
  output: {
    publicPath: '/',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist/client')
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: fileLoaders
      },
      {
        test: /\.(js)?$/,
        enforce: 'pre',
        use: jsLoaders,
        exclude: [/(node_modules)/]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('client/index.html')
    }),
    new CopyPlugin([
      'client/index.min.css',
      {
        from: 'client/images',
        to: 'images'
      },
    ]),
  ]
};
