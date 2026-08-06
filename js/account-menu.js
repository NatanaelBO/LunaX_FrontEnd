document.addEventListener("DOMContentLoaded", () => {
  const gatilho = document.getElementById("lunax-account-trigger");
  const menu = document.getElementById("lunax-account-menu");
  if (!gatilho || !menu) return;

  function fechar() {
    menu.classList.remove("is-open");
    gatilho.setAttribute("aria-expanded", "false");
  }

  function abrir() {
    menu.classList.add("is-open");
    gatilho.setAttribute("aria-expanded", "true");
  }

  gatilho.addEventListener("click", (evento) => {
    evento.stopPropagation();
    if (menu.classList.contains("is-open")) {
      fechar();
    } else {
      abrir();
    }
  });

  document.addEventListener("click", (evento) => {
    if (!menu.contains(evento.target) && !gatilho.contains(evento.target)) {
      fechar();
    }
  });

  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") fechar();
  });
});
