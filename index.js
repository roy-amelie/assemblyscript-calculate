import { add } from "./build/release.js";

let button_add = document.querySelector("#button");

button_add.addEventListener("click", (e) => {
  let num_one = document.querySelector("#numberOne").value;
  let num_two = document.querySelector("#numberTwo").value;
  let result = add(num_one, num_two);
  document.querySelector("#result").innerHTML = result;
});
