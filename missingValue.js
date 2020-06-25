
/**
 * takes in an UNSORTED array of integers
 * returns either the "missing" number
 * or null if there is no missing number
 */

function missingValue(arr) {
  let max = 0;
  let obj = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    obj[arr[i]] = 1;
  }
  for (var key in obj) {
    if (+key !== max) {
      if (!obj[+key + 1]) {
        return +key + 1;
      }
    }
  }
  return null;
}

console.log(missingValue([2, 0, 3])); // should log 1
console.log(missingValue([1, 0, 3, 2])); // should log null