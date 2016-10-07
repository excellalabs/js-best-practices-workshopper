var exercise = require('workshopper-exercise')();
var filecheck = require('workshopper-exercise/filecheck');
var expect = require('chai').expect;
var runTests = require('../../helpers/runTests');

// checks that the submission file actually exists
exercise = filecheck(exercise);

// runs unit tests on submission
exercise = runTests(exercise, function(changeHandler, test){
  test('should have function called convertToChange', function(){
    expect(typeof changeHandler.convertToChange).to.equal('function');
  });

  test('convertToChange should return a quarter, nickel, dime, and two pennies as change for 42 cents', function(){
    var balance = 42;
    var expected = ['d', 'n', 'p', 'p', 'q'];

    var actual = changeHandler.convertToChange(balance).sort(function(a, b) { return a > b; });

    expect(actual).to.eql(expected);
  });

  test('convertToChange should return an empty array for 0 cents', function(){
    var balance = 0;
    var expected = [];

    var actual = changeHandler.convertToChange(balance);

    expect(actual).to.eql(expected);
  });

  test('convertToChange should return three quarters and a penny for 76 cents', function(){
    var balance = 76;
    var expected = ['p', 'q', 'q', 'q'];

    var actual = changeHandler.convertToChange(balance).sort(function(a, b) { return a > b; });

    expect(actual).to.eql(expected);
  });
});

module.exports = exercise;
