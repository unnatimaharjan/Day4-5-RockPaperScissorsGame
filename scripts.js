const rockBtn=document.getElementById('rock-btn');
const paperBtn=document.getElementById('paper-btn');
const scissorBtn=document.getElementById('scissor-btn');


defaultChoice='Rock';

function playerChoice(selection){
    let compChoice= computerChoice();
    if(
        selection=="Rock" && compChoice=="Rock" ||
        selection=="Paper" && compChoice=="Paper"||
        selection=="Scissor" && compChoice=="Scissor"
        ){
        alert("It's a DRAW! Your choice and the computer's choice was same!")
    }else if(selection=="Rock" && compChoice=="Paper"){
        alert("You LOST. Computer chose paper.");
    }else if(selection=="Rock" && compChoice=="Scissor"){
        alert("You WON! Computer chose Scissor.");
    }else if(selection=="Paper" && compChoice=="Scissor"){
        alert("You LOST! Computer chose Scissor.");
    }else if(selection=="Paper" && compChoice=="Rock"){
        alert("You WON! Computer chose Rock.");
    }else if(selection=="Scissor" && compChoice=="Rock"){
        alert("You LOST! Computer chose Rock.");
    }else if(selection=="Scissor" && compChoice=="Paper"){
        alert("You WON! Computer chose Paper.");
    }
};

function computerChoice(){
    const options=['Rock','Paper','Scissor'];

    const choiceNumber = Math.floor(Math.random()*3);
    const cChoice = options[choiceNumber];
    return cChoice;
}




function rockBtnHandler(){
    playerChoice('Rock');
}

function paperBtnHandler(){
    playerChoice('Paper');
}

function scissorBtnHandler(){
    playerChoice('Scissor');
}

rockBtn.addEventListener('click', rockBtnHandler);
paperBtn.addEventListener('click', paperBtnHandler);
scissorBtn.addEventListener('click', scissorBtnHandler);
