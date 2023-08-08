const openModalButton = document.getElementById('openModalButton');
const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('closeModalButton');
const checkbox = document.getElementById('checkbox');

openModalButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModalButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    closeModalButton.disabled = false;
  } else {
    closeModalButton.disabled = true;
  }
});