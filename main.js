// alert("🪨 📄 ✂️");

const choices = ['Rock', 'Paper', 'Scissors'];

function pickOne(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getComputerChoice() {
    return pickOne(choices);
}
