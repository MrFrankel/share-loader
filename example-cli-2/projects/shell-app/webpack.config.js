module.exports = {
  module: {
    rules: [
      {
        test: /\.js?$/,
        use:
          [{
            loader: "share-loader",
            options: {
              modules: [/@angular/, /@company/],
              exclude: [/@angular-devkit/],
              namespace: "shellapp"
            }
          }]
      }]
  }
};
