"use strict";
//tsc -init // create default configuration
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var classes_1 = require("./classes");
var Utility = __importStar(require("./functions"));
var docs = [
    new classes_1.Documentary('The Act of Killing', 2012, 'History'),
    new classes_1.Documentary('American Factory', 2019, 'Society'),
    new classes_1.Documentary('Amy', 2015, 'Biography'),
    new classes_1.Documentary('Blackfish', 2013, 'Nature'),
    new classes_1.Documentary('Bowling for Columbine', 2002, 'Politics'),
    new classes_1.Documentary('The Central Park Five', 2012, 'Crime'),
    new classes_1.Documentary('Citizenfour', 2014, 'Politics'),
    new classes_1.Documentary('The Cove', 2009, 'Nature'),
    new classes_1.Documentary('Faces Places', 2017, 'Art'),
    new classes_1.Documentary('Fahrenheit 9/11', 2004, 'Politics'),
    new classes_1.Documentary('Free Solo', 2018, 'Nature'),
    new classes_1.Documentary('Grizzly Man', 2005, 'Nature'),
    new classes_1.Documentary('Hoop Dreams', 1994, 'Sports'),
    new classes_1.Documentary('Icarus', 2017, 'Sports'),
    new classes_1.Documentary('Jiro Dreams of Sushi', 2011, 'Food'),
    new classes_1.Documentary('Man on Wire', 2008, 'History'),
    new classes_1.Documentary('March of the Penguins', 2005, 'Nature'),
    new classes_1.Documentary('My Octopus Teacher', 2020, 'Nature'),
    new classes_1.Documentary('Won\'t You Be My Neighbor?', 2018, 'Biography'),
    new classes_1.Documentary('Woodstock', 1970, 'Music'),
    new classes_1.Documentary('Baseball', 1994, 'History'),
    new classes_1.Documentary('In Pursuit of Flavor', 2022, 'Wine'),
    new classes_1.Documentary('Gumbo', 2018, 'Food'),
];
var favoriteDocs = new classes_1.Favorites();
docs.forEach(function (doc) { return favoriteDocs.add(doc); });
var firstDoc = favoriteDocs.getFirst();
favoriteDocs.printTitles();
firstDoc.printItem();
var inventory = Utility.GetAllMovies();
var favoriteMovies = new classes_1.Favorites();
inventory.forEach(function (movie) { return favoriteMovies.add(movie); });
var firstFave = favoriteMovies.getFirst();
console.log(firstFave.title + " - " + firstFave.yearReleased);
var originalMovie = favoriteMovies.find('The Great Hack');
console.log(originalMovie);
// if (originalMovie !== null) {
//   console.log(`${originalMovie.title} - ${originalMovie.yearReleased}`);
// }
