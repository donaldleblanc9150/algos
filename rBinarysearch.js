/**
 * takes in a SORTED array
 * and a value to find
 * returns a boolean
 * Is the value in the array?
 * BONUS: Do it without slice
 */

function rBinarySearch(arr, val) {
  var middle = Math.floor(arr.length / 2)

  if(arr.length === 0){ 
    return false;}

  if(val === arr[middle]){ 
    return true;}

  if(val < arr[middle]){
     return rBinarySearch(arr.slice(0, middle), val);}


  return rBinarySearch(arr.slice(middle + 1), val);

}
console.log(rBinarySearch([1, 2, 3, 4, 5], 3)); // should log true
console.log(rBinarySearch([1, 2, 4, 5], 3)); // should log false
