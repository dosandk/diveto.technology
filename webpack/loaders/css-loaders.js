// const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const devMode = process.env.NODE_ENV !== 'production';

// const styleLoader = {
//   loader: 'style-loader', // creates style nodes from JS strings
//   options: {
//     sourceMap: true
//   }
// };
//
// const miniCssExtractPlugin = {
//   loader: MiniCssExtractPlugin.loader,
//   options: {
//     // you can specify a publicPath here
//     // by default it use publicPath in webpackOptions.output
//   }
// };

module.exports = [
  {
    loader: 'style-loader', // creates style nodes from JS strings
    options: {
      sourceMap: true
    }
  },
  {
    loader: 'css-loader', // translates CSS into CommonJS
    options: {
      modules: true,
      camelCase: false,
      importLoaders: 2,
      localIdentName: '[local]___[hash:base64:5]',
      sourceMap: true
    }
  }
];
