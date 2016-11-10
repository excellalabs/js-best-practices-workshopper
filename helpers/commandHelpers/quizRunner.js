
var chalk = require('chalk');
var createMenu = require('simple-terminal-menu');

const LINE_LENGTH = 73;

module.exports = function runQuiz(shop, quizIndex) {
  var __ = shop.i18n.__;
  var quiz = __('quizzes.' + quizIndex);
  return doSerial(quiz, function(question, i){
    question.title = question.title || 'Question ' + (i + 1).toString(10);
    return showQuestion(shop, question, i === quiz.length - 1);
  });
}

function showQuestion(shop, question, isFinalQuestion) {
  return new Promise(function(res, rej){
    var __ = shop.i18n.__;

    var menu = createMenu({
      width: LINE_LENGTH,
      x: 2,
      y: 2
    });
    menu.writeTitle(question.title);
    writeTextMultiline(menu, question.question);

    menu.writeSeparator();

    question.answers.forEach(function (answerArray) {
      var answer = answerArray[0];
      var resolutions = answerArray.slice(1);
      menu.add(chalk.bold('» ' + answer), function() {
        doSerial(resolutions, function(resolution, i){
          return showResolution(shop, question, resolution, isFinalQuestion && i === resolutions.length - 1);
        }).then(res);
      });
    });

    menu.writeSeparator();

    menu.add(chalk.bold(__('menu.exit')), process.exit.bind(process, 0));
  });
}

function showResolution(shop, question, resolution, isFinalResolution){
  return new Promise(function(res, rej) {
    var __ = shop.i18n.__;

    var menu = createMenu({
      width: LINE_LENGTH,
      x: 2,
      y: 2
    });
    menu.writeTitle(question.title);
    writeTextMultiline(menu, resolution);

    menu.writeSeparator();
    
    menu.add(chalk.bold('» ' + __(isFinalResolution ? 'menu.quizDone' : 'menu.nextQuestion')), res);

    menu.writeSeparator();
  });
}

function doSerial(array, toDo){
  var i=0;
  function next() {
    if(i >= array.length){
      return;
    }
    return toDo(array[i], i++).then(function() { return next(); });
  }
  return next();
}

function writeTextMultiline(menu, text) {
  text = text.trim();
  if(text.length <= LINE_LENGTH) {
    menu.writeLine(text);
    return;
  }
  var breakLineAt = text.lastIndexOf(' ', LINE_LENGTH);
  if(breakLineAt === -1){
    breakLineAt = LINE_LENGTH;
  }
  var line = text.substring(0, breakLineAt);
  menu.writeLine(line);
  writeTextMultiline(menu, text.substring(breakLineAt));
}