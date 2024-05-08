"use strict"

//JS tp2ej3 contadores individuales

let contador = 0;

document.querySelector('#btn1').addEventListener('click', ()=> {
  contador++;
  document.querySelector('#cont1').innerHTML = contador;
});

let contador2 = 0;

document.querySelector('#btn2').addEventListener('click', ()=> {
  contador2++;
  document.querySelector('#cont2').innerHTML = contador2;
});

let contador3 = 0;

let btnDom3 = document.querySelector('#btn3').addEventListener('click', ()=> {
  contador3++;
  document.querySelector('#cont3').innerHTML = contador3;
});

//JS tp2ej4/6 lista de tareas hasta 10
//capturo form

let formTareas = document.querySelector("#formTareas");
formTareas.addEventListener("submit", cargarTareas);

//modelo de datos
let nuevaLista = [];

function cargarTareas(e) {
  e.preventDefault();
  
  //capturo datos del input
  let tareaNueva = document.querySelector("#inputTareas").value;
  //agrego un elemento al array si es igual o menor a 10
  nuevaLista.length<10 && !(nuevaLista.includes(tareaNueva)) ? nuevaLista.push(tareaNueva) : alert("no puedes repetir tareas ni agregar más de 10");
  formTareas.reset();
  mostrarLista();
}

function mostrarLista() {
  let ulTareas = document.querySelector("#ulTareas");
  ulTareas.innerHTML = ""; 
  nuevaLista.forEach(e => {
    ulTareas.innerHTML += "<li>"+e+"</li>";
  });
}

