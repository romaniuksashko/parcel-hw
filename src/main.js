import { power } from "./app.js";

const first = document.getElementById("first");
const second = document.getElementById("second");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener("click", () => {
  result.value = power(first.value, second.value);
});