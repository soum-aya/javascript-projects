var reviews = [
{
	profilePic: "imgs/john.jpg",
	name: "John Doe",
	job:"Ux designer",
	description: "hello nnnvjjnnlkjhffffffffff jdhqmku lshuddso"
},
{
	profilePic :"imgs/leena.jpg",
	name :"Leena choi ",
	job :"Product manager",
	description : "hi wolrdgfnnnnvjjnnlkjhffffffffff slihdif udhfiuq"
},
{
	profilePic :"imgs/michelle.jpg",
	name :"Michell young ",
	job :"product designer",
	description :"dooooon kdkfdjnnnnvjjnnlkjhffffffffff ksdhfqi lshfuuhq"
}
];
const btn = document.getElementById("btn");
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const userProf = document.querySelector(".img");
const userName = document.getElementById('user-name');
const userJob = document.getElementById('user-job');
const userDesc = document.getElementById('user-description');
let currentRev = 0;

window.addEventListener("DOMContentLoaded", function(){
	showReview();
});

showReview();
btn.addEventListener("click", function(){
	currentRev = Math.floor(Math.random() * reviews.length);
	console.log(currentRev);
	showReview();
});


prev.addEventListener('click', function(){
	currentRev--;
	if(currentRev < 0){
		currentRev = reviews.length-1;
	}
	console.log(currentRev);
	showReview();
});

next.addEventListener('click', function(){
	currentRev++;
	if(currentRev > reviews.length-1){
		currentRev = 0;
	}
	console.log(currentRev);
	showReview();
});

function showReview(){
	const item = reviews[currentRev];
	userProf.src = item.profilePic;
	userName.textContent = item.name;
	userJob.textContent = item.job;
	userDesc.textContent = item.description;
}