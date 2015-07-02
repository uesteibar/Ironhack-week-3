
var Room = function(roomConfig) {
  this.description = roomConfig.description;
  this.hint = roomConfig.hint;
  this.exits = roomConfig.exits;
  this.actions = roomConfig.actions;
  this.inventory = roomConfig.inventory;
};

Room.prototype.checkInput = function(input, user) {
  var nextDirection = this.checkDirection(input);
  if (nextDirection) {
    return this.direction(nextDirection);
  }

  var action = this.checkAction(input);
  if (action) {
    console.log(action);
    return null;
  }

  if (input.substring(0, 7).toLowerCase() === 'pick up') {
    this.giveObject(user, input.substring(8, input.length));
    return null;
  }

  if (input.substring(0, 4).toLowerCase() === 'drop') {
    user.drop(input.substring(5, input.length));
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

Room.prototype.giveObject = function(user, object) {
  console.log(object);
    if (this.inventory.indexOf(object) > -1){
      user.pickUp(object);
      delete this.inventory[this.inventory.indexOf(object)];
      console.log(this.inventory);
      console.log('You picked up ' + object);
    }
};

Room.prototype.print = function() {
  console.log('\n::::::::::::::::::::::::::');
  console.log(this.description);
  console.log('objects: ', this.inventory.join(', '));
};

module.exports = Room;
