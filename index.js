var degrassi = [
    "Maya", "Zig", "Lola", "Frankie", "Yael", "Tiny", "Zoe", "Tristan", "Grace", "Esme", "Winston", "Hunter", "Vijay", "Rasha", "Goldi", "Jonah", "Baaz", "Miles", "Saad", "Shay"
];

var myWord = document.getElementById(myWord);



// words
var words = ['cat', 'dog', 'pig', 'starfish'];

var myWord = words[Math.floor(Math.random() * words.length)];

var blankArray = [];

var answersArray = [];
 for (let i = 0; i < words.length; i++){
	blankArray.push("_");
}

var lettersLeft = words.length;


var words = document.getElementById('box1').innerHTML


// alphabet
var qwerty = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
for(let i=0;i<qwerty.length;i++){
	var div = document.createElement('div');
	var letters = document.createTextNode(qwerty[i])
	div.appendChild(letters);
	div.style.width='40px';
	div.style.height='40px';
	div.style.border='2px solid';
	div.style.margin='10px';
	div.style.display='inline-block';
	div.classList.add('box');
	document.body.appendChild(div);
	var boxes = document.getElementsByClassName('box');
	boxes[i].addEventListener('click', function(){
				showLetter(i)
	})
}

function showLetter(currentItem){
	console.log(qwerty[currentItem])
}


// Randomize words from an array

// Turn words to spaces

// loop through spaces and check if letter is present

// Subsititue the space with the correct letter

// what happens when you guess correctly
