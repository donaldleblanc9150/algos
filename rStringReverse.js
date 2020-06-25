/**
 * takes in a string
 * returns a new string
 * with the characters reversed
 */

function rStringReverse(str) {
    if (str.length <  2){return str}
    return rStringReverse(str.slice(1,str.length)) + str[0] 
 }

console.log(rStringReverse('hello')); // should log 'olleh'
console.log(rStringReverse('world')); // should log 'dlrow'