function atualizarBotaoTema() {
  const claro = document.documentElement.getAttribute("data-theme") === "light";
  const rotulo = document.getElementById("lunax-theme-label");
  const icone = document.getElementById("lunax-theme-icon");
  if (!rotulo || !icone) return;

  if (claro) {
    rotulo.textContent = "Tema escuro";
    icone.innerHTML = '<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />';
  } else {
    rotulo.textContent = "Tema claro";
    icone.innerHTML = '<circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />';
  }
}

document.addEventListener("DOMContentLoaded", () => {
  atualizarBotaoTema();

  const botao = document.getElementById("lunax-theme-toggle");
  if (!botao) return;

  botao.addEventListener("click", () => {
    const claro = document.documentElement.getAttribute("data-theme") === "light";
    if (claro) {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("lunax-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("lunax-theme", "light");
    }
    atualizarBotaoTema();
  });
});
