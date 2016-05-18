const path = require('path')
    
function resolveSubmission(exercise){
    var submissionPath = path.resolve(exercise.args[0].toString());
    return require(submissionPath);
}

module.exports = resolveSubmission;