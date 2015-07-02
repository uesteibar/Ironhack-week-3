var fs = require('fs');

var GameSaver = function(game) {
  this.game = game;
};

GameSaver.prototype.save = function () {
  var gameToSave = {
    user: this.game.user,
    rooms: this.game.rooms
  };

  fs.writeFile("memory/saved-game.json", JSON.stringify(gameToSave), function(err) {
    if (err) {
      return console.log(err);
    }

    console.log("The game was saved!");
  });
};

module.exports = GameSaver;
