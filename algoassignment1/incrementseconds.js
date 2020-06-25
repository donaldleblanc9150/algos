

function incrSeconds(arr){
	for(var i=1 ;i<arr.length; i+=2){
		arr[i]++;

	}
	console.log(arr)
}

incrSeconds([1,5,3,7,4,6,8,9,3,2,1]);