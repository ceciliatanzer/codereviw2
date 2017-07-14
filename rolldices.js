//named function with local variables
//changes backgroundcolor on reload 
function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	var result= "rgb("+r+","+g+","+b+")";
	document.body.style.background=result;
}
// the functio get the names and outputs them in header
function getNames(){
	var player1=prompt("Player 1 please enter youre Name!", "");
	var player2=prompt("Player 2 please enter youre Name!", "");
 	if (player1 != null && player2 != null){
 		 document.getElementById ("names").innerHTML= player1 + " vs. " + player2;
 	}
}
