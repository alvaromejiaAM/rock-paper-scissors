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

  const roundWinner = document.querySelector('.roundWinner');

  if(playerSelection === computerSelection){
    roundWinner.innerText = 'This round is tie!';
    return (1); //tie
  }
  else if(playerSelection === `rock` && computerSelection === 'scissors' 
        || playerSelection === `paper` && computerSelection === 'rock' 
        || playerSelection === `scissors` && computerSelection === 'paper'){
             
    roundWinner.innerText = 'You win this round!';
    return (2); //user wins

  }
  else{
    roundWinner.innerText = 'The computer wins this round...';

    return (3); //cpu wins
  }
}

function outputScore(winner){
    const score = document.querySelector('.score');
    const playerScore = document.createElement('p');
    const computerScore = document.createElement('p');
    playerScore.classList.add('playerScore');
    computerScore.classList.add('computerScore');
    let playerCounter = 0;
    let compCounter = 0;

    if(winner === 3){
      compCounter++;
      computerScore.textContent = `${compCounter}`;
      score.appendChild(computerScore);      
    }
    else if(winner === 2){
      playerCounter++;
      playerScore.textContent = `${playerCounter}`;
      score.appendChild(playerScore);
    }

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
