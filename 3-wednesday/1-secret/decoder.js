'use strict'

module.exports = function(words) {
  var index = 0;
  var msg = "";

  words.forEach(function(word) {
    msg += word.charAt(index % 5);
    index = (index + 1) % 5;
  });

  return msg;
};
