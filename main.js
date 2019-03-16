// create an array storing the three options we want to randomly select from. 
const rockPaperScissors = ['Rock', 'Paper', 'Scissors'];
// randonly select one of those elements from the array and return it to lower case.
function computerPlay() {
    return rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)].toLowerCase();
}
// we need a counter for the player if the player gets a point
let playerCounter = 0;
// counter for computer
let computerCounter = 0;
// create an empty result variable that we can display results under
let result = "";

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        result = 'You lose! Paper beats rock.';
        return "lose";
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        result ='You lose! Scissors beat paper.';
        return "lose";
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        result ='You win! Scissors beat paper.';
        return "win";
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        result = 'You win! Rock beats scissors.';
        return "win";
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        result = 'You lose! Rock beats scissors.';
        return "lose";
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        result = 'You win! Paper beats rock.';
        return "win";
    }
    else if (playerSelection === computerSelection) {
        result = "It's a tie.";
        return "tie";
    }
}

// new function references dom elements based on events
function showScore() {
    const currentResult = document.getElementById('currentResult');
    const playerCounter = document.getElementById('playerCounter');
    const computerCounter = document.getElementById('computerCounter');
    const finalResult = document.getElementById('finalResult');

    finalResult.textContent = "";

    currentResult.textContent = result;
    playerCounter.textContent = `Player score: ${playerCounter}`;
    computerCounter.textContent = `Computer score: ${computerCounter}`;

    if (playerCounter === 5) {
        finalResult.textContent = `You win. ${playerCounter} beats ${computerCounter}`;
        playerCounter = 0;
        computerCounter = 0;
    } else if (computerCounter === 5) {
        finalResult.textContent = `You lose. ${computerCounter} beats ${playerCounter}`;
        playerCounter = 0;
        computerCounter = 0;
    }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {

button.addEventListener('click', (e) => {
    let playerSelection = e.target.id;
    console.log(`player selection: ${playerSelection}`);
    let computerSelection = computerPlay();
    console.log(`computer selection: ${computerSelection}`);
    let result = playRound(playerSelection, computerSelection);
    console.log(`result: ${result}`);

    if (result === "win") {
        playerCounter++;
    } else if (result === "lose") {
        computerScore++;
    }
    showScore();
});
});



