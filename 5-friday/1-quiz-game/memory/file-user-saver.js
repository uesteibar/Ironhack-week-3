'use strict';

var fs = require('fs');

var FileRankingSaver = require('./file-ranking-saver');

var FileUserSaver = function() {};

FileUserSaver.prototype.save = function(user) {
  (new FileRankingSaver()).add(user.username, user.totalPoints);
  fs.writeFile('memory/saved-games/' + user.username + '.json', JSON.stringify(user), function(err, data) {
    if (err) {
      console.log('Error!', err);
    } else {
      console.log('User saved!');
    }
  });
};

module.exports = FileUserSaver;
