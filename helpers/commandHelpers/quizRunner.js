
var chalk = require('chalk');

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
    console.log('isFinalQuestion', isFinalQuestion);
    var __ = shop.i18n.__;
    var __n = shop.i18n.__n;
    var menuOptions = {
      title: question.title,
      subtitle: question.question,
      menu: question.answers.map(function (answerArray) {
        var answer = answerArray[0];
        var resolutions = answerArray.slice(1);
        return {
          label: chalk.bold('» ' + answer),
          handler: function() {
            doSerial(resolutions, function(resolution, i){
              return showResolution(shop, question, resolution, isFinalQuestion && i === resolutions.length - 1);
            }).then(res);
          }
        }
      }),
      extras: [{
        label: chalk.bold(__('menu.exit')),
        handler: process.exit.bind(process, 0)
      }]
    };
    shop.options.menuFactory.options.selected = undefined;
    shop.options.menuFactory.create(menuOptions);
  });
}

function showResolution(shop, question, resolution, isFinalResolution){
  return new Promise(function(res, rej) {
    console.log('isFinalResolution', isFinalResolution);
    var __ = shop.i18n.__;
    var __n = shop.i18n.__n;
    var menuOptions = {
      title: question.title,
      subtitle: resolution,
      menu: [{
        label: chalk.bold('» ' + __(isFinalResolution ? 'menu.quizDone' : 'menu.nextQuestion')),
        handler: res
      }],
      extras: []
    };
    shop.options.menuFactory.options.selected = undefined;
    shop.options.menuFactory.create(menuOptions);
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