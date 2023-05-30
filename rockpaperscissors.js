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
    return (1); //tie
  }
  else if(playerSelection === `rock` && computerSelection === 'scissors' || playerSelection === `paper` && computerSelection === 'rock' || playerSelection === `scissors` && computerSelection === 'paper'){
    return (2); //user wins
  }
  else{
    return (3); //cpu wins
  }
}

function game(){
  let score = 0;
  for(let i = 0; i < 5; i++){
    let userInput = prompt("Enter Rock, Paper, or Scissors to play!", "Rock");
    let computerInput = getComputerChoice();
    let result = play(userInput, computerInput);
    switch(result){
      case 1:
        console.log(`This round is tie!`);
        break;
      case 2 :
        score++;
        console.log(`You win this round!`);
        break;
      case 3:
        console.log(`Computer wins this round!`);
        break;
    }
  }
  return score;
}

let score = game();
console.log(score);
if(score < 3){
  console.log(`You lost this match...`)
}
else{
  console.log(`You Win!`)
}