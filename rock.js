function computerMove(){
    let computer = Math.random()
    let choice = ``
    if (computer < 1/3 ){
        choice = `rock`
    } else if (computer < 2/3){
        choice = `paper`
    } else {
        choice = `scissors`
    }
    return choice;
}

let rock = document.querySelector(`#rock`)
let paper = document.querySelector(`#paper`)
let scissors = document.querySelector(`#scissors`)




let win = `YOU WIN`
let lose = `YOU LOSE`
let tie  = `IT'S A TIE`

// rock
function HumanRock() {
    let choice = computerMove()
    let rockPara = document.querySelector(`#Para`)
    if (choice === `rock`) {
        rockPara.textContent = `${tie}. You choose Rock. computer choose `+ choice
        
    } else if (choice === `paper`){
        rockPara.textContent = `${lose}. You choose Rock. computer choose `+ choice

    } else{
        rockPara.textContent = `${win}. You choose Rock. computer choose `+ choice
    }
    
}

// paper
function HumanPaper() {
    let choice = computerMove()
    let paperPara = document.querySelector(`#Para`)
    if (choice === `paper`) {
        paperPara.textContent = `${tie}. You choose Paper. computer choose `+ choice
        
    } else if (choice === `rock`){
        paperPara.textContent = `${win}. You choose Paper. computer choose `+ choice

    } else{
        paperPara.textContent = `${lose}. You choose Paper. computer choose `+ choice
    }
    
}

// SCISSORS
function HumanScissors() {
    let choice = computerMove()
    let scissorsPara = document.querySelector(`#Para`)
    if (choice === `paper`) {
        scissorsPara.textContent = `${win}. You choose Scissors. computer choose `+ choice
        
    } else if (choice === `rock`){
        scissorsPara.textContent = `${lose}. You choose Scissors. computer choose `+ choice

    } else{
        scissorsPara.textContent = `${tie}. You choose scissors. computer choose `+ choice
    }
    
}

rock.addEventListener(`click`, HumanRock)
paper.addEventListener(`click`, HumanPaper)
scissors.addEventListener(`click`, HumanScissors)

