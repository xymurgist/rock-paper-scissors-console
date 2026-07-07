// write pseudocode
// write code
// test code

// create console output to confirm script is seen by html
console.log("I'm rich!");

// const currentYear = new Date().getFullYear();
// console.log(currentYear); // Outputs the 4-digit year (e.g., 2026)

document.getElementById("copyright").innerText = new Date().getFullYear();

let humanScore = 0;
let computerScore = 0;


// randomly return one of the following strings: "rock", "paper", "scissors"
// consider Math.random()
// do not use an array
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice = "";

    if (randomNum == 0) {
        return computerChoice = "rock";
    } else if (randomNum == 1) {
        return computerChoice = "paper";
    } else if (randomNum == 2) {
        return computerChoice = "scissors";
    } else {
        return computerChoice = "Something went horribly wrong!"
    }
}
//console.log(getComputerChoice());


// Use prompt to get the user's input
// Might need to debug as 'undefined' logs after a failed answer followed by a correct answer
function getHumanChoice() {
    let promptAnswer = prompt("Please choose rock, paper, or scissors...", "rock, paper, scissors");
    humanChoice = promptAnswer.toLowerCase();

    if (humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors") {
        return humanChoice;
    } else {
        return getHumanChoice();
    }

}

// console.log(getHumanChoice());

// use IF to check answers
// need to compare human vs computer choices and choose winner
// print to console if the human tied, won, or lost
// make Scores for human and computer
// increment Score for the winner of the round
function playRound(humanChoice, computerChoice) {
    if (
        (humanChoice == "rock" && computerChoice == "rock")
        || (humanChoice == "paper" && computerChoice == "paper")
        || (humanChoice == "scissors" && computerChoice == "scissors")
    ) {
        console.log("It's a tie!");
    } else if (
        (humanChoice == "rock" && computerChoice == "scissors")
        || (humanChoice == "paper" && computerChoice == "rock")
        || (humanChoice == "scissors" && computerChoice == "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
    } else if (
        (humanChoice == "rock" && computerChoice == "paper")
        || (humanChoice == "paper" && computerChoice == "scissors")
        || (humanChoice == "scissors" && computerChoice == "rock")
    ) {
        console.log(`You lose! ${humanChoice} loses to ${computerChoice}`);
        computerScore += 1;
    } else {
        console.log("Something has failed.")
    }
    console.log(`Score = You: ${humanScore} vs Computer: ${computerScore}`)
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
