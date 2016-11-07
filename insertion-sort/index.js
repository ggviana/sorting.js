var copy = require('../util/copy')
var swap = require('../util/swap')

module.exports = function (list) {
  var array = copy(list)
  var size = array.length
  var currentPosition, needlePosition

  for(currentPosition = 0; currentPosition < size - 1; currentPosition += 1) {
    needlePosition = currentPosition
    
    while (needlePosition > 0 && array[needlePosition - 1] > array[needlePosition]) {
      swap(array, needlePosition - 1, needlePosition)
      needlePosition = needlePosition - 1
    }
  }

  return array
}