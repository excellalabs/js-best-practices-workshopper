
var fs = require('fs');
var path = require('path');
var shop = require('../../js-best-practices');

module.exports = function buildExercise(){
  printProblem().then(function(){
    return waitForInput('press any key to continue...');
  }).then(function(){
    shop.execute(['init']);
  });
  
  return {
    noprint: true
  };
}

function waitForInput(prompt){
  return new Promise(function(res, rej){
    console.log(prompt);
    var alreadyRaw = process.stdin.isRaw;
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.once('data', function(){
      process.stdin.pause();
      process.stdin.setRawMode(alreadyRaw);
      res();
    });
  });
}

function printProblem(){
  return new Promise(function(res, rej){
	var i18n = shop.i18n;
	var postfix = i18n.lang() === 'en' ? '' : '.' + shop.i18n.lang();
    var problem = fs.readFileSync(path.join(__dirname, 'problem' + postfix + '.md'));
    var stream = shop.createMarkdownStream({
      meta: {
        name: 'get started',
        number: 0
      }
    });
    stream.append(problem, 'md');
    stream.pipe(require('workshopper-adventure/lib/mseePipe')())
          .pipe(process.stdout)
    stream.on('end', res);
  });
}