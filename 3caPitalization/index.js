const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

const p = document.querySelector("p");
const knap = document.querySelector("button");
let contentTreated = false;
knap.addEventListener("click", () => newWords(curseWords));

function newWords(array) {
  if (contentTreated === false) {
    let text = p.innerHTML;
    let words = text.split(" ");
    array.forEach((each) => {
      words = words.map((word) => (word === each.bad ? `<span>${each.good}</span>` : word));
    });

    contentTreated = true;
    p.innerHTML = words.join(" ");
  } else {
    document.querySelector("dialog").showModal();
  }
}
