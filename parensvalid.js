// Write a function that, when passed a string, determines whether or not the 
// parentheses in the string are in a valid configuration


// EXAMPLE: parensValid("I think (it's spring)") would be valid, because the closing
// parentheses comes after the open parentheses.
// parensValid("I don't ) know how these work") would be invalid, because there is no
// open parentheses prior to the closing parentheses
function parensValid(string){
    // For this algorithm, we're going to use an array to keep track of our opening parentheses
    let check = [];

    // Now let's loop through the string we were given
    for(let i = 0; i < string.length; i++) {

        // We'll check if each character is an opening parentheses
        if(string[i] == "(") {
            // if it is, let's push it into our check array
            check.push(string[i]);
        }
        // Otherwise, let's check 2 things. 1) if the character is a closing parentheses and
        // 2) if the check array has any previously found open parentheses

        // If we have not found any open parentheses before, then a closing parentheses means 
        // we have an invalid parentheses configuration
        else if (string[i] == ")" && check.length == 0) {
            // And so, we exit out of everything and call it a day.
            return false;
        }
        // If we HAVE found an open parentheses before, than we have a valid open and close pair,
        // so we can remove the previous open parentheses from our check array.
        else if (string[i] == ")" && check.length > 0 ) {
            check.pop();
        }
    }

    // If, after iterating through the entire string, we STILL have something in our check array, that means
    // we have open parentheses that were never closed!
    if(check.length > 0) {
        // So we say no!
        return false;
    }
    // If that check array is, in fact, empty, then we have a valid parentheses configuration
    else {
        // Hurray!
        return true;
    }
}
console.log(parensValid('(()))')); // should log false
console.log(parensValid('((some)a)')); // should log true
console.log(parensValid(')(')); // should log false
console.log(parensValid('()()')); // should log true

