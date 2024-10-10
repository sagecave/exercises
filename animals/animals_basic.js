"use strict";

window.addEventListener("DOMContentLoaded", start);

let animals;
const Animal = {
  name: "-default name:",
  desc: "-default desc:",
  type: "-default type:",
  age: 0,
};

const allAnimals = [];

function start() {
  console.log("ready");

  loadJSON();
}

function loadJSON() {
  fetch("animals.json")
    .then((response) => response.json())
    .then((jsonData) => {
      animals = jsonData;

      // when loaded, display the list
      prepareObject(jsonData);
    });
}

function prepareObject(jsonData) {
  jsonData.forEach((jsonObject) => {
    const animal = Object.create(Animal);
    const fullname = jsonObject.fullname;

    const firstsection = fullname.indexOf(" ");
    const secondsection = fullname.indexOf(" ", firstsection + 1);
    const lastsection = fullname.lastIndexOf(" ");

    const name = fullname.substring(0, firstsection);
    const desc = fullname.substring(secondsection + 1, lastsection);
    const type = fullname.substring(lastsection + 1);

    animal.name = name;
    animal.desc = desc;
    animal.type = type;
    animal.age = jsonObject.age;

    allAnimals.push(animal);
    console.log(allAnimals);
  });

  displayList();
}

function displayList() {
  // clear the list
  document.querySelector("#list").innerHTML = "";

  // build a new list
  allAnimals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document.querySelector("template#animal").content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;

  // append clone to list
  document.querySelector("#list").appendChild(clone);
}
