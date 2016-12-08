/**
 * @fileOverview Webpack basic configuration file.
 */

let webpack = require('webpack');

module.exports = {
  entry: {
    app: './front/app/app.boot.js',
    vendor: [],
  },
  output: {
    path: './front/static',
    filename: 'app.src.js',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'app.vendor.src.js',
      minChunks: module => /node_modules/.test(module.resource),
    }),
  ],
  devtool: 'source-map',
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  eslint: {
    configFile: './.eslintrc',
  },
};
