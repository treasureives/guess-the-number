'use strict';

// Generate the secret number, score tracker and highscore
let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highscore = 0

// functions to simplify code
function displayMessage(message) {
    document.querySelector('.message').textContent = message
}

function showSecretNumber() {
    document.querySelector('.number').textContent = secretNumber
}

function displayScore(score) {
    document.querySelector('.score').textContent = score
}


// Event listener and game logic
document.querySelector('.check').addEventListener('click', function(event) {
    event.preventDefault();

    const guess = Number(document.querySelector('.guess').value)
    
    // When no number is entered
    if (!guess) {
        displayMessage('⛔ No Number Entered!')
    } 

    // This is the guessed number is the same as the secretNumber
    else if (guess === secretNumber) {
        showSecretNumber()
        displayMessage('🎉 Correct Number!')
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'

        if (score > highscore) {
            highscore = score
            document.querySelector('.highscore').textContent = highscore
        }
    }

    // if guess is not the same as the secretNumber
    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!')
            score--;
            displayScore(score)
        } else {
            displayMessage('💥 You lose try again')
            displayScore(0)
        }
        
    }
})


document.querySelector('.again').addEventListener('click', function(event){
    // Rest everything back to initial state when button is clicked and also make a secretNumber
    score = 20
    displayScore(score)

    secretNumber = Math.trunc(Math.random() * 20) + 1

    displayMessage('Start guessing...')
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ''
})
