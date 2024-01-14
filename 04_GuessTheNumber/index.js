let randomNumber = parseInt(Math.random() * 100 + 1); //generate random number between 1-100

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}


function validateGuess(guess){
    // validate the number is between 1-100 
    if (isNaN(guess)) {
        alert("Please Enter a Valid Number")
    }else if(guess < 1){
        alert("Please Enter a Number Between 1-100")
    }else if(guess > 100){
        alert("Please Enter a Number Between 1-100")
    }else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. The number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
 
function checkGuess(guess){
    //check the number match the random number or not
    if(guess === randomNumber){
        displayMessage("You Guess The Right Number")
        endGame()
    }else if(guess < randomNumber){
        displayMessage("Number is too low")
    }else if(guess > randomNumber){
        displayMessage("Number is too high")
    }
}

function displayGuess(guess){
    // after checking display the number
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, ` 
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    // it will display the message if the number low or high
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    // end the game
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    // start new game
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', (e) => {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true
    })
}
