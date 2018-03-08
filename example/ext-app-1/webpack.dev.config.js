const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'app': './app/main.ts',
    'vendor': './app/vendor.ts'
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: ['ts-loader', 'angular2-template-loader']
      }]
  },
  externals: [],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.pug', '.less'],
    modules: ['node_modules', 'app'],
    //  unsafeCache: true
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
    chunkFilename: '[name].bundle.js',
    //  library: 'ng2',
    // //jsonpFunction: `webpackJsonp${Date.now()}`,  //!! to avoid webpackJsonp conflict with reference webpack
    // libraryTarget: 'umd'  //output  cmd
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    // new AssetsPlugin({
    //   filename: 'assets.json',
    //   fullPath: false,
    //   path: './dist',
    //   metadata: {
    //     version: (new Date()).getTime()
    //   }
    // }),
    // new DynamicCdnWebpackPlugin(),
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)@angular/,
      path.resolve(__dirname, './app}'),
      {} // a map of your routes
    ),
  ]
}