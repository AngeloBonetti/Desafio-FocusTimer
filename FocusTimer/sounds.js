export function musicaFloresta(
  somFloresta,
  somChuva,
  somCafeteria,
  somLareira,
  botaoFloresta,
  botaoChuva,
  botaoCafeteria,
  botaoLareira
) {
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

export function musicaChuva(
  somFloresta,
  somChuva,
  somCafeteria,
  somLareira,
  botaoFloresta,
  botaoChuva,
  botaoCafeteria,
  botaoLareira
) {
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

export function musicaCafeteria(
  somFloresta,
  somChuva,
  somCafeteria,
  somLareira,
  botaoFloresta,
  botaoChuva,
  botaoCafeteria,
  botaoLareira
) {
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

export function musicaLareira(
  somFloresta,
  somChuva,
  somCafeteria,
  somLareira,
  botaoFloresta,
  botaoChuva,
  botaoCafeteria,
  botaoLareira
) {
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
