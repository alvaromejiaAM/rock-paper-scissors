function getComputerChoice(){
  //gets Random number from 1 to 3
 let compChoice =  Math.floor(Math.random() * 3) + 1; 
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

function playRound(playerSelection){
  //remove case sensitivity
  playerSelection = playerSelection.toLowerCase();
  let computerSelection = getComputerChoice();
  computerSelection = computerSelection.toLowerCase();

  const container = document.querySelector('.container');
  const announce = document.createElement('div');
  announce.classList.add('announce');
 
  if(playerSelection === computerSelection){
    announce.textContent = 'The round is a tie!';
    container.appendChild(announce);
    return (1); //tie
  }
  else if(playerSelection === `rock` && computerSelection === 'scissors' 
        || playerSelection === `paper` && computerSelection === 'rock' 
        || playerSelection === `scissors` && computerSelection === 'paper'){
             
    announce.textContent = 'You won the round!';
    container.appendChild(announce);
    return (2); //user wins

  }
  else{
    announce.textContent = 'The computer wins...';
    container.appendChild(announce);
    return (3); //cpu wins
  }
}

function game(){

    let computerInput = getComputerChoice();
    let result = play(userInput, computerInput);

}
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

//Listeners
rockBtn.addEventListener('click', () => 
playRound(rockBtn.textContent));
paperBtn.addEventListener('click', () => 
playRound(paperBtn.textContent));
scissorsBtn.addEventListener('click', () => 
playRound(scissorsBtn.textContent));
