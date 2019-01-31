//var to see if user is selecting to draw a rectangle;
var is_drawing_rectangle = true;
//initially allows user to draw rectangles when mouse is pressed on canvas.
var canvas = document.getElementById("slate");
canvas.addEventListener("mousedown",drawRec,false);

//event listener for clearing canvas
var button = document.getElementById("clear");
button.addEventListener("mousedown",clear,false);

//clears the canvas
function clear(e){
	//console.log("clear");
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0,0,canvas.width,canvas.height);
}

//changes the button display text and changes the shape drawn when user clicks on canvas.
function change()
{
    var ele = document.getElementById("mode");
    if (is_drawing_rectangle){
    	canvas.removeEventListener("mousedown",drawRec,false);
    	canvas.addEventListener("mousedown",drawCircle,false);
      	ele.value = "drawing circle";
      	is_drawing_rectangle = false;
    }
    else {
    	canvas.removeEventListener("mousedown",drawCircle,false);
    	canvas.addEventListener("mousedown",drawRec,false);
    	ele.value = "drawing rectangle";
    	is_drawing_rectangle = true;
    }
}
// function to draw a circle with its center at where the mouse is clicked 
function drawCircle(e)
{
	var canvas = document.getElementById("slate");
	var ctx = canvas.getContext("2d");
	x = e.pageX;
	y = e.pageY;
	x -= canvas.offsetLeft;
	y -= canvas.offsetTop;
	console.log("circle xcor: " + x + " ycor: " + y);
	ctx.fillStyle = "#ff0000";
	ctx.beginPath();
	ctx.arc(x,y,25,0,2*Math.PI);
	ctx.stroke();
	ctx.fill();
}
//function to draw a rectangle with its uper left hand corner appearin where the mouse is clicked
function drawRec(e)
{
	var ctx = document.getElementById("slate").getContext("2d");
	x = e.pageX;
	y = e.pageY;
	x -= canvas.offsetLeft;
	y -= canvas.offsetTop;
	console.log("rectangle xcor: " + x + " ycor: " + y);
	ctx.fillStyle = "#000000";
	ctx.fillRect(x, y, 50, 40);
}

