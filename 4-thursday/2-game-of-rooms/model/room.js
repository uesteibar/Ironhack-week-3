
var Room = function(roomConfig) {
  this.description = roomConfig.description;
  this.hint = roomConfig.hint;
  this.exits = roomConfig.exits;
  this.actions = roomConfig.actions;
};

Room.prototype.checkInput = function(input) {
  var nextDirection = this.checkDirection(input);
  if (nextDirection) {
    return this.direction(nextDirection);
  }

  var action = this.checkAction(input);
  if (action) {
    console.log(action);
    return null;
  }

  console.log("I don't understand...");
  console.log('Hint: ', this.hint);
  return null;
};

Room.prototype.checkDirection = function(input) {
  return this.exits[input.toUpperCase()];
};

Room.prototype.checkAction = function (input) {
  return this.actions[input.toUpperCase()];
};

Room.prototype.direction = function(nextDirection) {
  if (nextDirection > -1) {
    console.log('You are moving...');
    return nextDirection;
  } else {
    console.log('No way bro.');
    return null;
  }
};

Room.prototype.print = function() {
  console.log('\n::::::::::::::::::::::::::');
  console.log(this.description);
};

module.exports = Room;
