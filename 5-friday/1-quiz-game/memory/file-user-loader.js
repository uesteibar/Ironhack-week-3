'use strict';

var fs = require('fs');
var User = require('../model/user');

var FileUserLoader = function() {};

FileUserLoader.prototype.load = function(username, callback) {
  var filepath = 'memory/saved-games/' + username + '.json';
  fs.readFile(filepath, function(err, content) {
    if (err) {
      console.log(err);
    } else {
      var user_parsed = JSON.parse(content);
      var user = new User(user_parsed.username);
      user.totalPoints = user_parsed.totalPoints;
      user.currentQuestionIndex = user_parsed.currentQuestionIndex;
      callback(user);
    }
  });
};

module.exports = FileUserLoader;
