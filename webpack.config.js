const path = require('path');

module.exports = {
  context: __dirname,
  entry: [
    './pokeblox',
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
