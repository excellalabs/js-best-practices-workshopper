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


// generate a random positive integer <= 100

  var names = 
    [ [{p:'Ke', d:false}, {p:'Lou', d:false}, {p:'Do', d:false}, {p:'A', d:false}, {p:'Bre', d:false}, {p:'Ca', d:false}, {p:'Sea', d:false}, {p:'Wy', d:false}, {p:'Dre', d:false}, {p:'Li', d:false}]
    , [{p:'vin', d:true}, {p:'ge', d:false}, {p:'gu', d:false}, {p:'lex', d:true}, {p:'ndan', d:true}, {p:'me', d:false}, {p:'n', d:true}, {p:'w', d:true}, {p:'ndsay', d:true}]
    , [{p:'nia', d:true}, {p:'han', d:true}, {p:'ron', d:true}]
    ]
  
function randomName () {
  var name='', i=0, done=false, parts, choice
  while(!done && i<names.length){
    parts = names[i++]
    choice = parts[parseInt(Math.random()*parts.length)]
    name += choice.p
    done = choice.d
  }
  
  return name
}


exercise.addSetup(function (mode, callback) {
  // mode == 'run' || 'verify'

  // create a random batch of cmdline args
  var args = [ randomName() ]

  // supply the args to the 'execute' processor for both
  // solution and submission spawn()
  this.submissionArgs = this.solutionArgs = args

  process.nextTick(callback)
})

module.exports = exercise
