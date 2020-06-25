/**
 * takes in an array of integers
 * returns a string connecting all the page
 * ranges with a comma and a space
 */

function bookIndex(arr) {
  //iterate through array => For loop
  //look at number at i, compare to i+1. If they are sequential, then move on to nec titem in loop. If they are not sequential, then output i as endNum, concat on to output string startNum "-" endNum.
  // once loop is finished, return output string.
  var startNum = arr[0];
  var endNum = 0;
  var outputStr = "";
  for (var i = 0; i < arr.length; i++) {
    if (arr[i + 1] !== arr[i] + 1 && i < arr.length - 1) {
      endNum = arr[i];
      if (endNum === startNum) {
        outputStr += endNum + ", ";
      } else {
        outputStr += startNum + "-" + endNum + ", ";
      }
      startNum = arr[i + 1];
    }
    if (i === arr.length - 1) {
      endNum = arr[i];
      if (endNum === startNum) {
        outputStr += endNum + ", ";
      } else {
        outputStr += startNum + "-" + endNum;
      }
    }
  }
  return outputStr;
}

console.log(bookIndex([1, 2, 3, 5, 6, 7, 10, 11]));
// should log '1-3, 5-7, 10-11'
console.log(bookIndex([5, 10, 11, 12])); // should log '5, 10-12'