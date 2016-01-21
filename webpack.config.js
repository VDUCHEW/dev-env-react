module.exports = {
  entry: "./public/assets/js/app.js",
  output: {
    path: __dirname + '/public/assets/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['react', 'es2015']
      }
    }]
  }
}
