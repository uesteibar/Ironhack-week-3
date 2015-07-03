'use strict';

var User = function(username) {
  this.username = username;
  this.totalPoints = 0;
  this.currentQuestionIndex = 0;
};

module.exports = User;
