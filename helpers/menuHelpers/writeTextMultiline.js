
module.exports = function writeTextMultiline(menu, lineLength, text) {
  text = text.trim();
  if(text.length <= lineLength) {
    menu.writeLine(text);
    return;
  }
  var breakLineAt = text.lastIndexOf(' ', lineLength);
  if(breakLineAt === -1){
    breakLineAt = lineLength;
  }
  var line = text.substring(0, breakLineAt);
  menu.writeLine(line);
  writeTextMultiline(menu, lineLength, text.substring(breakLineAt));
}