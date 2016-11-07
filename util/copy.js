var slice = Array.prototype.slice
/**
 * Returns a copy of a array or array-like(object, string, Set, Map) structure
 * @param  {array-like} array The structure to be copied
 * @return {Array}       The copy
 */
module.exports = function copy (array) {
  return slice.call(array)
}