function squareSum(numbers) {
    return numbers.map(multiply).reduce(reducer, 0)
}
function multiply(number) {
    return Math.pow(number, 2)
}
function reducer(acc, cur) {
    return acc + cur
}