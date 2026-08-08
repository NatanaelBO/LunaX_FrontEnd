document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("catalogo-filtro");
  const contagem = document.getElementById("catalogo-contagem");
  const vazio = document.getElementById("catalogo-vazio");
  const secoes = document.querySelectorAll(".lunax-catalog__section");

  if (!input) return;

  function aplicarFiltro() {
    const termo = input.value.trim().toLowerCase();
    let visiveisNoTotal = 0;

    secoes.forEach((secao) => {
      const cartoes = secao.querySelectorAll("[data-catalog-name]");
      const contagemSecao = secao.querySelector(".lunax-catalog__section-count");
      let visiveisNaSecao = 0;

      cartoes.forEach((card) => {
        const nome = card.dataset.catalogName.toLowerCase();
        const corresponde = nome.includes(termo);
        card.style.display = corresponde ? "" : "none";
        if (corresponde) visiveisNaSecao += 1;
      });

      if (contagemSecao) contagemSecao.textContent = visiveisNaSecao;
      secao.classList.toggle("is-hidden", visiveisNaSecao === 0);
      visiveisNoTotal += visiveisNaSecao;
    });

    if (contagem) contagem.textContent = visiveisNoTotal;
    if (vazio) vazio.classList.toggle("is-visible", visiveisNoTotal === 0);
  }

  input.addEventListener("input", aplicarFiltro);
});
