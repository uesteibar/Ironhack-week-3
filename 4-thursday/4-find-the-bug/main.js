'use strict';

function orderedVowelWords(sentence) {
  var words = sentence.split(" ");
  var orderedWords = [];

  words.forEach(function (word) {
    var characters = word.split("");
    var isOrderedWord = areOrderedVowels(characters);

    if (isOrderedWord) {
      orderedWords.push(word);
    }
  })

  return orderedWords.join(" ");
}

function areOrderedVowels (characters) {
  var vowels = ["a", "e", "i", "o", "u"];
  var orderedWord = true;
  var vowelsIndexes = [];

  var onlyVowels = characters.filter(function (char) {
    return vowels.indexOf(char) !== -1;
  });

  for (var i = 0; i < onlyVowels.length; i++) {
    if (vowelsIndexes.length === 0) {
      vowelsIndexes.push(vowels.indexOf(onlyVowels[i]));
    } else {
      if (vowelsIndexes[vowelsIndexes.length - 1] > vowels.indexOf(onlyVowels[i])) {
        orderedWord = false;
        i = onlyVowels.length;
      } else {
        vowelsIndexes.push(vowels.indexOf(onlyVowels[i]));
      }
    }
  }

  return orderedWord;
}

console.log(orderedVowelWords("Hello this is an undisclosed unweird test anenona"));
