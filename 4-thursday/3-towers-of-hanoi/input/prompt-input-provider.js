
var read = require('read');

var PromptInputProvider = function () {};

PromptInputProvider.prototype.input = function (callback) {
  read('prompt', function(err, input) {
    if (err) {
      console.log('Error!', err);
    } else {
      callback(input);
    }
  });
};

module.exports = PromptInputProvider;
