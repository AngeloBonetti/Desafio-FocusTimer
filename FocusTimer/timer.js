export let timeout;
export let xMinuto = 25;
let xSegundo = 0;

export let minuto = String(xMinuto).padStart(2, "0");
export let segundo = String(xSegundo).padStart(2, "0");

export function timer(minutos, segundos, alarme) {
  minutos.innerText = String(minuto).padStart(2, "0");
  segundos.innerText = String(segundo).padStart(2, "0");
  timeout = setTimeout(() => timer(minutos, segundos, alarme), 1000);

  if (segundo == 0 && minuto > 0) {
    segundo = 60;
    minuto--;
  }
  if (segundo == 0 && minuto == 0) {
    clearTimeout(timeout);
    alarme.play();
  }
  segundo--;
}

export function parar(minutos, segundos, alarme) {
  clearTimeout(timeout);
  minuto = xMinuto;
  segundo = xSegundo;

  minutos.innerText = String(xMinuto).padStart(2, "0");
  segundos.innerText = String(xSegundo).padStart(2, "0");

  timeout = null;
  alarme.pause();
}

export function menosCinco(minutos, segundos) {
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

export function maisCinco(minutos, alarme) {
  xMinuto += 5;
  minuto = xMinuto;
  minutos.innerText = String(xMinuto).padStart(2, "0");

  timeout = null;
  segundo = xSegundo;

  alarme.pause();
}
