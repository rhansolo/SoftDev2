// GeeseGrease -- Robin Han, Tabassum Fabiha
// SoftDev2 pd7
// K03 -- They lock us in the tower whenever we get caught
// 2019-02-06

var canvas = document.getElementById("playground");
var ctx = canvas.getContext("2d");
var draw = document.getElementById("circle");
var stop = document.getElementById("stop");
var requestID;
var radius = 0;
var growing = true;


var drawDot = function()
{
  clear();
  //start decreasing
  if (radius == 250){
    growing = false;
  }
  ctx.fillStyle = "#ff0000";
	// resets the path you can draw a seperate figure
	ctx.beginPath();
	ctx.arc(250,250,radius,0,2*Math.PI);
	ctx.stroke();
	ctx.fill();
  
  if (growing){
    //radius is increasing
    radius += 1;
  }
  else{
    //radius is decreasing
    radius -= 1;
    if(radius == 0){
      //start increasing
      growing = true;

    }
  }
  requestID = requestAnimationFrame(drawDot);
}
var stopIt = function(){
  window.cancelAnimationFrame(requestID);
}

function clear(e){
	//console.log("clear");
	ctx.clearRect(0,0,canvas.width,canvas.height);
}

draw.addEventListener( "click" , function(){
  //prevents speeding up
  window.cancelAnimationFrame(requestID);
  requestID=window.requestAnimationFrame(drawDot);
});
stop.addEventListener("click",stopIt);
