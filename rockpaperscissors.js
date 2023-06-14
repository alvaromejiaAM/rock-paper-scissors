function getComputerChoice(){
  //gets Random number from 1 to 3
 let compChoice =  Math.floor(Math.random() * 3) + 1; 
 console.log(compChoice);
 switch(compChoice){ //Return Values
  case 1:
    return `Rock`;
  case 2:
    return `Paper`;
  case 3:
    return `Scissors`;
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
    return outputScore(1); //tie
  }
  else if(playerSelection === `rock` && computerSelection === 'scissors' 
        || playerSelection === `paper` && computerSelection === 'rock' 
        || playerSelection === `scissors` && computerSelection === 'paper'){
             
    roundWinner.innerText = 'You win this round!';
    return outputScore(2); //user wins

  }
  else{
    roundWinner.innerText = 'The computer wins this round...';
    return outputScore(3); //cpu wins
  }
}

function outputScore(roundWinner){
    const computerScore = document.querySelector('.computerScore');
    const playerScore = document.querySelector('.playerScore');
    const container = document.querySelector('.container');
    const won = document.createElement('div');
    won.classList.add('win');
    let temp;

    if(roundWinner === 3){ //cpu tally
      temp = computerScore.textContent;
      Number(temp);
      temp++;
      if(temp % 5 === 0){
        won.textContent = 'Computer wins the game!';
        container.appendChild(won);
      }
      computerScore.innerText = `${temp}`;//output score computer
    }
    else if(roundWinner === 2){ //player tally
      temp = playerScore.textContent;
      Number(temp);
      temp++;
      if(temp % 5 === 0){
        won.textContent = 'Player wins the game!';
        container.appendChild(won);
      }
      playerScore.innerText = `${temp}`;//output score player
    }
}

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');


let winner = 0;
//Listeners
rockBtn.addEventListener('click', () => 
playRound(rockBtn.textContent));
paperBtn.addEventListener('click', () => 
playRound(paperBtn.textContent));
scissorsBtn.addEventListener('click', () => 
playRound(scissorsBtn.textContent));
