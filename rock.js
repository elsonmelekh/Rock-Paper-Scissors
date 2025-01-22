function getComputerChoice(){

    let computerChoice = Math.random()

    switch (true) {
        case (computerChoice <= 1/3):
            return 'rock';
        
        case (computerChoice <= 2/3):
            return 'paper';

        default:
            return 'scissors';
    }  
}


function getHumanChoice() {
    let humanChoice = prompt('Input your preferred choice (rock, paper, or scissors)').toLowerCase();
    return humanChoice.toLowerCase();
}



const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


const win = 'You Win'
const lose = 'you Lose'
const tie = 'Tie'




function playRound(humanChoice, computerChoice) {

    ///ROCK OPTIONS
    if (humanChoice === 'rock') {
        if (computerChoice === 'rock') {
            return `${tie}. You choose ${humanChoice}, computer choose ${computerChoice}`;
        } 
        else if (computerChoice === 'scissors') {
            return `${win}. You choose ${humanChoice}, computer choose ${computerChoice}`;
        }
        else {
        
            return `${lose}. You choose ${humanChoice}, computer choose ${computerChoice}`;
        }
    }

    //paper options
    if (humanChoice === 'paper') {
        if (computerChoice === 'rock') {
    
            return `${win}. You choose ${humanChoice}, computer choose ${computerChoice}`; 
        } 
        else if (computerChoice === 'scissors') {
        
            return `${lose}. You choose ${humanChoice}, computer choose ${computerChoice}`;
        }
        else {
            return `${tie}. You choose ${humanChoice}, computer choose ${computerChoice}`;
        }
    }

    ////scissors option
    if (humanChoice === 'scissors') {
        if (computerChoice === 'scissors') {
            return `${tie} You choose ${humanChoice}, computer choose ${computerChoice}`;
        } 
        else if (computerChoice === 'paper') {
        
            return `${win}. You choose ${humanChoice}, computer choose ${computerChoice}`;
        }
        else {
            return `${lose} You choose ${humanChoice}, computer choose ${computerChoice}`;
    }

     }

    }

    let result = playRound(humanSelection,computerSelection)

    function playGame(){
        let humanScore = 0;
        let computerScore = 0;

        console.log(result);

        if (result.includes(`${win}`)) {
            humanScore++;
            console.log(`human = ${humanScore}, computer =${computerScore}`)
            
        } else if (result.includes(`${lose}`)){
            computerScore++;
            console.log(`human = ${humanScore}, computer =${computerScore}`)
        } else{
            console.log('tie')
        }





    }

    prompt(playGame());

   