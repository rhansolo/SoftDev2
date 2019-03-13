var pic = document.getElementById('vimage');
var clear_button = document.getElementById('but_clear');
var draw_new_circle_flag = true;
var last_x = -1;
var last_y = -1;

var clear = (e) => {
  pic.innerHTML='';
  last_x = -1;
  last_y = -1;
};

pic.addEventListener( "click" , function(event) {
    event.preventDefault();
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.addEventListener('click', function(e){
      var c = circle.getAttribute('fill');
      if (c == 'blue'){
          circle.setAttribute('fill', 'green');
      }
      else{
          circle.setAttribute("cx",(Math.floor(Math.random() * (500 - circle.getAttribute("r")))));
          circle.setAttribute("cy", (Math.floor(Math.random() * (500 - circle.getAttribute("r")))));
          circle.setAttribute('fill', 'blue');
      }
      draw_new_circle_flag = false;
    })

    if(draw_new_circle_flag){
      console.log(event.offsetX);
      console.log(event.offsetY);
      circle.setAttribute("cx", event.offsetX);
      circle.setAttribute("cy", event.offsetY);
      circle.setAttribute("r", 15);
      circle.setAttribute("stroke", "black");
      circle.setAttribute("fill", "blue");
      pic.appendChild(circle);
    }
    draw_new_circle_flag = true;
});

clear_button.addEventListener('click', clear);
