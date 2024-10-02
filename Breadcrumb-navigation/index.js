const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];
const navBody = document.querySelector("nav");
const knap = document.querySelector(".breadCrumb");
knap.addEventListener("click", () => links(bc));
function links(data) {
  navBody.innerHTML = " ";
  data.forEach((e, index) => {
    if (index === data.length - 1) {
      navBody.innerHTML += `${e.name}`;
    } else {
      navBody.innerHTML += `<a href="${e.link}">${e.name}</a> > `;
    }
  });
}
