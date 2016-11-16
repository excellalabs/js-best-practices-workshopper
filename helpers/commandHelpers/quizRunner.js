
var showMenu = require('../menuHelpers/showMenu');
var doSerial = require('../doSerial');

const LINE_LENGTH = 73;

module.exports = function runQuiz(shop, quizIndex) {
  var __ = shop.i18n.__;
  var quiz = __('quizzes.' + quizIndex);
  return doSerial(quiz, function(question, i){
    question.title = question.title || 'Question ' + (i + 1).toString(10);
    return showQuestion(shop, question, i === quiz.length - 1);
  });
};

function showQuestion(shop, question, isFinalQuestion) {
  return new Promise(function(res, rej){
    var __ = shop.i18n.__;
    showMenu(question.title, 
      question.question,
      question.answers.map(function(answerArray){
        var answer = answerArray[0];
        var resolutions = answerArray.slice(1);
        return [answer, function(){
          doSerial(resolutions, function(resolution, i){
            return showResolution(shop, question, resolution, isFinalQuestion && i === resolutions.length - 1);
          }).then(res);
        }];
      }),
      [[__('menu.exit'), process.exit.bind(process, 0)]]);
  });
}

function showResolution(shop, question, resolution, isFinalResolution){
  return new Promise(function(res, rej) {
    var __ = shop.i18n.__;
    showMenu(question.title,
      resolution,
      [[__(isFinalResolution ? 'menu.quizDone' : 'menu.nextQuestion'), res]]);
  });
}