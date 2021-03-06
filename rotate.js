// Write a function that is given a string and a number, and returns the string rotated to the 
// right that many times

// EXAMPLE: rotate("hello world", 3) would return "rldhello wo", because you've essentially
// shifted the string to the right 3 times, and the text at the end "wrapped around" for the
// rotation
function rotate(string, num){
    // This modulo calculation makes it so we don't need to figure out a way
    // to handle rotating a string a number of times greater than the string's length.
    // Plus, even if we did find a way to do that, we'd essentially be wasting computational
    // time.
    num %= string.length;
    // Let's initialize a newstring variable
    let newstring = "";
    // Let's go from the character num-characters-from-the-end of the string to the end of the string
    for(let i = string.length-num; i < string.length; i++){
        // and add each character to the new string
        newstring += string[i];
    }
    // then, starting at the beginning of the original string, we add each character up to the num-characters-from-the-end
    // character
    for(let i = 0; i < string.length-num; i++){
        // and add each character to the new string
        newstring += string[i];
    }

    // and return it cuz its done.
    return newstring;
}
console.log(rotateString('Boris Godunov', 5));
  // should log 'dunovBoris Go'
console.log(rotateString('this', 5)); // should log 'sthi'


// Write a function that will take 2 strings (oString and tString, for original string and test string),
// and return a boolean based on whether or not tString is a rotated version of oString

// EXAMPLE: isRotation("hello world", "rldhello wo") would return true, because, as we saw in the previous
// algorithm, "hello world", rotate right 3 spots, returns "rldhello wo"
function isRotation(oString, tString){
    // Super quick check: If the strings aren't the same length, tString can't possibly be a rotated version of oString
    if(oString.length != tString.length) {
        return false;
    }
    
    // Basically, what we're going to do is check if oString rotated i number of times matches tString, where i 
    // is going to be each number from 0 to the length of the string.
    for(let i = 0; i < oString.length; i++) {
        // If at any point, tString matches the rotated version of oString, we return true
        if(tString == rotate(oString, i)) {
            return true;
        }
    }
    // If we did all that and didn't return true, they must not be the same string rotated.
    return false;
}
console.log(rotateString('Boris Godunov', 5));
  // should log 'dunovBoris Go'
console.log(rotateString('this', 5)); // should log 'sthi'
