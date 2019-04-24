const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/Iterator.js',
  devServer: {
    contentBase: path.join(__dirname, './release'),
    open: true,
    port: 9000
  },
  module: {
    rules:[{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  output: {
    path: __dirname,
    filename: './release/bundle.js'
  }
}