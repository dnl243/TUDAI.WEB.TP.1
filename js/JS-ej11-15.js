"use strict"

const $ = document;
//capturo form
let $formInfo = $.querySelector("#formInfo");
let $input1 = $.querySelector("#input1");
//capturo <p> de tarjetas
let $nombre = $.querySelector("#nombre");
let $apellido = $.querySelector("#apellido");
let $profecion = $.querySelector("#profecion");
let $email = $.querySelector("#email");
let $telefono = $.querySelector("#telefono");
let $direccion = $.querySelector("#direccion");

$formInfo.addEventListener("submit", llenarTarjeta);

function llenarTarjeta(e) {
  e.preventDefault();
  //capturo datos del form
  let formData = new FormData($formInfo);
  let nombre = formData.get("nombre");
  let apellido = formData.get("apellido");
  let profecion = formData.get("profecion");
  let email = formData.get("email");
  let telefono = formData.get("telefono");
  let direccion = formData.get("direccion");
  //cargo datos a la tarjeta
  $nombre.innerHTML = `${nombre}`;
  $apellido.innerHTML = `${apellido}`;
  $profecion.innerHTML = `${profecion}`;
  $email.innerHTML = `${email}`;
  $telefono.innerHTML = `${telefono}`;
  $direccion.innerHTML = `${direccion}`;

  $formInfo.reset();
  $input1.focus();
}

//Selección de fondos
let $imgFondo = $.querySelector("#imgFondo");
let $imgAb = $.querySelector("#imgAb");
let $imgAr = $.querySelector("#imgAr");
let $imgIe = $.querySelector("#imgIe");
let $imgPe = $.querySelector("#imgPe");
let $imgWd = $.querySelector("#imgWd");

$imgAb.addEventListener('click', ()=>
  $imgFondo.src = "images/ejercicios/abogacia.jpg"
);
$imgAr.addEventListener('click', ()=>
  $imgFondo.src = "images/ejercicios/arquitectura.jpg"
);
$imgIe.addEventListener('click', ()=>
  $imgFondo.src = "images/ejercicios/ingElec.jpg"
);
$imgPe.addEventListener('click', ()=>
  $imgFondo.src = "images/ejercicios/pediatria.jpg"
);
$imgWd.addEventListener('click', ()=>
  $imgFondo.src = "images/ejercicios/webDev.jpg"
);

//Selección de fuentes
let $infoTarjeta = $.querySelectorAll(".infoTarjeta p");
let $pacifico = $.querySelector(".pacifico-regular");
let $protest = $.querySelector(".protest-riot-regular");
let $dancing = $.querySelector(".dancing-script");
let $platypi = $.querySelector(".platypi");
let $poetsen = $.querySelector(".poetsen-one-regular");

$pacifico.addEventListener('click', ()=>
  $infoTarjeta.forEach(element => {
    element.style.fontFamily = "Pacifico"
  })
);
$protest.addEventListener('click', ()=>
  $infoTarjeta.forEach(element => {
    element.style.fontFamily = "Portest Riot"
  })
);
$dancing.addEventListener('click', ()=>
  $infoTarjeta.forEach(element => {
    element.style.fontFamily = "Dancing Script"
  })
);
$platypi.addEventListener('click', ()=>
  $infoTarjeta.forEach(element => {
    element.style.fontFamily = "Platypi"
  })
);
$poetsen.addEventListener('click', ()=>
  $infoTarjeta.forEach(element => {
    element.style.fontFamily = "Poetsen One"
  })
);