
var GameSaver = require('../memory/game-saver');

var Game = function(inputProvider, user, rooms) {
  this.inputProvider = inputProvider;
  this.user = user;
  this.rooms = rooms;
  this.currentRoomIndex = 0;
};

Game.prototype.turn = function() {
  this.rooms[this.currentRoomIndex].print();
  this.user.printInventory();
  this.inputProvider.askForInput(function(input) {
      if (input.toLowerCase() === 'save game') {
        var gameSaver = new GameSaver(this);
        gameSaver.save();
      } else {
      var nextDirection = this.rooms[this.currentRoomIndex].checkInput(input, this.user);
      if (nextDirection && nextDirection >= 0) {
        this.currentRoomIndex = nextDirection;
      }
      this.turn();
    }
  }.bind(this));
};

Game.prototype.start = function() {
  this.turn();
};

module.exports = Game;
