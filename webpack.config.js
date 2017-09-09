const path = require('path');
const webpack = require('webpack');

const config = {
  entry: ["./src/app.tsx"],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js"
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  module: {
    loaders: [{
      test: /\.tsx?$/,
      loader: "awesome-typescript-loader",
      exclude: /node_modules/
    }]
  },

  devServer: {
    contentBase: './'
  }
};

module.exports = config;
