function criarEstrelas(container, quantidade) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < quantidade; i++) {
    const estrela = document.createElement("div");
    estrela.className = "lunax-star";
    estrela.style.top = `${Math.random() * 100}%`;
    estrela.style.left = `${Math.random() * 100}%`;
    estrela.style.animationDelay = `${Math.random() * 4}s`;
    fragment.appendChild(estrela);
  }
  container.appendChild(fragment);
}

function criarParticulas(container, quantidade) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < quantidade; i++) {
    const particula = document.createElement("div");
    particula.className = "lunax-particle";
    particula.style.left = `${Math.random() * 100}%`;
    particula.style.setProperty("--lunax-drift-x", `${(Math.random() - 0.5) * 80}px`);
    particula.style.animationDuration = `${10 + Math.random() * 12}s`;
    particula.style.animationDelay = `${Math.random() * 12}s`;
    fragment.appendChild(particula);
  }
  container.appendChild(fragment);
}

document.addEventListener("DOMContentLoaded", () => {
  const estrelasContainer = document.querySelector(".lunax-stars");
  const particulasContainer = document.querySelector(".lunax-background");
  if (estrelasContainer) criarEstrelas(estrelasContainer, 70);
  if (particulasContainer) criarParticulas(particulasContainer, 14);
});
