const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

const p = document.querySelector("p");
const knap = document.querySelector("button");

knap.addEventListener("click", () => newWords(curseWords));

function newWords(array) {
  let text = p.innerText;
  let words = text.split(" ");
  array.forEach((each) => {
    words = words.map((word) => (word === each.bad ? each.good : word));

    // tekst += tekst.replace(`${each.bad}`, `${each.good}`).join(" ");
    // console.log("pls", each.good);
    // console.log("pls", each.bad);
  });

  p.innerText = words.join(" ");
}
