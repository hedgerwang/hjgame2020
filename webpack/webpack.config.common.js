'use strict';

const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    main: path.resolve('./src/javascripts/main.js'),
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve('./build/'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([{from: 'src/styles', to: ''}]),
    new CopyWebpackPlugin([{from: 'src/images', to: ''}]),
    new CopyWebpackPlugin([{from: 'src/sounds', to: ''}]),
    new CopyWebpackPlugin([{from: 'src/htmls', to: ''}]),
    new CopyWebpackPlugin([{from: 'src/heroku', to: ''}]),
  ],
};
