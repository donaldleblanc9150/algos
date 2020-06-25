// Write a function that, given a string, will encode it. When I say encode, what I mean is,
// for every set of the same character found consecutively, replace it with the character followed
// by the number of times that character is in a row. 

// EXAMPLE: "hello goodbye" would be encoded and returned as "hel2o go2dbye"

// function encodeString(string){
// 	let newString = "";
// 	let char = string[0];
// 	let count =1;
// 	for (let i=1; i < string.length; i++){
// 		if(string[i]==char){
// 			count++;
// 		}else{
// 			newString += char;
// 			if(count >1){
// 				newString += count;
// 			}
// 			count = 1;
// 			char = string[i];
// 		}
// 		newString += char;
// 			if(count >1){
// 				newString += count;
// 			}
// 			count = 1;
// 			char = string[i];
// 	}
// 	return newString;
// }
// console.log(encodeString("hello goodbye"))

// Write a function that takes a previously encoded string and returns it to what it used to be.

// EXAMPLE: "he3llo world" would be returned as "heeello world"

function decodeString(string) {
	let newString = "";
	for (let i=0; i<string.length; i++){
		if(!isNaN(string[i]) && string[i] != ""){
			for(let j = 0; j< string[i]; j++){
				newString+= string[i-1];
			}
		}else{
			newString += string[i];
		}
	}
	return newString;
    
}
console.log(decodeString("he3llo world"))