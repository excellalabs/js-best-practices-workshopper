
var copyFiles = require('./commandHelpers/copyFiles');
var quizRunner = require('./commandHelpers/quizRunner');

module.exports = [{
  aliases: ['init'],
  handler: function(shop) {
    var userDirectory = process.cwd();
    var initialDirectory = path.join(__dirname, '../src/initial');
    copyFiles(initialDirectory, userDirectory)
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
}];