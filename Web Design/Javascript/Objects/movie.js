var movies = [
	{
	title: "Kill Bill",
	rating: 5,
	watched: true
	},
	{
	title: "Ever After",
	rating: 3,
	watched: false
	},
	{
	title: "Men in Black",
	rating: 1,
	watched: true
	},
	{
	title: "Boxtrolls",
	rating: 4,
	watched: true
	},

]

// This wasmy answer:

// function hasWatched(i){
// 	if(i == true){
// 		return "You have watched";
// 	}
// 	else if(i == false){
// 		return "You have not watched";
// 	}
// };

// for(var i = 0; i < movies.length; i++){
// 	console.log(hasWatched(movies[i].watched) + " " + movies[i].title + " - " + movies[i].rating + " stars")
// };

// For a more efficient answer using forEach without 
// a huge console.log:

// movies.forEach(function(movie){
// 	var result = "You have "
// 	if(movie.watched){
// 		result += "watched ";		
// 	} else {
// 		result += "not seen ";
// 	}
// 	result += "\"" + movie.title + "\" - ";
// 	result += movie.rating + " stars";
// 	console.log(result);

// })


//My result with adding extra after "stars" for added
// emotion:

// movies.forEach(function(movie){
// 	var result = "You have "
// 	if(movie.watched){
// 		result += "watched ";		
// 	} else {
// 		result += "not seen ";
// 	}
// 	result += "\"" + movie.title + "\" - ";
// 	result += movie.rating + " stars";
// 	if (movie.rating === 5){
// 		result += "!!!"
// 	} else if(movie.rating === 1){
// 		result += " :(."
// 	}
// 	else {
// 		result += "."
// 	}
// 	console.log(result);

// })


// to clean up the code, put everything under "movies.forEach(function(movie)" 
// in it's own function, add "return result;" at the end, 
// and put that function under the forEach loop, as such:

function buildString(movie){
	var result = "You have "
	if(movie.watched){
		result += "watched ";		
	} else {
		result += "not seen ";
	}
	result += "\"" + movie.title + "\" - ";
	result += movie.rating + " stars";
	if (movie.rating === 5){
		result += "!!!"
	} else if(movie.rating === 1){
		result += " :(."
	}
	else {
		result += "."
	}
	return result;

}

// I put the forEach loop in a function so I can run it at will:
function runResult(){
	movies.forEach(function(movie) {
		console.log(buildString(movie));
	});
}