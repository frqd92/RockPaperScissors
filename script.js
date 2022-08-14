let getComputerChoice= function(){
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

let playRound =function(computerSelection,playerSelection){
    if(playerSelection=="scissors"){
        playerSelection="scissor";
    }
    if(     (playerSelection=="rock" && computerSelection=="scissor")||
            (playerSelection=="paper" && computerSelection=="rock") ||
            (playerSelection=="scissor"&&computerSelection=="paper") ){  
            return 2; 
    }

    else if( (computerSelection=="rock" && playerSelection=="scissor")||
             (computerSelection=="paper" && playerSelection=="rock") ||
             (computerSelection=="scissor"&&playerSelection=="paper") )  {

            return 1;    
    } 
    else if (playerSelection==computerSelection){
            return 0;
    }
    else{
        return 4;
    }
}; 


function game(){
    let computerScore=0, playerScore=0, tieScore=0, msg="";
    for(let x=0;x<20;x++){
        let userChoice=prompt("Rock, Paper, Scissors?").toLowerCase();
        let randomElement=getComputerChoice();
        let roundScore=playRound(randomElement, userChoice);
      if(roundScore==2){
            playerScore++;
            msg=`You win! ${userChoice} beats ${randomElement} `;
        }
        else if(roundScore==1){
            computerScore++;
            msg=`You lose! ${randomElement} beats ${userChoice}`;
        }  
        else if(roundScore==0){
            tieScore++;
            msg= (`Tie!`);
        }
        else if(roundScore==4){
            msg= (`${userChoice} is not a valid weapon.\nTry again with rock, paper, or scissors`);
        }          

        alert   (
                "Your choice: "+ userChoice
                +"          Computer Choice: " + randomElement
                +"\n" + msg
                + "\nComputer score: " + computerScore
                + "         Your Score: " + playerScore
                +"          Ties: " + tieScore
                );

        if(playerScore==5){
            alert("You win the whole game!");
            break;
        }
        else if(computerScore==5){
            alert("You lose the whole game!");
            break;
        }
    }

    alert("Final Score\nYou: " + playerScore + "\nComputer: " + computerScore);
}
alert("Rock.Paper.Scissors. First to 5 wins!")
game();

