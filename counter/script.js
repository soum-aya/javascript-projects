let counter = 0;
let element = document.getElementById('counter');

function render() {
	element.innerHTML = counter;
	if(counter > 0){
		element.style.color = "green";
	}
	if(counter < 0){
		element.style.color = "red";
	}
	if( counter === 0){
		element.style.color = "black";
	}
};

render();

function increase(){
	counter++;
	render();
}
function decrease(){
	counter--;
	render();
}
function reset(){
	counter = 0;
	render();
}
