/**
 * takes in two strings
 * returns a boolean
 * are the two strings equal irrespective of case
 */

function caseInsensitiveStringCompare(str1, str2) 
{
    if (str1.toUpperCase === str2.toUpperCase)
        return true;
    else{
        return false;
    }
}

console.log(caseInsensitiveStringCompare('This', 'this'));
// should log true
console.log(caseInsensitiveStringCompare('this', 'that'));
// should log false