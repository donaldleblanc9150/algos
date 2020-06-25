// Only handles uninterrupted strings (i.e. no spaces) 
function isPalindrome(string){

    // Looping through from the start to the middle of the string
    for(let i = 0; i < string.length/2; i++) {
        //Check if the i from the beginning character is the same as the i from the end
        if(string[i] != string[string.length-1-i]) {

            // If not, it's not a palindrome
            return false;
        }
    }
    return true;
}
/* Mini-walkthrough */

// tacocat
// ^     ^ 
//  are these the same?

// tacocat
//  ^   ^
//   are these the same?

// tacocat
//   ^ ^
//    are these the same?

// tacocat
//    ^
// That's the middle, it's a palindrome!


