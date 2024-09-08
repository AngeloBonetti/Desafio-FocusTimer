let minutos = document.getElementById("timer-minuto");
let segundos = document.getElementById("timer-segundo");
let somFloresta = document.getElementById("musica-floresta");
let somChuva = document.getElementById("musica-chuva");
let somCafeteria = document.getElementById("musica-cafeteria");
let somLareira = document.getElementById("musica-lareira");

let play = document.querySelector(".play");
let stop = document.querySelector(".stop");
let mais = document.querySelector(".mais");
let menos = document.querySelector(".menos");
let botaoFloresta = document.querySelector(".floresta");
let botaoChuva = document.querySelector(".chuva");
let botaoCafeteria = document.querySelector(".cafeteria");
let botaoLareira = document.querySelector(".lareira");

let xMinuto = 25;
let xSegundo = 0;

let minuto = String(xMinuto).padStart(2, "0");
let segundo = String(xSegundo).padStart(2, "0");
segundos.innerText = segundo;
minutos.innerText = minuto;
let timeout;

play.addEventListener("click", function () {
  if (!timeout) {
    timer();
  }
});
stop.addEventListener("click", parar);
mais.addEventListener("click", maisCinco);
menos.addEventListener("click", menosCinco);
botaoFloresta.addEventListener("click", musicaFloresta);
botaoChuva.addEventListener("click", musicaChuva);
botaoCafeteria.addEventListener("click", musicaCafeteria);
botaoLareira.addEventListener("click", musicaLareira);

function timer() {
  minutos.innerText = String(minuto).padStart(2, "0");
  segundos.innerText = String(segundo).padStart(2, "0");
  timeout = setTimeout(timer, 1000);

  if (segundo == 0 && minuto > 0) {
    segundo = 60;
    minuto--;
  }
  if (segundo == 0 && minuto == 0) {
    clearTimeout(timeout);
    let alarme = document.getElementById("alarme");
    alarme.play();
  }
  segundo--;
}

function parar() {
  clearTimeout(timeout);
  minuto = xMinuto;
  segundo = xSegundo;

  minutos.innerText = String(xMinuto).padStart(2, "0");
  segundos.innerText = String(xSegundo).padStart(2, "0");

  timeout = null;
  alarme.pause();
}

function menosCinco() {
  if (minuto >= 5) {
    xMinuto -= 5;
  } else {
    xMinuto = 0;
    xSegundo = 0;
  }

  minuto = xMinuto;
  segundo = xSegundo;

  minutos.innerText = String(xMinuto).padStart(2, "0");
  segundos.innerText = String(xSegundo).padStart(2, "0");
}

function maisCinco() {
  xMinuto += 5;
  minuto = xMinuto;
  minutos.innerText = String(xMinuto).padStart(2, "0");

  timeout = null;
  segundo = xSegundo;
}

function musicaFloresta() {
  somChuva.pause();
  somCafeteria.pause();
  somLareira.pause();

  if (somFloresta.paused) {
    somFloresta.play();

    botaoFloresta.classList.add("escutando");
    botaoChuva.classList.remove("escutando");
    botaoCafeteria.classList.remove("escutando");
    botaoLareira.classList.remove("escutando");
  } else {
    somFloresta.pause();
    botaoFloresta.classList.remove("escutando");
  }
}

function musicaChuva() {
  somFloresta.pause();
  somCafeteria.pause();
  somLareira.pause();

  if (somChuva.paused) {
    somChuva.play();

    botaoChuva.classList.add("escutando");
    botaoFloresta.classList.remove("escutando");
    botaoCafeteria.classList.remove("escutando");
    botaoLareira.classList.remove("escutando");
  } else {
    somChuva.pause();

    botaoChuva.classList.remove("escutando");
  }
}

function musicaCafeteria() {
  somFloresta.pause();
  somChuva.pause();
  somLareira.pause();

  if (somCafeteria.paused) {
    somCafeteria.play();

    botaoCafeteria.classList.add("escutando");
    botaoFloresta.classList.remove("escutando");
    botaoChuva.classList.remove("escutando");
    botaoLareira.classList.remove("escutando");
  } else {
    somCafeteria.pause();

    botaoCafeteria.classList.remove("escutando");
  }
}

function musicaLareira() {
  somFloresta.pause();
  somChuva.pause();
  somCafeteria.pause();

  if (somLareira.paused) {
    somLareira.play();

    botaoLareira.classList.add("escutando");
    botaoFloresta.classList.remove("escutando");
    botaoChuva.classList.remove("escutando");
    botaoCafeteria.classList.remove("escutando");
  } else {
    somLareira.pause();

    botaoLareira.classList.remove("escutando");
  }
}
