var exercise          = require('workshopper-exercise')()
  , filecheck         = require('workshopper-exercise/filecheck')
  , expect            = require('chai').expect
  , runTests          = require('../../helpers/runTests')

// checks that the submission file actually exists
exercise = filecheck(exercise)

// runs unit tests on submission
exercise = runTests(exercise, function(submission, it){
  it('should have a name of "hello"', function(){
    expect(submission.name).to.equal('hello')
  })
  it('should do something asynchronously', function(done){
    submission.something(function(err, val){
      expect(val).to.equal('hello')
      done(err)
    })
  })
})

module.exports = exercise
