var copy = require('../util/copy')
var swap = require('../util/swap')

module.exports = function (list) {
  var array = copy(list)
  var size = array.length
  var currentPosition, nextPosition, minimumPosition

  for (currentPosition = 0; currentPosition < size -1; currentPosition += 1) {
    // As default the minimum is the first position
    minimumPosition = currentPosition

    for (nextPosition = currentPosition + 1; nextPosition < size; nextPosition += 1) {
      if (array[nextPosition] < array[currentPosition]) {
        minimumPosition = nextPosition
      }
    }

    if (minimumPosition !== currentPosition) {
      swap(array, currentPosition, minimumPosition)
    }
  }

  return array
}