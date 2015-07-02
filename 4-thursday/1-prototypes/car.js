'use strict';

var Car = function (model, noise) {
  this.model = model;
  this.noise = noise;
  this.numberOfWheels = 4;
};

Car.prototype.makeNoise = function () {
  console.log(this.noise);
};

module.exports = Car;
