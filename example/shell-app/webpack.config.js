const path = require('path');
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
      },
      {
        test: /\.js?$/,
        use: [{
          loader: path.resolve('./expose.js'),
          options:{
            modules: [/@angular/, /@uirouter\/angular/],
            namespace: 'container-app'
          }
        }]
      }
      ]
  },
  // externals: [
  //   webpackAngularExternals(),
  //   function (context, request, callback) {
  //     if (request.startsWith('@uiRouter/')) {
  //       return callback(null, {
  //         root: ['ng', camelCase(request.replace(/^@uiRouter\//, ''))],
  //         commonjs: request,
  //         commonjs2: request,
  //         amd: request
  //       });
  //     }
  //     callback();
  //   }
  // ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.html', '.css'],
    modules: ['node_modules', 'app'],
    mainFields: ["browser", "module", "main"],
    //  unsafeCache: true
  },
  devServer: {
    historyApiFallback: true
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
    chunkFilename: '[name].bundle.js'
    //   libraryTarget: "var",
    // name of the global var: "Foo"
    // library: "ng2",
    // libraryExport: '@angualr/core',
    // libraryTarget: 'window'
    // library: 'App2Module',
    //jsonpFunction: `webpackJsonp${Date.now()}`,  //!! to avoid webpackJsonp conflict with reference webpack
    // libraryTarget: 'umd'  //output  cmd
  },
  externals: [
    // function (context, request, callback) {
    //   if (request.startsWith('@angular/')) {
    //     return callback(null, {
    //       root: ['ng1', camelCase(request.replace(/^@angular\//, ''))],
    //       commonjs: request,
    //       commonjs2: request,
    //       amd: request
    //     });
    //   }
    //   callback();
    // },
    // function (context, request, callback) {
    //   if (request.startsWith('@uirouter/')) {
    //     return callback(null, {
    //       root: ['ui', camelCase(request.replace(/^@uirouter\//, ''))],
    //       commonjs: request,
    //       commonjs2: request,
    //       amd: request
    //     });
    //   }
    //   callback();
    // }
  ],
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html'
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   names: ['vendor', 'manifest']
    // }),
    // new AssetsPlugin({
    //   filename: 'assets.json',
    //   fullPath: false,
    //   path: './dist',
    //   metadata: {
    //     version: (new Date()).getTime()
    //   }
    // }),
    // new DynamicCdnWebpackPlugin(),
    // new webpack.ContextReplacementPlugin(
    //   // The (\\|\/) piece accounts for path separators in *nix and Windows
    //   /angular(\\|\/)core(\\|\/)@angular/,
    //   path.resolve(__dirname, './app}'),
    //   {} // a map of your routes
    // ),
  ]
}