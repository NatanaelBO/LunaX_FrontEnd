document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-select]").forEach((grupo) => {
    const rotulo = grupo.querySelector("[data-select-label]");
    const opcoes = grupo.querySelectorAll("[data-select-option]");
    const menu = grupo.querySelector("[data-dropdown-menu]");
    const gatilho = grupo.querySelector("[data-dropdown-trigger]");

    opcoes.forEach((opcao) => {
      opcao.addEventListener("click", () => {
        opcoes.forEach((item) => {
          item.classList.remove("is-active");
          item.setAttribute("aria-selected", "false");
        });
        opcao.classList.add("is-active");
        opcao.setAttribute("aria-selected", "true");
        if (rotulo) rotulo.textContent = opcao.textContent.trim();
        if (menu) menu.classList.remove("is-open");
        if (gatilho) gatilho.setAttribute("aria-expanded", "false");
      });
    });
  });
});
