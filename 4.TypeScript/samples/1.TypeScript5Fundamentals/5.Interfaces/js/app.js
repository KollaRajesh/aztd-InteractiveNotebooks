"use strict";
//tsc -init // create default configuration
var Performer = /** @class */ (function () {
    function Performer() {
        this.name = "";
        this.email = "";
        this.role = "";
    }
    Performer.prototype.rehearse = function (sceneNumber) {
        console.log(this.name + " is rehearsing scene number " + sceneNumber);
    };
    return Performer;
}());
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
function PrintMovieInfo(movie) {
    console.log("Title:" + movie.title);
    console.log("Year Released: " + movie.yearReleased);
    console.log("Director: " + movie.director);
}
//usage
var myMovie = {
    title: "The Green Knight",
    director: "David Lowery",
    yearReleased: 2021,
    streaming: "Amazon Prime Video",
    genre: 'Sci-fi',
    previouslyViewed: true
};
PrintMovieInfo(myMovie);
/* mymovie is having additional properties (genre,previouslyViewed) .
   those are not exists in movie type.function will accept mymovie as movie type because all propeties of movies are in mymovie.
   this is called duck type.*/
var otherMovie = {
    title: "The Green Knight",
    director: "David Lowery",
    yearReleased: 2021,
    streaming: "Amazon Prime Video"
};
PrintMovieInfo(myMovie);
var anotherMovie = {
    title: "The Green Knight",
    director: "David Lowery",
    yearReleased: 2021,
    streaming: "Amazon Prime Video",
    logReview: function (review) { return console.log("Review:" + review); }
};
PrintMovieInfo(anotherMovie);
if (anotherMovie.logReview) {
    anotherMovie.logReview('Great Drama');
}
var printReview;
printReview = function (review) { return console.log("viewer review: " + review); };
printReview('I want to see it again');
var favoriteCastMember = new Performer();
favoriteCastMember.name = 'Daisy';
favoriteCastMember.rehearse(25);
