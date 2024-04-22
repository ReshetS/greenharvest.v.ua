(() => {
  const body = document.body;

  const mobileMenu = {
    modal: document.querySelector('#mobile-menu'),
    menuOpenBtn: document.querySelector('.button-menu-open'),
    menuCloseBtn: document.querySelector('.modal-btn'),
    menuCloseByLink: document.querySelectorAll('.modal-menu-link'),
    menuCloseByLinkShop: document.querySelector('#your-order-btn'),
  };

  const shopNowBtnDesk = document.querySelector('#your-order-btn-desk');

  function toggleIsOpen() {
    mobileMenu.modal.classList.toggle('is-open');
    body.classList.toggle('no-scroll');
  }

  mobileMenu.menuOpenBtn.addEventListener('click', toggleIsOpen);
  mobileMenu.menuCloseBtn.addEventListener('click', toggleIsOpen);
  mobileMenu.menuCloseByLink.forEach(link => {
    link.addEventListener('click', toggleIsOpen);
  });


  mobileMenu.menuCloseByLinkShop.addEventListener('click', function(event) {
    toggleIsOpen(); 
    toggleModal(true); 
  });

  shopNowBtnDesk.addEventListener('click', function() {
    toggleModal(true); 
  });

  function toggleModal(isOpen) {
    const modalOverlay = document.querySelector('.modal-overlay');
    modalOverlay.classList.toggle('is-open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }

  document.addEventListener('DOMContentLoaded', function() {
    const orderLink = document.getElementById('your-order');
    const closeButton = document.getElementById('close-btn');

    orderLink.addEventListener('click', function(event) {
      event.preventDefault();
      toggleModal(true); 
    });

    closeButton.addEventListener('click', function() {
      toggleModal(false);
    });

    const block = document.querySelector('.header-container');
    const blockRect = block.getBoundingClientRect();
    const blockStart = blockRect.top + window.pageYOffset;
    const blockHeight = blockRect.height;

    function checkScroll() {
      const scrolledPast = window.pageYOffset - blockStart;
      if (scrolledPast > blockHeight * 1.2) {
        block.classList.add('scrolled');
      } else {
        block.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', checkScroll);
  });
})();
