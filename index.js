var degrassi = [{
        name: "Maya",
        hint: "Their sister visits from college due to a tragedy"
    },
    {
        name: "Zig",
        hint: "Only character to be in a polyamourus relationship"
    },
    {
        name: "Lola",
        hint: "This character had an abortion"
    },
    {
        name: "Frankie",
        hint: "This character has a twin"
    },
    {
        name: "Yael",
        hint: "This character is generqueer"
    },
    {
        name: "Tiny",
        hint: "This character was in a gang with his brother"
    },
    {
        name: "Zoe",
        hint: "This character was on an actor on West Drive",
    },
    {
        name: "Tristan",
        hint: "This character was in a coma after a bus crash"
    },
    {
        name: "Grace",
        hint: "This character has cystic fibrosis"
    },
    {
        name: "Esme",
        hint: "This character pushed their significant other down a hill"
    },
    {
        name: "Winston",
        hint: "This characters nickname is Chewy"
    },
    {
        name: "Hunter",
        hint: "This character caused a school lockdown"
    },
    {
        name: "Vijay",
        hint: 'First line: "Oh My God! I love high school."'
    },
    {
        name: "Rasha",
        hint: "This character was prom queen with their significant other"
    },
    {
        name: "Goldi",
        hint: "This character is president of the feminist club"
    },
    {
        name: "Jonah",
        hint: "This character has a daughter"
    },
    {
        name: "Baaz",
        hint: "This character has an older sister who graduated in 2016"
    },
    {
        name: "Miles",
        hint: "This characters father is abusive"
    },
    {
        name: "Saad",
        hint: "This characters nickname is Creepy Camera Guy",
    },
    {
        name: "Shay",
        hint: "This character was in a love triangle with their best friend"
    }
];



// select a random character
var random = degrassi[Math.floor(Math.random() * degrassi.length)];

degrassi[random].name //gives you the name
degrassi[random].hint //gives you its corresponding hint



// the array that loops through characters
var answer = [];
for (var i = 0; i < degrassi.length; i++) {
    answer[i] = "_";
}

var lettersLeft = degrassi.length;


var degrassi = document.getElementById("degrassi");




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