const canvas = document.getElementById('slate');
const ctx = canvas.getContext('2d');

function change()
{
    var ele = document.getElementById("mode");
    if (ele.value=="drawing rectangle")
      ele.value = "drawing circle";
    else ele.value = "drawing rectangle";
}

function draw()
{

}
