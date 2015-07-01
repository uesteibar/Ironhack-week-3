var episodeParser = require('./episode-parser');

var sender = function(callback) {
  episodeParser('./episodes.json', callback);
};

module.exports = sender;
