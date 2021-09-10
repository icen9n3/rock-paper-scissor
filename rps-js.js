
      

const playerSelection = ["ROCK", "PAPER", "SCISSOR"];
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const roundNum = document.querySelector("#roundNum")
   
function selectRock() {playRound(computerPlay(), "ROCK");}
function selectScissor() {playRound(computerPlay(), "SCISSOR");}
function selectPaper() { playRound(computerPlay(), "PAPER");}
  
//Computers choice
computerSelection = computerPlay()
function computerPlay(randomChoice)
    {const compChoices = ["ROCK", "PAPER", "SCISSOR", "PAPER", "ROCK", "SCISSOR","ROCK", "PAPER", "SCISSOR", "PAPER", "ROCK", "SCISSOR", "ROCK", "PAPER", "SCISSOR"];
    randomChoice = compChoices[Math.floor(Math.random() * 15)];
    return randomChoice;}
    
//playRound
    function playRound(computerSelection, playerSelection) 
    {
   //Tie
  
        if (playerSelection == "ROCK" && computerSelection == "ROCK" || playerSelection == "PAPER" && computerSelection == "PAPER" ||
      playerSelection == "SCISSOR" && computerSelection == "SCISSOR" )
    { alert("Tie Game")}
    // Player point
        else if (playerSelection == "ROCK" && computerSelection == "SCISSOR")
        {   playerScore += 1;
            alert("Player wins! Rock beats Scissor")}
    
        else if (playerSelection == "SCISSOR" && computerSelection == "PAPER")
        {playerScore += 1;
            alert("Player wins! Scissor beats Paper")}
    
        else if (playerSelection == "PAPER" && computerSelection == "ROCK")
        {playerScore += 1;
            alert("Player wins! Paper covers Rock")}
    
        // Computer point
        else if (playerSelection == "ROCK" && computerSelection == "PAPER")
        {computerScore += 1;
            alert("Player loses! Paper covers Rock")}
    
        else if (playerSelection == "SCISSOR" && computerSelection == "ROCK")
        {computerScore += 1;
            alert("Player loses! Rock beats Scissors")}
    
        else if (playerSelection == "PAPER" && computerSelection == "SCISSOR")
        {computerScore += 1;
            alert("Player loses! Scissor cuts Paper")}
    
        else {alert("error - invalid input")};
        }

    function game() { 
   let playerScore = 0;
    let computerScore = 0;
    let roundNum = 1;
   
    for (i = 1 ; i < 6; i++) {
     
      
      rock.addEventListener("click", selectRock);
      scissor.addEventListener("click", selectScissor);
      paper.addEventListener("click", selectPaper);
     
       
        roundNum++;
       
      //    alert("Round 2")
       // playRound();
        //alert("Player Score: " + playerScore + " Computer Score: " + computerScore)
        function results(playerScore, computerScore) {
      if ( playerScore > computerScore){alert("Player wins the match!")}
      else if ( playerScore < computerScore) {alert("Player loses the match!")}
      else { alert("Tie Game!");} }}
  }
          
    
   console.log(playerSelection, computerSelection)

   



 






    