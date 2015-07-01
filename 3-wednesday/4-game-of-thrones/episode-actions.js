
var episodeFormatter = require('./episode-formatter');

var actions = {
  print: function(err, episodes) {
    episodes.sort(function(a, b) {
      return parseInt(a.episode_number) - parseInt(b.episode_number);
    }).forEach(function(episode) {
      console.log(episodeFormatter.format(episode));
    });
  },

  printSorted: function(err, episodes) {
    episodes.forEach(function(episode) {
      console.log(episodeFormatter.format(episode));
    });
  },

  printTop: function(err, episodes) {
    episodes.filter(function(episode) {
      if (episode.rating > 8.5) {
        return true;
      } else {
        return false;
      }
    }).sort(function(a, b) {
      return parseInt(a.episode_number) - parseInt(b.episode_number);
    }).forEach(function(episode) {
      console.log(episodeFormatter.format(episode));
    });
  },

  findJonSnow: function(err, episodes) {
    episodes.filter(function(episode) {
      if (episode.description.toLowerCase().indexOf("jon snow") > -1) {
        return true;
      } else {
        return false;
      }
    }).sort(function(a, b) {
      return parseInt(a.episode_number) - parseInt(b.episode_number);
    }).forEach(function(episode) {
      console.log(episodeFormatter.format(episode));
    });
  }
};

module.exports = actions;
