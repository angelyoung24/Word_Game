var degrassi = [
    "Maya", "Zig", "Lola", "Frankie", "Yael", "Tiny", "Zoe", "Tristan", "Grace", "Esme", "Winston", "Hunter", "Vijay", "Rasha", "Goldi", "Jonah", "Baaz", "Miles", "Saad", "Shay"
];


// select a random character
var currentCharacter = degrassi[Math.floor(Math.random() * degrassi.length)];

// the array that loops through characters
var charactersArray = [];
for (var i = 0; i < currentCharacter.length; i++) {
    charactersArray[i] = "_";
}


function showLetter(currentItem){
	console.log(qwerty[currentItem])
}


// Randomize words from an array

// Turn words to spaces

// loop through spaces and check if letter is present

// Subsititue the space with the correct letter

// what happens when you guess correctly
