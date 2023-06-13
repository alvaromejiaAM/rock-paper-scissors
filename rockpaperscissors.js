function getComputerChoice(){
 let compChoice =  Math.floor(Math.random() * 3) + 1; //gets Random number from 1 to 3
 console.log(compChoice);
 switch(compChoice){ //Return Values
  case 1:
    return `Rock`;
    break;
  case 2:
    return `Paper`;
    break;
  case 3:
    return `Scissors`;
    break;
 }
}

function playRound(playerSelection, computerSelection){
  //remove case sensitivity
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if(playerSelection === computerSelection){
    return (1); //tie
  }
  else if(playerSelection === `rock` && computerSelection === 'scissors' 
        || playerSelection === `paper` && computerSelection === 'rock' 
        || playerSelection === `scissors` && computerSelection === 'paper'){
    return (2); //user wins
  }
  else{
    return (3); //cpu wins
  }
}

function game(){

    let computerInput = getComputerChoice();
    let result = playRound(userInput, computerInput);

    
}

let rockBtn = document.querySelector('.rock')
let paperBtn = document.querySelector('.paper')
let scissorsBtn = document.querySelector('.scissors')

