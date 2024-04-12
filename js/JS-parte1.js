"strict";

// alert("JS enlazado y funcionando!");
// const Nombre = prompt("Ingrese su nombre");
// const Apellido = prompt("Ingrese su apellido");
// alert("Bienvenido/a "+Nombre+" "+Apellido+" a los ejercicios de Web 1 !!.");

const $ = document;
const div1 = $.querySelector("#div1");
div1.innerHTML = "Este es el div n° 1.";

const div2 = $.querySelector("#div2");
div2.innerHTML = "Acá va el segundo div.";

const div3 = $.querySelector("#div3");
div3.innerHTML = "Y por últimmo este es el 3°.";

function saludar() {
  alert("Hola de nuevo!");
  const Nombre = prompt("Ingrese su nombre");
  const Apellido = prompt("Ingrese su apellido");
  alert(
    "Bienvenido/a " + Nombre + " " + Apellido + " a los ejercicios de Web 1 !!."
  );
}

const btnSaludar = $.querySelector("#btnSaludar");
btnSaludar.addEventListener("click", saludar);

let ultBtn = "(no has clickeado ningun boton)";

const ultimoBoton = $.querySelector("#ultimoBoton");
ultimoBoton.innerHTML = ultBtn;

const btnRojo = $.querySelector("#btnRojo");
btnRojo.addEventListener("click", señalarRojo);
const btnVerde = $.querySelector("#btnVerde");
btnVerde.addEventListener("click", señalarVerde);
const btnAzul = $.querySelector("#btnAzul");
btnAzul.addEventListener("click", señalarAzul);

function señalarRojo(){
  ultBtn = "rojo";
ultimoBoton.innerHTML = ultBtn;
};
function señalarVerde(){
  ultBtn = "verde";
  ultimoBoton.innerHTML = ultBtn;
};
function señalarAzul(){
  ultBtn = "azul";
  ultimoBoton.innerHTML = ultBtn;
};
