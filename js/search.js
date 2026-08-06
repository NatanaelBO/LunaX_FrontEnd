document.addEventListener("keydown", (event) => {
  const isShortcut = (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k";
  if (!isShortcut) return;

  event.preventDefault();
  const input = document.querySelector(".lunax-search__input");
  if (input) input.focus();
});
