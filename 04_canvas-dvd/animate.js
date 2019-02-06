// GeeseGrease -- Robin Han, Tabassum Fabiha
// SoftDev2 pd7
// K03 -- They lock us in the tower whenever we get caught
// 2019-02-06

var canvas = document.getElementById("playground");
var ctx = canvas.getContext("2d");
var draw = document.getElementById("circle");
var stop = document.getElementById("stop");
var dvd = document.getElementById("dvd");
var requestID;
var radius = 0;
var growing = true;


var drawDot = function()
{
  window.cancelAnimationFrame(requestID);
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
var dvdLogoSetup = function(){
  window.cancelAnimationFrame(requestID);
  var rectWidth = 100;
  var rectHeight = 50;

  var rectX = Math.floor(Math.random() * (canvas.width - rectWidth));
  var rectY = Math.floor(Math.random() * (canvas.height - rectHeight));

  var xVel = 1;
  var yVel = 1;

  var logo = new Image();
  logo.src = "logo_dvd.jpg";
  var animateDVD = function(){
    window.cancelAnimationFrame(requestID);
    clear();
    //ctx.fillRect(rectX, rectY, 50, 40);
    ctx.drawImage(logo,rectX,rectY,rectWidth,rectHeight);
    if (rectX >= canvas.width - rectWidth || rectX <= 0){
      xVel *= -1;
    }
    if (rectY >= canvas.height - rectHeight || rectY <= 0){
      yVel *= -1;
    }
    rectX += xVel;
    rectY += yVel;
    requestID = requestAnimationFrame(animateDVD);
  }
  animateDVD();
}


function clear(e){
	//console.log("clear");
	ctx.clearRect(0,0,canvas.width,canvas.height);
}

draw.addEventListener( "click" , drawDot);
stop.addEventListener("click",stopIt);
dvd.addEventListener("click",dvdLogoSetup);
