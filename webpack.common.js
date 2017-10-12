const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app.tsx'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({
          use: [{
            loader: 'css-loader',
            options: {
              minimize: true
            }
          }],
          fallback: 'style-loader'
        }),
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new ExtractTextWebpackPlugin('style.css')
  ]
};
