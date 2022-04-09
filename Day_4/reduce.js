var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var total = numbers.reduce(function(totalNumber, array) {
    return totalNumber + array
}, )

console.log(total);