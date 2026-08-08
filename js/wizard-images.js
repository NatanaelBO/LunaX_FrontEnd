document.addEventListener("DOMContentLoaded", () => {
  const slots = document.querySelectorAll("[data-upload-slot]");
  const dropzoneInput = document.getElementById("upload-principal");

  if (!slots.length) return;

  function preencherSlot(slot, arquivo) {
    const preview = slot.querySelector(".lunax-upload-slot__preview");
    if (!preview || !arquivo) return;
    preview.src = URL.createObjectURL(arquivo);
    slot.classList.add("has-image");
  }

  function limparSlot(slot) {
    const preview = slot.querySelector(".lunax-upload-slot__preview");
    const input = slot.querySelector('input[type="file"]');
    slot.classList.remove("has-image");
    if (preview) preview.removeAttribute("src");
    if (input) input.value = "";
  }

  slots.forEach((slot) => {
    const input = slot.querySelector('input[type="file"]');
    const botaoRemover = slot.querySelector("[data-upload-remove]");

    if (input) {
      input.addEventListener("change", () => {
        if (input.files && input.files[0]) preencherSlot(slot, input.files[0]);
      });
    }

    if (botaoRemover) {
      botaoRemover.addEventListener("click", (evento) => {
        evento.preventDefault();
        evento.stopPropagation();
        limparSlot(slot);
      });
    }
  });

  if (dropzoneInput) {
    dropzoneInput.addEventListener("change", () => {
      const arquivos = Array.from(dropzoneInput.files || []);
      const slotsVazios = Array.from(slots).filter((slot) => !slot.classList.contains("has-image"));

      arquivos.slice(0, slotsVazios.length).forEach((arquivo, indice) => {
        preencherSlot(slotsVazios[indice], arquivo);
      });

      dropzoneInput.value = "";
    });
  }
});
