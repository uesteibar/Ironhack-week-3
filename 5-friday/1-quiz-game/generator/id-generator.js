'use strict';

var IdGenerator = function() {
  this.usedIds = [];
};

IdGenerator.prototype.generateId = function() {
  var id = this.getRandomNum(10);
  while (this.isUsed(id)) {
    var id = this.getRandomNum(10);
  }
  this.usedIds.push(id);
  return id;
};

IdGenerator.prototype.isUsed = function(id) {
  if (this.usedIds.indexOf(id) === -1) {
    return false;
  }
  return true;
};

IdGenerator.prototype.getRandomNum = function(limit) {
  return Math.floor(Math.random() * (limit + 1));
};

module.exports = IdGenerator;
