
var episodeFormatter = {
  format: function (episode) {
    var result = '';
    result += '\nTitle: ' + episode.title + '\tEpisode #: ' + episode.episode_number;
    result += '\n' + episode.description;
    result += '\nRating: ' + episode.rating + ' -> ';

    for (var i = 1; i < Math.round(parseFloat(episode.rating)); i++) {
      result += '*';
    }

    return result;
  }
};

module.exports = episodeFormatter;
