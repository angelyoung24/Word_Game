var degrassi = [
    {
        name: "Maya",
        hint: "Their sister visits from college due to a tragedy"
    }, {
        name: "Zig",
        hint: "Only character to be in a polyamourus relationship"
    }, {
        name: "Lola",
        hint: "This character had an abortion"
    }, {
        name: "Frankie",
        hint: "This character has a twin"
    }, {
        name: "Yael",
        hint: "This character is generqueer"
    }, {
        name: "Tiny",
        hint: "This character was in a gang with his brother"
    }, {
        name: "Zoe",
        hint: "This character was an actor on West Drive"
    }, {
        name: "Tristan",
        hint: "This character was in a coma after a bus crash"
    }, {
        name: "Grace",
        hint: "This character has cystic fibrosis"
    }, {
        name: "Esme",
        hint: "This character pushed their significant other down a hill"
    }, {
        name: "Winston",
        hint: "This characters nickname is Chewy"
    }, {
        name: "Hunter",
        hint: "This character caused a school lockdown"
    }, {
        name: "Vijay",
        hint: 'First line: "Oh My God! I love high school."'
    }, {
        name: "Rasha",
        hint: "This character was prom queen with their significant other"
    }, {
        name: "Goldi",
        hint: "This character is president of the feminist club"
    }, {
        name: "Jonah",
        hint: "This character has a daughter"
    }, {
        name: "Baaz",
        hint: "This character has an older sister who graduated in 2016"
    }, {
        name: "Miles",
        hint: "This characters father is abusive"
    }, {
        name: "Saad",
        hint: "This characters nickname is Creepy Camera Guy"
    }, {
        name: "Shay",
        hint: "This character was in a love triangle with their best friend"
    }
];

// select a random character
var random = Math.floor(Math.random() * degrassi.length);
// console.log(degrassi[random])

var currentWord = degrassi[random].name //name
var currentHint = degrassi[random].hint //corresponding hint
var showAnswer = document.getElementById("answer");
var showHint = document.getElementById("hint");
var showLives = document.getElementById("lives");
// var checkWord = currentWord.split("");
var lives = 6
var countdown = false

// the array that loops through characters
var answer = [];
for (var i = 0; i < currentWord.length; i++) {
    answer[i] = "_";
    // console.log(answer)
}
showAnswer.innerText = answer.join(" ");
showLives.innerHTML = "You have " + lives + " lives left";

// array to loop through letters and checks if letters match the word
function check(qwerty) {
    countdown = false
    for (i = 0; i < currentWord.length; i++) {
        // console.log(qwerty); console.log(currentWord);

        if (qwerty === currentWord[i].toLowerCase()) {
            countdown = true
            
            answer[i] = qwerty;
            degrassi.innerHTML = answer.join(" ");
            targetHint();
            checkWord();
        } else {
            // console.log(lives)
            checkWord();
        }

    }
}
// targets hint after correct first word because I am that nice
function targetHint() {

    showAnswer.innerText = answer.join(" ");
    showHint.innerText = currentHint;

}

function checkWord() {
    // console.log(answer.join('')+' '+currentWord)
    if (countdown != true && i === currentWord.length-1) {
        lives--;
        showLives.innerHTML = "You have " + lives + " lives left";
    } 
    // console.log(countdown != true && i === currentWord.length-1)

    if (lives > 0 && answer.join('') === currentWord.toLowerCase()) {
        showLives.innerHTML = "You Win!";
        window.location.reload();
    }
    
    if (lives === 0) {
        showLives.innerHTML = "Game Over! The answer is " + currentWord + "!";
        window.location.reload();
    }
    // console.log(lives === 0)
}


window.onload = check(qwerty)

var qwerty = [
    'q',
    'w',
    'e',
    'r',
    't',
    'y',
    'u',
    'i',
    'o',
    'p',
    'a',
    's',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    'z',
    'x',
    'c',
    'v',
    'b',
    'n',
    'm'
];

for (let i = 0; i < qwerty.length; i++) {
    var div = document.createElement('div');
    var letters = document.createTextNode(qwerty[i])
    div.appendChild(letters);
    div.style.width = '40px';
    div.style.height = '40px';
    div.style.border = '2px solid blue';
    div.style.margin = '5.5px';
    div.style.display = 'inline-block';
    div.style.backgroundColor = 'gold';
    div.style.textAlign = 'center';
    div
        .classList
        .add('box');
    document
        .body
        .appendChild(div);
    var boxes = document.getElementsByClassName('box');

    boxes[i].addEventListener("click", function (e) {
        // check(the value of that boxes letter)
        check(this.innerHTML);
        boxes[i].style.backgroundColor = '#209CEE';
    });
}

