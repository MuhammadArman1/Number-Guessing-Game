var randomNumber;
var guessNumber = document.getElementById("guess-number");
var guessButton = document.getElementById("guess-button");
var RestartButton = document.getElementById("Restart-Button");
var wrongGuess = document.getElementById("wrong-guess");
var rightGuess = document.getElementById("right-guess");
function startGame() {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    guessNumber.value = '';
    guessButton.disabled = false;
    wrongGuess.style.display = "none";
    rightGuess.style.display = "none";
}
function handleGuess() {
    var userGuess = Number(guessNumber.value);
    if (randomNumber === userGuess) {
        rightGuess.style.display = "block";
        wrongGuess.style.display = "none";
    }
    else {
        wrongGuess.style.display = "block";
        rightGuess.style.display = "none";
    }
}
guessButton.addEventListener('click', handleGuess);
RestartButton.addEventListener('click', startGame);
startGame();
