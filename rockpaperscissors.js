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

function play(playerSelection, computerSelection){
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if(playerSelection === computerSelection){
    return (`It's a tie!`);
  }
  else if(playerSelection === `rock` && computerSelection === 'scissors' || playerSelection === `paper` && computerSelection === 'rock' || playerSelection === `scissors` && computerSelection === 'paper'){
    return (`Computer loses, You win!`);
  }
  else{
    return (`You lose...`);
  }
}

let userInput = prompt("Enter Rock, Paper, or Scissors to play!", "Rock");
let result = play(userInput,getComputerChoice());
console.log(result);