var canvas = document.getElementById("playground");
var ctx = canvas.getContext("2d");
var draw = document.getElementById("circle");
var stop = document.getElementById("stop");
var requestID;
var radius = 0;
var growing = 1;


var drawDot = function()
{

  ctx.fillStyle = "#ff0000";
	// resets the path you can draw a seperate figure
	ctx.beginPath();
	ctx.arc(250,250,radius,0,2*Math.PI);
	ctx.stroke();
	ctx.fill();
  if (radius <= 250)[
    growing = 1;
  ]
  else{
    growing = -1;
  }
  radius += 1 * growing;
  requestID = requestAnimationFrame(drawDot);
}
var stopIt = function(){
  console.log(requestID);
}

function clear(e){
	//console.log("clear");
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0,0,canvas.width,canvas.height);
}

draw.addEventListener("click",drawDot);
stop.addEventListener("click",stopIt);
