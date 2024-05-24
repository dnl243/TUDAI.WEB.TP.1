"use strict"

let $contenedor = document.querySelector("#ej10Container");

//aviso posición ocupada
function msj(e){
  e.stopPropagation();
  alert("en esa posición ya existe un elemento");
}

function dibujarDiv(x,y){
  // creo un div
  const nuevoDiv = document.createElement('div');
  //agregar clase
  nuevoDiv.classList.add('divNuevo');
  //agregar ubicación
  nuevoDiv.style.left = x + 'px';
  nuevoDiv.style.top = y + 'px';
  //insertar dentro del contenedor padre
  $contenedor.appendChild(nuevoDiv);
  //agregar escucha a un click
  nuevoDiv.addEventListener('click', msj);
}

//ubicación del mouse
$contenedor.addEventListener('click', (ubicacion) => {
  const x = ubicacion.clientX;
  const y = ubicacion.clientY;
  // console.log(x);
  // console.log(y);
  dibujarDiv(x,y);
});


