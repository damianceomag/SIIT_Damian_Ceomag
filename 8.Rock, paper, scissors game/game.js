/*
Implement “play” function that is a “Rock, paper, scissors” game.
Implementations notes:

Create an array with all the possibilities (rock, paper, scissors);
Pick a random option for Computer (use Math.random);
Pick a random option for User (use Math.random);
Apply game rules for both options (use if/else if structures)
Calling “play()” function will display in console something like this:

Computer choice: “Rock”

User choice: “Paper”

User wins!
*/

var possibilities = ["rock", "paper", "scissors"];

var computerChoice = possibilities[Math.floor(Math.random() * possibilities.length)];
var userChoice = possibilities[Math.floor(Math.random() * possibilities.length)];

function play() {
    console.log("Computer choice: " + computerChoice);
    console.log("User choice: " + userChoice);

    if (computerChoice === userChoice) {
        console.log("It's a Tie! User calls 2/3!");
    } else if (computerChoice === "rock" && userChoice === "paper") {
        console.log("User wins!");
    } else if (computerChoice === "rock" && userChoice === "scissors") {
        console.log("Computer wins!");
    } else if (computerChoice === "paper" && userChoice === "rock") {
        console.log("Computer wins!");
    } else if (computerChoice === "paper" && userChoice === "scissors") {
        console.log("User wins!");
    } else if (computerChoice === "scissors" && userChoice === "rock") {
        console.log("User wins!");
    } else if (computerChoice === "scissors" && userChoice === "paper") {
        console.log("Computer wins!");
    }
};

play(computerChoice, userChoice);