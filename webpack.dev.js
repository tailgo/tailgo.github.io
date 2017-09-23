const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {

  devtool: 'inline-source-map',

  devServer: {
    contentBase: './dist/'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.template.html'
    })
  ]

});
