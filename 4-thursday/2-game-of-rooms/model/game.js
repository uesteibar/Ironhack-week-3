var Room = require('./room');

var Game = function(inputProvider) {
  this.inputProvider = inputProvider;
  this.rooms = [
    new Room('You are so ugly, go north', 'You dumb? GO FUCKING NORTH.', {
      N: 1,
      S: -1,
      E: -1,
      W: -1
    }),
    new Room('You are still ugly, go back', "REALLY? Go back, it's not that hard.", {
      N: -1,
      S: 0,
      E: -1,
      W: -1
    })
  ];
  this.currentRoomIndex = 0;
};

Game.prototype.turn = function() {
  this.rooms[this.currentRoomIndex].print();
  this.inputProvider.askForInput(function(input) {
    var nextDirection = this.rooms[this.currentRoomIndex].checkInput(input);
    if (nextDirection >== 0) {
      console.log(nextDirection);
      this.currentRoomIndex = nextDirection;
    }
    this.turn();
  }.bind(this));
};

Game.prototype.start = function () {
  this.turn();
};

module.exports = Game;
