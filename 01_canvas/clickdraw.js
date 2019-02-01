//var to see if user is selecting to draw a rectangle;
var is_drawing_rectangle = true;
var has_drawing = false;
//initially allows user to draw rectangles when mouse is pressed on canvas.
var canvas = document.getElementById("slate");
canvas.addEventListener("mousedown",drawRec,false);

var error = document.getElementById("error");
//event listener for clearing canvas
var button = document.getElementById("clear");

button.addEventListener("click", function(e){
	if (has_drawing){
		//clears the canvas when user writes on it
		clear();
	}
	else{
		//prevents the click to occur when user hasn't written anything on the canvas yet
		error.innerHTML = "There is not drawing to clear!";
		e.preventDefault();
	}
});

//clears the canvas
function clear(e){
	//console.log("clear");
	var ctx = canvas.getContext("2d");
	has_drawing = false;
	error.innerHTML = "";
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
	has_drawing = true;
	// sets x and y to the location of the mouse relative to the canvas without the padding
	x = e.offsetX;
	y = e.offsetY;
	console.log("circle xcor: " + x + " ycor: " + y);
	ctx.fillStyle = "#ff0000";
	// resets the path you can draw a seperate figure
	ctx.beginPath();
	ctx.arc(x,y,25,0,2*Math.PI);
	ctx.stroke();
	ctx.fill();
}
//function to draw a rectangle with its uper left hand corner appearin where the mouse is clicked
function drawRec(e)
{
	var ctx = document.getElementById("slate").getContext("2d");
	has_drawing = true;
	// sets x and y to the location of the mouse relative to the canvas without the padding
	x = e.offsetX;
	y = e.offsetY;
	console.log("rectangle xcor: " + x + " ycor: " + y);
	ctx.fillStyle = "#000000";
	// resets the path you can draw a seperate figure
	ctx.beginPath();
	ctx.fillRect(x, y, 50, 40);
}

