var exercise = require('workshopper-exercise')();
var filecheck = require('workshopper-exercise/filecheck');
var expect = require('chai').expect;
var runFileStreamTests = require('../../helpers/runFileStreamTests');

// checks that the submission file actually exists
exercise = filecheck(exercise);

// runs unit tests on submission
exercise = runFileStreamTests(exercise, function(fileContents, test){
  test('should not contain the keyword "switch"', function(){
    var regex = /switch/;
    expect(regex.test(fileContents)).to.equal(false);
  });
});

module.exports = exercise;
