const $ = document;

let $contenedor = $.querySelector("#ej10Container");

function dibujarDiv(x,y){
  // creo un div
  const nuevoDiv = $.createElement('div');
  //agregar clase
  nuevoDiv.classList.add('divNuevo');
  //agregar ubicación
  nuevoDiv.style.left = x + 'px';
  nuevoDiv.style.top = y + 'px';
  //insertar dentro del contenedor padre
  $contenedor.appendChild(nuevoDiv);
}
//ubicación del mouse
$contenedor.addEventListener('click', (ubicacion) => {
  const x = ubicacion.clientX;
  const y = ubicacion.clientY;
  // console.log(x);
  // console.log(y);
  dibujarDiv(x,y);
});
