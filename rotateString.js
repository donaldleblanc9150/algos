
/**
 * takes in a string and a number
 * returns a new string with the characters
 * rotated to the left by the given number
 * Note: the number can be greater than the string length
 */

function daMove(str){ // create a new function 
    str = str[str.length-1]+ str; // move the last index value to the front of the string
    str = str.slice(0, -1); // remove the last index value
    return str;
    }


function rotateString(str, num) {               
    num = num%str.length; // to be more efficient so we dont have to loop through twice

    for(var i = 0 ; i <num ; i++){ // create a forloop
      str = daMove(str); // call the daMove function = num times
      }
    return str;
  }



  console.log(rotateString('Boris Godunov', 5));
  // should log 'dunovBoris Go'
  console.log(rotateString('this', 5)); // should log 'sthi'

  // alternate//

  function rotateString(str, num) {
  num %= str.length;
  // define new str
  let newstr="";
  //from num number cer from the end of str to the end of str
  for (let i =str.length-num; i<str.length; i++){
    //add to the new str this gives the new str the end of old str
    newstr += str[i];
  }
  //now we need the strt of the old str
  for (let i=0; i<str.length-num;i++){
    //add to new str
    newstr += str[i]
  }


  return newstr;
}

console.log(rotateString('Boris Godunov', 5));
// should log 'dunovBoris Go'
console.log(rotateString('this', 5)); // should log 'sthi'