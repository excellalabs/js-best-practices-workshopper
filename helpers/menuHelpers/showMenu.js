
var chalk = require('chalk');
var createMenu = require('simple-terminal-menu');

var writeTextMultiline = require('../menuHelpers/writeTextMultiline');
const LINE_LENGTH = 73;

module.exports = function showMenu(title, text, menuActions, extraActions){
  extraActions = extraActions || [];
  var menu = createMenu({
    width: LINE_LENGTH,
    x: 2,
    y: 2
  });
  menu.writeTitle(title);
  writeTextMultiline(menu, LINE_LENGTH, text || '');
  menu.writeSeparator();
  menuActions.forEach(function(action){
    menu.add(chalk.bold('» ' + action[0]), action[1]);
  });
  menu.writeSeparator();
  extraActions.forEach(function(action){
    menu.add(chalk.bold(action[0]), action[1]);
  });
}