
var path = require('path');
var copyFiles = require('./commandHelpers/copyFiles');
var quizRunner = require('./commandHelpers/quizRunner');

module.exports = [{
  aliases: ['init'],
  handler: function(shop) {
    var userDirectory = process.cwd();
    var initialDirectory = path.join(__dirname, '../src/initial');
    copyFiles(shop, initialDirectory, userDirectory).then(process.exit.bind(process, 0))
  }
}, {
  aliases: ['quiz one'],
  handler: function(shop) {
    quizRunner(shop, 0).then(process.exit.bind(process, 0));
  }
}, {
  aliases: ['quiz two'],
  handler: function(shop) {
    quizRunner(shop, 1).then(process.exit.bind(process, 0));
  }
}, {
  aliases: ['select'],
  order: 1,
  menu: false,
  handler: function(shop, args) {
    var specifier = args.join(' ')
    var exercise;
    try {
      shop.selectExercise(specifier)
      exercise = shop.loadExercise(specifier);
    } catch (e) {
      console.log(e.message)
      process.exit(1)
    }
    if(exercise && exercise.noprint){
      return;
    }
    shop.execute(['print']);
  }
}];