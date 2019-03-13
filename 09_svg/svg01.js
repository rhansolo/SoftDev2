var pic = document.getElementById('vimage');
var clear_button = document.getElementById('but_clear');

var last_x = -1;
var last_y = -1;

var clear = (e) => {
  pic.innerHTML='';
  last_x = -1;
  last_y = -1;
};

var draw = (e) => {
  var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  c.setAttribute("cx", e.offsetX);
  c.setAttribute("cy", e.offsetY);
  c.setAttribute("r", 20);
  c.setAttribute("fill", "red");
  c.setAttribute("stroke", "black");
  if (pic.childNodes.length > 0){
    connect(e.offsetX, e.offsetY);
  }
  pic.appendChild(c);
  last_x = e.offsetX;
  last_y = e.offsetY;
};

var connect = (x,y) => {
  if (last_x == -1 && last_y == -1){
    console.log("Can't draw line")
    return;
  }
  var children = pic.childNodes;
  var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  line.setAttribute('x1', last_x);
  line.setAttribute('x2', x);
  line.setAttribute('y1', last_y);
  line.setAttribute('y2', y);
  line.setAttribute('stroke', 'black');
  pic.appendChild(line);
}

pic.addEventListener('click', draw);
clear_button.addEventListener('click', clear);
