
/**
 * takes in a sorted array of numbers
 * and a search value
 * returns a boolean
 * 
 * Is the given value in the array?
 * DON'T ITERATE THROUGH THE ENTIRE ARRAY
 */

function binarySearch(arr, val) {
    let begin=0, end=arr.length-1; 

    // create a begin & end variable, run the loop if begin is <= end
    while (begin<=end){ 
        // set a mid variable and round down
        let mid=Math.floor((begin + end)/2); 
        // If the index val of mid is equal to val, return True 
        if (arr[mid]===val){
            return true;
        }  
        // look in the right half
        else if (arr[mid] < val){  
            begin = mid + 1;
        } 
        // look in the left half
        else{
             end = mid - 1;
        }

    } 

    return false; 
  }

console.log(binarySearch([1, 2, 3, 4, 5], 3)); // should log true
console.log(binarySearch([1, 2, 4, 5], 3)); // should log false
console.log(binarySearch([1, 2, 4, 5, 6, 7, 9], 3));
// should log false