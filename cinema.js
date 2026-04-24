







function algoritmo() {

const titulo = document.getElementById("titulo").value;
const duração = document.getElementById("duração").value;

const horas = Math.floor(duração/60);
const minutos = duração - horas * 60;

document.getElementById("titulosaida").textContent = titulo.toUpperCase();
document.getElementById("duraçãosaida").textContent = horas + "hora(s) e" + minutos + "minuto(s)";

}

