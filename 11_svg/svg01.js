var pic = document.getElementById('vimage');
var clear_button = document.getElementById('but_clear');
var move_button = document.getElementById('move');
var change_button = document.getElementById('surprise_me');
var is_moving = false;
var change_it_up = false;
var requestID;

var draw = (e) => {
  var c = makeCircle(e.offsetX, e.offsetY, 'black');
  pic.appendChild(c);
};

var makeCircle = (x,y, color) => {
  var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  c.setAttribute("cx", x);
  c.setAttribute("cy", y);
  c.setAttribute("r", 15);
  c.setAttribute("fill", color);
  c.setAttribute("stroke", "black");
  c.setAttribute('xVel', 1);
  c.setAttribute('yVel', 1);
  c.addEventListener('click', function(e) {
    changeColor(e, c);
  });
  return c;
}

var changeColor = (e, c) => {
  if (c.getAttribute('fill') == 'black'){
    c.setAttribute('fill', 'blue');
  }
  else if (c.getAttribute('fill') == 'blue'){
    var randchild = makeCircle(Math.random() * 500, Math.random() * 500, 'black');
    pic.appendChild(randchild);
    c.remove();
    e.stopPropagation();
  }
}

var change = (c) =>{
  if (c.getAttribute("cx") >= pic.getAttribute('height')/2 && c.getAttribute("cy") >= pic.getAttribute('height')/2){
    c.setAttribute('fill', 'red');
  }
  else if (c.getAttribute("cx") >= pic.getAttribute('height')/2 && c.getAttribute("cy") <= pic.getAttribute('height')/2){
    c.setAttribute('fill', 'blue');
  }
  else if (c.getAttribute("cx") <= pic.getAttribute('height')/2 && c.getAttribute("cy") >= pic.getAttribute('height')/2){
    c.setAttribute('fill', 'purple');
  }
  else{
    c.setAttribute('fill', 'yellow');
  };
}

var clear = (e) => {
  pic.innerHTML='';
  is_moving = false;
  window.cancelAnimationFrame(requestID);
};

var pic_function = (e) => {
  var children = pic.childNodes;
  var index;
  var make_circle = true;
  if (children.length != 0) {
    for (index = 0; index < children.length; index++ ){
      var child = children[index];
      if (Math.sqrt(Math.pow(e.offsetX - child.getAttribute("cx"), 2) + Math.pow(e.offsetY - child.getAttribute("cy"), 2)) < 10){
        return;
      }
    }
    draw(e);
  }
  else{
    draw(e);
  }
}

var start_move = () => {
  window.cancelAnimationFrame(requestID);
  var children = pic.childNodes;
  var height = parseInt(pic.getAttribute('height')) - 15;
  var width = parseInt(pic.getAttribute('width')) - 15;
  is_moving = true;
  var move = () =>{
    window.cancelAnimationFrame(requestID);
    children.forEach((child) => {
        if (change_it_up){
          change(child);
        }
        var change_x_flag= false;
        var change_y_flag = false;
        var x = parseInt(child.getAttribute('cx'));
        var y = parseInt(child.getAttribute('cy'));
        var xVel = parseInt(child.getAttribute('xVel'));
        var yVel = parseInt(child.getAttribute('yVel'));
        if (x >= width || x <= 15){
           xVel *= -1;
           change_x_flag = true;
         };
        if (y >= height || y <= 15){
           yVel *= -1;
           change_y_flag = true;
        };
        child.setAttribute('cx', x + xVel);
        child.setAttribute('cy', y + yVel);

        if (change_x_flag){
          child.setAttribute('xVel', xVel);
        };
        if (change_y_flag){
          child.setAttribute('yVel', yVel);
        };
    });
    requestID = window.requestAnimationFrame(move);
  };
  move();
};

pic.innerHTML='';
pic.addEventListener('click', pic_function);
clear_button.addEventListener('click', clear);
change_button.addEventListener('click', function(){
  change_it_up = true;
});
move_button.addEventListener('click', function(){
  if (!is_moving){
    start_move();
  };
});
