console.log("Hello!");

var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input ");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;
var winningScoreDisplay = document.querySelector("p span");

p1Button.addEventListener("click", function(){	
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore){
			p1Display.classList.add("winner");
			gameOver = true;
		}
	p1Display.textContent = p1Score;
	}
	
});

p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			p2Display.classList.add("winner");
			gameOver = true;
		}
	p2Display.textContent = p2Score;
	}
});

function reset(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
}

resetButton.addEventListener("click", function(){
	reset();
})

// a change event runs each time the value changes
numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = numInput.value; //numInput.value 
	//takes the numerical value of what was inputted on the page
	winningScore = Number(numInput.value); //Number() is converting numInput.value to a number
	// as it is being pulled as a string, which won't work.
	reset();

})