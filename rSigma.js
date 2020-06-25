
/**
 * takes in a number
 * returns the sum of integers from 1
 * up to and including the number
 */
function rSigma(num) {
    // your code here
    if (num <= 1) {
        return num;
    }
    return num + rSigma(num - 1);
}
console.log(rSigma(4)); // should log 10 (1 + 2 + 3 + 4)
console.log(rSigma(5)); // should log 15 (1 + 2 + 3 + 4 + 5)