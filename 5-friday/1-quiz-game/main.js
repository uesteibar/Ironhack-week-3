
var IdGenerator = require('./generator/id-generator');
var PromptInputProvider = require('./input/prompt-input-provider');
var Question = require('./model/question');
var Quiz = require('./model/quiz');

var idGenerator = new IdGenerator();

var questions = [
  new Question(idGenerator.generateId(), 'Is this the real world?', 'yes', 5),
  new Question(idGenerator.generateId(), 'Are you sure?', 'no', 8)
];

var quiz = new Quiz(questions, new PromptInputProvider());

quiz.play();
