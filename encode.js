
/**
 * takes in a string
 * returns a new string
 * with the original "compressed"
 * if the "compressed" version IS NOT shorter,
 * return the original
 */

function annoying(str1 , str2){
  if(str1.length < str2.length ){
    return str1}
    else {
      return str2}
  }

function encode(str) {
  var res = ""
  for (var i = 0 ; i < str.length; i++){
      var count = 1; 
      while(str[i]===str[i+1]){
          i++
          count ++ 
          if(i+1 === str.length){break}
      }
      res += str[i] + count
    }

  return annoying(res , str)

}

console.log(encode('aabbbbbb')); // should log 'a2b6'
console.log(encode('abbbbbbbbbb')); // should log 'a1b10'
console.log(encode('abbbaa')); // should log 'abbbaa'
console.log(encode('abc')); // should log 'abc'