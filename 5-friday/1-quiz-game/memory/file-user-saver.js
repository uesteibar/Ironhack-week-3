'use strict';

var fs = require('fs');

var FileUserSaver = function() {};

FileUserSaver.prototype.save = function(user) {
  fs.writeFile('memory/saved-games/' + user.username + '.json', JSON.stringify(user), function(err, data) {
    if (err) {
      console.log('Error!', err);
    } else {
      console.log('User saved!');
    }
  });
};

module.exports = FileUserSaver;
