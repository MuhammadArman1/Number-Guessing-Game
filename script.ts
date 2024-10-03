let randomNumber: number;

const guessNumber = document.getElementById("guess-number") as HTMLInputElement;
const guessButton = document.getElementById("guess-button") as HTMLButtonElement;
const RestartButton = document.getElementById("Restart-Button") as HTMLButtonElement;
const wrongGuess = document.getElementById("wrong-guess") as HTMLParagraphElement;
const rightGuess = document.getElementById("right-guess") as HTMLParagraphElement;

function startGame(): void {

    randomNumber = Math.floor(Math.random() * 10) + 1;
    guessNumber.value = '';
    guessButton.disabled = false;
    wrongGuess.style.display = "none";
    rightGuess.style.display = "none";
}

function handleGuess(): void {
    const userGuess = Number(guessNumber.value);

    if (randomNumber === userGuess) {
        rightGuess.style.display = "block";
        wrongGuess.style.display = "none";
    } else {
        wrongGuess.style.display = "block";
        rightGuess.style.display = "none";
    }
}

guessButton.addEventListener('click', handleGuess);
RestartButton.addEventListener('click', startGame);
startGame()
