'use strict';

var Question = function(description, answer, id) {
  this.description = description;
  this.answer = answer;
  this.id = id;
};

Question.prototype.print = function () {
  console.log('\n::::::::::::::::::');
  console.log(this.description);
};

Question.prototype.isAnswerCorrect = function (input) {
  return (this.answer.toLowerCase() === input.toLowerCase());
};

module.exports = Question;
