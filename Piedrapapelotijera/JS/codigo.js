function aleatorio(min, max) {
  return Math.floor(Math.random() * (min, min + 1) + min);
}

function elección(jugada) {
  let resultado = " ";

  if (jugada == 1) {
    resultado = "Piedra 🪨";
  } else if (jugada == 2) {
    resultado = "Papel 📰";
  } else if (jugada == 3) {
    resultado = "Tijera ✂️";
  } else {
    resultado = "UNA OPCIÓN INCORRECTA";
  }
  return resultado;
}
// 1 es piedra, 2 es papel, 3 es tijera
let player = 0;
let pc = 0;
let triunfos = 0;
let perdidas = 0;

while (triunfos < 3 && perdidas < 3) {
  pc = aleatorio(1, 3);
  player = prompt("Elegí 1 para 🪨, 2 para 📰 o 3 para ✂️");
  // alert("Elegiste " + jugador)
  alert("PC elige: " + elección(pc));
  alert("Elegiste: " + elección(player));

  // COMBATE
  if (pc == player) {
    alert("EMPATARON");
  } else if (player == 1 && pc == 3) {
    alert("GANASTE");
    triunfos = triunfos + 1;
  } else if (player == 2 && pc == 1) {
    alert("GANASTE");
    triunfos = triunfos + 1;
  } else if (player == 3 && pc == 2) {
    alert("GANASTE");
    triunfos = triunfos + 1;
  } else {
    alert("PERDISTE");
    perdidas = perdidas + 1;
  }
}

alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces. ");
