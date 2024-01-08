"use strict";
//tsc -init // create default configuration
function GetReview(title) {
    if (title == 'aqua man') {
        return 'avengers movie';
    }
    else {
        return Math.floor(Math.random() * 10);
    }
}
var Title = 'spider man';
var review = GetReview(Title);
console.log("Movie title: " + Title);
if (typeof (review) == 'string') {
    console.log("review:" + review);
}
else {
    console.log("rating:" + review + "/10 ");
}
