var exercise = require('workshopper-exercise')();
var filecheck = require('workshopper-exercise/filecheck');
var expect = require('chai').expect;
var runFileStreamTests = require('../../helpers/runFileStreamTests');
var runTests = require('../../helpers/runTests');


// checks that the submission file actually exists
exercise = filecheck(exercise);


// runs unit tests on submission
exercise = runFileStreamTests(exercise, function(fileContents, test){
  test('should not contain inconsistent quotes', function(){
    var regexSingleQuotes = /\'/;
    var regexDoubleQuotes = /\"/;
    if (regexSingleQuotes.test(fileContents)) {
        expect(regexDoubleQuotes.test(fileContents)).to.equal(false);
    } else {
        expect(regexSingleQuotes.test(fileContents)).to.equal(false);
    }
  });

  test('should not contain comment to explain simple method', function() {
      var regexComment = /\/\//;
      expect(regexComment.test(fileContents)).to.equal(false);
  });
  
});


exercise = runTests(exercise, function(balanceManager, test){
  test('should check for undefined variable as well as null', function(){
     expect(balanceManager.isValidAmount()).to.equal(false);
  });

  test('should not have globally scoped variable', function (){
      try {
        balanceManager.canAfford(null)
      } catch(e) {}
      expect(function() { balanceManager.canAfford(0.1) }).to.not.throw(Error);
      
  });
});

module.exports = exercise;