/**
 * returns a string
 * should be the longest palindrome in the string
 */

function longestPalindrome(string) {

let start = 0;
let maxLength = 1;

for(let i = 1; i < string.length-1; i++) {
    let low = i-1;
    let high = i;

    while(low >= 0 && high < string.length-1 && string[low] == string[high]) {

        if(high - low + 1 > maxLength) {
            start = low;
            maxLength = high - low + 1;
        }
        low--;
        high++;
    }

    low = i-1;
    high = i+1;
    while(low >= 0 && high < string.length && string[low] == string[high]) {
        if(high - low + 1 > maxLength) {
            start = low;
            maxLength = high - low + 1;
        }


        low--;
        high++;1
    }
}


let longest = "";
for(let i = start; i < start+maxLength; i++) {
    longest += string[i];
}


return longest;
}

console.log(longestPalindrome('this')); // should log 't'
console.log(longestPalindrome('bobe')); // should log 'bob'
console.log(longestPalindrome('what up, daddy-o?')); // should log 'dad'
console.log(longestPalindrome('Yikes! my favorite racecar erupted!'));
// should log 'e racecar e'

// alternate////

function longestPalindrome(string) {
  var longest = string[0];
  var currPalin = "";
  for (var i = 0; i < string.length; i++) {
    var range = 1;
    while (
      i - range >= 0 &&
      i + range < string.length &&
      string[i - range] === string[i + range]
    ) {
      currPalin = string.slice(i - range, i + range + 1);
      range++;
    }
    if (currPalin.length > longest.length) {
      longest = currPalin;
    }
  }
  return longest;
}

console.log(longestPalindrome('this')); // should log 't'
console.log(longestPalindrome('bobe')); // should log 'bob'
console.log(longestPalindrome('what up, daddy-o?')); // should log 'dad'
console.log(longestPalindrome('Yikes! my favorite racecar erupted!'));