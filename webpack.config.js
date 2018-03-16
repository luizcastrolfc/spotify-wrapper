const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const config = {
  entry: './index.js',
  output: {
    library: 'SpotifyWrapper',
    libraryTarget: 'umd',
    filename: './build.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  plugins: [
    new UglifyJsPlugin({
      uglifyOptions: {
        ecma: 8,
        warnings: false,
        compress: {warnings: false},
        output: {
          comments: false,
          beautify: false
        },
        toplevel: false,
        nameCache: null,
        ie8: false,
        keep_classnames: undefined,
        keep_fnames: false
      }
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
}

module.exports = config
