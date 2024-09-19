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
  //   playerHand.addEventListener("animationend", () => {
  //     console.log("happy");
  //     drawCheck();
  //   });
  // }
}

function drawCheck() {
  playerHand.classList.remove("shake");
  computerHand.classList.remove("shake");
  let randomNumber = Math.round(Math.random() * 2);
  computerGuesses = guesses[randomNumber];

  if (playerGuesses !== computerGuesses) {
    if ((playerGuesses === "rock" && computerGuesses === "scissors") || (playerGuesses === "paper" && computerGuesses === "rock") || (playerGuesses === "scissors" && computerGuesses === "paper")) {
      winningText.classList.remove("hidden");
    } else {
      losingText.classList.remove("hidden");
    }
  } else {
    drawText.classList.remove("hidden");
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
