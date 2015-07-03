'use strict';

var Question = function(description, answer, pointValue) {
  this.description = description;
  this.answer = answer;
  this.pointValue = pointValue;
};

Question.prototype.print = function () {
  console.log('\n\n' + this.description);
};

Question.prototype.isAnswerCorrect = function (input) {
  return (this.answer.toLowerCase() === input.toLowerCase());
};

module.exports = Question;
