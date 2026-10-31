document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('[data-dialog]').forEach((button) => {
  const dialog = document.getElementById(button.dataset.dialog);
  button.addEventListener('click', () => {
    dialog.showModal();
    document.body.classList.add('dialog-open');
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('dialog-open');
    button.focus();
  });
  dialog.addEventListener('click', (event) => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (
      event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom
    )) dialog.close();
  });
});
