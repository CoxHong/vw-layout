'use strict';

var fs = require('fs');
var postcss = require('postcss');
var pxToViewport = require('..');
var css = fs.readFileSync('px-to-viewport-main.css', 'utf8');
var options = {
    replace: false
};
var processedCss = postcss(pxToViewport(options)).process(css).css;

fs.writeFile('px-to-viewport-test.css', processedCss, function (err) {
  if (err) {
    throw err;
  }
  console.log('File with viewport units written.');
});