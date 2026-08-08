document.addEventListener("DOMContentLoaded", () => {
  const botao = document.getElementById("aplicar-filtro");
  const limparBotao = document.getElementById("limpar-filtro");
  const minInput = document.getElementById("preco-min");
  const maxInput = document.getElementById("preco-max");
  const repInput = document.getElementById("rep-min");
  const entregaInputs = document.querySelectorAll('input[name="filtro-entrega"]');
  const cards = document.querySelectorAll("#produtos-grid .lunax-product-card-slot");
  const vazioSub = document.getElementById("subcategoria-vazio");
  const toast = document.getElementById("filtro-toast");

  if (!botao) return;

  let toastTimer = null;

  function mostrarToast() {
    if (!toast) return;
    if (toastTimer) clearTimeout(toastTimer);
    toast.classList.add("is-visible");
    toastTimer = setTimeout(() => {
      toast.classList.remove("is-visible");
      toastTimer = null;
    }, 4000);
  }

  function aplicarFiltro() {
    const min = minInput.value !== "" ? Number(minInput.value) : null;
    const max = maxInput.value !== "" ? Number(maxInput.value) : null;
    const repMin = repInput.value !== "" ? Number(repInput.value) : null;
    const entregasAtivas = Array.from(entregaInputs).filter((i) => i.checked).map((i) => i.value);
    let visiveis = 0;

    cards.forEach((card) => {
      const preco = Number(card.dataset.price);
      const rep = Number(card.dataset.rep);
      const dentroDoPreco = (min === null || preco >= min) && (max === null || preco <= max);
      const dentroDaRep = repMin === null || rep >= repMin;
      const entregaOk = entregasAtivas.length === 0 || entregasAtivas.includes(card.dataset.delivery);
      const visivel = dentroDoPreco && dentroDaRep && entregaOk;

      card.classList.toggle("is-hidden", !visivel);
      if (visivel) visiveis++;
    });

    if (vazioSub) vazioSub.classList.toggle("is-visible", visiveis === 0);
    return visiveis;
  }

  botao.addEventListener("click", () => {
    const visiveis = aplicarFiltro();
    if (visiveis === 0) mostrarToast();
  });

  if (limparBotao) {
    limparBotao.addEventListener("click", () => {
      minInput.value = "";
      maxInput.value = "";
      repInput.value = "";
      entregaInputs.forEach((i) => (i.checked = false));
      aplicarFiltro();
    });
  }
});
