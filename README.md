[![npm](https://img.shields.io/npm/v/ngx-popper.svg?style=flat-square)](https://www.npmjs.com/package/share-loader)
[![npm](https://img.shields.io/npm/dm/ngx-popper.svg?style=flat-square)](https://www.npmjs.com/package/share-loader)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/MrFrankel/share-loader/blob/master/LICENSE)

<div align="center">
  <!-- replace with accurate logo e.g from https://worldvectorlogo.com/ -->
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" vspace="" hspace="25"
      src="https://cdn.rawgit.com/webpack/media/e7485eb2/logo/icon.svg">
  </a>
  <h1>Share Loader</h1>
  <p>The share loader allows you to share modules between webpack builds via a global namespace<p>
</div>

<h2 align="center">Install</h2>

```bash
npm i share-loader --save-dev
```
Or
```bash
yarn add share-loader --save-dev
```
<h2 align="center"><a href="https://webpack.js.org/concepts/loaders">Usage</a></h2>

webpack config of exposing app
```js
module: {
  rules: [{
          test: /\.js?$/,
          use: [{
            loader: 'share-loader',
            options: {
              modules: [/@angular/, /@uirouter\/angular/],
              namespace: 'some-name-space'
            }
          }]
        }]
}
```


webpack config of consumer apps

```js
externals: [
  Externals({
    namespace: 'some-name-space',
    modules: [/@angular/, /@uirouter\/angular/]
  })
],
output: {
  library: 'some-name-space',
  libraryTarget: 'umd'
}
```
