
/**
 * takes in an array of integers
 * returns either a number or an array
 * 
 * if one number shows up with the highest frequency, return it
 * if all numbers show up the same number of times, return []
 * if multiple numbers have the same frequency, return them in an array
 */

function findAllModes(arr){
var count = {};
var max = 0;
    for (var i in arr) {
      count[arr[i]] = (count[arr[i]] || 0) + 1;
      if (count[arr[i]] > max) { 
        max = count[arr[i]];
      }

    }
    var result = [];
    for (var j in count){
      if (count[j] == max){
        result.push(+j);
      }
    }
    if(result.length == 1){
      return result[0];
    }
    if(result.length == arr.length){
      return [];
    }
return result;
}
console.log(findAllModes([1, 2, 3, 4])); // should log []
console.log(findAllModes([1, 1, 3, 4])); // should log 1
console.log(findAllModes([1, 1, 3, 4, 4])); // should log [1, 4]