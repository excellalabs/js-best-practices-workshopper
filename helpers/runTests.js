const fs = require('fs')
    , path = require('path')
    , colors = require('colors/safe')
    , Mocha = require('mocha')
    , resolveSubmission = require('./resolveSubmission')

function createTestRunner(definedTestRunner, mochaOptions){
  return function processor(callback){
    var submission = resolveSubmission(this)
    var mochaInstance = new Mocha()
    
    mochaInstance.addFile(this.args[0])
    
    mochaInstance.suite.on('post-require', function(context){
      definedTestRunner.call(this, submission, context.it, context.suite, context.beforeEach)
    })
    
    mochaInstance.run(function(err){
      callback(err);
    });
  }
}

function runTests(exercise, testRunner, mochaOptions){
  exercise.addVerifyProcessor(createTestRunner(testRunner, mochaOptions));
  exercise.getSolutionFiles = function(callback){
    var translated = path.join(this.dir, './solution_' + this.lang)
    var fallback = path.join(this.dir, './solution')

    checkPath(translated, function(err, list) {
      if (list && list.length > 0)
        return callback(null, list)

      checkPath(fallback, callback)
    });


    function checkPath(dir, callback) {
      fs.exists(dir, function (exists) {
        if (!exists)
          return callback(null, []);

        fs.readdir(dir, function (err, list) {
          if (err)
            return callback(err)

          list = list
            .filter(function (f) { return (/\.js$/).test(f) })
            .map(function (f) { return path.join(dir, f)})

          callback(null, list)
        })
      })
    }
  }
  return exercise
}

module.exports = runTests