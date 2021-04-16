const hex = [0, 1, 2, 3, 4, 5,6, 7, 8, 9, "A","B","C","D","E","F"]
let backgroundColor = document.getElementById('background-color');

random_bg_color();
function random_bg_color() {
	var hexColors = "#";
	for (let i = 0; i < 6; i++) {
		hexColors += hex[random_number()];
	}

    backgroundColor.style.backgroundColor = hexColors;
    document.getElementById('color').innerHTML = hexColors;
}

function random_number() {
	return Math.floor(Math.random() * hex.length);
}