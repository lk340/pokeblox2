const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: __dirname,
  entry: [
    './pokeblox.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", "*"]
  }
};
