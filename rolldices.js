//named function with local variables
//changes backgroundcolor on reload 
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var result = "rgb(" + r + "," + g + "," + b + ")";
    document.body.style.background = result;
}
// the functio get the names and outputs them in header


function getNames() {
    //local variables
    var player1 = prompt("Player 1 please enter youre Name!", "");
    var player2 = prompt("Player 2 please enter youre Name!", "");
    if (player1 != null && player2 != null) {
        document.getElementById("names").innerHTML = player1 + " vs. " + player2;
    }
}
//3 random nr. for player1 storrind values in array
//declaring global variables, so they can de used in other functions
var a = Math.floor(6 * Math.random()) + 1;
var b = Math.floor(6 * Math.random()) + 1;
var c = Math.floor(6 * Math.random()) + 1;
var result1 = [a, b, c];
//calculating sum using Typeconversion
var sum1 = Number(a) + Number(b) + Number(c);

function rolldice() {

    document.getElementById("randomDice").innerHTML = result1;
    document.getElementById("sum1").innerHTML = sum1;
}
//3 random nr. for player2 storring values in array
//again with global variables
var x = Math.floor(6 * Math.random()) + 1;
var y = Math.floor(6 * Math.random()) + 1;
var z = Math.floor(6 * Math.random()) + 1;
var result2 = [x, y, z];
//calculating sum using Typeconversion
var sum2 = Number(x) + Number(y) + Number(z);

function rolldice2() {

    document.getElementById("randomDice2").innerHTML = result2;
    document.getElementById("sum2").innerHTML = sum2;

}
//anonymus function to show the winner
var winner = function() {
    var message = "";
    if (sum1 >= sum2) {
        message = "Player 1 is the winner!!!";
    } else {
        message = "Player 2 is the winner!!!";
    }
    document.getElementById("winner").innerHTML = message;
}
