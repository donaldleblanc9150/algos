
/**
 * @param {number} idx the index of the term to return
 * @return {number} the sum of the two previous terms
 * first two terms are 0, 1
 * subsequent terms are formed by adding the previous two terms
 * Terms: 0, 1, 1, 2, 3, 5, 8, 13, 21, etc.
 * BONUS: keep track of your previous work with a default parameter
 */

function rFibonacci(idx, calculated=[0,1]) {
  if(calculated[idx]!= undefined ){return calculated[idx]}
  calculated[idx]= rFibonacci(idx-2)+ rFibonacci(idx-1)
  return calculated[idx]
}

console.log(rFibonacci(2)); // should log 1 (1 + 0)
console.log(rFibonacci(3)); // should log 2 (1 + 1)
console.log(rFibonacci(7)); // should log 13 (8 + 5)
// alternate//
function rFibonacci(idx) {

  if (idx <= 1) {
    return idx;
  }
  return rFibonacci(idx - 2) + rFibonacci(idx - 1);
}
console.log(rFibonacci(2)); // should log 1 (1 + 0)
console.log(rFibonacci(3)); // should log 2 (1 + 1)
console.log(rFibonacci(7)); // should log 13 (8 + 5)
