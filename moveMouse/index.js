const body = document.querySelector("body");

console.log(body.onmousemove);

function showCoords(event) {
  let x_axis = event.clientX;
  let y_axis = event.clientY;
  let coor = "Coordinates: (" + x_axis + "," + y_axis + ")";
  document.getElementById("demo").innerHTML = coor;
  console.log("x:", x_axis, "y:", y_axis);

  let color = x_axis;
  body.style.setProperty("--color", color);
}
