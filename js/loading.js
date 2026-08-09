(() => {
  const TRANSITION_TIME = 400;

  function getLoading() {
    return document.getElementById("lunax-loading");
  }

  function showLoading() {
    const overlay = getLoading();
    if (!overlay) return;

    overlay.classList.remove("is-hidden");
  }

  function hideLoading() {
    const overlay = getLoading();
    if (!overlay) return;

    setTimeout(() => {
      overlay.classList.add("is-hidden");
    }, TRANSITION_TIME);
  }

  // Entrada da página
  window.addEventListener("load", () => {
    hideLoading();
  });

  // Saída da página
  document.addEventListener("click", (event) => {
    const link = event.target.closest("a");

    if (!link) return;

    const href = link.getAttribute("href");

    // Não interfere em links que não devem causar navegação normal
    if (
      !href ||
      href === "#" ||
      href.startsWith("#") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      href.startsWith("javascript:") ||
      link.target === "_blank" ||
      link.hasAttribute("download")
    ) {
      return;
    }

    // Links externos continuam funcionando normalmente
    const url = new URL(link.href, window.location.href);

    if (url.origin !== window.location.origin) {
      return;
    }

    // Mesma página
    if (url.href === window.location.href) {
      return;
    }

    event.preventDefault();

    showLoading();

    setTimeout(() => {
      window.location.href = url.href;
    }, TRANSITION_TIME);
  });
})();