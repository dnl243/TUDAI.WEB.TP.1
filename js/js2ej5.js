//JS tp2ej5
//parametro txt (clase del texto a mostrar)
function mostrarTxt(txt){
  document.querySelectorAll(txt).forEach(e => e.classList.toggle("txtOculto"))
}

document.querySelector("#btnVerMas1Pol2").addEventListener('click', ()=> mostrarTxt(".txtExtendido1"));

document.querySelector("#btnVerMas2Pol2").addEventListener('click', ()=> mostrarTxt(".txtExtendido2"));
