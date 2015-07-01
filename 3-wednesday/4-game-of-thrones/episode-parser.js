
var fs = require('fs');

var episodeParser = function (file, callback) {
  function parseFile(err, content) {
      episodes = JSON.parse(content);
      callback(err, episodes);
  }

  fs.readFile(file, 'utf8', parseFile)
}

module.exports = episodeParser;
