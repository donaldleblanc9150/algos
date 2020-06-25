function trim(str) {
  // iterate through string. when charAt() !== " ", concatenate on to newStr
  var newStr = "";
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) !== " ") {
      break;
    }
  }
  for (var j = str.length - 1; j >= i; j--) {
    if (str.charAt(j) !== " ") {
      break;
    }
  }
  for (var k = i; k <= j; k++) {
    newStr += str.charAt(k);
  }
  return newStr;
}
// needs OR statements for different white space characters
console.log(trim('  this   ')); // should log 'this'
console.log(trim('        multiline')); // should log 'multiline'
console.log(trim('this that')); // should log 'this that'