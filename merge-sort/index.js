const copy = require('../util/copy')
const first = require('../util/first')

module.exports = function mergeSort (list) {
  let array = copy(list)
  let left = []
  let right = []
  
  const size = array.length
  const middle = Math.floor(size / 2)
  
  if (size <= 1) return array

  for (var i = 0; i < size; i++) {
    if (i < middle) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }

  left = mergeSort(left)
  right = mergeSort(right)

  return merge(left, right)
}

function merge (left, right) {
  let result = []

   while (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(first(left))
      } else {
        result.push(first(right))
      }
   }

   while (left.length) {
      result.push(first(left))  
   }

   while (right.length) {
      result.push(first(right))
   }

   return result
}
