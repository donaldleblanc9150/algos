
/**
 * BONUS: Once done, create this version
 * returns the number of occurrences of the value
 */

function binary_search(list, item){
  var first_index = 0
  var last_index = list.length-1 
  var counter = 0 

  while(first_index<=last_index){

    var mid_index = Math.floor((first_index+last_index)/2)

    if(list[mid_index] === item){
      counter ++
      var current = mid_index-1
      while(list[current] === item){
        counter ++
        current -- 
        }
      while(list[mid_index+1]=== item){
        counter ++ 
        mid_index ++ 
        }
      }

    if(item < list[mid_index]){
      last_index = mid_index -1 }
    else{
      first_index = mid_index + 1}
    }

    return counter  
  }

console.log(binarySearchBonus([1, 2, 3, 4, 5], 3)); // should log 1
console.log(binarySearchBonus([1, 2, 4, 4, 4, 5], 4));
// should log 3