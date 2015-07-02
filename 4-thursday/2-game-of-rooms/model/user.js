'user strict';

var User = function (username) {
  this.username = username;
  this.inventory = [];
};

User.prototype.pickUp = function(object) {
  var index = this.inventory.indexOf(object);

  if (index === -1) {
    this.inventory.push(object);
  } 
};

User.prototype.drop = function(object) {
  var index = this.inventory.indexOf(object);

  if (index !== -1) {
    console.log("you dropped " + object);
    this.inventory.splice(index, 1);
  } 
};

module.exports = User;
