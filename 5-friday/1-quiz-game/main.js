'use strict';

var PromptInputProvider = require('./input/prompt-input-provider');
var Question = require('./model/question');
var Quiz = require('./model/quiz');
var Login = require('./handler/login');
var FileUserLoader = require('./memory/file-user-loader');
var FileUserSaver = require('./memory/file-user-saver');

var login = new Login(new PromptInputProvider(), new FileUserLoader);

login.initSesion(function(user) {
  var questions = [
    new Question('Is this the real world?', 'yes', 5),
    new Question('Are you sure?', 'no', 8)
  ];

  var quiz = new Quiz(questions,
    user,
    new PromptInputProvider(),
    new FileUserSaver()
  );
  quiz.play();
});
