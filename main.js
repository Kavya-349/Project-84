// Create a reference for the canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var img_width = 300;
var img_height = 100;

var img_image, img_imgTag;

var img_x = 100;
var img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
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
		aplhabetkey();
		document.getElementById("result").innerHTML = "You pressed Alphabet key.";
		console.log("alphabetkey");
		}
		if(keyPressed >= 48 && keyPressed <= 57) {
			numberkey();
			document.getElementById("result").innerHTML = "You pressed Number key.";
			console.log("numberkey");
		}
		if(keyPressed >= 37 && keyPressed <= 40) {
			arrowkey();
			document.getElementById("result").innerHTML = "You pressed Arrow key";
			console.log("arrowkey");
		}
		if(keyPressed == 32 || keyPressed == cr || keyPressed == 13) {
			specialkey();
			document.getElementById("result").innerHTML = "You pressed Special key";
			console.log("specialkey");
		}
}
// function for keys

function aplhabetkey() {
	img_image = "Alpkey.png";
	add();
}
function numberkey() {
	img_image = "numkey.png";
	add();
}
function arrowkey() {
	img_image = "Arrkey.png";
	add();
}
function specialkey() {
	img_image = "spkey.png";
	add();
}
function otherkey() {
	img_image="otherkey.png";
	add();
}
	
