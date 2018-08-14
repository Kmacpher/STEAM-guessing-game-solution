// isValidGuess takes the player's integer guess as an argument and checks to make sure that the argument is a number, is less than or equal to 100, and is greater than 0.
// isValidGuess will return true is the guess is valid, and false if it is not.
function isValidGuess(playersGuess) {
    if (typeof playersGuess !== 'number' || playersGuess < 1 || playersGuess > 100) {
        return false;
    } else return true;
}


// isWinningGuess takes the player's guess as an argument and will return true if the guess is equal to the winning number. It will return false if the guess is not equal to the winning number.
function isWinningGuess(playersGuess, winningNumber) {
    return playersGuess === winningNumber;
}

// isPastGuess takes the player's guess and an array of all the guesses that the player has guessed before. If the array of past guesses includes the current guess, the function will return true, otherwise it will return false.
function isPastGuess(playersGuess, pastGuesses) {
    if (pastGuesses.includes(playersGuess)) {
        return true;
    } else return false;
}

// addWrongGuessToPastGuesses adds an incorrect guess to the array of pastGuesses and displays that guess on the screen.
function addWrongGuessToPastGuesses(playersGuess, pastGuesses) {
    pastGuesses.push(playersGuess);
    document.querySelector(`#guess-list li:nth-child(${ pastGuesses.length + 1})`).textContent = playersGuess;
}

// isGameOver take the array pastGuesses as an argument and returns true if pastGuesses contains 5 or more integers. This means that the user has guessed incorrectly 5 times.
function isGameOver(pastGuesses) {
    if (pastGuesses.length >= 5) return true;
    else return false;
}

// howClose takes an integer playersGuess and an integer winningNumber and returns a string that describes how close the playersGuess was to the winningNumber.
function howClose(playersGuess, winningNumber) {
    const diff = Math.abs(playersGuess - winningNumber);
    if (diff < 10) return 'You\'re burning up!';
    else if (diff < 25) return 'You\'re lukewarm.';
    else if (diff < 50) return 'You\'re a bit chilly.';
    else return 'You\'re ice cold!';
}

// updateText takes a string as the argument and updates the 'subtitle' element on the page to display the given text.
function updateText(text) {
  document.getElementById('subtitle').textContent = text;
}

// youWin calls the updateText function, and passes in a string that shows the player that they won!
function youWin() {
    updateText('Congratulations, you won!')
}

// youLose calls the updateText function, and passes in a string that shows the player that they lost and will need to refresh the page to play again.
function youLose() {
    updateText('GAME OVER. Refresh the page to play again!');
}

// checkGuess is what YOU will write! checkGuess is called each time the user clicks the 'submit' button.
// checkGuess takes the playersGuess, winningNumber, and array of pastGuesses as arguments
// using these three values, use the above functions to write the behavior of the game. Reference the workshop docs for hints!
function checkGuess(playersGuess, winningNumber, pastGuesses) {
    console.log('Player\'s guess', playersGuess)
    console.log('Winning Number', winningNumber)
    // YOUR CODE HERE
}

function playGame() {
    const winningNumber = Math.ceil(Math.random() * 100);
    const pastGuesses = [];
    const button = document.querySelector('button');
    console.log(button)
    button.addEventListener('click', () => {
        const playersGuess = +document.querySelector('input').value;
        checkGuess(playersGuess, winningNumber, pastGuesses)
    })

}

playGame();
