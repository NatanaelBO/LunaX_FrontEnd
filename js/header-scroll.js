document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".lunax-header");
  if (!header) return;

  function atualizarBorda() {
    if (window.scrollY > 8) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }

  atualizarBorda();
  window.addEventListener("scroll", atualizarBorda, { passive: true });
});
