var exercise = require('workshopper-exercise')();
var filecheck = require('workshopper-exercise/filecheck');
var expect = require('chai').expect;
var runFileStreamTests = require('../../helpers/runFileStreamTests');
var runTests = require('../../helpers/runTests');


// checks that the submission file actually exists
exercise = filecheck(exercise);

// runs unit tests on submission
exercise = runFileStreamTests(exercise, function(fileContents, test){
  test('changeHandler.js should not contain the keyword "switch"', function(){
    var regex = /switch/;
    expect(regex.test(fileContents)).to.equal(false);
  });
});

exercise = runTests(exercise, function(changeHandler, test) {
  test('getAmount("p") should return 1', function() {
    var expected = 1;
    var actual = changeHandler.getAmount('p');
    expect(actual).to.eql(expected);
  });

  test('getAmount("q") should return 25', function() {
    var expected = 25;
    var actual = changeHandler.getAmount('q');
    expect(actual).to.eql(expected);
  });

  test('getAmount() should throw an error', function() {
    expect(function(){
      changeHandler.getAmount();
    }).to.throw('Unrecognized coin undefined');
  })
});
module.exports = exercise;