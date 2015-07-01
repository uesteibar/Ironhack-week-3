
var episodeParser = require('./episode-parser');
var episodeFormatter = require('./episode-formatter');

episodeParser('./episodes.json', function(err, episodes){
  episodes.sort(function (a, b) {
    return parseInt(a.episode_number) - parseInt(b.episode_number);
  }).forEach(function (episode) {
    console.log(episodeFormatter.format(episode));
  });
});
