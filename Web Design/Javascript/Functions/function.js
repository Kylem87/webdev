// The below function will return "True" if the number is 
// even or "False" if not:

// function isEven(number) {
// 	if(number % 2 === 0) {
// 		return true;
// 	}
// 	else {
// 		return false;
// 	}
//   }

// HOWEVER, there is a much simpler way of typing this:

function isEven(number) {
	return number % 2 === 0;
}

// With the above function, instead of using if/else statements to determine what
// gets returned, simply saying "return number % 2 === 0;" will make the
// function ONLY return numbers that satisfy the boolean statement.


// The following functions will return the factorial of a number:

function factorial(num){
	// define a result variable
	var result = 1;
	//calculate factorial and store value in result
	for(var i = 2; i <= num; i++){
			result = result * i; // or "result *= i"
		}
		//note that "i" is set to start at 2 instead of 1, because 1 x 1
	// is reduntant and not needed at the beginning of the factorial.
	// ex: "1 x 2 x 3 x 4" is the same as "2 x 3 x 4".
		return result;
}



// If you wanted to use an "if" statement, you would do it like this:

// function factorial(num) {
//   if (num < 0) 
//         return -1;
//   else if (num == 0) 
//       return 1;
//   else {
//       return (num * factorial(num - 1));
//   }
// }

function kebabToSnake(word) {
	var res = word.replace(/-/g, "_");
	return res;
}