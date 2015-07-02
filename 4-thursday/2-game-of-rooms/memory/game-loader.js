
var User = require('../model/user');
var Room = require('../model/room');

var fs = require('fs');

var GameLoader = function () {};

GameLoader.prototype.load = function (callback) {
  function parseFile(err, content) {
    if (err) {
      console.log('I fucked it up', err);
    } else {
      gameLoaded = JSON.parse(content);

      var user = new User(gameLoaded.user.username);
      user.inventory = gameLoaded.user.inventory;
      gameLoaded.user = user;

      var rooms = [];
      gameLoaded.rooms.forEach(function (room) {
        rooms.push(new Room({
          description: room.description,
          hint: room.hint,
          exits: room.exits,
          actions: room.actions,
          inventory: room.inventory
        }));
      });

      gameLoaded.rooms = rooms;

      callback(gameLoaded);
    }
  }

  fs.readFile('memory/saved-game.json', 'utf8', parseFile)
};

module.exports = GameLoader;
