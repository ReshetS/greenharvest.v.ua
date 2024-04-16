(() => {
  const mobileMenu = {
    modal: document.querySelector('#mobile-menu'),
    menuOpenBtn: document.querySelector('.button-menu-open'),
    menuCloseBtn: document.querySelector('.modal-btn'),
    menuCloseByLink: document.querySelectorAll('.modal-menu-link'),
    menuCloseByLinkShop: document.querySelector('.modal-menu-link-shop'),
  };

  mobileMenu.menuOpenBtn.addEventListener('click', toogleIsOpen);
  mobileMenu.menuCloseBtn.addEventListener('click', toogleIsOpen);
  mobileMenu.menuCloseByLink.forEach(link => {
    link.addEventListener('click', toogleIsOpen);
  });
  mobileMenu.menuCloseByLinkShop.addEventListener('click', toogleIsOpen);
  function toogleIsOpen() {
    mobileMenu.modal.classList.toggle('is-open');
  }
})
  document.addEventListener('DOMContentLoaded', function () {
  const block = document.querySelector('.header-container'); 
  const blockRect = block.getBoundingClientRect();
  const blockStart = blockRect.top + window.pageYOffset; // Висота від початку сторінки до блоку
  const blockHeight = blockRect.height;

  function checkScroll() {
    const scrolledPast = window.pageYOffset - blockStart; // Як далеко ми проскролили від початку блоку
    if (scrolledPast > (blockHeight * 1.2)) { // 120% прокрутки блоку
      block.classList.add('scrolled'); 
    } else {
      block.classList.remove('scrolled'); 
    }
  }

  window.addEventListener('scroll', checkScroll);
});
