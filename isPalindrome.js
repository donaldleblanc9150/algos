/**
 * returns a boolean
 * is the string a palindrome?
 * Palindrome: a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nursesrun.
 */

function isPalindrome(str){
    for (var i = 0; i < str.length; i++)
    {
        if (str[i] != str[str.length - 1 - i]){
            return false;
        }
    }
       0 1 2 3 4 5 6
    /**r a c e c a r */
    return true;
}

console.log(isPalindrome('mom')); // should log true
console.log(isPalindrome('Mom')); // should log false
console.log(isPalindrome('this')); // should log false
console.log(isPalindrome('mooom')); // should log true
// alt//

function isPalindrome(str) {
  var revStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  return str === revStr;
}
console.log(isPalindrome('mom')); // should log true
console.log(isPalindrome('Mom')); // should log false
console.log(isPalindrome('this')); // should log false
console.log(isPalindrome('mooom')); // should log true