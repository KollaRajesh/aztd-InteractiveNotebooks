"use strict";
//tsc -init // create default configuration
function GetAllMovies() {
    return [
        { title: "The French Dispatch", director: "Wes Anderson", yearReleased: 2021, streaming: "Disney+" },
        { title: "The Power of the Dog", director: "Jane Campion", yearReleased: 2021, streaming: "Netflix" },
        { title: "Dune", director: "Denis Villeneuve", yearReleased: 2021, streaming: "HBO Max" },
        { title: "The Lost Daughter", director: "Maggie Gyllenhaal", yearReleased: 2021, streaming: "Netflix" },
        { title: "The Tragedy of Macbeth", director: "Joel Coen", yearReleased: 2021, streaming: "Apple TV+" },
        { title: "The Last Duel", director: "Ridley Scott", yearReleased: 2021, streaming: "Hulu" },
        { title: "The Humans", director: "Stephen Karam", yearReleased: 2021, streaming: "Showtime" },
        { title: "The Velvet Underground", director: "Todd Haynes", yearReleased: 2021, streaming: "Apple TV+" },
        { title: "The Souvenir Part II", director: "Joanna Hogg", yearReleased: 2021, streaming: "Amazon Prime Video" },
        { title: "The Green Knight", director: "David Lowery", yearReleased: 2021, streaming: "Amazon Prime Video" }
    ];
}
function GetTitles(director, streaming) {
    var allMovies = GetAllMovies();
    var searchResults = [];
    if (typeof streaming !== undefined) {
        for (var _i = 0, allMovies_1 = allMovies; _i < allMovies_1.length; _i++) {
            var movie = allMovies_1[_i];
            if (movie.director === director && movie.streaming === streaming) {
                searchResults.push(movie.title);
            }
        }
    }
    else {
        for (var _a = 0, allMovies_2 = allMovies; _a < allMovies_2.length; _a++) {
            var movie = allMovies_2[_a];
            if (movie.director === director) {
                searchResults.push(movie.title);
            }
        }
    }
    return searchResults;
}
function CreateMovieID(name, id) {
    return name + id;
}
//usage
var movies = GetTitles('Jane Campion', 'Netflix');
movies.forEach(function (title) { return console.log(title); });
var x;
var newID = CreateMovieID('Jettle', 10);
console.log(newID);
var IDGenerator;
IDGenerator = CreateMovieID;
var newID2 = IDGenerator('Jettle', 15);
console.log(newID2);
IDGenerator = function (name, id) { return name + id; };
var newID3 = IDGenerator('Jettle', 20);
console.log(newID3);
