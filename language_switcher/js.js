"use strict";

const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};
let locale = "da";

let header = document.querySelector(".header");
let footer = document.querySelector(".footer");
let select = document.querySelector("select");
let dansk = document.querySelector(".dansk");
let input = document.querySelector("input");

select.addEventListener("change", () => {
  if (select.value === "de") {
    locale = "de";
    console.log(locale);
    localeCheck(locale);
  } else {
    locale = "da";
    console.log(locale);
    localeCheck(locale);
  }
});

let tysk = document.querySelector(".tysk");

let headerText = header.textContent;
let footerText = footer.textContent;

function localeCheck(locale) {
  if (locale === "de") {
    headerText = texts.de.texts[0].text;
    footerText = texts.de.texts[1].text;
    header.innerHTML = `${headerText}`;
    footer.innerHTML = `${footerText}`;
  } else {
    headerText = texts.da.texts[0].text;
    footerText = texts.da.texts[1].text;
    header.innerHTML = `${headerText}`;
    footer.innerHTML = `${footerText}`;
  }
}
