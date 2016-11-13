
var path = require('path');
var fs = require('fs');
var rimraf = require('rimraf');
var yesNoMenu = require('../menuHelpers/yesNoMenu');
var doSerial = require('../doSerial');

module.exports = function copyFiles(shop, copyFrom, copyTo, relative) {
  var filesToCopy = fs.readdirSync(copyFrom);
  return doSerial(filesToCopy, function(file){
    var relativePath = path.join(relative || '.', file);
    var fullCopyPath = path.join(copyFrom, file);
    var fullDesinationPath = path.join(copyTo, file);
    var stat = fs.statSync(fullCopyPath);
    if(stat.isDirectory()) {
      return tryMakeDirectory(shop, fullDesinationPath).then(function(directoryCreated){
        if(directoryCreated){
          return copyFiles(shop, fullCopyPath, fullDesinationPath, relativePath);
        }
      });
    } else {
      return tryCopyFile(shop, fullCopyPath, fullDesinationPath);
    }
  }).then(function(){
    console.log('File copy complete');
  });
}

function tryCopyFile(shop, fullCopyPath, fullDesinationPath){
  function doCopy(){
    fs.writeFileSync(fullDesinationPath, fs.readFileSync(fullCopyPath));
  }
  if(!fs.existsSync(fullDesinationPath)){
    doCopy();
    return Promise.resolve(true);
  }
  var stat = fs.statSync(fullDesinationPath);
  return tryDelete(shop, stat, fullDesinationPath).then(function(overwrite) {
    if(overwrite){
      doCopy();
    }
    return overwrite;
  });
}

function tryMakeDirectory(shop, fullDesinationPath){
  function makeDirectory(){
    fs.mkdirSync(fullDesinationPath);
  }
  if(!fs.existsSync(fullDesinationPath)){
    makeDirectory();
    return Promise.resolve(true);
  }
  var stat = fs.statSync(fullDesinationPath);
  if(stat.isDirectory()){
    return Promise.resolve(true);
  }
  return tryDelete(shop, stat, fullDesinationPath).then(function(overwrite) {
    if(overwrite){
      makeDirectory();
    }
    return overwrite;
  });
}

function tryDelete(shop, stat, fullPath){
  return new Promise(function(res, rej){
    var __ = shop.i18n.__;
    yesNoMenu(__('menu.fileExists', { fileType: getFileType(stat), filePath: fullPath }),
      __('menu.yes'),
      __('menu.no'))
      .then(function(overwrite) {
        if(!overwrite){
          return res(false);
        }
        rimraf(fullPath, function(err){
          if(err){
            return rej(err);
          }
          res(true);
        });
      });
  });
}

function getFileType(stat){
  if(stat.isDirectory()){
    return 'directory';
  }
  if(stat.isFile()){
    return 'file';
  }
  if(stat.isBlockDevice() || stat.isCharacterDevice()){
    return 'device';
  }
  if(stat.isSocket()){
    return 'socket';
  }
  return 'item';
}