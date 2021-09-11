

 





const cScore = document.querySelector("#cScore");
const pScore = document.querySelector("#pScore")
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const round = document.querySelector("#round")
const winner = document.querySelector("#winner")
//let roundNum;
//let playerScore = 0   

//Computers choice
computerSelection = computerPlay()
function computerPlay(randomChoice)
    {const compChoices = ["ROCK", "PAPER", "SCISSOR", "PAPER", "ROCK", "SCISSOR","ROCK", "PAPER", "SCISSOR", "PAPER", "ROCK", "SCISSOR", "ROCK", "PAPER", "SCISSOR"];
    randomChoice = compChoices[Math.floor(Math.random() * 15)];
    return randomChoice;}

     
//playRound
    function playRound(computerSelection, playerSelection) 
    {
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
          playerScore += 1;
          winner.textContent ="Player wins! Scissor cuts Paper"
            }
    
        else if (playerSelection == "PAPER" && computerSelection == "ROCK")
        { 
          playerScore += 1;
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
            if (playerScore === 5 || computerScore === 5)
            {finalResults(playerScore, computerScore);}  


cScore.textContent = 'Computer Score: ' + computerScore;
pScore.textContent = 'Player Score: ' + playerScore;
round.textContent = "Round: " + roundNum; };
        

function selectRock() {playRound(computerPlay(), "ROCK");};
function selectScissor() {playRound(computerPlay(), "SCISSOR")};
function selectPaper() { playRound(computerPlay(), "PAPER")}; 


 function finalResults(playerScore, computerScore) {
      if ( playerScore > computerScore){window.location.replace("win.html")}
      else if ( playerScore < computerScore){window.location.replace("lose.html");}
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
 
  
       
      
   
          

       
   

   



 






    