function sing() {
	console.log("twinkle twinkle")
	console.log("how I wonder")
}

 //setInterval(sing, 1000) will run the sing function every
 // 1000 milliseconds

 // "//setInterval" is an example of a "higher order function"
 // because it calls another function inside it.


// However, instead of calling another defined function inside "setInterval",
// you can insert an "anonymous function" that is defined within it

// ex: 

// setInterval(function(){
// 	console.log("I'm awesome");
// 	console.log("You're awesome");
// }, 2000);