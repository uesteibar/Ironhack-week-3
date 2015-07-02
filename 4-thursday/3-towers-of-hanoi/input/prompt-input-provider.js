'use strict';

var read = require('read');

var PromptInputProvider = function() {};

PromptInputProvider.prototype.input = function(callback) {
  read('prompt', function(err, input) {
    if (err) {
      console.log('Error!', err);
    } else {
      input = input.split(' ')
      input[0] = parseInt(input[0]) - 1;
      input[1] = parseInt(input[1]) - 1;
      callback(input);
    }
  });
};

module.exports = PromptInputProvider;
