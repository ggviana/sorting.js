/**
 * Swaps two values in a array
 * @param  {Array} array The array with the items to be swapped
 * @param  {int} a     A position in the array
 * @param  {int} b     A position in the array
 * @return {void}
 */
module.exports = function swap (array, a, b) {
  var temp = array[a]
  array[a] = array[b]
  array[b] = temp
}