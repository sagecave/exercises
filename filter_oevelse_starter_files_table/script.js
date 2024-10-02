const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");
let filtered;
const reset = document.querySelector(".resetButton");
const stopp = document.querySelector(".stopButton");
const owned = document.querySelector(".ownedButton");
const eletric = document.querySelector(".eletricButton");
const tandemm = document.querySelector(".tandemButton");

reset.addEventListener("click", resetYay);
eletric.addEventListener("click", isVehicleElectric);
stopp.addEventListener("click", stopFun);
owned.addEventListener("click", ownedFun);
tandemm.addEventListener("click", tandemFun);

function resetYay() {
  showTheseVehicles(vehicles);
}
function isVehicleElectric() {
  filtered = vehicles.filter((data) => data.isElectric);

  showTheseVehicles(filtered);
}
function stopFun() {
  filtered = vehicles.filter((data) => data.stops);

  showTheseVehicles(filtered);
}
function ownedFun() {
  filtered = vehicles.filter((data) => data.ownedBy);

  showTheseVehicles(filtered);
}
function tandemFun() {
  filtered = vehicles.filter((data) => data.isTandem);

  showTheseVehicles(filtered);
}

function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = " ";
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
   
  <td>${each.type}</td>
  <td>${each.fuel}</td>
  <td>${each.passengers}</td> 
  ${each.stops ? `<td>${each.stops}</td>` : `<td> :D</td>`}
  ${each.ownedBy ? `<td>${each.ownedBy}</td>` : `<td> :D</td>`}
  ${each.isElectric ? `<td>Yes</td>` : `<td> :D</td>`}
  ${each.isTandem ? `<td>${each.isTandem}</td>` : `<td> :D</td>`}


</tr>`;
  });
}
