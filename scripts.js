const rockBtn=document.getElementById('rock-btn');
const paperBtn=document.getElementById('paper-btn');
const scissorBtn=document.getElementById('scissor-btn');
const result=document.getElementById('result');
const computerChoice=document.getElementById('computer-choice');
const playerScoreboard= document.getElementById('player-score');
const computerScoreboard= document.getElementById('computer-score');
const resetBtn=document.getElementById('reset');
const choices=document.getElementById('choices');

const weapons=['rock','paper','scissors'];
let playerScore=0;
let computerScore=0;

//Weapon for computer
function computerPlay(){
    const weaponIndex=Math.floor(Math.random()*weapons.length);
    return weapons[weaponIndex];
}

//Weapon of Player
function playerPlay(choice){
    const playerWeapon=choice;
    const computerWeapon=computerPlay();
    return updateScore(playerWeapon,computerWeapon);
}

//update score and display result
function updateScore(playerWeapon,computerWeapon){
    if(playerWeapon){
        computerChoice.innerHTML=`Computer chose ${computerWeapon}.`;
        if (playerWeapon===computerWeapon){
            result.innerHTML=`It's a draw.`;
        }else if(
            (playerWeapon==='rock' && computerWeapon==='scissors') ||
            (playerWeapon === 'paper' && computerWeapon === 'rock') ||
            (playerWeapon === 'scissors' && computerWeapon === 'paper')
        ){
            result.innerHTML=`You Won!`;
            playerScore++;
            playerScoreboard.innerHTML=`Player: ${playerScore}`;
        }else{
            result.innerHTML=`You Lost!`;
            computerScore++;
            computerScoreboard.innerHTML=`Computer: ${computerScore}`;
        }
    }else{
        result.innerHTML= 'You did not make a choice!';
        disableChoices();
    }

        if(playerScore===5 || computerScore===5){
            if(playerScore===5){
                result.innerHTML= 'You won the game!';
                result.style.color='green';
                computerChoice.innerHTML='Game Over';
            }else{
                result.innerHTML= 'You lose the game!';
                result.style.color='red';
                computerChoice.innerHTML='Game Over';
            }
        disableChoices();
        }
}

function rockBtnHandler(){
    playerPlay('rock');
}

function paperBtnHandler(){
    playerPlay('paper');
}

function scissorBtnHandler(){
    playerPlay('scissors');
}

function resetHandler(){
    playerScore=0;
    computerScore=0;
    playerScoreboard.innerHTML='Player: 0';
    computerScoreboard.innerHTML='Computer: 0';
    result.innerHTML='Choose Your Weapon!';
    computerChoice.innerHTML='The first one to score 5 points wins!';
    enableChoices();
}

function disableChoices(){
    rockBtn.setAttribute("disabled",true);
    paperBtn.setAttribute("disabled",true);
    scissorBtn.setAttribute("disabled",true);
}

function enableChoices(){
    rockBtn.disabled=false;
    paperBtn.disabled=false;
    scissorBtn.disabled=false;
}

rockBtn.addEventListener('click', rockBtnHandler);
paperBtn.addEventListener('click', paperBtnHandler);
scissorBtn.addEventListener('click', scissorBtnHandler);
resetBtn.addEventListener('click',resetHandler);

