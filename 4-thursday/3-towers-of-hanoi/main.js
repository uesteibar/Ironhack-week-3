
var HanoiGame = require('./model/hanoi-game');
var PromptInputProvider = require('./input/prompt-input-provider');

var game = new HanoiGame(new PromptInputProvider());
game.run();
