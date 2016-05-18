exports.name = 'hello'

exports.something = function(cb){
  setTimeout(function(){
    cb(undefined, 'hello')
  })
}