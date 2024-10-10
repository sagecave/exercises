"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];
let currentButton;
let sortButtonVal;
let filter;
let sorting;
let sortNew;
let sortNewString;
const knapper = document.querySelectorAll("button");

// The prototype for all animals:
const Animal = {
  name: "",
  desc: "-unknown animal-",
  type: "",
  age: 0,
};

function start() {
  console.log("ready");

  // TODO: Add event-listeners to filter and sort buttons

  loadJSON();
}

async function loadJSON() {
  const response = await fetch("animals.json");
  const jsonData = await response.json();
  // when loaded, prepare data objects
  prepareObjects(jsonData);

  knapper.forEach((knap) => {
    knap.addEventListener("click", () => {
      currentButton = knap.value;
      filterCheck(allAnimals);
    });
  });
}

let filterTwo = document.querySelectorAll("th");
filterTwo.forEach((filterBut) => {
  filterBut.addEventListener("click", () => {
    sortButtonVal = filterBut.getAttribute("data-sort");
    console.log(sortButtonVal);
    console.log("orginal:", allAnimals);
    sortCheck(allAnimals);
  });
});

function sortCheck(newData) {
  if (sortButtonVal !== "age") {
    if (sortNewString === true) {
      sorting = newData.sort((lower, higher) => (lower[sortButtonVal].localeCompare(higher[sortButtonVal]) ? -1 : 0));
      sortNewString = false;
      displayList(sorting);
    } else {
      sorting = newData.sort((lower, higher) => lower[sortButtonVal].localeCompare(higher[sortButtonVal]));
      console.log("sorting check", sortButtonVal);
      console.log("sorting:", sorting);
      sortNewString = true;
      displayList(sorting);
    }
  } else {
    if (sortNew === true) {
      sorting = newData.sort((lower, higher) => (lower.age > higher.age ? -1 : 0));
      displayList(sorting);
      sortNew = false;
    } else {
      // fordi age ikke er en string
      sorting = newData.sort((lower, higher) => lower.age - higher.age);
      console.log("check:", sorting);
      sortNew = true;
      displayList(sorting);
    }
  }
}

function filterCheck(newJsonData) {
  if (currentButton !== "*") {
    filter = newJsonData.filter((data) => data.type === currentButton);
    console.log("filter cat/dog", filter);
    displayList(filter);
    //preapareObject(filter);
  } else {
    //preapareObject();

    displayList(newJsonData);
  }
}
function prepareObjects(jsonData) {
  allAnimals = jsonData.map(preapareObject);

  // TODO: This might not be the function we want to call first
  displayList(allAnimals);
}

function preapareObject(jsonObject) {
  console.log("her: ", jsonObject);
  const animal = Object.create(Animal);

  const fullname = jsonObject.fullname;
  const texts = fullname.split(" ");

  animal.name = texts[0];
  animal.desc = texts[2];
  animal.type = texts[3];
  animal.age = jsonObject.age;

  return animal;
}

function displayList(animals) {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  animals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document.querySelector("template#animal").content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}
