// HanSoLo:  Robin Han
// SoftDev2 PD7
// K#01 -- ...and I want to Paint It Btter
// 2019-01-31


//var to see if user is selecting to draw a rectangle;
var has_drawing = false;
var last_xcor = null;
var last_ycor = null;
//initially allows user to draw rectangles when mouse is pressed on canvas.
var canvas = document.getElementById("playground");
canvas.addEventListener("mousedown",drawCircle,false);

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

// function to draw a circle with its center at where the mouse is clicked
function drawCircle(e)
{
	var canvas = document.getElementById("playground");
	var ctx = canvas.getContext("2d");
	has_drawing = true;
	// sets x and y to the location of the mouse relative to the canvas without the padding
	x = e.offsetX;
	y = e.offsetY;
	console.log("circle xcor: " + x + " ycor: " + y);
	ctx.fillStyle = "#ff0000";
	// resets the path you can draw a seperate figure
	ctx.beginPath();
	ctx.arc(x,y,30,0,2*Math.PI);
	ctx.stroke();
	ctx.fill();
	if (last_xcor == null){
		last_xcor = x;
		last_ycor = y;
	}
	else{
		connectDot(x,y);
	}
}

function connectDot(xcor,ycor){
	var canvas = document.getElementById("playground");
	var ctx = canvas.getContext("2d");
	ctx.beginPath();
	ctx.moveTo(last_xcor,last_ycor);
	ctx.lineTo(xcor,ycor);
	ctx.stroke();
	last_xcor = xcor;
	last_ycor = ycor;
}
