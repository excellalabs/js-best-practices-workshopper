
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
  aliases: ['first quiz'],
  handler: function(shop) {
    quizRunner(shop, 0).then(process.exit.bind(process, 0));
  }
}];