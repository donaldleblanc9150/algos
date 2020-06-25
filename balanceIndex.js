
/**
 * takes in an array of numbers
 * returns an integer
 * if there is an index in which the summed values
 * on each side are equal, return it
 * otherwise, return -1
 */

function balanceIndex(arr) {
  var sideR = 0;
  for (var j = 0; j < arr.length; j++) {
    sideR += arr[j];
  }
  var sideL = 0;

  for (var i = 0; i < arr.length; i++) {
    sideR -= arr[i];
    sideL += arr[i - 1];
    if (sideR == sideL) {
      return i;
    }
  }
  return -1;
}

console.log(balanceIndex([-2, 5, 7, 0, 3])); // should log 2
console.log(balanceIndex([9, 9])); // should log -1