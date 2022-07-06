const openModalBtn = document.querySelectorAll('[data-modal-target]');
const closeModalBtn = document.querySelectorAll('[data-close-btn]');

openModalBtn.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

closeModalBtn.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('#modal');
    closeModal(modal);
  });
});

function openModal(modal){
  if (modal == null) return
  modal.classList.add('open');
};

function closeModal(modal){
  if (modal == null) return
  modal.classList.remove('open');
};
