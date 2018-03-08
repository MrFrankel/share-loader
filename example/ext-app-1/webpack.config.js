const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {Externals} = require('./expose');

module.exports = {
  entry: {
    'games': './app/games.prod.module.ts'
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: ['ts-loader', 'angular2-template-loader']
      }]
  },
  externals: [
    Externals({
      namespace: 'container-app',
      modules: [/@angular/, /@uirouter\/angular/]
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.pug', '.less'],
    modules: ['node_modules', 'app']
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
    chunkFilename: '[name].bundle.js',
    library: 'extapp',
    libraryTarget: 'umd'
  },
  devServer: {
    historyApiFallback: {
      index: 'dist/index.html'
    }
  },
  plugins: [
    new HtmlWebpackPlugin(),

  ]
}