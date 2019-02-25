const path = require('path');
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
      },
      {
        test: /\.js?$/,
        use: [{
          loader: 'share-loader',
          options:{
            modules: [/@angular/, /@uirouter\/angular/],
            namespace: 'container-app'
          }
        }]
      }
      ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.html', '.css'],
    modules: ['node_modules', 'app'],
    mainFields: ["browser", "module", "main"]
  },
  devServer: {
    historyApiFallback: true
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
    chunkFilename: '[name].bundle.js'

  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html'
    })
    ]
};