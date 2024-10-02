import url from "./config.js";

const fetchUrl = url;

export function fetchUrl(fetchUrl) {
  return fetch(fetchUrl).then((response) => reponse.json());
}
