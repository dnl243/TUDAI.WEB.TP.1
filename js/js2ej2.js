"use strict";

//JS tp2ej3 contadores individuales

let btnsCont = document.querySelectorAll(".btnCont");
let contsP = document.querySelectorAll(".contP");
for (let i = 0; i < btnsCont.length; i++) {
  let contador = 0;
  btnsCont[i].addEventListener("click", () => {
    contador++;
    contsP[i].innerHTML = contador;
  });
}

//JS tp2ej4/6 lista de tareas hasta 10
//capturo form
let formTareas = document.querySelector("#formTareas");
formTareas.addEventListener("submit", cargarTareas);

//modelo de datos
let nuevaLista = [];

function cargarTareas(e) {
  e.preventDefault();

  //capturo datos del form
  let formData = new FormData(formTareas);
  let tareaNueva = formData.get("inputTareas");
    
  //agrego un elemento al array si es igual o menor a 10
  nuevaLista.length < 10 && !nuevaLista.includes(tareaNueva)
    ? nuevaLista.push(tareaNueva)
    : alert("no puedes repetir tareas ni agregar más de 10");
  formTareas.reset();
  mostrarLista();
}

function mostrarLista() {
  //capturo ul
  const ulTareas = document.querySelector("#ulTareas");
  ulTareas.innerHTML = "";
  nuevaLista.forEach((e) => {
    const nuevoItem = document.createElement("li");
    nuevoItem.innerHTML = e;
    ulTareas.appendChild(nuevoItem);
  });
}
