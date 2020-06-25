function bubblesort(arr){

	for(var i=0; i<arr.length; i++){
		var count = 0
		var isSorted = false;
	while(isSorted === false){
		isSorted = true;
		count++;
		for(var j = 0; j < array.length; j++) {
			if(arr[j] > arr[j+1]){
				isSorted = false;
				var temp = arr[j];
				arr[j] = arr[j];
				arr[j+1] = temp;
			}
		}
	}
	console.log(arr)
	console.log(count)
}

bubbleSort([9,1,2,3,4,5])
bubbleSort([8,8,7,6,5,4,3,2,1])


//[9,1,2,3,4,5]