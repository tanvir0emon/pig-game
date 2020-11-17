let scores, currentScore, activePlayer, gamePlaying;

init();

// ROLL button
document.querySelector(".btn--roll").addEventListener("click", function() {
  if (gamePlaying) {
    let dice = Math.floor(Math.random() * 6) + 1;

    // result
    let diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";

    // Adding the round score
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(
        "current--" + activePlayer
      ).textContent = currentScore;
    } else {
      nextPlayer();
    }
  }
});

// HOLD button
document.querySelector(".btn--hold").addEventListener("click", function() {
  if (gamePlaying) {
    scores[activePlayer] += currentScore;

    document.querySelector("#score--" + activePlayer).textContent =
      scores[activePlayer];

    // Checking player won the game
    if (scores[activePlayer] >= 100) {
      document.querySelector("#name--" + activePlayer).textContent = "Winner!";
      document.querySelector(".dice").style.dispaly = "none";

      document
        .querySelector(".player--" + activePlayer)
        .classList.add("winner");
      document
        .querySelector(".player--" + activePlayer)
        .classList.remove("player--active");

      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});

function nextPlayer() {
  currentScore = 0;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  document.getElementById("current--0").textContent = 0;
  document.getElementById("current--1").textContent = 0;
  document.querySelector(".player--0").classList.toggle("player--active");
  document.querySelector(".player--1").classList.toggle("player--active");
}

// NewGame button
document.querySelector(".btn--new").addEventListener("click", init);

function init() {
  // Reseting score vars
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.querySelector(".dice").style.display = "none";
  // Reseting scores
  document.getElementById("score--0").textContent = "0";
  document.getElementById("score--1").textContent = "0";
  document.getElementById("current--0").textContent = "0";
  document.getElementById("current--1").textContent = "0";
  // Reseting Player Names
  document.getElementById("name--0").textContent = "Player 1";
  document.getElementById("name--1").textContent = "Player 2";
  // Removing classes from panels
  document.querySelector(".player--0").classList.remove("winner");
  document.querySelector(".player--1").classList.remove("winner");
  document.querySelector(".player--0").classList.remove("active");
  document.querySelector(".player--1").classList.remove("active");
  document.querySelector(".player--0").classList.add("active");
}

