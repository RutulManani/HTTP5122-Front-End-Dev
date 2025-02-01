var movieFirst = "Fast and Furious";
var movieSecond = "Avengers";
var movieThird = "Harry Potter";
var movieFourth = "The Godfather";
var movieFifth = "Spiderman";
var movieSixth = "Conjuring";
var movieSeventh = "Interstellar";

var topMovies = ["Avengers", "Interstellar", "Harry Potter", "Conjuring", "The Godfather", "Fast and Furious", "Spiderman"];

var userIn;
while (true) {
    userIn = prompt("Which top 7 movie would you like?", "Pick a number: 1-7");


    if (userIn === null) {
        alert("Cancelled!");
        break;
    }

    var movieNum = parseInt(userIn);

    if (!isNaN(movieNum) && movieNum >= 1 && movieNum <= 7) {
        alert("Number " + movieNum + " on the list is " + topMovies[movieNum - 1]);
        break;
    } else {
        alert("Please enter a number between 1 and 7!");
    }
}

for (var i = 0; i < topMovies.length; i++) {
    console.log("Movie " + (i + 1) + ": " + topMovies[i]);
}
