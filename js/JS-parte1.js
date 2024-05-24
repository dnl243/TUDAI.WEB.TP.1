"use strict";

// Ejercicio 1
//alerts

// alert("JS enlazado y funcionando!");
// const Nombre = prompt("Ingrese su nombre");
// const Apellido = prompt("Ingrese su apellido");
// alert("Bienvenido/a "+Nombre+" "+Apellido+" a los ejercicios de Web 1 !!.");

// Ejercicio 2
//texto desde JS

const div1 = document.querySelector("#div1").innerHTML = "Este es el div n° 1.";

const div2 = document.querySelector("#div2").innerHTML = "Acá va el segundo div.";

const div3 = document.querySelector("#div3").innerHTML = "Y por últimmo este es el 3°.";

//  Ejercicio 3
//alerts con boton

const btnSaludar = document.querySelector("#btnSaludar").addEventListener("click", ()=>{
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

const ultimoBoton = document.querySelector("#ultimoBoton");
ultimoBoton.innerHTML = ultBtn;

const btnRojo = document.querySelector("#btnRojo").addEventListener("click", () => (ultimoBoton.innerHTML = "rojo"));
const btnVerde = document.querySelector("#btnVerde").addEventListener("click", () => (ultimoBoton.innerHTML = "verde"));
const btnAzul = document.querySelector("#btnAzul").addEventListener("click", () => (ultimoBoton.innerHTML = "azul"));

// Ejercicio 5
//h1 desde un form
// capturo h1
const titulo = document.querySelector("#titulo");
// capturo form
let form = document.querySelector("#form");
form.addEventListener("submit", agregarTitulo);

function agregarTitulo(e) {
  e.preventDefault();

  // captura todos los datos del form
  let formData = new FormData(form);

  let nombre = formData.get("nombre");
  let apellido = formData.get("apellido");

  titulo.innerHTML = `${nombre} ${apellido}`;
  form.reset();
}

// Ejercicio 6
//lista de tareas
// capturo form
let formLista = document.querySelector("#formLista");
formLista.addEventListener("submit", agregarTarea);
// modelo de datos
let modeloTareas = [];

function agregarTarea(e) {
  e.preventDefault();
  
  // capturo datos del form
  let formData = new FormData(formLista);
  let tarea = formData.get("tarea");
  
  modeloTareas.push(tarea);
  
  formLista.reset();
  actualizarLista();
}

function actualizarLista() {
  // capturo ul
  const listaTareas = document.querySelector("#tareas");
  listaTareas.innerHTML = "";
  modeloTareas.forEach((e) => {
    const nuevoLi = document.createElement("li");
    nuevoLi.innerHTML = e;
    listaTareas.appendChild(nuevoLi);
  })
}

// Ejercicio 7
// capturo el boton
let marcador = document.querySelector("#marcador").addEventListener("click", ()=> formLista.classList.toggle("resaltado"));

// Ejercicio 8
// capturo el texto
let $textoSecreto = document.querySelector("#textoSecreto");

// capturo el botón
let $btnOcultador = document.querySelector("#btnOcultador").addEventListener("click", () =>
  $textoSecreto.classList.toggle("txtSecret")
);

//Ejercicio 9 (calculadora)
//tag select
let $selectOperaciones = document.querySelector("#operaciones");
//inputs valores
let $valor1 = document.querySelector("#primerValor");
let $valor2 = document.querySelector("#segundoValor");
//btn resultado
let $btnCalculo = document.querySelector("#btnCalculo").addEventListener("click", obtenerResultado);
//espacio resultado
let $resultado = document.querySelector("#resultado");
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
let $resultados = document.querySelector("#resultados");
const MAX_RULETA = 36;
let $btnRuleta = document.querySelector("#btnRuleta").addEventListener("click", ()=> {
  let nroRuleta = Math.floor(Math.random()*MAX_RULETA);
  document.querySelector("#nroResultado").innerHTML = nroRuleta;
  if(nroRuleta==document.querySelector("#apuestaRuleta").value){
    $resultados.innerHTML = "GANÓ";
  }else{
    $resultados.innerHTML = "PERDIÓ";
  };
});

// Ejercicios adicionales
console.log("Práctica con console.table()");

console.log("Array de strings");
console.table(["manzanas", "naranjas", "bananas"]);


console.log("Array de arrays");
const verduleria = [["manzanas", "naranjas", "bananas"], ["tomate", "zanahoria", "papa"], ["orégano","provensal", "pimentón"]];
console.table(verduleria);


console.log("Objeto cuyas propiedades son strings");
function persona(primerNombre, segundoNombre) {
  this.primerNombre = primerNombre;  
  this.segundoNombre = segundoNombre;  
}

const ale = new persona("Daniel", "Alejandro")
console.table(ale);


console.log("Array de objetos");
const ceci = new persona("Cecilia", "Angélica");
const rena = new persona("Renata", "Mia");
const lau = new persona("Lautaro", "Ezequiel");
const ampi = new persona("Amparo", "Pilar");
console.table([ale, ceci, rena, lau, ampi]);


