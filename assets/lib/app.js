"use strict";

console.log("🟢 Connected!");
var formulario = document.querySelector("#formulario");
var cancelBtn = document.querySelector("#cancel");
var startBtn = document.querySelector("#start");
var displaySeconds = document.querySelector("#displaySegundos");
var inputSeconds = document.querySelector("#segundos");
var manejarCifra = function manejarCifra(segundos) {
  if (segundos < 0) return;
  if (segundos.toString().length === 1) {
    displaySeconds.textContent = "0".concat(segundos);
  } else {
    displaySeconds.textContent = segundos;
  }
};
formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  var secs = Number(inputSeconds.value);
  startBtn.disabled = true;
  manejarCifra(secs);
  var timer = setInterval(function () {
    secs--;
    manejarCifra(secs);
    if (!secs) {
      clearInterval(timer);
      startBtn.disabled = false;
    }
  }, 1000);
  cancelBtn.addEventListener("click", function () {
    clearInterval(timer);
    displaySeconds.textContent = "00";
    startBtn.disabled = false;
  });
});