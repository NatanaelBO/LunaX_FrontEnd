window.addEventListener("load", () => {
  const overlay = document.getElementById("lunax-loading");
  if (!overlay) return;

  setTimeout(() => {
    overlay.classList.add("is-hidden");
  }, 400);
});
