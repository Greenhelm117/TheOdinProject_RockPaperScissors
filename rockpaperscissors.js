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


    return rock;
}


function oneRound(computerChoice, playerChoice)
{
    let theWinner;

    computerChoice = getComputerChoice();
    playerChoice = getPlayerChoice()

    if (playerChoice = rock && computerChoice = rock)
    {
        return "Tie"
    }
    else if (playerChoice = paper && computerChoice = paper)
    {
        return 
    }


    return theWinner;
}



console.log(oneRound())