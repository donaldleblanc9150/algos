
/**
 * takes in two equal-length arrays
 * returns an object
 * with the elements from the first as keys
 * and the elements from the second as values
 */

function zipArrayIntoMap(arr1 , arr2){
// if(arr1.length != arr2.length){
// return
// }
var obj= {}
for( var i = 0 ; i < arr1.length ; i++){
obj[arr1[i]] = arr2[i]
}
return obj
}

console.log(zipArraysIntoMap(['some', 'thing'], ['other', 'stuff']));
// should log { some: 'other', thing: 'stuff' }