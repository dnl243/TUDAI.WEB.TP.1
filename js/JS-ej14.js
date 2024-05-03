"use strict"

const $ = document;

let $imgsHover = $.querySelectorAll("img");

$imgsHover.forEach((img) => {
  img.addEventListener('mouseover', ()=> {
    img.style.transition = "transform .5s";
    img.style.transform = "scale(1.3)";
  });
});
$imgsHover.forEach((img) => {
  img.addEventListener('mouseout', ()=> {
    img.style.transition = "transform .5s";
    img.style.transform = "scale(1)";
  });
});
