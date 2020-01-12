const LastCallWebpackPlugin = require("last-call-webpack-plugin");
const { Externals } = require("share-loader");

module.exports = {
  output: {
    library: "extapp",
    libraryTarget: "umd"
  },
  externals: [
    Externals({
      namespace: "shellapp",
      modules: [/@angular/, /@company/],
      exclude: [/ngfactory/]
    })
  ],
  optimization: {
    runtimeChunk: false
  },
  plugins: [
    new LastCallWebpackPlugin({
      assetProcessors: [
        {
          regExp: /main.js$/,
          phase: "compilation.optimize-chunk-assets",
          processor: (assetName, asset) => {
            return Promise.resolve(
              asset
                .source()
                .replace(
                  "var AppModuleNgFactory",
                  `window.extapp = window.extapp || {};\nvar AppModuleNgFactory = window.extapp.AppModule`
                )
            );
          }
        }
      ],
      canPrint: true
    })
  ]
};
