let computerScore = 0
let playerScore = 0
const maxScore = 5

function getComputerChoice(){
    // random option for the computer 
    let random_number = Math.floor(Math.random() * 3);
    let computerChoices = ["rock","paper","scissors"];
    return computerChoices[random_number];

}


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();


    if ((playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock")) {
        computerScore++;
        return "computer wins";
    }
    else if(playerSelection == computerSelection){
        return "tie";
    }
    else{
        playerScore++;
        return "player wins";
    }

}

function updateResult(player, computer, result){
    document.getElementById('result').innerHTML = "player : "+ player + '<br>' +"computer : "+ computer +"<br>" +"result: " + result;
    document.getElementById('score').innerHTML = "Player Score: " + playerScore + "<br>Computer Score: " + computerScore;

     // Check for winner
     const winnerResult = winner();
     if (winnerResult) {
        // add the winner
         document.getElementById('result').innerHTML = "<br>" + winnerResult;
         // Remove event listeners 
         document.getElementById('rock-btn').removeEventListener("click", rockButtonClick);
         document.getElementById('paper-btn').removeEventListener("click", paperButtonClick);
         document.getElementById('scissors-btn').removeEventListener("click", scissorsButtonClick);
     }
}
// add event listener 
function rockButtonClick() {
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    updateResult(playerSelection, computerSelection, result);
}

function paperButtonClick() {
    const playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    updateResult(playerSelection, computerSelection, result);
}

function scissorsButtonClick() {
    const playerSelection = 'scissors';
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    updateResult(playerSelection, computerSelection, result);
}

// Add event listeners 
document.getElementById('rock-btn').addEventListener("click", rockButtonClick);
document.getElementById('paper-btn').addEventListener("click", paperButtonClick);
document.getElementById('scissors-btn').addEventListener("click", scissorsButtonClick);

function winner(){
    if (playerScore == 5){
        return "<h2>player wins</h2>"
    }else if(computerScore == 5){
        return "<h2>computer wins</h2>"
    }
}


   
// const playerSelection = "paper";
// const computerSelection = getComputerChoice();
// console.log("player: " + playerSelection);
// console.log("computer: " + computerSelection);
// console.log("")
// console.log(playRound(playerSelection, computerSelection));

