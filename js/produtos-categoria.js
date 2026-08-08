document.addEventListener("DOMContentLoaded", () => {
  const busca = document.getElementById("categoria-busca");
  const itensSub = document.querySelectorAll("#subcategoria-lista .lunax-shop__cat-item");

  if (!busca) return;

  busca.addEventListener("input", () => {
    const termo = busca.value.trim().toLowerCase();
    itensSub.forEach((item) => {
      const nome = item.textContent.trim().toLowerCase();
      item.classList.toggle("is-hidden", !nome.includes(termo));
    });
  });
});
