const copy = require('../util/copy')
const swap = require('../util/swap')
const isBigger = (current, next) => current > next

module.exports = function (list) {
  let array = copy(list)
  const size = array.length
  let currentPosition = 0
  let nextPosition = 0
  let swapped = false

  while (!swapped) {
    for (currentPosition = 0; currentPosition < size - 2; currentPosition += 1) {

      nextPosition = currentPosition + 1

      if (isBigger(array[currentPosition], array[nextPosition])) {
        swap(array, currentPosition, nextPosition)
        swapped = true
      }
    }
  } 
  
  return array
}
