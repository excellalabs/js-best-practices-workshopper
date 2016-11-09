
var copyFiles = require('./commandHelpers/copyFiles');

module.exports = [{
  aliases: ['init'],
  handler: function(scope) {
    var userDirectory = process.cwd();
    var initialDirectory = path.join(__dirname, '../src/initial');
    copyFiles(initialDirectory, userDirectory)
  }
}];