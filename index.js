function iterativeLog(array) {
  array.forEach(function(index) {
    console.log(`${in
dex}: ${element}`)
  })
}

function iterate(callback) {
  var array = [1,2,3,4,5]
  array.forEach(callback)
  return array
}

function doToArray(array, callback) {
  array.forEach(callback);
}
