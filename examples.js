const Sorting = require('./index.js')

const list01 = [1,2,3,5,6,8,9,4,7,15,14,13,12,11,10]
const list02 = [1,2,3,5,6,8,9,4,7,15,14,13,12,11,10].reverse()
const list03 = [2,3,5,6,8,15,14,13,12,9,1,4,7,10,11]

console.time('bubble 01')
console.log('bubble 01', Sorting.bubble(list01))
console.timeEnd('bubble 01')

console.log(' ')
console.log('---------------------------------')
console.log(' ')

console.time('bubble 02')
console.log('bubble 02', Sorting.bubble(list02))
console.timeEnd('bubble 02')


console.log(' ')
console.log('---------------------------------')
console.log(' ')

console.time('bubble 03')
console.log('bubble 03', Sorting.bubble(list03))
console.timeEnd('bubble 03')

console.log(' ')
console.log('---------------------------------')
console.log(' ')

console.time('selection 01')
console.log('selection 01', Sorting.selection(list01))
console.timeEnd('selection 01')

console.log(' ')
console.log('---------------------------------')
console.log(' ')


console.time('selection 02')
console.log('selection 02', Sorting.selection(list02))
console.timeEnd('selection 02')

console.log(' ')
console.log('---------------------------------')
console.log(' ')


console.time('selection 03')
console.log('selection 03', Sorting.selection(list03))
console.timeEnd('selection 03')

console.log(' ')
console.log('---------------------------------')
console.log(' ')



console.time('insertion 01')
console.log('insertion 01', Sorting.insertion(list01))
console.timeEnd('insertion 01')

console.log(' ')
console.log('---------------------------------')
console.log(' ')


console.time('insertion 02')
console.log('insertion 02', Sorting.insertion(list02))
console.timeEnd('insertion 02')

console.log(' ')
console.log('---------------------------------')
console.log(' ')


console.time('insertion 03')
console.log('insertion 03', Sorting.insertion(list03))
console.timeEnd('insertion 03')

console.log(' ')
console.log('---------------------------------')
console.log(' ')



console.time('merge 01')
console.log('merge 01', Sorting.merge(list01))
console.timeEnd('merge 01')

console.log(' ')
console.log('---------------------------------')
console.log(' ')


console.time('merge 02')
console.log('merge 02', Sorting.merge(list02))
console.timeEnd('merge 02')

console.log(' ')
console.log('---------------------------------')
console.log(' ')


console.time('merge 03')
console.log('merge 03', Sorting.merge(list03))
console.timeEnd('merge 03')

console.log(' ')
console.log('---------------------------------')
console.log(' ')



console.time('quick 01')
console.log('quick 01', Sorting.quick(list01))
console.timeEnd('quick 01')

console.log(' ')
console.log('---------------------------------')
console.log(' ')


console.time('quick 02')
console.log('quick 02', Sorting.quick(list02))
console.timeEnd('quick 02')

console.log(' ')
console.log('---------------------------------')
console.log(' ')


console.time('quick 03')
console.log('quick 03', Sorting.quick(list03))
console.timeEnd('quick 03')

