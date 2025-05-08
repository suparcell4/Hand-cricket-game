let playerScore = 0;
let isPlayerBatting = true;

function play(playerChoice) {
  const computerChoice = Math.floor(Math.random() * 6) + 1;
  const result = document.getElementById("result");
  const status = document.getElementById("status");
  const score = document.getElementById("score");

  if (isPlayerBatting) {
    if (playerChoice === computerChoice) {
      isPlayerBatting = false;
      result.innerText = `OUT! You chose ${playerChoice}, Computer chose ${computerChoice}`;
      status.innerText = "Game Over";
    } else {
      playerScore += playerChoice;
      result.innerText = `You: ${playerChoice}, Computer: ${computerChoice}`;
      score.innerText = `Your Score: ${playerScore}`;
    }
  }
}
