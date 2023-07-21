// alert("🪨 📄 ✂️");

const choices = ['rock', 'paper', 'scissors'];

function pickOne(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getComputerChoice() {
    return pickOne(choices);
}

function playRound(computerSelection, playerSelection) {
    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection.match(computerSelection))
    {
        console.log("It's a tie!");
        return 0;
    }

    if (playerSelection.match('rock') && computerSelection.match('paper'))
    {
        console.log("You Lose!");
        return -1;
    }
    if (computerSelection.match('rock') && playerSelection.match('paper'))
    {
        console.log("You Win!");
        return 1;
    }

    if (playerSelection.match('rock') && computerSelection.match('scissor'))
    {
        console.log("You Win!");
        return 1;
    }
    if (computerSelection.match('rock') && playerSelection.match('scissor'))
    {
        console.log("You Lose!");
        return -1;
    }

    if (playerSelection.match('scissor') && computerSelection.match('paper'))
    {
        console.log("You Win!");
        return 1;
    }
    if (computerSelection.match('scissor') && playerSelection.match('paper'))
    {
        console.log("You Lose!");
        return -1;
    }
}