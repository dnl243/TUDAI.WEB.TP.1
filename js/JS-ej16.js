"use strict";
const $ = document;
//declaro arreglo de opciones
let opcs = ["imgOveja", "imgCebras", "imgKoala", "imgOso", "imgLoro"];
//capturo img
const $imgAdiv = $.querySelector("#imgAdiv");
//genero número aleatorio
let aleatorio = Math.floor(Math.random() * opcs.length);
//asigno imagen aleatoria
$imgAdiv.src = "images/ejercicios/" + opcs[aleatorio] + ".jpg";
//capturo boton
const $btnAdiv = $.querySelector("#btnAdiv");
//pongo en escucha al boton
$btnAdiv.addEventListener("click", compararAdiv);

function compararAdiv() {
  //capturo respuesta adivinanza
  let $respAdiv = $.querySelector("#respAdiv").value;
  //capitalizo respuesta
  $respAdiv =
    "img" + $respAdiv[0].toUpperCase() + $respAdiv.slice(1).toLowerCase();
  //capturo resultado
  let $resultAdiv = $.querySelector("#resultAdiv");
  //comparo respuesta con imagen
  if ($respAdiv == opcs[aleatorio]) {
    $resultAdiv.innerHTML = "Acertaste!!!";
  } else {
    $resultAdiv.innerHTML = "Comprá anteojos!!!";
  }
}
