module.exports = {
  module: {
    rules: [
      {
        test: /\.js?$/,
        use:
          [{
            loader: 'share-loader',
            options: {
              modules: [/@angular/],
              exclude: [/@angular-devkit/],
              namespace: 'container-app'
            }
          }]
      }]
  }
};