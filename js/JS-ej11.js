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
  // capturo datos del form
  let formData = new FormData($formInfo);
  let nombre = formData.get("nombre");
  let apellido = formData.get("apellido");
  let profecion = formData.get("profecion");
  let email = formData.get("email");
  let telefono = formData.get("telefono");
  let direccion = formData.get("direccion");
  $nombre.innerHTML = `${nombre}`;
  $apellido.innerHTML = `${apellido}`;
  $profecion.innerHTML = `${profecion}`;
  $email.innerHTML = `${email}`;
  $telefono.innerHTML = `${telefono}`;
  $direccion.innerHTML = `${direccion}`;

  $formInfo.reset();
  $input1.focus();
}