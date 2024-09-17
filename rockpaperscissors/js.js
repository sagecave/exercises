"use strict";

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const guesses = ["rock", "paper", "scissors"];
const playerHand = document.querySelector("#player1");
const computerHand = document.querySelector("#player2");
const winningText = document.querySelector("#win");
const losingText = document.querySelector("#lose");
const drawText = document.querySelector("#draw");
let playerGuesses;
let computerGuesses;

rock.addEventListener("click", () => {
  reset();
  playerGuesses = "rock";
  shakeAnimation();
});
paper.addEventListener("click", () => {
  reset();
  playerGuesses = "paper";
  shakeAnimation();
});
scissors.addEventListener("click", () => {
  reset();
  playerGuesses = "scissors";
  shakeAnimation();
});

function shakeAnimation() {
  playerHand.classList.add("shake");
  computerHand.classList.add("shake");
  playerHand.onanimationend = () => {
    drawCheck();
  };

  //   hvorfor køre funtion en extra gang nåt jeg bruger denne
  //   playerHand.addEventListener("animationend", (event) => {
  //     drawCheck();
  //   });
}

function drawCheck() {
  playerHand.classList.remove("shake");
  computerHand.classList.remove("shake");
  let randomNumber = Math.round(Math.random() * 2);
  computerGuesses = guesses[randomNumber];

  console.log("Player choose", playerGuesses);
  console.log("Computer Choose", computerGuesses);
  if (playerGuesses !== computerGuesses) {
    if (playerGuesses === "rock" && computerGuesses === "scissors") {
      console.log("Player Wins");
      winningText.classList.remove("hidden");

      console.log("player Wins");
    } else if (playerGuesses === "paper" && computerGuesses === "rock") {
      winningText.classList.remove("hidden");
      console.log("player wins");
    } else if (playerGuesses === "scissors" && computerGuesses === "paper") {
      winningText.classList.remove("hidden");
      console.log("player wins");
    } else {
      losingText.classList.remove("hidden");
      console.log("computer loses");
    }
  } else {
    drawText.classList.remove("hidden");
    console.log("it,s a draw");
  }
  playerHand.classList.add(playerGuesses);
  computerHand.classList.add(computerGuesses);
}

function reset() {
  playerHand.classList.remove(playerGuesses);
  computerHand.classList.remove(computerGuesses);
  drawText.classList.add("hidden");
  winningText.classList.add("hidden");
  losingText.classList.add("hidden");
}
