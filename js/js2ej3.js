"use strict";

//toogle sobre h1

document.querySelector("#logoToggle").addEventListener("click", () =>
  document.querySelectorAll("h1, h2, h3").forEach((e) => {
    e.classList.toggle("toggleTitulos");
  })
);
