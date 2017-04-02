const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module:{
    rules:[
      {test:/\.jsx?$/, use:'babel-loader'}
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ]
}
