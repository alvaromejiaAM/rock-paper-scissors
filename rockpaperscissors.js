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
    let userInput = prompt("Enter Rock, Paper, or Scissors to play!", "Rock");
    let computerInput = getComputerChoice();
    let result = play(userInput, computerInput);

    switch(result){  //log who won the round
      case 1:
        console.log(`This round is tie!`);
        return 1;
      case 2 :
        console.log(`You win this round!`);
        return 2;
      case 3:
        console.log(`Computer wins this round!`);
        return 3;
    }
}

function endResult(pScore, cScore){
  if(pScore === cScore){ //Log who won the match
    console.log(`The match is a tie!`);
  }
  else if(pScore > cScore){
    console.log(`You win the match!`);
  }
  else{
    console.log(`You lose the match...`);
  }
}

let pScore = 0; //player Score
let cScore = 0; //computer Score
for(let i = 0; i < 5; i++){
  victor = game();
  switch(victor){ //Score update
    case 1:
      break;
    case 2:
      pScore++;
      break;
    case 3:
      cScore++;
      break;
  }
}
endResult(pScore, cScore);