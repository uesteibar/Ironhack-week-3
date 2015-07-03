'use strict';

var fs = require('fs');

var FileRankingLoader = function() {};

FileRankingLoader.prototype.load = function (callback) {
  fs.readFile('memory/ranking/ranking.json', function(err, data) {
    if (err) {
      console.log(err);
    } else {
      callback(JSON.parse(data));
    }
  });
};

module.exports = FileRankingLoader;
