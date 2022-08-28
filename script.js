

const buttons =document.querySelectorAll(".btnPlayer");
let userChoice = "";
let displayPara = document.querySelector(".commentary-text");
selectionLoop();
// User buttons
function userSelection (){

    if(this===buttons[0]){
        userChoice = "rock";

    }
    if(this===buttons[1]){
        userChoice = "paper";

    }
    if(this===buttons[2]){
        userChoice = "scissor";
    }  
    game(userChoice);

  
}
function selectionLoop (){
    buttons.forEach((button) => {
        button.addEventListener("click", userSelection);
    })
}

function game (userC){
let pScore = document.getElementById("player-score");
let pScoreNum = parseInt(pScore.innerHTML);
let cScore = document.getElementById("computer-score");
let cScoreNum = parseInt(cScore.innerHTML);
let randomElement = computerSelection();
let roundScore=playRound(randomElement,userC);
let dashthing=document.getElementById("dashthing");
fade(userChoice, randomElement);
if(roundScore === 1){
    pScoreNum++;
    pScore.innerHTML=pScoreNum;
}
else if(roundScore === 2){
    cScoreNum++;
    cScore.innerHTML=cScoreNum;
}
if(pScoreNum >= 5 || cScoreNum >= 5){
    buttons.forEach((button) => {                   //removes the click listener so it stops clicks between round finish and play again
        button.removeEventListener("click", userSelection);
    })
    if(pScoreNum>cScoreNum){
        displayPara.textContent="You won! Click below to play again."
    }
    else{
        displayPara.textContent="You lost... Click below to play again."       
    }

    let scoreContainer = document.querySelector(".results-box");
    pScore.innerHTML="";
    cScore.innerHTML="";
    dashthing.innerHTML="";
    let playAgainBtn = document.createElement("button");
    playAgainBtn.classList.add("playAgainActive")
    scoreContainer.appendChild(playAgainBtn);
    playAgainBtn.textContent="Play Again?";
  
    playAgainBtn.addEventListener("click", ()=>{
        pScore.innerHTML="0";
        cScore.innerHTML="0";
        dashthing.innerHTML="-";
        pScore=0;cScore=0;pScoreNum=0;cScoreNum=0;
        playAgainBtn.style.display="none";
        displayPara.textContent="";
        selectionLoop();
    })

}
}


function removeEventListeners(){
    
}


//fade function
function fade(userChoice,randomElement) {
    let myLogos = document.querySelectorAll(".fa-solid");
    let currentUserLogo = "";
    if(userChoice==="rock"){
       myLogos[0].classList.toggle("fade");

    }



}

// computer random selection
function computerSelection(){
    let random = Math.floor(Math.random()*3);
    if(random==0){
        return "rock";
    }
    else if(random==1){
        return "paper";
    }
    else if(random==2){
        return "scissor";
    }
};  

//each round
let playRound =function(computerSelection,playerSelection){


    if(     (playerSelection=="rock" && computerSelection=="scissor")||
            (playerSelection=="paper" && computerSelection=="rock") ||
            (playerSelection=="scissor"&&computerSelection=="paper") ){  
            displayPara.textContent=`${playerSelection} beats ${computerSelection}... good job`;
            return 1; 
    }

    else if( (computerSelection=="rock" && playerSelection=="scissor")||
             (computerSelection=="paper" && playerSelection=="rock") ||
             (computerSelection=="scissor"&&playerSelection=="paper") )  {
                displayPara.textContent=`tough luck... ${computerSelection} beats ${playerSelection}`;
            return 2;    
    } 

    else if (playerSelection==computerSelection){
        displayPara.textContent="it's a tie...";
            return 3;
    }
}; 


