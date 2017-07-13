/* eslint-disable */

var path = require('path');
var webpack = require('webpack');
var root = path.join(process.cwd(), 'src');

module.exports = {
  entry: [
    './src/index.js'
  ],

  output: {
    path: path.join(process.cwd(), 'dist'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  resolve: {
    modules: [
      'node_modules',
      './src',
      path.resolve(__dirname, 'dist')
]
  },
};