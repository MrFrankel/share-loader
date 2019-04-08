/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Maor Frankel
*/

var path = require('path');

function accesorString(value) {
  const childProperties = value.split(".");
  const length = childProperties.length;
  let propertyString = "global";
  let result = "";

  for (let i = 0; i < length; i++) {
    if (i > 0)
      result += "if(!" + propertyString + ") " + propertyString + " = {};\n";
    propertyString += "[" + JSON.stringify(childProperties[i]) + "]";
  }

  result += "module.exports = " + propertyString;
  return result;
}

function propertyString(value) {
  const childProperties = value.split(".");
  const length = childProperties.length;
  let propertyString = "global";

  for (let i = 0; i < length; i++) {
    propertyString += "[" + JSON.stringify(childProperties[i]) + "]";
  }

  return propertyString;
}

module.exports = function (input) {
  return input;
};

module.exports.pitch = function (remainingRequest) {
  // Change the request from an /abolute/path.js to a relative ./path.js
  // This prevents [chunkhash] values from changing when running webpack
  // builds in different directories.
  // this.loadModule('@angular/core', (a,b,c,d) =>{debugger;});
  if (this.query.modules && this.query.modules.length
    && this.query.modules
      .every(mdl => !this._module.rawRequest.match(new RegExp(mdl))))  {
    return;
  }

  let newRequestPath = remainingRequest.replace(
    this.resourcePath,
    '.' + path.sep + path.relative(this.context, this.resourcePath)
  );

  this.cacheable && this.cacheable();
  if (!this.query || !this.query.namespace || !this.query.modules) throw new Error("query parameter is missing");
  // Determine how to resolve the global object

  let globalVar;
  let request = this._module.rawRequest.split('!');

  if (this._module.userRequest.includes('/node_modules/')) {
    request = request[request.length - 1].replace(/^@/i, '').replace(/\//g, '.');
    globalVar = `${this.query.namespace.replace(/^\?/i, '')}.${request}`;
  } else { //Use modules from parent app
    request = request[request.length - 1].replace(/^./i, '').replace(/\//g, '.');
    globalVar = `${this.query.namespace}${request}`;
  }

  this._module.userRequest = this._module.userRequest + '-shared';

  const result = accesorString(globalVar) + " = " +
    "Object.assign(" + propertyString(globalVar) + " || {}, require(" + JSON.stringify("-!" + newRequestPath) + "));";
  return result;
};

module.exports.Externals = function(options) {
  return function(context, request, callback) {
    if (options.modules.every(mdl => !request.match(new RegExp(mdl)))) {
      return callback();
    }
    if (
      options.exclude &&
      options.exclude.some(mdl => request.match(new RegExp(mdl)))
    ) {
      return callback();
    }

    let newRequest = request.split('!');
    newRequest = newRequest[newRequest.length - 1]
      .replace(/^[./@]/i, '')
      .split('/');

    if (newRequest[0].startsWith('.') || newRequest[0] === '') {
      //This case is for sharing objects from the parent application
      const resourceArr = newRequest
        .filter( resource =>!(resource === '.' || resource === '..') /* remove folder traversing */)
        .map( resource => resource.split('.'));

      const resources = resourceArr.concat.apply([], resourceArr)
        .filter(r => r !== '' /*filter empty values*/ );

      const commonJs = request.split('/')
        .map(path => path.replace('..', ''))
        .filter(path => path !== '')
        .join('/');/* remove folder traversing */

      return callback(null, {
        root: [options.namespace].concat(resources),
        commonjs: '.' + commonJs,
        commonjs2: '.' + commonJs,
        amd: '.' + commonJs
      });

    } else {
      return callback(null, {
        root: [options.namespace].concat(newRequest),
        commonjs: request,
        commonjs2: request,
        amd: request
      });
    }
  };
};