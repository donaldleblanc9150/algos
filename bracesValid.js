/**
 * takes a string
 * returns a boolean
 * are the braces valid
 */

function bracesValid(str) {
    var brackets = [];
    for (var i = 0; i < str.length; i++) {
      if (str[i] === "(") {
        brackets.push(")");
      }
      if (str[i] === "[") {
        brackets.push("]");
      }
      if (str[i] === "{") {
        brackets.push("}");
      }
      if (str[i] === ")" || str[i] === "]" || str[i] === "}") {
        if (str[i] !==brackets.pop()) {
            return false;
        }
      }
    }
    return brackets.length === 0;
}

console.log(bracesValid('{[()]}')); // should log true
console.log(bracesValid('{[()}]')); // should log false
console.log(bracesValid('{[a()b]c}')); // should log true
console.log(bracesValid('{}[]()[(])')); // should log false