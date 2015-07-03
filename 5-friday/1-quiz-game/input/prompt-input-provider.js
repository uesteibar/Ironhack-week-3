var read = require('read');

var PromptInputProvider = function() {};

PromptInputProvider.prototype.input = function (callback) {
  read('prompt', function (err, res, isDefault) {
    if (err) {
      console.log('Error!', err);
    } else {
      callback(res);
    }
  });
};

module.exports = PromptInputProvider;
