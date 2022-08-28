

const buttons =document.querySelectorAll(".btnPlayer");
let userChoice = "";
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
buttons.forEach((button) => {
    button.addEventListener("click", userSelection);
})

function game (userC){
let pScore = document.getElementById("player-score");
let pScoreNum = parseInt(pScore.innerHTML);
let cScore = document.getElementById("computer-score");
let cScoreNum = parseInt(cScore.innerHTML);
let randomElement = computerSelection();
let roundScore=playRound(randomElement,userC);


console.log("score" + roundScore);

if(roundScore === 1){
    pScoreNum++;
    pScore.innerHTML=pScoreNum;
}
else if(roundScore === 2){
    cScoreNum++;
    cScore.innerHTML=cScoreNum;
}
if(pScoreNum === 5 || cScoreNum === 5){
    let scoreDisplay = document.getElementsByClassName("results-box");
    scoreDisplay.classList.add("colors");
    
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
            return 1; 
    }

    else if( (computerSelection=="rock" && playerSelection=="scissor")||
             (computerSelection=="paper" && playerSelection=="rock") ||
             (computerSelection=="scissor"&&playerSelection=="paper") )  {
            return 2;    
    } 

    else if (playerSelection==computerSelection){
            return 3;
    }
}; 

/*
for(let x=0;x<5;x++){

    if(roundScore==1){
          playerScore++;
          console.log(`You win! ${userC} beats ${randomElement} `);
      }
      else if(roundScore==2){
          computerScore++;
          console.log(`You lose! ${userC} beats ${userChoice}`);
      }  
      else if(roundScore==3){
          //tieScore++;
          console.log(`Tie!`);
      }
      if(playerScore==5){
          console.log("You win the whole game!");
          break;
      }
      else if(computerScore==5){
          console.log("You lose the whole game!");
          break;
      }
  }*/