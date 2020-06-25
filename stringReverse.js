/**
 * takes in a string
 * returns the string
 * with the character order reversed
 */

function stringReverse(str) {
    var output = "";

    for (var i = str.length - 1; i >= 0; i--)
    {
      output += str[i];
    }
    return output;
  }

console.log(stringReverse('this')); // should log 'siht'
console.log(stringReverse('something')); // should log 'gnihtemos'