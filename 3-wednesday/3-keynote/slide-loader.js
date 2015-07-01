'use strict';

var fs = require('fs');

var slideLoader = function (filepath, callback) {
  var splitSlides = function (err, str) {
    if (err) {
      console.log('Error!', err);
      callback(err);
    } else {
      var slides = str.split('\n----\n');
      callback(null, slides);
    }
  };

  fs.readFile(filepath, 'utf8', splitSlides);
};

module.exports = slideLoader;
