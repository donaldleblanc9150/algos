function tip(bill){
	console.log(bill * 1.20);
	return bill*1.2;
}

var thaiFood = 150;
var group = 4;
// a function call is euqal to whatever that function returns
var total = tip(thaiFood);
console.log(total/4)