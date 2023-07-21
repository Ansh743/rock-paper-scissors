// alert("🪨 📄 ✂️");

const choices = ['rock', 'paper', 'scissors'];

function pickOne(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getComputerChoice() {
    return pickOne(choices);
}

function playRound(comp, usr) {
    if (usr.match(comp))
    {
        console.log("It's a tie!");
        return 0;
    }

    if (usr.match('rock') && comp.match('paper'))
    {
        console.log("You Lose!");
        return -1;
    }
    if (comp.match('rock') && usr.match('paper'))
    {
        console.log("You Win!");
        return 1;
    }

    if (usr.match('rock') && comp.match('scissor'))
    {
        console.log("You Win!");
        return 1;
    }
    if (comp.match('rock') && usr.match('scissor'))
    {
        console.log("You Lose!");
        return -1;
    }

    if (usr.match('scissor') && comp.match('paper'))
    {
        console.log("You Win!");
        return 1;
    }
    if (comp.match('scissor') && usr.match('paper'))
    {
        console.log("You Lose!");
        return -1;
    }
}