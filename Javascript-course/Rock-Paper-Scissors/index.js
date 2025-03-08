
const playerChoice = document.getElementById("playerchoice")
const computerChoice = document.getElementById("computerchoice")
const resultelement = document.getElementById("result")
const playerScore = document.getElementById("playerscore")
const computerScore = document.getElementById("computerscore")

const randomList = ["rock","paper","scissors"]

let playerscore = 0
let computerscore = 0


const playGame = (playerchoice)=>{
    const randomIndex = Math.floor(Math.random()*3)
    const compchoice = randomList[randomIndex]
    computerChoice.textContent = `Computer chooses: ${compchoice}`
    playerChoice.textContent = `Player chooses: ${playerchoice}`

    if (playerchoice===compchoice) {
        resultelement.textContent = "IT'S A TIE!"
        resultelement.classList.remove("redColor")
        resultelement.classList.remove("greenColor")
    } else {
        let res;
        switch(playerchoice) {
            case "rock":
                res=(compchoice==="scissors"? "YOU WIN !":"YOU LOSE" )
                break
            case "paper":
                res=(compchoice==="rock"? "YOU WIN !":"YOU LOSE" )
                break
            case "scissors":
                res=(compchoice==="paper"? "YOU WIN !":"YOU LOSE" )
                break  
        }
        resultelement.textContent = res
    }
    if (resultelement.textContent==="YOU WIN !") {
        playerscore++
        playerScore.textContent = `Player score : ${playerscore}`
        playerScore.classList.add("greenColor")
        resultelement.classList.remove("redColor","greenColor")
        resultelement.classList.toggle("greenColor")
    } else if (resultelement.textContent==="YOU LOSE"){
        computerscore++
        computerScore.textContent = `Computer score : ${computerscore}`
        computerScore.classList.add("redColor")
        resultelement.classList.remove("redColor","greenColor")
        resultelement.classList.toggle("redColor")
        
    } 
}
