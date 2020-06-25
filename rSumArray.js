/**
 * takes in an array of numbers
 * and a default index of 0
 * returns the sum of all the elements
 */

function rSumArray(arr, i = 0) {
    function rSumArray(arr, i = 0) {
        if (i === arr.length)
            return 0;
        return arr[i] + rSumArray(arr, i + 1);
    }
}

console.log(rSumArray([1, 4, 6])); // should log 11
console.log(rSumArray([2, -4, 6])); // should log 4
console.log(rSumArray([2, -4, 6], 1)); // should log 2