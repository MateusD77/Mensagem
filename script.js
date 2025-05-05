const botao = document.getElementById("botaoTravesso");
const mensagem = document.getElementById("mensagem");

let tentativas = 0;
let jogoFinalizado = false;

function moverBotao() {
  const largura = window.innerWidth - botao.offsetWidth;
  const altura = window.innerHeight - botao.offsetHeight;

  const novaEsquerda = Math.random() * largura;
  const novoTopo = Math.random() * altura;

  botao.style.left = `${novaEsquerda}px`;
  botao.style.top = `${novoTopo}px`;
  botao.style.transform = `translate(0, 0)`;
}

botao.addEventListener("mouseover", () => {
  if (tentativas < 10 && !jogoFinalizado) {
    moverBotao();
    tentativas++;
  }

  if (tentativas >= 10 && !jogoFinalizado) {
    botao.style.left = "50%";
    botao.style.top = "50%";
    botao.style.transform = "translate(-50%, -50%)";
    jogoFinalizado = true;
  }
});

botao.addEventListener("click", () => {
  if (jogoFinalizado) {
    mensagem.textContent = "Eu te amo 💖!";
    mensagem.classList.add("mensagem-central");

    botao.style.display = "none";
  }
});
