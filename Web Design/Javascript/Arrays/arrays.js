// function numberreverse() {
// 	var reverse = [1,2,3,4]

// 	for(var i = 0; i <= reverse.length; i++ ) {
// 		console.log(reverse[reverse.length - i])
// 	}
// }

// function letterreverse() {
// 	var reverse = ["a","b","c","d"]

// 	for(var i = 0; i <= reverse.length; i++ ) {
// 		console.log(reverse[reverse.length - i])
// 	}
// }

function printReverse(arr){
	for(var i = arr.length -1; i >= 0; i--) {
		console.log(arr[i]);
	}
}


// isUniform starts

function isUniform(arr){
	var first = arr[0]
	for(var i = 1; i < arr.length; i++){
		if(arr[i] !== first){
			return false
		}
	}
	return true
}


function sumArray(arr){
	var sum = 0
	arr.forEach(function(element){
		sum += element;
	});
	return sum;
}


// If you wanted to do the above with a while loop:
// function sumArray(arr){
// 	var sum = 0;
// 	var i = 0;
// 	while(i < arr.length){
// 		var sum = sum + arr[i];
// 		i++;
// 	}
// 	return sum;
// }

// The above works, but the forEach loop is more efficient.




function maxArray(arr){
	var max = arr[0]
	for(var i = 1; i < arr.length; i++){
		if(arr[i] >= max){
			max = arr[i];
		}
	}
	return max;
}