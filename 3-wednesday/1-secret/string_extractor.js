
var extractor = {
  even_words: function(sentence, reversed) {
    var words = [];
    sentence.split(" ").forEach(function (word, index) {
      if ((index + 1) % 2 === 0) {
        words.push(word)
      }
    });
    if (reversed) {
      words.reverse();
    }
    return words;
  },

  odd_words: function(sentence, reversed) {
    var words = [];
    sentence.split(" ").forEach(function (word, index) {
      if ((index + 1) % 2 !== 0) {
        words.push(word)
      }
    });
    if (reversed) {
      words.reverse();
    }
    return words;
  },

  all_words: function(sentence, reversed) {
    var words = sentence.split(" ");
    if (reversed) {
      words.reverse();
    }
    return words;
  }
};

module.exports = extractor;
