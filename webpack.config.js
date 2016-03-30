module.exports = {
  entry: './index.js',

  output: {
    filename: 'bundle.js',
    path: './public/dist/',
    publicPath: './public'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
}
