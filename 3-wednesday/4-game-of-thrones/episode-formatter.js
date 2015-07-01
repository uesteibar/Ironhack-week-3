
var episodeFormatter = {
  format: function (episode) {
    var result = '';
    result += '\nTitle: ' + episode.title + '\tEpisode #: ' + episode.episode_number;
    result += '\n' + episode.description;
    result += '\nRating: ' + episode.rating;
    return result;
  }
};

module.exports = episodeFormatter;
