function momsCalculator(price, moms = 0.25) {
  let value = price + price * moms;
  console.log("This is the price with moms", value, "kr.");
}

momsCalculator(100);
