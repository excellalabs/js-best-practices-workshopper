var exercise      = require('workshopper-exercise')()
  , filecheck     = require('workshopper-exercise/filecheck')
  , execute       = require('workshopper-exercise/execute')
  , comparestdout = require('workshopper-exercise/comparestdout')


// checks that the submission file actually exists
exercise = filecheck(exercise)

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise)

// compare stdout of solution and submission
exercise = comparestdout(exercise)

exercise.addSetup(function (mode, callback) {
  // mode == 'run' || 'verify'

  // create a random batch of cmdline args
  var args = [ 'Gatorade', 826.05, 'Cheetos', 54.20, 'Reeses Cup', 120.75 ]
  //total 1000

  // supply the args to the 'execute' processor for both
  // solution and submission spawn()
  this.submissionArgs = this.solutionArgs = args

  process.nextTick(callback)
})

// exercise.addProcessor(function (mode, callback) {

//     exercise.emit('fail', "error")

//   process.nextTick(callback)
// })

module.exports = exercise
