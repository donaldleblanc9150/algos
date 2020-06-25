
/**
 * takes in a string
 * returns a string
 * with the "words" reversed
 */

function reverseWordOrder(str) {
  var newStr = "";
  new tempArr = [];
  tempArr = str.split(" ")
  for (var i = tempArr.length - 1; i >= 0; i--) {
    if (i > 0) {
      newStr += tempArr[i] + " ";
    } else {
      newStr += tempArr[i];
    }
  }
  return newStr;
}

console.log(reverseWordOrder('this statement'));
// should log 'statement this'
console.log(reverseWordOrder('This is a test'));
// should log 'test a is This'