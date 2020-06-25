/* BASIC FOUNDATION II */

/* (1) Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5]. */

printOneReturnAnother[1,32,3,45,9];
function printOneReturnAnother(arr){

for(var i=0; i<arr.length; i++){
        if(arr[i]%2=== 1){
            console.log(arr[arr.length-2]);
            return arr[i];
        }
    }
}
console.log(printOneReturnAnother([1,32,3,45,9]));
