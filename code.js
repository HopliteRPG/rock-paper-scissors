let playerSelection = "RocK".toLowerCase();

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
                console.log("Its a Tie! Both Players used Rock");
            }
        else if(computerSelection === "paper"){
                console.log("You Lose! Paper beats Rock");
            }
        else if (computerSelection === "scissors"){
                console.log("You Win! Rock beats Scissors");
            }
   }
   else if(playerSelection === "paper") {
        if(computerSelection === "rock"){
            console.log("You Win! Paper beats Rock")
        }
        else if(computerSelection === "paper"){
            console.log("Its a Tie! Both Players used Paper");
        }
        else if (computerSelection === "scissors"){
            console.log("You Lose! Scissors beats Paper");
        }      
   }
   else if(playerSelection === "scissors"){
        if(computerSelection === "rock"){
            console.log("You Lose! Rock beats Scissors")
            }
        else if(computerSelection === "paper"){
            console.log("You Win! Scissors beats Paper");
        }
        else if (computerSelection === "scissors"){
            console.log("Its a Tie! Both Players used Scissors");
        }   
   }
}


playRound(playerSelection,getComputerChoice());