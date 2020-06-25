/**
 * takes in an array and a separator string
 * returns a string connecting all the array
 * elements with the given separator
 */

function join(arr, separator) {
  var str = ""
  for (var i = 0 ; i < arr.length-1; i++){
    str += arr[i] + separator 
    }
  return str + arr[arr.length-1]
}

console.log(join(['a', 'b', 'c'], '|')); // should log 'a|b|c'
console.log(join(['a', 'b', 'c', 'd'], '? ')); // should log 'a? b? c? d'
console.log(join(['a', 'b', 'c'], ',,')); // should log 'a,,b,,c'