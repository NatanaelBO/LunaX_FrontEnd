document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-panel-toggle]").forEach((botao) => {
    const alvo = document.getElementById(botao.getAttribute("aria-controls"));
    if (!alvo) return;

    botao.addEventListener("click", () => {
      const aberto = botao.getAttribute("aria-expanded") === "true";
      botao.setAttribute("aria-expanded", String(!aberto));
      alvo.classList.toggle("is-collapsed", aberto);
    });
  });
});
