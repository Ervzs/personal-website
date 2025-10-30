// Rock Paper Scissors Game
const choices = ["rock", "paper", "scissors"];
const player = document.getElementById("player");
const computer = document.getElementById("computer");
const result = document.getElementById("resultDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const countdown = document.getElementById("countdown");

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  var playerChoice = playerChoice;
  let resultGame = "";
  const countdownAnimation = ["rock", "paper", "scissors", "shoot!"];
  let countdownNum = 0;
  let interval = setInterval(() => {
    countdown.textContent = countdownAnimation[countdownNum];
    countdownNum++;
    if (countdownNum == countdownAnimation.length) {
      clearInterval(interval);

      let computerImgSrc = "";
      if (computerChoice === "rock") computerImgSrc = "assets/rock.png";
      if (computerChoice === "paper") computerImgSrc = "assets/paper.png";
      if (computerChoice === "scissors") computerImgSrc = "assets/scissors.png";

      let playerImgSrc = "";
      if (playerChoice === "rock") playerImgSrc = "assets/rock.png";
      if (playerChoice === "paper") playerImgSrc = "assets/paper.png";
      if (playerChoice === "scissors") playerImgSrc = "assets/scissors.png";

      if (
        (playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "paper" && computerChoice == "rock") ||
        (playerChoice == "scissors" && computerChoice == "paper")
      ) {
        resultGame = "Player wins!";
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
      } else if (playerChoice == computerChoice) {
        resultGame = "Its a tie!";
      } else {
        resultGame = "Computer wins!";
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
      }

      player.innerHTML =
        '<img src="' +
        playerImgSrc +
        '" style="width:100px;height:100px;vertical-align:center" />';
      computer.innerHTML =
        '<img src="' +
        computerImgSrc +
        '" style="width:100px;height:100px;vertical-align:center" />';
      result.textContent = resultGame;
    }
  }, 500);
}
