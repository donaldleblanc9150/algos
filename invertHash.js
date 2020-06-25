
/**
 * takes in an object
 * returns a new object
 * with the keys as values and values as keys
 * 
 * to iterate through an object's keys: for(var key in obj)
 * to get the value: obj[key]
 */

function invertHash(obj) {
  var myObj = 
  {
  }
  for (var key in obj)
  {
    myObj[obj[key]] = key;
    //myObj[key] = obj[key];
    //myObj[obj[key]] = obj[key];
    // myObj[obj[key]] = obj[myObj[key]];
  }
  return myObj;

}

console.log(invertHash({ someKey: 'someVal' })); // should log { someVal: 'someKey' }
console.log(invertHash({
  key1: 'val1',
  key2: 'val2'
})); // should log { val1: 'key1', val2: 'key2' }
