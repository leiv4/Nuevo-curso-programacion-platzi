let ataqueJugador;
let ataqueEnemigo;

function iniciarJuego() {
  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.addEventListener("click", ataqueFuego);
  let botonAgua = document.getElementById("boton-agua");
  botonAgua.addEventListener("click", ataqueAgua);
  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.addEventListener("click", ataqueTierra);
}

function seleccionarMascotaJugador() {
  let inputHipodoge = document.getElementById("hipodoge");
  let inputCapipepo = document.getElementById("capipepo");
  let inputRatigueya = document.getElementById("ratigueya");
  let spanMascotaJugador = document.getElementById("mascota-jugador");

  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = "Hipodoge";
    alert("Seleccionaste a Hipodoge");
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = "Capipepo";
    alert("Seleccionaste a Capipepo");
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = "Ratigueya";
    alert("Seleccionaste a Ratigueya");
  } else {
    alert("Debes seleccionar una mascota");
  }

  seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo() {
  let seleccionAleatorio = aleatorio(1, 3);
  let spanMascotaEnemigo = document.getElementById("mascota-enemigo");

  if (seleccionAleatorio == 1) {
    spanMascotaEnemigo.innerHTML = "Hipodoge";
  } else if (seleccionAleatorio == 2) {
    spanMascotaEnemigo.innerHTML = "Capipepo";
  } else if (seleccionAleatorio == 3) {
    spanMascotaEnemigo.innerHTML = "Ratigueya";
  }
}

function ataqueFuego() {
  ataqueJugador = "FUEGO";
  ataqueAleatorioEnemigo();
}
function ataqueAgua() {
  ataqueJugador = "AGUA";
  ataqueAleatorioEnemigo();
}
function ataqueTierra() {
  ataqueJugador = "TIERRA";
  ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
  ataqueEnemigo = aleatorio(1, 3);

  if (ataqueEnemigo == 1) {
    ataqueEnemigo = "FUEGO";
  } else if (ataqueEnemigo == 2) {
    ataqueEnemigo = "AGUA";
  } else if (ataqueEnemigo == 3) {
    ataqueEnemigo = "TIERRA";
  }
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (min, min + 1) + min);
}

window.addEventListener("load", iniciarJuego);
