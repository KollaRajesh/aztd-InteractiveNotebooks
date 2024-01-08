"use strict";
function showMessage() {
    var message = 'Welcome to a TypeScript app.';
    alert(message);
    var element = document.getElementById('welcome-msg');
    if (element) {
        element.innerHTML = 'Thanks for visiting!';
    }
}
