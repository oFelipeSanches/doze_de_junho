const dataInicio = new Date("2025-03-23T00:00:00");

function atualizarContador() {
  const agora = new Date();

  let anos = agora.getFullYear() - dataInicio.getFullYear();
  let meses = agora.getMonth() - dataInicio.getMonth();
  let dias = agora.getDate() - dataInicio.getDate();

  // Ajustes caso o mês ou dia estejam negativos
  if (dias < 0) {
    meses--;
    const ultimoMes = new Date(agora.getFullYear(), agora.getMonth(), 0);
    dias += ultimoMes.getDate();
  }

  if (meses < 0) {
    anos--;
    meses += 12;
  }

  // Agora pega o restante (horas, minutos, segundos)
  const tempoDecorrido = agora - new Date(
    dataInicio.getFullYear() + anos,
    dataInicio.getMonth() + meses,
    dataInicio.getDate() + dias
  );

  const horas = Math.floor((tempoDecorrido / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((tempoDecorrido / (1000 * 60)) % 60);
  const segundos = Math.floor((tempoDecorrido / 1000) % 60);

  // Texto dinâmico
  let texto = "";

  if (anos > 0) {
    texto += `${anos} ${anos === 1 ? "ano" : "anos"}, `;
  }

  texto += `${meses} ${meses === 1 ? "mês" : "meses"}, `;
  texto += `${dias} ${dias === 1 ? "dia" : "dias"}, `;
  texto += `${horas}h ${minutos}min ${segundos}s 💕`;

  document.getElementById("contador").innerText = texto;
}

setInterval(atualizarContador, 1000);
atualizarContador();

let slideAtual = 0;

function mostrarSlide(index) {
  const slides = document.querySelectorAll('.slide');
  slides.forEach(slide => slide.classList.remove('ativo'));

  slideAtual = (index + slides.length) % slides.length;
  slides[slideAtual].classList.add('ativo');
}

function mudarSlide(direcao) {
  mostrarSlide(slideAtual + direcao);
}

// Iniciar com o primeiro slide
document.addEventListener('DOMContentLoaded', () => {
  mostrarSlide(slideAtual);
});

function alternarMusica() {
  const audio = document.getElementById('bg-music');
  const botao = document.getElementById('controle-musica');

  if (audio.paused) {
    audio.play();
    botao.textContent = "⏸️ Pausar Música";
  } else {
    audio.pause();
    botao.textContent = "🎵 Tocar Música";
  }
}
