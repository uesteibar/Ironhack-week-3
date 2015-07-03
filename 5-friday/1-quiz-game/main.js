
var IdGenerator = require('./generator/id-generator');
var PromptInputProvider = require('./input/prompt-input-provider');
var Question = require('./model/question');
var Quiz = require('./model/quiz');

var idGenerator = new IdGenerator();

var questions = [
  new Question('Is this the real world?', 'yes', idGenerator.generateId()),
  new Question('Are you sure?', 'no', idGenerator.generateId())
];

var quiz = new Quiz(questions, new PromptInputProvider());

quiz.play();
