"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrintMovieInfo = exports.GetAllMovies = void 0;
function GetAllMovies() {
    return [
        { title: 'The Shawshank Redemption', director: 'Frank Darabont', yearReleased: 1994, streaming: true },
        { title: 'The Godfather', director: 'Francis Ford Coppola', yearReleased: 1972, streaming: false },
        { title: 'The Godfather: Part II', director: 'Francis Ford Coppola', yearReleased: 1974, streaming: true },
        { title: 'The Dark Knight', director: 'Christopher Nolan', yearReleased: 2008, streaming: false },
        { title: '12 Angry Men', director: 'Sidney Lumet', yearReleased: 1957, streaming: true },
        { title: 'Schindler\'s List', director: 'Steven Spielberg', yearReleased: 1993, streaming: true },
        { title: 'The Lord of the Rings: The Return of the King', director: 'Peter Jackson', yearReleased: 2003, streaming: false },
        { title: 'Pulp Fiction', director: 'Quentin Tarantino', yearReleased: 1994, streaming: true },
        { title: 'The Good, the Bad and the Ugly', director: 'Sergio Leone', yearReleased: 1966, streaming: true },
        { title: 'Forrest Gump', director: 'Robert Zemeckis', yearReleased: 1994, streaming: false },
        { title: 'Inception', director: 'Christopher Nolan', yearReleased: 2010, streaming: true },
        { title: 'The Lord of the Rings: The Fellowship of the Ring', director: 'Peter Jackson', yearReleased: 2001, streaming: true },
        { title: 'The Lord of the Rings: The Two Towers', director: 'Peter Jackson', yearReleased: 2002, streaming: false },
        { title: 'Star Wars: Episode V - The Empire Strikes Back', director: 'Irvin Kershner', yearReleased: 1980, streaming: true },
        { title: 'The Matrix', director: 'Lana Wachowski, Lilly Wachowski', yearReleased: 1999, streaming: true },
        { title: 'Goodfellas', director: 'Martin Scorsese', yearReleased: 1990, streaming: false },
        { title: 'One Flew Over the Cuckoo\'s Nest', director: 'Milos Forman', yearReleased: 1975, streaming: true },
        { title: 'Se7en', director: 'David Fincher', yearReleased: 1995, streaming: true },
        { title: 'The Silence of the Lambs', director: 'Jonathan Demme', yearReleased: 1991, streaming: false },
        { title: 'It\'s a Wonderful Life', director: 'Frank Capra', yearReleased: 1946, streaming: true },
        { title: 'A New Hope', director: 'George Lucas', yearReleased: 1977, streaming: true },
        { title: 'The Empire Strikes Back', director: 'Irvin Kershner', yearReleased: 1980, streaming: false },
        { title: 'Return of the Jedi', director: 'Richard Marquand', yearReleased: 1983, streaming: true },
        { title: 'The Phantom Menace', director: 'George Lucas', yearReleased: 1999, streaming: false },
        { title: 'Attack of the Clones', director: 'George Lucas', yearReleased: 2002, streaming: true },
        { title: 'Revenge of the Sith', director: 'George Lucas', yearReleased: 2005, streaming: true },
        { title: 'The Force Awakens', director: 'J.J. Abrams', yearReleased: 2015, streaming: false },
        { title: 'The Last Jedi', director: 'Rian Johnson', yearReleased: 2017, streaming: true },
        { title: 'The Rise of Skywalker', director: 'J.J. Abrams', yearReleased: 2019, streaming: true }
    ];
}
exports.GetAllMovies = GetAllMovies;
function GetReview(title) {
    if (title == 'A New Hope') {
        return 'An instant classic!';
    }
    else {
        return Math.floor(Math.random() * 10);
    }
}
function PrintMovieInfo(movie) {
    console.log("Title: " + movie.title);
    console.log("Year Released: " + movie.yearReleased);
    console.log("Director: " + movie.director + "\n");
}
exports.PrintMovieInfo = PrintMovieInfo;
function GetTitles(director, streaming) {
    var allMovies = GetAllMovies();
    var searchResults = [];
    if (streaming !== undefined) {
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
