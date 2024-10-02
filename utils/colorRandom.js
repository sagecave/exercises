import { getRandomNumber } from "./numRandom.js";

export function getRandomColor() {
  return `hsl( ${getRandomNumber(360)} 50% 50%)`;
}
