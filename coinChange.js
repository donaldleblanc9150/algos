
/**
 * takes in an integer "cents"
 * returns an object with coin denominations
 * each coin amount (starting from the highest
 * denomination) should be maximized
 * the total NUMBER of coins should be minimized
 */

function coinChange(cents) {
let coins ={
“Quarters”:0,
“Dimes”:0,
“Nickels”:0,
“Pennies”:0,
}
while(cents >= 25){
cents -= 25;
coins[“Quarters”]++;
}
while(cents >= 10){
cents -= 10;
coins[“Dimes”]++;
}
while(cents >= 5){
cents -= 5;
coins[“Nickels”]++;
}
while(cents >= 1){
cents -= 1;
coins[“Pennies”]++;
}
return coins
}

console.log(coinChange(97));

console.log(coinChange(27));
// alternate//
function coinChange(cents) {
  var newObj = {};

  newObj.quarters = Math.floor(cents / 25);
  cents %= 25;
  newObj.dimes = Math.floor(cents / 10);
   cents %= 10;
  newObj.nickels = Math.floor(cents / 5);
   cents %= 5;
  newObj.pennies = cents;

  return newObj;
}
console.log(coinChange(97));

console.log(coinChange(27));