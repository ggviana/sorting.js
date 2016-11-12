const copy = require('../util/copy')
const swap = require('../util/swap')

// com forEach, na média, foi mais rápido que usando for
// mesmo iterado mais vezes

// const hasUnorder = (list) => {
//   for (let i=0; i<list.length; i++) {
//     if (isBigger(list[i], list[i+1])) return true
//   }
// }

const hasUnorder = (list) => {
  let unordered = false
  list.forEach((num, i) => (num > list[i+1]) ? unordered = true : null)
  return unordered
}

const isBigger = (current, next) => current > next

module.exports = function (list) {

  let array = copy(list)
  const size = array.length
  let currentPosition = 0
  let nextPosition = 0
  let swapped = false

  while (hasUnorder(array)) {
    for (currentPosition = 0; currentPosition <= size - 1; currentPosition += 1) {
      nextPosition = currentPosition + 1
      if (isBigger(array[currentPosition], array[nextPosition]))
        swap(array, currentPosition, nextPosition)
    }
  } 
  return array
}
