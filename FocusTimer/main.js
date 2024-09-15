import {
  timer,
  parar,
  maisCinco,
  menosCinco,
  timeout,
  xMinuto,
} from "./timer.js";
import {
  musicaFloresta,
  musicaChuva,
  musicaCafeteria,
  musicaLareira,
} from "./sounds.js";

let minutos = document.getElementById("timer-minuto");
let segundos = document.getElementById("timer-segundo");

minutos.innerText = xMinuto;

let somFloresta = document.getElementById("musica-floresta");
let somChuva = document.getElementById("musica-chuva");
let somCafeteria = document.getElementById("musica-cafeteria");
let somLareira = document.getElementById("musica-lareira");
let alarme = document.getElementById("alarme");

let play = document.querySelector(".play");
let stop = document.querySelector(".stop");
let mais = document.querySelector(".mais");
let menos = document.querySelector(".menos");

let botaoFloresta = document.querySelector(".floresta");
let botaoChuva = document.querySelector(".chuva");
let botaoCafeteria = document.querySelector(".cafeteria");
let botaoLareira = document.querySelector(".lareira");

play.addEventListener("click", function () {
  if (!timeout) {
    timer(minutos, segundos, alarme);
  }
});
stop.addEventListener("click", () => {
  parar(minutos, segundos, alarme);

  somFloresta.pause();
  somChuva.pause();
  somCafeteria.pause();
  somLareira.pause();

  botaoFloresta.classList.remove("escutando");
  botaoChuva.classList.remove("escutando");
  botaoCafeteria.classList.remove("escutando");
  botaoLareira.classList.remove("escutando");
});
mais.addEventListener("click", () => maisCinco(minutos, alarme));
menos.addEventListener("click", () => menosCinco(minutos, segundos));
botaoFloresta.addEventListener("click", () =>
  musicaFloresta(
    somFloresta,
    somChuva,
    somCafeteria,
    somLareira,
    botaoFloresta,
    botaoChuva,
    botaoCafeteria,
    botaoLareira
  )
);
botaoChuva.addEventListener("click", () =>
  musicaChuva(
    somFloresta,
    somChuva,
    somCafeteria,
    somLareira,
    botaoFloresta,
    botaoChuva,
    botaoCafeteria,
    botaoLareira
  )
);
botaoCafeteria.addEventListener("click", () =>
  musicaCafeteria(
    somFloresta,
    somChuva,
    somCafeteria,
    somLareira,
    botaoFloresta,
    botaoChuva,
    botaoCafeteria,
    botaoLareira
  )
);
botaoLareira.addEventListener("click", () =>
  musicaLareira(
    somFloresta,
    somChuva,
    somCafeteria,
    somLareira,
    botaoFloresta,
    botaoChuva,
    botaoCafeteria,
    botaoLareira
  )
);
