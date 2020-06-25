//move all zeros to the end of the array without changing the order

function moveZeros(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - 1; j++) {
            if (arr[j] === 0) {
                arr[j] = arr[j + 1];
                arr[j + 1] = 0;
            }
        }
    }
    return arr;
}
//O(n^2) time


function moveZeros(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] == 0) {
            arr.splice(i, 1);
            arr.push(0);
        }
    }
    return arr;
}

function moveZeros(arr) {
    var swap = 0
    for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] == 0) {
            arr.splice(i, 1);
            arr.push(0);
        }
    }
    return arr;
}

//O(n) time

//arr = [1,2,3,0,4,0,5,0,6,7,0,8,9]