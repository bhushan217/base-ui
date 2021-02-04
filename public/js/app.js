(() => {
  const toggleMenu = document.querySelector('#toggleMenu');
  const closeModal = document.querySelector('.modal-container .btn-close');
  const openModal = document.querySelector('#openModal');
  const modal = document.querySelector('#modal-container');


  toggleMenu.addEventListener('click', () => {
    document.body.classList.toggle('show-nav');
  });  

  openModal.addEventListener('click', () => {
    modal.classList.add('show');
  })

  closeModal.addEventListener('click', () => {
    modal.classList.remove('show');
  })
})();