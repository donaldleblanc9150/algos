// Write a function that will take an array of numbers, and return the
// sum of all unique numbers in that array. Hint: Use a frequency table!

// A frequency table is a dictionary where, in each key-value pair, 
// the key is the item in the array, and the value is the number of times
// that thing appears

// EXAMPLE: [1,3,3,6,6,7,8,10] will return 26 because 1+7+8+10 = 26

function sumUniques(array) {
    var unique = {};
    var sumvar = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] in unique) {
            unique[array[i]]++;
        } else unique[array[i]] = 1;
    }
    for (let key in unique) {
        if (unique[key] == 1) {
            sumvar = key + sumvar;
        }

    }

    return sumvar

    console.log(unique)
}
sumUniques([1, 3, 3, 6, 6, 7, 8, 10])
console.log(sumUniques([1, 3, 3, 6, 6, 7, 8, 10]))

