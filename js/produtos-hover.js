document.addEventListener("DOMContentLoaded", () => {
  const slots = document.querySelectorAll(".lunax-product-card-slot");
  const temporizadores = new WeakMap();
  let contador = 40;

  slots.forEach((slot) => {
    const gatilhos = slot.querySelectorAll(".lunax-product-card__cover, .lunax-product-card__body");
    if (!gatilhos.length) return;

    gatilhos.forEach((gatilho) => {
      gatilho.addEventListener("mouseenter", () => {
        const pendente = temporizadores.get(slot);
        if (pendente) {
          clearTimeout(pendente);
          temporizadores.delete(slot);
        }
        contador += 1;
        slot.style.zIndex = String(contador);
      });

      gatilho.addEventListener("mouseleave", () => {
        const id = setTimeout(() => {
          slot.style.zIndex = "";
          temporizadores.delete(slot);
        }, 360);
        temporizadores.set(slot, id);
      });
    });
  });
});
