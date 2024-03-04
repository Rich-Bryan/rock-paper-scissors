
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

        return "computer wins";
    }
    else if(playerSelection == computerSelection){
        return "tie";
    }
    else{
        return "player wins";
    }

}



   
const playerSelection = "paper";
const computerSelection = getComputerChoice();
// console.log("player: " + playerSelection);
// console.log("computer: " + computerSelection);
// console.log("")
console.log(playRound(playerSelection, computerSelection));

