var exercise = require('workshopper-exercise')();
var filecheck = require('workshopper-exercise/filecheck');
var expect = require('chai').expect;
var runTests = require('../../helpers/runTests');


// checks that the submission file actually exists
exercise = filecheck(exercise);


// runs unit tests on submission
exercise = runTests(exercise, function(vendingMachine, test, suite, beforeEach) {
  beforeEach(function(){
    vendingMachine.releaseChange();
  })
  const vendingMachineFunctions = [
    'insertCoin',
    'vendProduct',
    'getProducts',
    'releaseChange'
  ];
  vendingMachineFunctions.forEach(function(functionName){
    test('vendingMachine should have a function called ' + functionName, function(){
      expect(typeof vendingMachine[functionName]).to.equal('function');
    });
  });

  test('releaseChange should return the balance to zero', function(){
    vendingMachine.insertCoin('p');
    vendingMachine.insertCoin('q');
    expect(vendingMachine.releaseChange()).to.not.equal([]);
    expect(vendingMachine.releaseChange()).to.equal([]);
  });

  const coinageTestCases = [
    { given: [], expected: [] },
    { given: ['p','p','p','p','p'], expected: ['n'] },
    { given: ['d','d','n'], expected: ['q'] },
    { given: ['d','p','d','d'], expected: ['q','n','p'] }
  ];
  coinageTestCases.forEach(function(testCase){
    test('vendingMachine should correctly track balance and return correct change', function(){
      testCase.given.forEach(function(coin) {
        vendingMachine.insertCoin(coin);
      });
      expect(vendingMachine.releaseChange()).to.equal(testCase.expected);
    });
  });
});

module.exports = exercise;