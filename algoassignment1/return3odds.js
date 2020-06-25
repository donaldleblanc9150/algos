

function printodds3(){
	for(var i=0; i<arr.length; i++){
		if(arr[i]%2 === 1 && arr[i+1]%2 ===1 && arr[i+2]%2 ===1){
			console.log("That's Odd");
		}
		if(arr[i]%2 === 0 && arr[i+1]%2 === 0&& arr[i+2]%2 ===0){
			console.log("That's Even");
	}

}

printodds3[1,5,3,7,4,6,8,9,3,2,1];