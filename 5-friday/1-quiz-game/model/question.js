'use strict';

var Question = function(id, description, answer, pointValue) {
  this.id = id;
  this.description = description;
  this.answer = answer;
  this.pointValue = pointValue;
};

Question.prototype.print = function () {
  console.log(this.description);
};

Question.prototype.isAnswerCorrect = function (input) {
  return (this.answer.toLowerCase() === input.toLowerCase());
};

module.exports = Question;
