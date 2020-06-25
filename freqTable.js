
/**
 * takes in a string
 * returns an object
 * with characters as keys
 * and the number of occurrences as values
 * 
 * how to determine if property is in object:
 * var obj = { someProp: 'some val' }
 * obj.hasOwnProperty('someProp') returns true
 */

function freqTable(str) {
  var res = {}
  for(var i = 0 ; str.length ; i++ ){
    if(res.hasOwnProperty(str[i])){
        res[str[i]] ++   
    }
    else{
      res[str[i]] = 1
    }
  } 
}

  console.log(freqTable('abac')); // logs { a: 2, b: 1, c: 1 }
  console.log(freqTable('deffd')); // logs { d: 2, e: 1, f: 2 }