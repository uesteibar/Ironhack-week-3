'use strict';

var Quiz = function(questions, inputProvider) {
  this.questions = questions;
  this.inputProvider = inputProvider;
  this.currentCuestionIndex = 0;
  this.totalPoints = 0;
  this.makeRandomQuestionBonus();
};

Quiz.prototype.play = function() {
  this.turn();
};

Quiz.prototype.turn = function() {
  this.printTurnInfo();
  this.inputProvider.input(function(input) {
    if (this.questions[this.currentCuestionIndex].isAnswerCorrect(input)) {
      this.addPoints();
      console.log('Correct!');
      if (this.isFinished()) {
        this.printFinish();
      } else {
        this.currentCuestionIndex++;
        this.turn();
      }
    } else {
      console.log("WRONG!");
      this.substractPoints();
      this.turn();
    }
  }.bind(this));
};

Quiz.prototype.printTurnInfo = function() {
  console.log('Total points: ' + this.totalPoints);
  this.questions[this.currentCuestionIndex].print();
};

Quiz.prototype.printFinish = function() {
  console.log("\nYOU FINISHED THE QUIZ!");
  console.log('Total points: ' + this.totalPoints);
};

Quiz.prototype.isFinished = function() {
  return (this.currentCuestionIndex >= this.questions.length - 1);
};

Quiz.prototype.substractPoints = function() {
  this.totalPoints -= this.questions[this.currentCuestionIndex].pointValue;
};

Quiz.prototype.addPoints = function() {
  this.totalPoints += this.questions[this.currentCuestionIndex].pointValue;
};

Quiz.prototype.makeRandomQuestionBonus = function () {
  console.log((this.questions.length));
  var randomIndex = Math.floor(Math.random() * (this.questions.length));
  console.log(randomIndex);
  this.questions[randomIndex].pointValue *= 2;
};

module.exports = Quiz;
