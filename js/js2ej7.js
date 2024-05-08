"use strict";

let album = [
  "imgLoro",
  "imgOso",
  "imgOveja",
  "imgCebras",
  "imgKoala",
  "imgTigres",
  "imgMapache",
];

let indice = 0;

let ultIndiceAlbum = album.length - 1;

let sectionGaleria = document.querySelector("#sectionGaleria");

let imgPrincipal = document.querySelector("#imgPrincipal");
imgPrincipal.src = `images/ejercicios/${album[indice]}.jpg`;

//llenar vista con modelo de datos
for (let i in album) {
  //creo img
  const nuevoImg = document.createElement("img");
  //agrego dir de img
  nuevoImg.src = `images/ejercicios/${album[i]}.jpg`;
  //agrego clase
  nuevoImg.classList.add("imgGaleria");
  //inserto dentro de galeria
  sectionGaleria.appendChild(nuevoImg);
  //agrego selección de imagen
  nuevoImg.addEventListener("click", () => {
    imgPrincipal.src = `images/ejercicios/${album[i]}.jpg`;
    indice = i;
  });
}

//función flecha derecha
function adelantarImg() {
  if (indice == album.length - 1) {
    indice = 0;
  } else {
    indice++;
  }
  imgPrincipal.src = `images/ejercicios/${album[indice]}.jpg`;
}

//flecha derecha
document.querySelector("#flechaDe").addEventListener("click", adelantarImg);

//función flecha izquierda
function retrocederImg() {
  {
    if (indice == 0) {
      indice = album.length - 1;
    } else {
      indice--;
    }
    imgPrincipal.src = `images/ejercicios/${album[indice]}.jpg`;
  }
}

//flecha izquierda
document.querySelector("#flechaIz").addEventListener("click", retrocederImg);

//teclas adicionales
document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      retrocederImg();
      break;
    case "ArrowRight":
      adelantarImg();
      break;
    case " ":
      adelantarImg();
      break;
  }
});
