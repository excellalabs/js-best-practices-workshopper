
module.exports = function doSerial(array, toDo){
  var i=0;
  function next() {
    if(i >= array.length){
      return;
    }
    return toDo(array[i], i++).then(function() { return next(); });
  }
  return next();
}