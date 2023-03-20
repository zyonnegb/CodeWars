// 8 kyu
// Sum Arrays
// JavaScript:

function sum(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.reduce((total, num) => total + num);
}