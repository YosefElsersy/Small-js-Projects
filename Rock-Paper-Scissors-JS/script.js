const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoise) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = "";

  if (playerChoise === computerChoice) {
    result = "IT's A TIE!";
  } else {
    switch (playerChoise) {
      case "rock":
       result = computerChoice === "scissors" ? "YOU WIN" : "YOU LOSE!";
       break;
      case "paper":
       result = computerChoice === "rock" ? "YOU WIN" : "YOU LOSE!";
       break;
      case "scissors":
       result = computerChoice === "papper" ? "YOU WIN" : "YOU LOSE!";
       break;
    }
  }
  playerDisplay.textContent = `PLAYER : ${playerChoise}`;
  computerDisplay.textContent = `COMPUTER : ${computerChoice}`;
  resultDisplay.textContent = result;
}
