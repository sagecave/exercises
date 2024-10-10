async function getData() {
  const url = "https://kea-alt-del.dk/kata-distortion/";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();

    setNumber(json);
  } catch (error) {
    console.error(error.message);
  }
}

getData();

function setNumber(data) {
  const header_one = document.querySelector("h1");
  const body = document.querySelector("body");
  const div = document.querySelector("div");
  header_one.textContent = `${data.inQueue}`;

  number = data.inQueue * 100;
  numberTwo = data.inQueue;
  div.style.setProperty("--length", `${numberTwo}rem`);
  body.style.setProperty("--color", number);
  console.log(header_one.textContent);
  console.log(data.inQueue);
}

setInterval(getData, 10000);
