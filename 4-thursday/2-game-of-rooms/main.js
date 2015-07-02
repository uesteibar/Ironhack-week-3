
var Game = require('./model/game');
var KeyboardInputProvider = require('./input/keyboard-input-provider');
var GameLoader = require('./memory/game-loader');

var gameLoader = new GameLoader();
gameLoader.load(function (gameLoaded) {
  var game = new Game(new KeyboardInputProvider(), gameLoaded.user, gameLoaded.rooms);
  game.start();
});
