const fs = require('fs')
    , path = require('path')
    , colors = require('colors/safe')
    , Mocha = require('mocha')
    , resolveSubmission = require('./resolveSubmission')

function createTestRunner(definedTestRunner, mochaOptions){
  return function processor(callback){
    var submission = resolveSubmission(this)
    var mochaInstance = new Mocha()
    
    mochaInstance.addFile(this.args[0]);
    
    mochaInstance.suite.on('post-require', function(context){
      definedTestRunner(submission, context.it)
    })
    
    mochaInstance.run(callback)
  }
}

function runTests(exercise, testRunner, mochaOptions){
  exercise.addVerifyProcessor(createTestRunner(testRunner, mochaOptions));
  return exercise
}

module.exports = runTests