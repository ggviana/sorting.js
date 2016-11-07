var copy = require('../util/copy')
var swap = require('../util/swap')

module.exports = function quicksort (list, left, right) {
    var array = copy(list)
    var size = array.length
    var left = left || 0
    var right = right || size - 1
    var index = partition(array, left, right)

    if (left < index - 1) {
        quicksort(array, left, index - 1)
    }

    if (index < right) {
        quicksort(array, index, right)
    }

    return array
}

function partition (array, left, right) {
    var pivot = array[Math.floor((right + left) / 2)]
    var i = left
    var j = right
    
    while (i <= j) {
        while (array[i] < pivot) {
            i += 1
        }

        while (array[j] > pivot) {
            j -= 1
        }

        if (i <= j) {
            swap(array, i, j)

            i += 1
            j -= 1
        }
    }

    return i
}