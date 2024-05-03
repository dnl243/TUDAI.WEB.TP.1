"use strict";

// Ejercicio 1

// alert("JS enlazado y funcionando!");
// const Nombre = prompt("Ingrese su nombre");
// const Apellido = prompt("Ingrese su apellido");
// alert("Bienvenido/a "+Nombre+" "+Apellido+" a los ejercicios de Web 1 !!.");

// Ejercicio 2

const $ = document;
const div1 = $.querySelector("#div1");
div1.innerHTML = "Este es el div n° 1.";

const div2 = $.querySelector("#div2");
div2.innerHTML = "Acá va el segundo div.";

const div3 = $.querySelector("#div3");
div3.innerHTML = "Y por últimmo este es el 3°.";

//  Ejercicio 3

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

//  Ejercicio 4

let ultBtn = "(no has clickeado ningun boton)";

const ultimoBoton = $.querySelector("#ultimoBoton");
ultimoBoton.innerHTML = ultBtn;

const btnRojo = $.querySelector("#btnRojo");
btnRojo.addEventListener("click", () => (ultimoBoton.innerHTML = "rojo"));
const btnVerde = $.querySelector("#btnVerde");
btnVerde.addEventListener("click", () => (ultimoBoton.innerHTML = "verde"));
const btnAzul = $.querySelector("#btnAzul");
btnAzul.addEventListener("click", () => (ultimoBoton.innerHTML = "azul"));

// function señalarRojo(){
//   ultBtn = "rojo";
// ultimoBoton.innerHTML = ultBtn;
// };
// function señalarVerde(){
//   ultBtn = "verde";
//   ultimoBoton.innerHTML = ultBtn;
// };
// function señalarAzul(){
//   ultBtn = "azul";
//   ultimoBoton.innerHTML = ultBtn;
// };

// Ejercicio 5
// capturo h1
const titulo = $.querySelector("#titulo");
// capturo form
let form = $.querySelector("#form");
form.addEventListener("submit", agregarTitulo);

function agregarTitulo(e) {
  e.preventDefault();

  // captura todos los datos del form
  let formData = new FormData(form);

  let nombre = formData.get("nombre");
  let apellido = formData.get("apellido");

  titulo.innerHTML = nombre + " " + apellido;
  form.reset();
}

// Ejercicio 6
// capturo div
let listaTareas = $.querySelector("#tareas");
// capturo form
let formLista = $.querySelector("#formLista");
formLista.addEventListener("submit", agregarTarea);

function agregarTarea(e) {
  e.preventDefault();

  let inputTarea = $.querySelector("#inputTarea");
  // capturo datos del form
  let formData = new FormData(formLista);

  let tarea = formData.get("tarea");

  listaTareas.innerHTML += `<p>${tarea}</p>`;
  formLista.reset();
  inputTarea.focus();
}

// Ejercicio 7
// capturo el boton
let marcador = $.querySelector("#marcador");
marcador.addEventListener("click", resaltar);

function resaltar() {
  formLista.classList.toggle("resaltado");
}

// Ejercicio 8
// capturo el texto
let $textoSecreto = $.querySelector("#textoSecreto");

// capturo el botón
let $btnOcultador = $.querySelector("#btnOcultador");
$btnOcultador.addEventListener("click", () =>
  $textoSecreto.classList.toggle("txtSecret")
);

// function ocultar(){
//   $textoSecreto.classList.toggle("txtSecret");
// }

//Ejercicio 9 (calculadora)
//tag select
let $selectOperaciones = $.querySelector("#operaciones");
//inputs valores
let $valor1 = $.querySelector("#primerValor");
let $valor2 = $.querySelector("#segundoValor");
//btn resultado
let $btnCalculo = $.querySelector("#btnCalculo");
$btnCalculo.addEventListener("click", obtenerResultado);
//espacio resultado
let $resultado = $.querySelector("#resultado");
// variable resultado
let resultado;

function obtenerResultado() {
  const valor1 = Number($valor1.value);
  const valor2 = Number($valor2.value);
  const operacion = $selectOperaciones.value;

  switch (operacion) {
    case "+":
      resultado = valor1 + valor2;
      break;
    case "-":
      resultado = valor1 - valor2;
      break;
    case "*":
      resultado = valor1 * valor2;
      break;
    case "/":
      resultado = valor1 / valor2;
      break;
    default:
      resultado = "operación no válida";
      break;
    }
    $resultado.innerHTML = resultado;
}

// Ejercicio 12 (Ruleta)
// capturo elementos
let $apuestaRuleta = $.querySelector("#apuestaRuleta");
let $btnRuleta = $.querySelector("#btnRuleta");
let $nroResultado = $.querySelector("#nroResultado");
let $resultados = $.querySelector("#resultados");
const MAX_RULETA = 36;

// función tirarBolilla
let nroRuleta;
function tirarBolilla(){
  nroRuleta = Math.floor(Math.random()*MAX_RULETA);
}

// función apostar
function apostar(){
  let apuesta = $apuestaRuleta.value;
  tirarBolilla();
  $nroResultado.innerHTML = nroRuleta;
  if(apuesta==nroRuleta){
    $resultados.innerHTML = "GANÓ";
  }else{
    $resultados.innerHTML = "PERDIÓ";
  };
}

//dispongo al botón a la escucha
$btnRuleta.addEventListener("click", apostar);


