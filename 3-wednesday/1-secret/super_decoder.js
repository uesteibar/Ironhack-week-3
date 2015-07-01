
var decoder = require('./decoder');
var stringExtractor = require('./string_extractor');

module.exports = function superDecoder(sentences) {
  sentences.forEach(function(sentence) {
    for (var func in stringExtractor) {
      [true, false].forEach(function (reversed) {
        console.log(decoder(stringExtractor[func](sentence, reversed)));
      });
    }
  });
};
