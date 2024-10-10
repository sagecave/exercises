const button = document.querySelector("button");
const body = document.querySelector("body");

console.log(button.onanimationend);

button.addEventListener("animationend", () => {
  body.style.background = "blue";
});

button.addEventListener("click", () => {
  console.log("click");
  button.classList.remove("animation");
  body.style.background = "blue";
});
