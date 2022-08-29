

const buttons =document.querySelectorAll(".btnPlayer");
let userChoice = "";
let displayPara = document.querySelector(".commentary-text");
let whoWon;
let allBtns = document.querySelectorAll(".fi-iden");
let allBtnss = document.querySelectorAll(".btns");
let boxes = document.querySelectorAll(".Box");
let resultMsgP = document.createElement("h2");
let resultMsgC = document.createElement("h2");
let playerSide = document.getElementById("playerSide");
let resultBox = document.querySelector(".results-box");
 selectionLoop();
// // User buttons
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
    allBtns.forEach((logo)=>{
        logo.classList.remove("fade");
    })

 
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
fadeIn(userChoice, randomElement);

if(roundScore === 1){
    pScoreNum++;
    pScore.innerHTML=pScoreNum;
}
else if(roundScore === 2){
    cScoreNum++;
    cScore.innerHTML=cScoreNum;
}
  if(pScoreNum >= 1 || cScoreNum >= 1){
    resultBox.style.background="black";
    let endMsg = document.createElement("p");
    let comBox = document.getElementById("commentary");
    setTimeout(()=>{
    comBox.appendChild(endMsg);
   },1000);
 

    if(pScoreNum>cScoreNum){
        endMsg.textContent="You won! Click below to play again."
        whoWon=0;
    }
    else{
        endMsg.textContent="You lost... Click below to play again."   
        whoWon=1;    
    }
    let scoreContainer = document.querySelector(".results-box");
    pScore.innerHTML="";
    cScore.innerHTML="";
    dashthing.innerHTML="";
    let playAgainBtn = document.createElement("button");
    playAgainBtn.classList.add("playAgainActive")
    scoreContainer.appendChild(playAgainBtn);
    playAgainBtn.textContent="Play Again?";
    resultMsg();

    playAgainBtn.addEventListener("click", ()=>{
        pScore.innerHTML="0";
        cScore.innerHTML="0";
        dashthing.innerHTML="-";
        pScore=0;cScore=0;pScoreNum=0;cScoreNum=0;
        playAgainBtn.style.display="none";
        displayPara.textContent="";
        allBtnss[0].style.display="contents";
        removeResultMsg();
        comBox.removeChild(endMsg);
        resultBox.style.background="white";
        //selectionLoop();
    })


}
}
function removeResultMsg(){
    resultMsgC.textContent="";
    resultMsgP.textContent="";

    for(let x=0;x<6;x++){
        allBtnss[x].style.visibility="visible";
    
    }
}
function resultMsg(){
    for(let x=0;x<6;x++){
        allBtnss[x].style.visibility="hidden";

    }
    if(whoWon===0){
        boxes[0].appendChild(resultMsgP);
        resultMsgP.textContent="YOU";
        resultMsgP.classList.add("blinking");
        boxes[1].appendChild(resultMsgC);
        resultMsgC.textContent="WIN";
        resultMsgC.classList.add("blinking");

    }
    else if(whoWon===1){
        boxes[0].appendChild(resultMsgP);
        resultMsgP.textContent="YOU";
        resultMsgP.classList.add("blinking");
        boxes[1].appendChild(resultMsgC);
        resultMsgC.textContent="LOSE";
        resultMsgC.classList.add("blinking");
    }
}

function removeEventListeners(){
    buttons.forEach((button) => {                   //removes the click listener so it stops clicks between round finish and play again
        button.removeEventListener("click", userSelection);
    })
}
//fade function
function fadeIn(userChoice,randomElement) {
    let userPick;
    let computerPick;
 
    if(userChoice==="rock"){
        userPick=0;
    
    }else if(userChoice==="paper"){
        userPick=1;
       
    }else if(userChoice==="scissor"){
        userPick=2;
    }if(randomElement==="rock"){
        computerPick=3;
    }else if(randomElement==="paper"){
        computerPick=4;
    }else if(randomElement==="scissor"){
        computerPick=5;
    }

  fadeFunc();

    function fadeFunc(){
        let rockIcon = document.createElement("div");
        let paperIcon = document.createElement("div");
        let scissorIcon = document.createElement("div");
        let rockIconC = document.createElement("div");
        let paperIconC = document.createElement("div");
        let scissorIconC = document.createElement("div");
        rockIcon.innerHTML=`<i class="fa-solid fa-hand-back-fist">`;
        paperIcon.innerHTML=`<i class="fa-solid fa-hand">`;
        scissorIcon.innerHTML=`<i class="fa-solid fa-hand-scissors">`;
        rockIconC.innerHTML=`<i class="fa-solid fa-hand-back-fist">`;
        paperIconC.innerHTML=`<i class="fa-solid fa-hand">`;
        scissorIconC.innerHTML=`<i class="fa-solid fa-hand-scissors">`;
        playerSide.classList.add("arenaIconStyle");
        computerSide.classList.add("arenaIconStyle");
            if(userPick===0){
             
                playerSide.appendChild(rockIcon);

            }else if(userPick===1){
                playerSide.appendChild(paperIcon);
            }else if(userPick===2){
                playerSide.appendChild(scissorIcon);
            }
            if(computerPick===3){
                computerSide.appendChild(rockIconC);

            }else if(computerPick===4){
                computerSide.appendChild(paperIconC);
            }else if(computerPick===5){
                computerSide.appendChild(scissorIconC);
            }

            setTimeout(function(){
                playerSide.innerHTML="";
                computerSide.innerHTML="";
            },1000)

    }

    allBtns[userPick].classList.add("fade");
    allBtns[computerPick].classList.add("fade");


    removeEventListeners(); //so user can't click on button while it's doing the fade effect
    setTimeout(selectionLoop, 1000);
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
}
//each round
function playRound(computerSelection,playerSelection){


    if(     (playerSelection=="rock" && computerSelection=="scissor")||
            (playerSelection=="paper" && computerSelection=="rock") ||
            (playerSelection=="scissor"&&computerSelection=="paper") ){  
            displayPara.textContent=`${playerSelection} beats ${computerSelection}... good job`;
            setTimeout(fadePara,1000);
            return 1; 
    }

    else if( (computerSelection=="rock" && playerSelection=="scissor")||
             (computerSelection=="paper" && playerSelection=="rock") ||
             (computerSelection=="scissor"&&playerSelection=="paper") )  {
            displayPara.textContent=`tough luck... ${computerSelection} beats ${playerSelection}`;
            setTimeout(fadePara,1000);
            return 2;    
    } 

    else if (playerSelection==computerSelection){
            displayPara.textContent="it's a tie...";
            setTimeout(fadePara,1000);
            return 3;
    }        
    displayPara.classList.add("fadestuff");

    function fadePara(){

        displayPara.innerHTML="";
    }
}



