
const arrayOfColors = ["red", "green", "rgb(55, 87, 32)","#FFF8DC"];
let backgroundColor = document.getElementById('background-color');

random_bg_color();
function random_bg_color() {
    var x = Math.floor(Math.random() * arrayOfColors.length);
    var bgColor = arrayOfColors[x];
    backgroundColor.style.backgroundColor = bgColor;
    document.getElementById('color').innerHTML = bgColor;
    }