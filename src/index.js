const range = document.querySelector(".range"),
    guessNumber = document.querySelector(".guessNumber"),
    chosenNumber = document.querySelector(".chosenNumber"),
    submitNumber = document.querySelector(".submitNumber"),
    result = document.querySelector(".result"),
    lose = document.querySelector(".lose");

let machineNumber = 0;

function handleRange(event) {
    guessNumber.innerText = event.target.value;
}

function machineGuess(){
    setInterval(machineNumber = Math.floor(parseInt(guessNumber.innerText) * Math.random())+1, 1);
}

function handleSubmit(event) {
    machineGuess();
    result.innerText = `You chose: ${chosenNumber.value}, the machine chose: ${machineNumber}.`;
    if(parseInt(chosenNumber.value) === machineNumber) {
        lose.innerText = `You won!`;
    } else {
        lose.innerText = `You lost!`;
    }
}

function number(){
    guessNumber.innerText = range.value;
    range.addEventListener("input", handleRange);
    submitNumber.addEventListener("click", handleSubmit);
}

function init(){
    number();
}

init();