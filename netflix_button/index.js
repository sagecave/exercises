const button = document.querySelector("button");
const body = document.querySelector("body");

console.log(button.onanimationend);

button.addEventListener("animationend", () => {
  body.style.background = "blue";
});
