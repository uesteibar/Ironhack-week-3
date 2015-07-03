'use strict';

var FileRankingLoader = require('./file-ranking-loader');

var fs = require('fs');

var FileRankingSaver = function() {};

FileRankingSaver.prototype.add = function(username, points) {
  (new FileRankingLoader()).load(function(users) {
    var userIndex = -1;
    users.forEach(function(user, index) {
      if (user.username === username) {
        userIndex = index;
      }
    });

    if (userIndex > -1) {
      users[userIndex].points = points;
    } else {
      users.push({
        username: username,
        points: points
      });
    }
    this.save(users);
  }.bind(this));
};

FileRankingSaver.prototype.save = function(users) {
  fs.writeFile('memory/ranking/ranking.json', JSON.stringify(users), function(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log('users saved!');
    }
  });
};

module.exports = FileRankingSaver;
