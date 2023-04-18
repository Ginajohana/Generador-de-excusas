/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
  console.log("hello rigo from console" + "generateExcuse");
};
let generateExcuse = () => {
  let who = ["Mr. Burns", "Barth", "Marge", "Moe"];
  let action = ["perdió", "rompió", "se llevó", "cogió"];
  let what = ["la cerveza", "el coche", "las llaves", "el zapato"];
  let when = [
    "al salir de bar",
    "mientras caminaba",
    "durante la comida",
    "cuando estaba fuera"
  ];

  let whoindex = Math.floor(Math.random() * who.length);
  let actionindex = Math.floor(Math.random() * action.length);
  let whatindex = Math.floor(Math.random() * what.length);
  let whenindex = Math.floor(Math.random() * when.length);

  return (
    who[whoindex] +
    " " +
    action[actionindex] +
    " " +
    what[whatindex] +
    " " +
    when[whenindex]
  );
};
