var copy = require('../util/copy')
var swap = require('../util/swap')

module.exports = function (list) {
  var array = copy(list)
  var size = array.length
  var currentPosition, nextPosition
  var swapped

  do {
    swapped = false
    for (currentPosition = 0; currentPosition < size - 2; currentPosition += 1) {

      nextPosition = currentPosition + 1

      if (array[currentPosition] > array[nextPosition]) {
        swap(array, currentPosition, nextPosition)
        swapped = true
      }
    }
  } while (swapped)
  
  return array
}