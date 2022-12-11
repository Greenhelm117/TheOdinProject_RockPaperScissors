/* psuedocode

Rock Paper Scissors

GetComputerChoice
GetPlayerChoice

CompareChoices

DetermineWinner


*/

const rock = "rock";
const paper = "paper";
const scissors = "scissors";

const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', () => {

    oneRound(getComputerChoice(), rock);

})

const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', () => {

    oneRound(getComputerChoice(), paper);

})

const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', () => {

    oneRound(getComputerChoice(), scissors);

})




const resultsDisplay = document.querySelector('#results');
resultsDisplay.textContent = ''






function getWinner()
{

    

}

function getComputerChoice()
{
    let choice = Math.floor(Math.random() * 3) +1;

    if (choice == 1)
    {
        return rock;
    }
    else if (choice == 2)
    {
        return paper;
    }
    else if (choice == 3)
    {
        return scissors;
    }

    return 0;
}


function getPlayerChoice()
{
    let theChoice = prompt("Choose rock, paper, or scissors.")

    theChoice = theChoice.toLowerCase();

    if (theChoice === rock || theChoice === paper || theChoice === scissors)
    {
        return theChoice;
    }
    else

    return "Error";

    
}


function oneRound(computerChoice, playerChoice)
{
    //let theWinner;

    computerChoice = getComputerChoice();
    //playerChoice = getPlayerChoice();

    computerWins = 0;
    playerWins = 0;

   /* if (playerChoice = rock && computerChoice == rock)
    {
        return "Tie";
    }
    else if (playerChoice = paper && computerChoice == paper)
    {
        return "Tie";
    }
    else if (playerChoice = scissors && computerChoice == scissors)
    {
        return "Tie";
    } */

    console.log(playerChoice);
    console.log(computerChoice);

    if (playerChoice == rock && computerChoice == paper)
    {
        computerWins = 1;
        playerWins = 0;


        resultsDisplay.textContent = "Computer wins! Paper beats rock!";
        return "Computer wins! Paper beats rock!";



    }
    else if (playerChoice == rock && computerChoice == scissors)
    {

        computerWins = 0;
        playerWins = 1;

        resultsDisplay.textContent = "You win! Rock beats scissors!";
        return "You win! Rock beats scissors!";

    }
    else if (playerChoice == rock && computerChoice == rock)
    {

        computerWins = 0;
        playerWins = 0;

        resultsDisplay.textContent = "Tie";
        return "Tie";

   
    }
    else if (playerChoice == paper && computerChoice == scissors)
    {
        computerWins = 1;
        playerWins = 0;

        resultsDisplay.textContent = "Computer wins! Scissors beats paper!";
        return "Computer wins! Scissors beats paper!";


    }
    else if (playerChoice == paper && computerChoice == rock)
    {

        computerWins = 0;
        playerWins = 1;

        resultsDisplay.textContent = "You win! Paper beats rock!";
        return "You win! Paper beats rock!";

  
    }
    else if (playerChoice == paper && computerChoice == paper)
    {
        computerWins = 0;
        playerWins = 0;

        resultsDisplay.textContent = "Tie!";
        return "Tie";
    }
    else if (playerChoice == scissors && computerChoice == paper)
    {
        computerWins = 0;
        playerWins = 1;

        resultsDisplay.textContent = "You win! Scissors beats paper!";
        return "You win! Scissors beats paper!";

    }
    else if (playerChoice == scissors && computerChoice == rock)
    {

        computerWins = 1;
        playerWins = 0;

        resultsDisplay.textContent = "Computer wins! Rock beats scissors!";
        return "Computer wins! Rock beats scissors!";
  
    }
    else if (playerChoice == scissors && computerChoice == scissors)
    {
        computerWins = 0;
        playerWins = 0;

        resultsDisplay.textContent = "Tie!";
        return "Tie";
    }
    else


    resultsDisplay.textContent = "ERROR";
    return "Error";
}







/*function Game()
{
    let Winner = "no one";
    computerScore = 0;
    playerScore = 0;

    for(i = 0; i < 5; i++ )
    {


        oneRound();

        if (playerWins == 1)
        {
            playerScore++;
        }
        else if (computerWins == 1)
        {
            computerScore++;
        }






    }

    if(playerScore > computerScore)
    {
        Winner = "Player wins!";
        return Winner + playerScore + "to" + computerScore;
    }
    else if(computerScore > playerScore)
    {
        Winner = "Computer wins!";
        return Winner + computerScore + "to" + playerScore;
    }
    else
    {
        Winner = "Tie!";
        return Winner + computerScore + "to" + playerScore;;
    }


    

} */



//console.log(Game());

//console.log(getPlayerChoice())
//console.log(getComputerChoice())