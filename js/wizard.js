document.addEventListener("DOMContentLoaded", () => {
  const painéis = document.querySelectorAll("[data-step-panel]");
  const botõesEtapa = document.querySelectorAll("[data-step-nav]");
  const botaoVoltar = document.getElementById("wizard-back");
  const botaoProximo = document.getElementById("wizard-next");
  const rotuloProximo = document.getElementById("wizard-next-label");
  const barraNav = document.getElementById("wizard-nav");
  const totalEtapas = painéis.length;

  if (!painéis.length || !botaoVoltar || !botaoProximo) return;

  let etapaAtual = 1;
  let etapaMaximaLiberada = 1;

  function atualizarNav() {
    botaoVoltar.classList.toggle("is-hidden", etapaAtual === 1);
    rotuloProximo.textContent = etapaAtual === totalEtapas ? "Publicar anúncio" : "Próximo";
  }

  function irParaEtapa(numero) {
    etapaAtual = numero;

    painéis.forEach((painel) => {
      painel.classList.toggle("is-active", Number(painel.dataset.stepPanel) === numero);
    });

    botõesEtapa.forEach((botao) => {
      const alvo = Number(botao.dataset.stepNav);
      botao.classList.toggle("is-active", alvo === numero);
      botao.classList.toggle("is-done", alvo < numero);
      botao.disabled = alvo > etapaMaximaLiberada;
    });

    atualizarNav();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function preencherResumo() {
    const obterValor = (id) => {
      const elemento = document.getElementById(id);
      return elemento ? elemento.value : "";
    };

    const titulo = obterValor("titulo").trim();
    const modeloSelecionado = document.querySelector('input[name="modelo"]:checked');
    const imagensPreenchidas = document.querySelectorAll(".lunax-upload-slot.has-image").length;

    const campos = {
      "resumo-titulo": titulo || "Sem título definido",
      "resumo-modelo": modeloSelecionado ? modeloSelecionado.value : "Normal",
      "resumo-tipo": obterValor("tipo"),
      "resumo-categoria": obterValor("categoria"),
      "resumo-valor": obterValor("valor") || "R$ 0,00",
      "resumo-estoque": obterValor("estoque") || "1",
      "resumo-imagens": `${imagensPreenchidas} de 6 adicionadas`,
    };

    Object.keys(campos).forEach((id) => {
      const elemento = document.getElementById(id);
      if (elemento) elemento.textContent = campos[id];
    });
  }

  function publicarAnuncio() {
    document.getElementById("resumo-view").classList.add("is-hidden");
    document.getElementById("success-view").classList.add("is-active");
    barraNav.classList.add("is-hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  botaoProximo.addEventListener("click", () => {
    if (etapaAtual === totalEtapas) {
      publicarAnuncio();
      return;
    }

    const proxima = etapaAtual + 1;
    if (proxima > etapaMaximaLiberada) etapaMaximaLiberada = proxima;
    if (proxima === totalEtapas) preencherResumo();
    irParaEtapa(proxima);
  });

  botaoVoltar.addEventListener("click", () => {
    if (etapaAtual > 1) irParaEtapa(etapaAtual - 1);
  });

  botõesEtapa.forEach((botao) => {
    botao.addEventListener("click", () => {
      const alvo = Number(botao.dataset.stepNav);
      if (alvo <= etapaMaximaLiberada) irParaEtapa(alvo);
    });
  });

  atualizarNav();
});
