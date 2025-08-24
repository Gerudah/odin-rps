function getComputerChoice(){
    let choice = Math.floor(Math.random()*3)
    let computerChoice;
    switch (choice){
        case 0:
            computerChoice = "Rock";
            console.log("The Computer chose Rock!")
            break;
        case 1:
            computerChoice = "Paper";
            console.log("The Computer chose Paper!")
            break;
        case 2:
            computerChoice = "Scissors";
            console.log("The Computer chose Scissors!")
            break;
        default:
            computerChoice = "invalid";
    }
    return computerChoice
}

function getPlayerChoice(){
    let choice = parseInt(prompt("Rock Paper or Scissors?\nEnter 1 for Rock\nEnter 2 for Paper\nEnter 3 for Scissors","1"));
    let humanChoice;
    switch (choice){
        case 1:
            humanChoice = "Rock";
            break;
        case 2:
            humanChoice = "Paper";
            break;
        case 3:
            humanChoice = "Scissors";
            break;
    }
    return humanChoice
}


let humanScore = 0;
let computerScore = 0;

function play(){
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++){
        playRound(); 
    }

    console.log("Final Score:\nPlayer "+humanScore+"\nComputer "+computerScore);
    
    confirm("Play again?") ? play() : null;
    
    function playRound(){
        let player = getPlayerChoice();
        let computer = getComputerChoice();

        function lose(){
            console.log("Computer Wins!\n"+score(0,1))
        }
        function win(){
            console.log("You Win!\n"+score(1,0))
        }

        if (player === computer){
            console.log("It's a Draw!\n"+score())
        }else if (player === "Rock"){
            computer === "Paper" ? 
            lose(): 
            win()
        }else if (player === "Paper"){
            computer === "Scissors" ? 
            lose(): 
            win()
        }else{
            computer === "Rock" ? 
            lose(): 
            win();
        }
    }
}

function score(a = 0,b = 0){
    humanScore = humanScore + a;
    computerScore = computerScore + b;
    console.log("Current Score: \nPlayer "+humanScore+"\nComputer "+computerScore);

}

play();