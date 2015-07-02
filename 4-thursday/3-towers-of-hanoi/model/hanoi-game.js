'use strict';

var read = require('read');

var HanoiGame = function() {
  this.stacks = [];
  [1,5,3,4,2].forEach(function (argument) {
    // body...
  })
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
    this.stacks[endStackIndex].push = this.stacks[startStackIndex][this.stacks[startStackIndex].lenght - 1];
    this.stacks.slice(startStackIndex, 1);
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
  })
};

HanoiGame.prototype.run = function () {
  this.promptMove(function (input) {
    var splittedInput = input.split(' ');
    var startStackIndex = parseInt(splittedInput[0]);
    var endStackIndex = parseInt(splittedInput[1]);

    if this.move(startStackIndex, endStackIndex) {
      if (this.isWon()){
        console.log('YOU WON!');
      } else {
        this.run();
      }
    } else {
      console.log('You can not move like that.');
      this.run();
    }
  })
};
