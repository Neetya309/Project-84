// Create a reference for the canvas
canvas= document.getElementById("myCanvas");
ctx=canvas.getContext 

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	var new_Image
	 
	img_width=
	img_height=

	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	
	img_imgTag.src = img_image;   // load image
}

function uploading() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event
window.addEventListener("keydown", my_keydown)

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		{
		alphabetkey();
		document.getElementById("d1").innerHTML="You pressed alphabet key";
        console.log("alphabet key") 
		}

		else if((keyPressed >=48 && keyPressed<=57))
		{ 
			numberkey();
			document.getElementById("d1").innerHTML="You pressed Number key";
			console.log("Number key")
		}
		else if((keyPressed >=58 && keyPressed<=64)|| (keyPressed >=91 && keyPressed<=96))
		{ 
			otherkey();
			document.getElementById("d1").innerHTML="You pressed Other key";
			console.log("Other key")
		}
		else if((keyPressed >=33 && keyPressed<=47))
		{ 
			otherkey();
			document.getElementById("d1").innerHTML="You pressed Other key";
			console.log("Other key")
		}
		else if(keyPressed =32 && keyPressed = 127 )
		{ 
			specialkey();
			document.getElementById("d1").innerHTML="You pressed Special key";
			console.log("Special key")
		}
		 if(keyPressed>=37 && keyPressed<=40)
		{
			arrowkey();
			document.getElementById("d1").innerHTML="you pressed Arrow key";
			console.log("Arrow key")
		}
	}
		{
	//upload respective image with the message. 
      img_image="Alpkey.png";
	  add();
}
function numberkey()
{
	img_image="numkey.png";
	add();
}
function arrowkey()
{
	img_image="Arrkey.png";
	add();
}
function specialkey()
{
	img_image="spkey.png"
	add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}