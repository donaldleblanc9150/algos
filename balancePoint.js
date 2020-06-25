
/**
 * takes in an array of numbers
 * returns a boolean
 * Is there a point between indices
 * where the summed values on each side are equal?
 */

function balancePoint(arr) {
    if(arr.length < 2){
        return false;
    }

    let sumLeft = arr[0];
    let sumRight = 0;
    for(let i = 1; i < arr.length; i++){
        sumRight += arr[i];
    }
    for(let j = 1; j < arr.length; j++){
        if(sumLeft == sumRight){
            return true;
        }
        sumLeft += arr[j];
        sumRight -= arr[j];
    }
    return false;


}

console.log(balancePoint([1, 2, 3, 4])); // should log false
console.log(balancePoint([3, 4, 2, 5]));
console.log(balancePoint(4,5,8,11));
console.log(balancePoint(1));