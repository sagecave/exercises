const list = document.querySelector("ul");
const valueArr = [];

setInterval(generateBars, 1000);

function generateBars() {
  const randoNum = Math.floor(Math.random() * 100);
  if (valueArr.length > 19) {
    valueArr.shift();
    list.removeChild(list.firstChild);
  }
  valueArr.push(randoNum);

  console.log(valueArr);
  const li = document.createElement("li");
  li.style.setProperty("--height", randoNum);
  list.appendChild(li);
}
