var keyboard = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var wins = 0;
var guesses = 9;
var loss = 0;



var guessesLeftDOM = document.getElementById("guessesLeft");
guessesLeftDOM.innerHTML = guesses;

var lossDOM = document.getElementById("lossNumber");
lossDOM.innerHTML = loss;

var winDOM = document.getElementById('winNumber');
winDOM.innerHTML = wins;

var lettersDOM = document.getElementById("letters");

var computerPick = keyboard[Math.floor(Math.random() * keyboard.length)];
console.log(computerPick);

document.onkeyup = function (event) {
    var userGuess = event.key.toUpperCase();

    function guess() {
        if (computerPick === userGuess) {
            win();
        } else {
            guessing();
        }
    }

    // validating keyboad entry
    for (var t in keyboard) {
        if (userGuess === keyboard[t]) {
            guess();
            updateLetters();
        }
    }

    function win() {
        wins++;
        guesses = 9;
        pickNewLetter();
    }

    function lose() {
        loss++;
        guesses = 9;
        lossDOM.innerHTML = loss;
    }

    function guessing() {
        guesses--;
        if (guesses < 1) {
            lose();
        }
        console.log("guesses " + guesses);

    }

    function pickNewLetter() {
        for (var i = 0; i < 3; i++) {
            computerPick = keyboard[Math.floor(Math.random() * keyboard.length)];
        }

        console.log(computerPick);
    }

    //updating the dom
    function updateLetters() {
        lettersDOM.appendChild(document.createElement('div'));
        lettersDOM.lastElementChild.setAttribute('class', 'lettersStyle');
        lettersDOM.lastElementChild.innerHTML = userGuess;
    }



    guessesLeftDOM.innerHTML = guesses;

    winDOM.innerHTML = wins;

}