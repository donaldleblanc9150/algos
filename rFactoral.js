
/**
 * @param {number} num
 * @return {number}
 * the result of multiplying the number by all
 * the preceding numbers down to 1
 */

function rFactorial(num) {
  if(num == 0 || num == 1){
    return 1
    }
    var ans =  num * rFactorial(num+(-1)*(num/Math.abs(num)))
  return ans
}

console.log(rFactorial(5)); // should log 120 (5 x 4 x 3 x 2 x 1)
console.log(rFactorial(4)); // should log 24 (4 x 3 x 2 x 1)
console.log(rFactorial(0)); // should log 1 (only 1 way to make 0 - multiplying 0 by any other number)
