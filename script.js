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
}    

let playRound =function(computerSelection,playerSelection){
    if(playerSelection=="rock"){
        if(computerSelection=="rock"){
            return `It's a tie!`;
  
        }
        else if(computerSelection=="paper"){
            return "Paper beats rock! You lose!";
        }
        else if(computerSelection=="scissor"||computerSelection=="scissors"){
            return "Rock beats scissors! You win!";
        }    

    }
    else if(playerSelection=="paper"){
        if(computerSelection=="rock"){
            return "Paper beats rock! You win!";
        }
        else if(computerSelection=="paper"){
            return `It's a tie!`;
        }
        else if(computerSelection=="scissor"||computerSelection=="scissors"){
            return "Scissors beat paper! You lose!";
        }
    }    
    else if(playerSelection=="scissor" || playerSelection=="scissors"){
        if(computerSelection=="rock"){
            return "Rock beats scissors! You lose!";
        }
        else if(computerSelection=="paper"){
            return `Scissors beats paper! You win!`;
        }
        else if(computerSelection=="scissor"||computerSelection=="scissors"){
            return `It's a tie`;
        }

    }   
    else{
        return "Invalid input"};
}

function game(){
    let computerScore=0, playerScore=0, counter=5;
    for(let x=0;x<6;x++){

        let userChoice=prompt("Rock, Paper or Scissor?").toLowerCase();
        let randomElement=getComputerChoice();
        let roundScore=playRound(randomElement, userChoice);

   
      if(roundScore=="Rock beats scissors! You win!" || roundScore== "Paper beats rock! You win!" || roundScore==`Scissors beats paper! You win!`){
            playerScore++;

        }
        else if(roundScore=="Paper beats rock! You lose!" || roundScore=="Scissors beat paper! You lose!" || roundScore=="Rock beats scissors! You lose!"){
            computerScore++;
        }
        alert("Your choice: "+ userChoice
        +"\nComputer Choice: " + randomElement
        + "\n" + roundScore
        + "\nComputer score: " + computerScore
        + "         Your Score: " + playerScore
        + "\nRounds left: " + counter
        );
    
    counter--;
    }
    if(playerScore>computerScore){
        alert("You win the whole game!");
    }
    else if(computerScore>playerScore){
        alert("You lose the whole game!");
    }
    else{
        alert("It's a tie");
    }
    alert("Final Score\nYou: " + playerScore + "\nComputer: " + computerScore);
}
game();