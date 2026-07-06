// write pseudocode
// write code
// test code

// create console output to confirm script is seen by html
console.log("I'm rich!");

// const currentYear = new Date().getFullYear();
// console.log(currentYear); // Outputs the 4-digit year (e.g., 2026)

document.getElementById("copyright").innerText = new Date().getFullYear();


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
console.log(getComputerChoice());

