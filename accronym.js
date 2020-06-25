/**
 * takes in a string
 * returns a string
 * return will be first letter of each "word"
 * capitalized
 */

function acronyms(str) {
    var strArr = str.split(' ');
    var returnStr = "";
      for (var i = 0; i < strArr.length; i++){
        returnStr += strArr[i].charAt(0).toUpperCase();
      }
      return returnStr;

  }
'hello'.toUpperCase(); // returns 'HELLO'

console.log(acronyms("there's no free lunch - gotta pay yer way."));
// should log 'TNFL-GPYW'
console.log(acronyms("Live from New York, it's Saturday Night!"));
// should log 'LFNYISN'
