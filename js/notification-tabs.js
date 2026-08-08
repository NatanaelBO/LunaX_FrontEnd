document.addEventListener("DOMContentLoaded", () => {
  const abas = document.querySelectorAll(".lunax-notify-tab");

  abas.forEach((aba) => {
    aba.addEventListener("click", () => {
      const alvo = aba.getAttribute("data-tab");

      document.querySelectorAll(".lunax-notify-tab").forEach((item) => {
        item.classList.remove("is-active");
      });
      document.querySelectorAll(".lunax-notify-panel").forEach((painel) => {
        painel.classList.remove("is-active");
      });

      aba.classList.add("is-active");
      const painelAlvo = document.querySelector(`.lunax-notify-panel[data-tab-panel="${alvo}"]`);
      if (painelAlvo) painelAlvo.classList.add("is-active");
    });
  });
});
