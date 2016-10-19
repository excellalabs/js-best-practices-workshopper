const path = require('path');
const fs = require('fs');
    
function readSubmission(exercise){
    var submissionPath = path.resolve(exercise.args[0].toString());
    return fs.readFileSync(submissionPath);
}

module.exports = readSubmission;