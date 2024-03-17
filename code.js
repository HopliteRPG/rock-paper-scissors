let playerSelection = "".toLowerCase();
let outcome = "";

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    if(randomNum === 0){
        return computerSelection = "rock"
    }
    else if(randomNum === 1){
        return computerSelection = "paper"
    }
    else{
        return computerSelection = "scissors"
    }
}

function playRound(playerSelection,computerSelection){

    console.log(playerSelection)
    console.log(computerSelection)

   if(playerSelection === "rock"){
        if(computerSelection === "rock"){
         return   outcome = "Its a Tie! Both Players used Rock";
            }
        else if(computerSelection === "paper"){
            return   outcome = "You Lose! Paper beats Rock";
            }
        else if (computerSelection === "scissors"){
            return  outcome = "You Win! Rock beats Scissors";
            }
            console.log(outcome)

   }
   else if(playerSelection === "paper") {
        if(computerSelection === "rock"){
            return outcome = "You Win! Paper beats Rock";
        }
        else if(computerSelection === "paper"){
            return  outcome = "Its a Tie! Both Players used Paper";
        }
        else if (computerSelection === "scissors"){
            return outcome = "You Lose! Scissors beats Paper";
        }     
        console.log(outcome);
        
   }
   else if(playerSelection === "scissors"){
        if(computerSelection === "rock"){
            return   outcome = "You Lose! Rock beats Scissors";
            }
        else if(computerSelection === "paper"){
            return outcome = "You Win! Scissors beats Paper";
        }
        else if (computerSelection === "scissors"){
            return  outcome ="Its a Tie! Both Players used Scissors";
        }   
        console.log(outcome);
    }
}


function playGame(){
    playerSelection = prompt("Enter Rock Paper or Scissors");
    playRound(playerSelection,getComputerChoice());
    console.log(outcome)

    playerSelection = prompt("Enter Rock Paper or Scissors");
    playRound(playerSelection,getComputerChoice());
    console.log(outcome)
    
    playerSelection = prompt("Enter Rock Paper or Scissors");
    playRound(playerSelection,getComputerChoice());
    console.log(outcome)

    playerSelection = prompt("Enter Rock Paper or Scissors");
    playRound(playerSelection,getComputerChoice());
    console.log(outcome)
  
    playerSelection = prompt("Enter Rock Paper or Scissors");
    playRound(playerSelection,getComputerChoice());
    console.log(outcome)
}


playGame()