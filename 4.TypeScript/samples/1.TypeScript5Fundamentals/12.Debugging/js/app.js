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
var sportsDoc = new classes_1.Documentary('Baseball', 1994, 'History');
sportsDoc.printItem();
var allMovies = Utility.GetAllMovies();
// log top 3 movies
for (var i = 0; i < 3; i++) {
    console.log("Rank " + (i + 1) + ": " + allMovies[i].title);
}
