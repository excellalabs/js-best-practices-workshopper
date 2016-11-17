var exercise = require('workshopper-exercise')();
var filecheck = require('workshopper-exercise/filecheck');
var expect = require('chai').expect;
var runTests = require('../../helpers/runTests');

// checks that the submission file actually exists
exercise = filecheck(exercise);

exercise = runTests(exercise, function(changeHandler, test) {
    test('should not have a function called increaseBalance()', function() {
        expect(typeof changeHandler.increaseBalance).to.not.equal('function');
    });

    test('should not have a function called getBalance()', function() {
        expect(typeof changeHandler.getBalance).to.not.equal('function');
    });
    
    test('should not have a function called canAfford()', function() {
        expect(typeof changeHandler.canAfford).to.not.equal('function');
    });

    test('should not have a function called decreaseBalance()', function() {
        expect(typeof changeHandler.decreaseBalance).to.not.equal('function');
    });

    test('should not have a function called getAmount()', function() {
        expect(typeof changeHandler.getAmount).to.not.equal('function');
    });

    test('should not have a function called insertCoin()', function() {
        expect(typeof changeHandler.insertCoin).to.not.equal('function');
    });

    test('should not have a function called releaseChange()', function() {
        expect(typeof changeHandler.releaseChange).to.not.equal('function');
    });

    test('should have a function called getProducts()', function() {
        expect(typeof changeHandler.getProducts).to.equal('function');
    });

    test('should have a function called getProduct()', function() {
        expect(typeof changeHandler.getProduct).to.equal('function');
    });

    test('should not have a function called isValidAmount()', function() {
        expect(typeof changeHandler.isValidAmount).to.not.equal('function');
    });
})

module.exports = exercise;