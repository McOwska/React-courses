function computerChooses() {
    let choiceNumber = Math.random();
    let choice = '';
    if (choiceNumber < 0.34) {
        choice = 'rock';
    } else if(choiceNumber <= 0.67) {
        choice = 'paper';
    } else {
        choice = 'scissors';
    } console.log('Computer: ' + choice);
    return choice;
}

function whoWins(computerChoice, playerChoice) {
    if(computerChoice===playerChoice){
        // alert('Tie!');
        score.ties += 1;
    } else if(computerChoice==='rock' && playerChoice==='paper'){
        // alert('You win!');
        score.wins += 1;
    } else if(computerChoice==='rock' && playerChoice==='scissors'){
        // alert('You lose!');
        score.losses += 1;
    } else if(computerChoice==='paper' && playerChoice==='rock'){
        // alert('You lose!');
        score.losses += 1;
    } else if(computerChoice==='paper' && playerChoice==='scissors'){
        // alert('You win!');
        score.wins += 1;
    } else if(computerChoice==='scissors' && playerChoice==='rock'){
        // alert('You win!');
        score.wins += 1;
    } else if(computerChoice==='scissors' && playerChoice==='paper'){
        // alert('You lose!');
        score.losses += 1;
    }
    updateScore();

 }

function displayScore() {
    alert('Wins: ' + score.wins + '\nLosses: ' + score.losses + '\nTies: ' + score.ties);
}

function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    updateScore();
}   

function updateScore() {
    document.querySelector('.score').textContent = 'Wins: ' + score.wins + '\nLosses: ' + score.losses + '\nTies: ' + score.ties;
}

function displayMoves(playerChoice, computerChoice) {
    document.querySelector('.playersMove').textContent = 'You chose: ' + playerChoice;
    document.querySelector('.computersMove').textContent = 'Computer chose: ' + computerChoice;
}

let isAutoPlay = false;
let intervalId;
function autoPlay(){
    if(!isAutoPlay){
        intervalId = setInterval(function(){
            playGame();
        }, 1000);
        isAutoPlay = true;  
    }else{
        clearInterval(intervalId);
        isAutoPlay = false;
    }
    
}
function playGame(){
    computerChoice = computerChooses();
    playerChoice = computerChooses();
    whoWins(computerChoice, playerChoice);
    displayMoves(playerChoice, computerChoice);
}

let score = {
    wins: 0,
    losses: 0,
    ties: 0
};
let computerChoice = '';
let playerChoice = '';
