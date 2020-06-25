
/**
 * takes in two strings
 * returns a boolean
 * Is the second string a rotation of the first?
 * See if you can optimize once you get it working.
 */

function isRotation(str1, str2) {
  for (var i = 0; i < str1.length; i++) {
    if (str1 == str2) {
      return true;
    } else {
      str2 = rotateString(str2, 1)
    }
  }
  return false;
}

console.log(isRotation('Boris Godunov', 'dunovBoris Go'));
// should log true
console.log(isRotation('hello world', 'llo worldHe'));
// should log false