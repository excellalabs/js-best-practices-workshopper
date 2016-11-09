
var path = require('path');
var fs = require('fs');

module.exports = function copyFiles(copyFrom, copyTo, relative) {
  var filesToCopy = fs.readdirSync(copyFrom);
  filesToCopy.forEach(function(file){
    var relativePath = path.join(relative || '.', file);
    try {
      var fullCopyPath = path.join(copyFrom, file);
      var fullDesinationPath = path.join(copyTo, file);
      var stat = fs.statSync(fullCopyPath);
      if(stat.isDirectory()) {
        try {
          fs.mkdirSync(fullDesinationPath);
        } catch(e) {
          console.warn('WARNING: Unable to create directory: file or directory already exists at ' + fullDesinationPath);
          console.warn(e);
        }
        copyFiles(fullCopyPath, fullDesinationPath, relativePath);
      } else {
        fs.writeFileSync(fullDesinationPath, fs.readFileSync(fullCopyPath));
      }
    } catch(e) {
      console.error('ERROR: Failed to copy file ' + relativePath + ' to destination ' + fullDesinationPath);
      console.error(e);
    }
  });
}