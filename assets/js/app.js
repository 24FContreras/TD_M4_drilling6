console.log("🟢 Connected!");

const formulario = document.querySelector("#formulario");
const cancelBtn = document.querySelector("#cancel");
const startBtn = document.querySelector("#start");
const displaySeconds = document.querySelector("#displaySegundos");
const inputSeconds = document.querySelector("#segundos");

const manejarCifra = (segundos) => {
  if (segundos < 0) return;

  if (segundos.toString().length === 1) {
    displaySeconds.textContent = `0${segundos}`;
  } else {
    displaySeconds.textContent = segundos;
  }
};

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let secs = Number(inputSeconds.value);
  startBtn.disabled = true;

  manejarCifra(secs);

  const timer = setInterval(() => {
    secs--;
    manejarCifra(secs);

    if (!secs) {
      clearInterval(timer);
      startBtn.disabled = false;
    }
  }, 1000);

  cancelBtn.addEventListener("click", () => {
    clearInterval(timer);
    displaySeconds.textContent = "00";
    startBtn.disabled = false;
  });
});
