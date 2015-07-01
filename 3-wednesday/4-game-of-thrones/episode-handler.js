var episodeParser = require('./episode-parser');
var episodeFormatter = require('./episode-formatter');

var handler = {
  print: function () {
    episodeParser('./episodes.json', function(err, episodes){
      episodes.sort(function (a, b) {
        return parseInt(a.episode_number) - parseInt(b.episode_number);
      }).forEach(function (episode) {
        console.log(episodeFormatter.format(episode));
      });
    });
  },

  print_sorted: function () {
    episodeParser('./episodes.json', function(err, episodes){
      episodes.forEach(function (episode) {
        console.log(episodeFormatter.format(episode));
      });
    });
  },

  print_top: function () {
      episodeParser('./episodes.json', function(err, episodes){
        episodes.filter(function (episode) {
          if (episode.rating > 8.5) {
            return true;
          } else {
            return false;
          }
        }).sort(function (a, b) {
          return parseInt(a.episode_number) - parseInt(b.episode_number);
        }).forEach(function (episode) {
          console.log(episodeFormatter.format(episode));
        });
      });
  }
};

module.exports = handler;
