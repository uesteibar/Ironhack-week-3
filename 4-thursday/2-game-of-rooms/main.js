
var Game = require('./model/game');
var KeyboardInputProvider = require('./input/keyboard-input-provider');

var game = new Game(new KeyboardInputProvider());
game.start();
