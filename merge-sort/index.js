var copy = require('../util/copy')
var first = require('../util/first')

module.exports = function mergeSort (list) {
  var array = copy(list)
  var size = array.length
  var middle = Math.floor(size / 2)
  var left = [], right = []

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
  var result = []

   while (left.length > 0 && right.length > 0) {
      if (left[0] < right[0]) {
        result.push(first(left))
      } else {
        result.push(first(right))
      }
   }

   while (left.length > 0) {
      result.push(first(left))  
   }

   while (right.length > 0) {
      result.push(first(right))
   }

   return result
}