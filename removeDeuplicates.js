
/**
 * takes in a SORTED array of numbers
 * returns the same OR a new array "deduped"
 * 
 * BONUSES:
 * O(n): no nested loops, new array okay
 * In place (no new array)
 * In place and O(n): no nested loops
 * Keep it O(n) even if unsorted
 */

function removeDuplicates(arr) {
    // your code here
    var newArr = []
    for (var i =0; i<arr.length; i++){
        if (arr[i] != arr[i+1]){
            newArr.push(arr[i]);
        }
    }
    return newArr
  }

console.log(removeDuplicates([1, 2, 3, 4, 4, 4, 5]));
// should log [1, 2, 3, 4, 5]
// alternate
function removeDuplicates(arr) {
  freq = {};
  newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (!freq[arr[i]]) {
      freq[arr[i]] = 1;
      newArr.push(arr[i]);
    }
  }
  return newArr;

console.log(removeDuplicates([1, 2, 3, 4, 4, 4, 5]));