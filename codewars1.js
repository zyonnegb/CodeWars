//8 kyu
//Convert number to reversed array of digits
//JavaScript:


function digitize(n) {
  var initialArray = (""+n).split('');
  var reversedArray = [];
  for (var i = initialArray.length - 1; i >= 0; i--) {
    reversedArray[i] = parseInt(initialArray.shift(),10);
  }
  return reversedArray;
}
