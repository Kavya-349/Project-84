// Create a reference for the canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
//

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	var img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {
	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
	var keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >= 97 && keyPressed <= 122) || (keyPressed >= 65 && keyPressed <= 90)){
		//write a code to check the type of key pressed
		aplhabetkey();
		console.log("Aplhabest key");
		}
	    else{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
		}

		if(keyPressed >= 48 && keyPressed <= 57) {
			numberkey();
			console.log("Number key");
		}
		if(keyPressed >= 37 && keyPressed <= 40) {
			arrowkey();
			console.log("Arrow key");
		}
		if(keyPressed = 17||18||27) {
			specialkey();
			console.log("Special key")
		}
}
// function for keys

function aplhabetkey()
{
	//upload respective image with the message. 
	img_image = "Alpkey.png";
	document.getElementById("result").innerHTML = "You pressed Alphabet key.";
	add();
}
function numberkey()
{
	img_image = "number.png";
	document.getElementById("result").innerHTML = "You pressed Number key.";
	add();
}
function arrowkey()
{
	img_image = "Arrkey.png";
	document.getElementById("result").innerHTML = "You pressed Arrow key";
	add();
}
function specialkey()
{
	img_image = "spkey.png";
	document.getElementById("result").innerHTML = "You pressed Special key";
	add();
}
function otherkey()
{
	img_image="otherkey.png";
	document.getElementById("result").innerHTML = "You Other Other key";
	add();
}
	
