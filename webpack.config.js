var Webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');

module.exports = {
  entry: './index.js',
  output: {
    path: './public/dist/'
  , filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: [nodeModulesPath],
        query: {
          presets: ['es2015', 'stage-0', 'react'],
          plugins: ['transform-decorators-legacy']
        },
        node: {
          net: "empty",
          tls: "empty"
        }
      }
    ]
  },
  plugins: [new Webpack.HotModuleReplacementPlugin()]
};
