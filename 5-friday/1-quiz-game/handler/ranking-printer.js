'use strict';

var RankingPrinter = function() {};

RankingPrinter.prototype.print = function (users) {
  users.sort(function(a, b) {
    return a.points - b.points;
  });

  var output = '\n\n::::: Ranking :::::';
  users.forEach(function(user) {
    output += '\n' + user.username + ' ----> ' + user.points;
  });
  console.log(output);
};

module.exports = RankingPrinter;
