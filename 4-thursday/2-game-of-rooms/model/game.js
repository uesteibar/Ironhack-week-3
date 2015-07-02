var Room = require('./room');
var User = require('./user')

var Game = function(inputProvider) {
  this.inputProvider = inputProvider;
  this.user = new User('Kev');
  this.rooms = [
    new Room({
    description: 'You are so ugly, go north',
    hint: 'You dumb? GO FUCKING NORTH.',
    exits: {
      N: 1,
      S: -1,
      E: -1,
      W: -1
    },
    actions: {
      'LOOK AROUND': "Nothing but some make up here!",
      'MAKE UP': "You're still ugly, sorry!"
    },
    inventory: ['makeup', 'dildo']
    }),

    new Room({
    description: 'You are still ugly, go back',
    hint: "REALLY? Go back, it's not that hard.",
    exits: {
      N: -1,
      S: 0,
      E: -1,
      W: -1
    },
    actions: {
      'LOOK AROUND': "There's a mirror. Have a look. You are really ugly."
    },
    inventory: ['mirror']
    })
  ];
  this.currentRoomIndex = 0;
};

Game.prototype.turn = function() {
  this.rooms[this.currentRoomIndex].print();
  this.inputProvider.askForInput(function(input) {
    var nextDirection = this.rooms[this.currentRoomIndex].checkInput(input, this.user);
    if (nextDirection && nextDirection >= 0) {
      this.currentRoomIndex = nextDirection;
    }
    this.turn();
  }.bind(this));
};

Game.prototype.start = function () {
  this.turn();
};

module.exports = Game;
