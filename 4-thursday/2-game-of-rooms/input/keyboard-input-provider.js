
var read = require('read');

var KeyboardInputProvider = function () {
  this.promptDecoration = '> ';
};

KeyboardInputProvider.prototype.askForInput = function (callback) {
  console.log(this.promptDecoration);
  read('prompt', function (err, input, isDefault) {
    if (err) {
      console.log('Error!', err);
    } else {
      callback(input);
    }
  });
};

module.exports = KeyboardInputProvider;
