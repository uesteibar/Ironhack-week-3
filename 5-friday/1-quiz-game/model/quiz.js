'use strict';

var Quiz = function(questions, inputProvider) {
  this.questions = questions;
  this.inputProvider = inputProvider;
  this.currentCuestion = 0;
};

Quiz.prototype.play = function() {
  this.turn();
};

Quiz.prototype.turn = function() {
  this.questions[this.currentCuestion].print();
  this.inputProvider.input(function(input) {
    if (this.questions[this.currentCuestion].isAnswerCorrect(input)) {
      console.log('Correct!');
      if (this.currentCuestion < this.questions.length - 1) {
        this.currentCuestion++;
        this.turn();
      } else {
        console.log("\nYOU FINISHED THE QUIZ!");
      }
    } else {
      console.log("WRONG!");
      this.turn();
    }
  }.bind(this));
};

module.exports = Quiz;
