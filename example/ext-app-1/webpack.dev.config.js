const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'vendor': './app/vendor.ts',
    'app': './app/main.ts'
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
    modules: ['node_modules', 'app']
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
    chunkFilename: '[name].bundle.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html'
    }),
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)@angular/,
      path.resolve(__dirname, './app}'),
      {} // a map of your routes
    ),
  ]
};