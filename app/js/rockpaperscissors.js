////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    
    return move || getInput();
    
}

function getComputerMove(move) {
    
    return move || randomPlay();
    
    
}

function getWinner(playerMove, computerMove) {
    
    if (playerMove === computerMove) {
        return "tie";
        
    }
    /**********************************
     ******USING IF CONTROL FLOW********
     ********************************/
    
    else if (playerMove === "rock") {
        if (computerMove === "scissors") {
            console.log("Rock break scissors");
            return "player wins";
        } else {
            console.log("Paper cover Rock");
            return "computer wins";
        }
    } else if (playerMove === "paper") {
        
        if (computerMove === "rock") {
            console.log("Paper cover Rock");
            return "player wins";
        } else {
            console.log("Scissors cut Paper");
            return "computer wins";
        }
    } else if (playerMove === "scissors") {
        if (computerMove === "paper") {
            console.log("Scissors cut Paper");
            return "player wins";
        } else {
            console.log("Rock break scissors");
            return "computer wins";
        }
        
    }
    
    
    /****************************
     ***********USING SWITCH*****
     ***************************
     switch(playerMove){
     case "rock":
     switch(computerMove){
     case "paper":
     return "computer wins"
     break;
     default: case "scissors":
     return "player wins"
     break;
     }
     break;
     case "paper":
     switch(computerMove){
     case "rock":
     return "player wins"
     break;
     default: case "scissors":
     return "computer wins"
     break;
     }
     break;
     
     case "scissors":
     switch(computerMove){
     case "rock":
     return "computer wins"
     break;
     default: case "paper":
     return "player wins"
     break;
     }
     break;
     }*/
    
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    
    var playerAction = getPlayerMove();
    var computerAction = getComputerMove();
    var result = getWinner(playerAction, computerAction);
    
    do {
        
        if (result === "player wins") {
            playerWins += 1;
            console.log("You win the match")
            
            
        } else if (result === "computer wins") {
            computerWins += 1;
            console.log("Computer win the match")
            
        } else if (result === "tie") {
            return "None wins it is a tie!";
            
        } else {
            return "You have to choose between:" + " " + "rock," + " " + "paper" + " " + "scissors";
        }
        
        break;
    }
    while (playerWins <= 5 || computerWins <= 5);
    
    return "The score is:" + " " + ["Player:" + " " + playerWins, " " + "Computer" + " " + computerWins];
}
playToFive();