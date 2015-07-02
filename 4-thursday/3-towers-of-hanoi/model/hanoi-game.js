'use strict';

var read = require('read');

var HanoiGame = function(stacks) {
  this.stacks = stacks;
};

HanoiGame.prototype.isWon = function() {
  var stacksWithDiscs = this.stacks.filter(function(stack) {
    return stack.lenght > 0;
  });
  if (stacksWithDiscs === 1) {
    return true;
  } else {
    return false;
  }
};

HanoiGame.prototype.isValidMove = function (startStackIndex, endStackIndex) {
  if (this.stacks[startStackIndex] < this.stacks[startStackIndex]) {
    return true;
  } else {
    return false;
  }
};

HanoiGame.prototype.move = function (startStackIndex, endStackIndex) {
  if (this.isValidMove(startStackIndex, endStackIndex)) {
    // move the things
    return true;
  } else {
    return false;
  }
};

HanoiGame.prototype.print = function () {
  this.stacks.forEach(function (stack) {
    console.log(stack.join(' '));
  });
};

HanoiGame.prototype.promptMove = function (callback) {
  // body...
};
