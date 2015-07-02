'use strict';

var read = require('read');

var HanoiGame = function() {
  this.stacks = [[], [], []];
  [1,5,3,4,2].forEach(function (disc) {
    var stackIndex = Math.floor((Math.random() * 3));
    this.stacks[stackIndex].push(disc);
  }.bind(this));
};

HanoiGame.prototype.isWon = function() {
  var stacksWithDiscs = this.stacks.filter(function(stack) {
    return (stack.length > 0);
  });
  if (stacksWithDiscs.length === 1) {
    return true;
  } else {
    return false;
  }
};

HanoiGame.prototype.isValidMove = function (startStackIndex, endStackIndex) {
  if (this.stacks[startStackIndex][this.stacks[startStackIndex].length - 1] < this.stacks[endStackIndex][this.stacks[endStackIndex].length - 1] ||
  this.stacks[endStackIndex].length === 0) {
    return true;
  } else {
    return false;
  }
};

HanoiGame.prototype.move = function (startStackIndex, endStackIndex) {
  if (this.isValidMove(startStackIndex, endStackIndex)) {
    this.stacks[endStackIndex].push(this.stacks[startStackIndex][this.stacks[startStackIndex].length - 1]);
    this.stacks[startStackIndex].pop();
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
  console.log("Type from which stack you want to move it and in which stack you want to put it (example: 1 2)");
  read('prompt', function (err, input) {
    if (err) {
      console.log('Error!', err);
    } else {
      callback(input);
    }
  });
};

HanoiGame.prototype.run = function () {
  this.print();
  this.promptMove(function (input) {
    var splittedInput = input.split(' ');
    var startStackIndex = parseInt(splittedInput[0]) - 1;
    var endStackIndex = parseInt(splittedInput[1]) - 1;

    if (this.move(startStackIndex, endStackIndex)) {
      if (this.isWon()){
        console.log('YOU WON!');
      } else {
        this.run();
      }
    } else {
      console.log('You can not move like that.');
      this.run();
    }
  }.bind(this));
};

module.exports = HanoiGame;
