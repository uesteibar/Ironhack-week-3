
var episodeParser = require('./episode-parser');
var episodeFormatter = require('./episode-formatter');

episodeParser('./episodes.json', function(err, episodes){
  episodes.forEach(function (episode) {
    console.log(episodeFormatter.format(episode));
  });
});
