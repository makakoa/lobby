'use strict';

var ReactDOM = require('react-dom'),
    rust = require('rust');

var paths = window.location.pathname.slice(1).split('/');
var target = paths.shift();
var extension = paths.join('/');

ReactDOM.render(
  rust.element(require('main'), {
    target: target,
    extension: extension
  }),
  document.getElementById('app-entry')
);
