'use strict';

var User = require('../model/user');

var Login = function(inputProvider, userLoader) {
  this.inputProvider = inputProvider;
  this.userLoader = userLoader;
};

Login.prototype.initSesion = function(callback) {
  console.log('New user? (yes/no)');
  this.inputProvider.input(function(input) {
    if (input.toLowerCase() === 'yes') {
      this.register(callback);
    } else {
      this.login(callback);
    }
  }.bind(this));
};

Login.prototype.register = function(callback) {
  console.log("\nOk, let's register you!");
  this.inputProvider.input(function(username) {
    callback(new User(username));
  });
};

Login.prototype.login = function(callback) {
  console.log('\nUsername:');
  this.inputProvider.input(function(input) {
    this.userLoader.load(input, callback);
  }.bind(this));
};

module.exports = Login;
