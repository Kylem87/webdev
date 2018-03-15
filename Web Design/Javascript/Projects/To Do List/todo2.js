window.setTimeout(function() {
var todos = ["Buy New Turtle"];


  // put all of your JS code from the lecture here
	var input = prompt("What would you like to do?");

	
		while(input !== "quit") {
			//handle input
			if(input === "list") {
				listTodos();
		}	else if(input === "new") {
				addTodo();
		}	else if(input === "delete"){
				deleteTodo();
		}
		// instead of writing all of the functions in the above while loop,
		// the functions were instead defined at the bottom of the page as to not
		// clutter the loop and to make it more readable.
			//ask again for new input
			input = prompt("What would you like to do?");

		}
		console.log("OK, YOU QUIT THE APP")
	




function listTodos(){
	console.log("*****")
	todos.forEach(function(todo, i) {
	//todos.forEach(function(todo) {
		//console.log(todos.indexOf(todo) + ". " + todo);
		// You could use the code above to print the index 
		// before the item, but instead, you can add another argument
		// in the anonymous function to call the index so you don't have to
		// write todos.indexOf(todo) to pull the index.
		// The first argument (todo) calls the item, the second (i) calls the index
		console.log(i + ": " + todo);
	});
	console.log("*****")
}

function addTodo(){
	//ask for a new todo
	var newTodo = prompt("Enter new todo");
	//add to todos array
	todos.push(newTodo);
}

function deleteTodo(){
	//ask for index of todos to be deleted
	var index = prompt("Enter index of todo to delete");
	// delete that todo by using splice()
	// splice(index, #), where "index" is the index in the array you
	// want to delete and "#" is the amount of items you want to delete
	// starting with that index.
	var index2 = todos.splice(index,1);
	console.log(index2 + " REMOVED!");
}
}, 500);