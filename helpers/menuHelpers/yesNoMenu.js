
var showMenu = require('./showMenu');

module.exports = function yesNoMenu(question, yesText, noText, title){
  title = title || yesText + ' / ' + noText;
  return new Promise(function(res, rej){
    showMenu(title, question, [[yesText, function() { res(true) }], [noText, function() { res(false) }]]);
  });
}