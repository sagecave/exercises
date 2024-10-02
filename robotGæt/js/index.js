const higher = document.querySelector(".higher");
const smaller = document.querySelector(".smaller");
const check = document.querySelector(".right");
const info = document.querySelector(".info");
let randomGuess = Math.floor(Math.random() * 100);
let smallNumber = 0;
let bigNumber = 100;
let interval = bigNumber - smallNumber;

// higher.addEventListener("click", buttonCheck);
// smaller.addEventListener("click", buttonCheck);
check.addEventListener("click", Check);

function Check() {
  console.log(randomGuess);
  let myNumber = info.value;
  if (myNumber == randomGuess) {
    console.log("Du gættet rigtigt");
  } else {
    higherOrLower(myNumber, randomGuess);
  }
}

function higherOrLower(player, computer) {
  if (player < computer) {
    console.log("Tallet er for højt");
    if (bigNumber > computer) {
      bigNumber = computer;
      randomGuess = Math.floor(Math.random() * interval);
      computerGuess(randomGuess);
      console.log(" big", interval);
    } else {
      console.log("lol");
    }
  } else {
    console.log("Tallet er for lavt");
    if (smallNumber < computer) {
      smallNumber = computer;
      randomGuess = Math.floor(Math.random() * interval);
      smallNumber = computer;
      computerGuess(randomGuess);
      console.log(" small", interval);
    } else {
      console.log("lol");
    }
  }
}
function computerGuess() {
  console.log("Guess check", randomGuess);
}

// function higherOrLower(player, computer) {
//   if (player < computer) {
//     console.log("Tallet er for højt");
//     bigNumber = computer;
//     console.log("big num", bigNumber);
//     randomGuess = Math.floor(Math.random() * computer);
//     computerGuess("guess to big", randomGuess);
//   } else {
//     console.log("Tallet er for lavt");
//     smallNumber = computer;
//     console.log("small num", smallNumber);
//     randomGuess = Math.floor(Math.random(computer) * 100);

//     computerGuess("Guess to small", randomGuess);
//   }
// }
