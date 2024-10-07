document.querySelector("select").addEventListener("change", colorTheme);

const bodyc = document.querySelector("body");

function colorTheme(evt) {
  let colName = evt.target.value;

  bodyc.setAttribute("data-theme", colName);
}
