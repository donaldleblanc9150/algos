
/**
 * takes in a string
 * returns a new string
 * with individual "words" reversed
 */

function reverseWords(str) {
  var tempStr = "";
  var sentenceStr = "";

  for (var i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      tempStr = str[i] + tempStr;
      //sentenceStr += tempStr; <- this would work in here if we only had one
      //word per string
    } else {
      //this will activate whenever we find a space
      sentenceStr += tempStr; //add the temp string to the sentence string
      sentenceStr += " "; //add a space to the end of word
      tempStr = ""; //clear the temp string to analyze the next word
    }
  }
  sentenceStr += tempStr; //once we have gone through the last word, we add the
  //temp string to the sentence string.

  return sentenceStr;
}

console.log(reverseWords("hello")); // should log 'olleh'
console.log(reverseWords("this that")); // should log 'siht taht'