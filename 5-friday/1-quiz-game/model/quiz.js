'use strict';

var Quiz = function(questions, user, inputProvider, userSaver, rankingLoader, rankingPrinter) {
  this.questions = questions;
  this.user = user;
  if (this.user.currentQuestionIndex >= this.questions.length - 1) {
    this.user.currentQuestionIndex = 0;
  }
  this.inputProvider = inputProvider;
  this.userSaver = userSaver;
  this.rankingLoader = rankingLoader;
  this.rankingPrinter = rankingPrinter;
  this.makeRandomQuestionBonus();
};

Quiz.prototype.play = function() {
  this.turn();
};

Quiz.prototype.turn = function() {
  this.printTurnInfo();
  this.inputProvider.input(function(input) {
    if (input.toLowerCase() === 'save') {
      this.userSaver.save(this.user);
      this.turn();
    } else if (input.toLowerCase() === 'ranking') {
      this.rankingLoader.load(function(ranking) {
        this.rankingPrinter.print(ranking);
        this.turn();
      }.bind(this));
    } else if (this.questions[this.user.currentQuestionIndex].isAnswerCorrect(input)) {
      this.addPoints();
      console.log('Correct!');
      if (this.isFinished()) {
        this.userSaver.save(this.user);
        this.printFinish();
      } else {
        this.user.currentQuestionIndex++;
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
  console.log('Total points: ' + this.user.totalPoints);
  this.questions[this.user.currentQuestionIndex].print();
};

Quiz.prototype.printFinish = function() {
  console.log("\nYOU FINISHED THE QUIZ!");
  console.log('Total points: ' + this.user.totalPoints);
};

Quiz.prototype.isFinished = function() {
  return (this.user.currentQuestionIndex >= this.questions.length - 1);
};

Quiz.prototype.substractPoints = function() {
  this.user.totalPoints -= this.questions[this.user.currentQuestionIndex].pointValue;
};

Quiz.prototype.addPoints = function() {
  this.user.totalPoints += this.questions[this.user.currentQuestionIndex].pointValue;
};

Quiz.prototype.makeRandomQuestionBonus = function () {
  var randomIndex = Math.floor(Math.random() * (this.questions.length));
  this.questions[randomIndex].pointValue *= 2;
};

module.exports = Quiz;
