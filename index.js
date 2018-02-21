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

var lettersLeft = currentCharacter.length;


// while loop
// while (lettersLeft > 0) {
//     var angel = document.getElementById("angel");
//     angel.innerHTML = answersArray.join(" ");
//     // var guessMe = 
// }


var simpson = document.getElementById("simpson");
simpson.innerHTML = charactersArray.join(" ");


// hints also knows as spoiler alert
var spoilerz = document.getElementById.spoiler.onclick = function () {
    var spoiler = [
        "Their sister visits from college due to a tragedy",
        "Only character to be in a polyamourus relationship",
        "This character had an abortion",
        "This character has a twin",
        "This character is generqueer",
        "This character was in a gang with his brother",
        "This character was on an actor on West Drive",
        "This character was in a coma after a bus crash",
        "This characters nickname is THe Watcher",
        "This character pushed their significant other down a hill",
        "This characters nickname is Chewy",
        "This character caused a school lockdown",
        'First line: "Oh My God! I love high school."',
        "This character was prom queen with their significant other",
        "This character is president of the feminist club",
        "This character has a daughter",
        "This character has an older sister who graduated in 2016",
        "This characters father is abusive",
        "This characters nickname is Creepy Camera Guy",
        "This character was in a love triangle with her best friend"
    ];

    // selects a spoiler this should coorespond with the character
    var currentSpoiler = spoiler[Math.floor(Math.random() * spoiler.length)];


    // loop through spoilers
    var spoilerArray = [];
    for (var i = 0; i < currentSpoiler.length; i++) {
        spoilerArray[i] = "_";
    }

};

// // alphabet
// var qwerty = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
// for(let i=0;i<qwerty.length;i++){
// 	var div = document.createElement('div');
// 	var letters = document.createTextNode(qwerty[i])
// 	div.appendChild(letters);
// 	div.style.width='40px';
// 	div.style.height='40px';
// 	div.style.border='2px solid';
// 	div.style.margin='10px';
// 	div.style.display='inline-block';
// 	div.classList.add('box');
// 	document.body.appendChild(div);
// 	var boxes = document.getElementsByClassName('box');
// 	boxes[i].addEventListener('click', function(){
// 				showLetter(i)
// 	})
// }

// function showLetter(currentItem){
// 	console.log(qwerty[currentItem])
// }