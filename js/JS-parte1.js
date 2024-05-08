"use strict";

// Ejercicio 1
//alerts

// alert("JS enlazado y funcionando!");
// const Nombre = prompt("Ingrese su nombre");
// const Apellido = prompt("Ingrese su apellido");
// alert("Bienvenido/a "+Nombre+" "+Apellido+" a los ejercicios de Web 1 !!.");

// Ejercicio 2
//texto desde JS

const $ = document;
const div1 = $.querySelector("#div1").innerHTML = "Este es el div n° 1.";

const div2 = $.querySelector("#div2").innerHTML = "Acá va el segundo div.";

const div3 = $.querySelector("#div3").innerHTML = "Y por últimmo este es el 3°.";

//  Ejercicio 3
//alerts con boton

const btnSaludar = $.querySelector("#btnSaludar").addEventListener("click", ()=>{
  alert("Hola de nuevo!");
  const Nombre = prompt("Ingrese su nombre");
  const Apellido = prompt("Ingrese su apellido");
  alert(
    "Bienvenido/a " + Nombre + " " + Apellido + " a los ejercicios de Web 1 !!."
  );
});

//  Ejercicio 4
//boton ultimo clickeado

let ultBtn = "(no has clickeado ningun boton)";

const ultimoBoton = $.querySelector("#ultimoBoton");
ultimoBoton.innerHTML = ultBtn;

const btnRojo = $.querySelector("#btnRojo").addEventListener("click", () => (ultimoBoton.innerHTML = "rojo"));
const btnVerde = $.querySelector("#btnVerde").addEventListener("click", () => (ultimoBoton.innerHTML = "verde"));
const btnAzul = $.querySelector("#btnAzul").addEventListener("click", () => (ultimoBoton.innerHTML = "azul"));

// Ejercicio 5
//h1 desde un form
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
//lista de tareas
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
let marcador = $.querySelector("#marcador").addEventListener("click", ()=> formLista.classList.toggle("resaltado"));

// Ejercicio 8
// capturo el texto
let $textoSecreto = $.querySelector("#textoSecreto");

// capturo el botón
let $btnOcultador = $.querySelector("#btnOcultador").addEventListener("click", () =>
  $textoSecreto.classList.toggle("txtSecret")
);

//Ejercicio 9 (calculadora)
//tag select
let $selectOperaciones = $.querySelector("#operaciones");
//inputs valores
let $valor1 = $.querySelector("#primerValor");
let $valor2 = $.querySelector("#segundoValor");
//btn resultado
let $btnCalculo = $.querySelector("#btnCalculo").addEventListener("click", obtenerResultado);
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
let $resultados = $.querySelector("#resultados");
const MAX_RULETA = 36;
let $btnRuleta = $.querySelector("#btnRuleta").addEventListener("click", ()=> {
  let nroRuleta = Math.floor(Math.random()*MAX_RULETA);
  $.querySelector("#nroResultado").innerHTML = nroRuleta;
  if(nroRuleta==$.querySelector("#apuestaRuleta").value){
    $resultados.innerHTML = "GANÓ";
  }else{
    $resultados.innerHTML = "PERDIÓ";
  };
});