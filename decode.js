
/**
 * takes in a string
 * returns a new string
 * with the original "expanded"
 * 
 * parseInt('a') returns NaN
 * parseInt('5') returns 5
 * isNaN('c') returns true
 * isNaN(5) returns false
 */

function decode(str) {
    var newStr = "";
    var cntStr = "";
    for (var i = str.length -1; i >= 0; i--){
        if (isNaN(str[i])){
            var cnt = parseInt(cntStr);
            newStr =str[i].repeat(cnt) + newStr;
            cntStr = "";
        } else {
            cntStr = str[i].toString() + cntStr;
        }
    }

    return newStr;

}

console.log(decode('a2b6')); // should log 'aabbbbbb'
console.log(decode('a1b10')); // should log 'abbbbbbbbbb'