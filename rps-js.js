

 



//<script src="rps-js.js"></script>

const cScore = document.querySelector("#cScore");
const pScore = document.querySelector("#pScore")
const playerSelection = ["ROCK", "PAPER", "SCISSOR"];
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const round = document.querySelector("#round")
const winner = document.querySelector("#winner")
let roundNum;
let playerScore = 0



   

//Computers choice
computerSelection = computerPlay()
function computerPlay(randomChoice)
    {const compChoices = ["ROCK", "PAPER", "SCISSOR", "PAPER", "ROCK", "SCISSOR","ROCK", "PAPER", "SCISSOR", "PAPER", "ROCK", "SCISSOR", "ROCK", "PAPER", "SCISSOR"];
    randomChoice = compChoices[Math.floor(Math.random() * 15)];
    return randomChoice;}
 
    function score(playerScore, computerScore) {  
      if (point = 3)
      { playerScore = 1 + playerScore}
      else if (point = 2)
      { computerScore = computerScore + 1}
      else {return;}
   }   
//playRound
    function playRound(computerSelection, playerSelection) 
    {
   //Tie


        if (playerSelection == "ROCK" && computerSelection == "ROCK" || playerSelection == "PAPER" && computerSelection == "PAPER" ||
      playerSelection == "SCISSOR" && computerSelection == "SCISSOR" )
    { winner.textContent ="Tie Game"  }
    // Player point
        else if (playerSelection == "ROCK" && computerSelection == "SCISSOR")
        {   
          playerScore += 1;
          winner.textContent ="Player wins! Rock beats Scissor"
          }
    
    
        else if (playerSelection == "SCISSOR" && computerSelection == "PAPER")
        {   
          playerScore = 1 + playerScore
          winner.textContent ="Player wins! Scissor beats Paper"
            }
    
        else if (playerSelection == "PAPER" && computerSelection == "ROCK")
        { 
          playerScore = 1 + playerScore
          winner.textContent ="Player wins! Paper covers Rock"
            }
    
        // Computer point
        else if (playerSelection == "ROCK" && computerSelection == "PAPER")
        {
          winner.textContent ="Player loses! Paper covers Rock"
            computerScore += 1;}
    
        else if (playerSelection == "SCISSOR" && computerSelection == "ROCK")
        {
          winner.textContent ="Player loses! Rock beats Scissors"
            computerScore += 1;}
    
        else if (playerSelection == "PAPER" && computerSelection == "SCISSOR")
        {
          winner.textContent ="Player loses! Scissor cuts Paper"
            computerScore += 1;};
         
            roundNum += 1;
            if (roundNum === 6)
            {results(playerScore, computerScore);
              game()}

cScore.textContent = 'Computer Score: ' + computerScore;
pScore.textContent = 'Player Score: ' + playerScore;
round.textContent = "Round: " + roundNum; };
    
     //   else {alert("error - invalid input")};
        

function selectRock() {playRound(computerPlay(), "ROCK");};
function selectScissor() {playRound(computerPlay(), "SCISSOR")};
function selectPaper() { playRound(computerPlay(), "PAPER")}; 

 function results(playerScore, computerScore) {
      if ( playerScore > computerScore){winner.textContent ="Player wins the Game!";}
      else if ( playerScore < computerScore) {winner.textContent ="Player loses the Game!";}
      else { winner.textContent ="Tie Game!";} }



function game() { 
 
playerScore = 0;
computerScore = 0;
roundNum = 1;
cScore.textContent = 'Computer Score: ' + computerScore;
pScore.textContent = 'Player Score: ' + playerScore;
round.textContent = "Round: " + roundNum; 

rock.addEventListener("click", selectRock);
scissor.addEventListener("click", selectScissor);
paper.addEventListener("click", selectPaper);
}
            
    
    


   const startBtn = document.querySelector("#startBtn");
  startBtn.addEventListener("click", () => { window.location.href = "rps-play.html"});
 
  
       
      
   
          

       
   

   



 






    