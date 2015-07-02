var Room = function(description, hint, exits) {
  this.description = description;
  this.hint = hint;
  this.exits = exits;
};

Room.prototype.checkInput = function(input) {
  var nextDirection = this.checkDirection(input);
  if (nextDirection >== 0) {
    return this.direction(nextDirection);
  }
  console.log(this.hint);
  return null;
};

Room.prototype.checkDirection = function(input) {
  return this.exits[input.toUpperCase()];
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
