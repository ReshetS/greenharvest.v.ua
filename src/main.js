(() => {
  const mobileMenu = {
    modal: document.querySelector('#mobile-menu'),
    menuOpenBtn: document.querySelector('.button-menu-open'),
    menuCloseBtn: document.querySelector('.modal-btn'),
    menuCloseByLink: document.querySelector('.modal-menu-link'),
    menuCloseByLinkShop: document.querySelector('.modal-menu-link-shop'),
  };

  mobileMenu.menuOpenBtn.addEventListener('click', toogleIsOpen);
  mobileMenu.menuCloseBtn.addEventListener('click', toogleIsOpen);
  mobileMenu.menuCloseByLink.addEventListener('click', toogleIsOpen);
  mobileMenu.menuCloseByLinkShop.addEventListener('click', toogleIsOpen);
  function toogleIsOpen() {
    mobileMenu.modal.classList.toggle('is-open');
  }
})();
