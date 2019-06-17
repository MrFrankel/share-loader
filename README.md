[![npm](https://img.shields.io/npm/v/share-loader.svg?style=flat-square)](https://www.npmjs.com/package/share-loader)
[![npm](https://img.shields.io/npm/dm/share-loader.svg?style=flat-square)](https://www.npmjs.com/package/share-loader)
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
              exclude: [/@angular\/material/],
              namespace: 'some-name-space'
            }
          }]
        }]
}
```


webpack config of consumer apps

```js
const {Externals} = require('./share-loader');

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


Example

1. In the root folder, run npm bootstrap
2. Run npm run build:prod in the ext-app-1 root
3. Host the ext1.js file from ext-app-1 project in some localhost server
4. Change the <%path-to-server-host%> in the shell project app.state.ts
5. Run npm run serve:dev in the shell project root



Example-cli
1. In the root folder, run npm bootstrap
2. In "shell app" folder run npm run start:prod
3. In the "ext-app1" folder run npm run start:ext:prod
4. For AOT run npm serve --prod in "shell-app" and npm run serve:ext:prod in "ext-app1"
5. You can also run ext-app1 in standalone mode with ng serve
```