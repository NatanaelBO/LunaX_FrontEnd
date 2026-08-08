document.addEventListener("DOMContentLoaded", () => {
  const grupos = Array.from(document.querySelectorAll("[data-dropdown]"));

  function fechar(grupo) {
    const menu = grupo.querySelector("[data-dropdown-menu]");
    const gatilho = grupo.querySelector("[data-dropdown-trigger]");
    if (menu) menu.classList.remove("is-open");
    if (gatilho) gatilho.setAttribute("aria-expanded", "false");
  }

  function abrir(grupo) {
    grupos.forEach((outro) => {
      if (outro !== grupo) fechar(outro);
    });
    const menu = grupo.querySelector("[data-dropdown-menu]");
    const gatilho = grupo.querySelector("[data-dropdown-trigger]");
    if (menu) menu.classList.add("is-open");
    if (gatilho) gatilho.setAttribute("aria-expanded", "true");
  }

  grupos.forEach((grupo) => {
    const gatilho = grupo.querySelector("[data-dropdown-trigger]");
    const menu = grupo.querySelector("[data-dropdown-menu]");
    if (!gatilho || !menu) return;

    gatilho.addEventListener("click", (evento) => {
      evento.stopPropagation();
      if (menu.classList.contains("is-open")) {
        fechar(grupo);
      } else {
        abrir(grupo);
      }
    });
  });

  document.addEventListener("click", (evento) => {
    grupos.forEach((grupo) => {
      if (!grupo.contains(evento.target)) fechar(grupo);
    });
  });

  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") {
      grupos.forEach(fechar);
    }
  });
});
