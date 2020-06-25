
/**
 * takes in two arrays of objects
 * returns the current inventory after
 * updating it with the new inventory
 * new items get added; existing items have quantities changed
 */

function updateInventory(newInv, currentInv) {
  var namesToIndices = {};
  for(var i = 0; i < currentInv.length; i++) {
    namesToIndices[currentInv[i]['name']] = i;
  }

  for(var j = 0; j < newInv.length; j++) {
    var name = newInv[j]['name'];

    if(namesToIndices.hasOwnProperty(name)) {
      var currentInvItem = currentInv[namesToIndices[name]];
      currentInvItem['quantity'] += newInv[j]['quantity'];
    } else {
      currentInv.push(newInv[j]);
    }
  }

  return currentInv;
}
console.log(updateInventory([
  {
    name: 'item',
    quantity: 1
  }
], [
  {
    name: 'item',
    quantity: 2
  }
])); // should log [{ name: 'item', quantity: 3 }]

console.log(updateInventory([
  {
    name: 'item',
    quantity: 1
  }
], [
  {
    name: 'other item',
    quantity: 2
  }
])); // should log [{ name: 'item', quantity: 1 }, { name: 'other item', quantity: 2 }]