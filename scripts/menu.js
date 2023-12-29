'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const mainEl = document.querySelector('main');
  const menuEl = document.querySelector('.menu');
  const toggleMenuBtnEl = document.querySelectorAll('.toggle-menu');
  const footerToggleMenuBtnEl = document.querySelector('.toggle-menu-footer');
  const burgerBtnEl = document.querySelector('.header__burger-btn');
  const mobileMenuEl = document.querySelector('.mobile-menu');
  const mobileMebuDropdownEls = document.querySelectorAll(
    '.mobile-menu__nav-list-item_dropdown'
  );

  const overlayEl = document.querySelector('.overlay');
  const toggleOverlayEl = document.querySelectorAll('.toggle-popup');
  const closeOverlayBtnEl = document.querySelector('.popup__close-btn');

  menuEl.classList.add('active');
  mainEl.classList.add('active');
  menuEl.style.maxHeight = menuEl.scrollHeight + 200 + 'px';

  toggleMenuBtnEl.forEach((b) =>
    b.addEventListener('click', () => {
      if (menuEl.classList.contains('active')) {
        menuEl.classList.remove('active');
        mainEl.classList.remove('active');
        menuEl.style.maxHeight = 0 + 'px';
      } else {
        menuEl.classList.add('active');
        menuEl.style.maxHeight = menuEl.scrollHeight + 200 + 'px';
      }
    })
  );
  footerToggleMenuBtnEl.addEventListener('click', () => {
    menuEl.classList.add('active');
    menuEl.style.maxHeight = menuEl.scrollHeight + 200 + 'px';
  });

  burgerBtnEl.addEventListener('click', () => {
    if (mobileMenuEl.classList.contains('active')) {
      mobileMenuEl.classList.remove('active');
      document.body.classList.remove('no-scroll');
    } else {
      mobileMenuEl.classList.add('active');
      document.body.classList.add('no-scroll');
    }
  });

  mobileMebuDropdownEls.forEach((el) =>
    el.addEventListener('click', () => {
      const content = el.querySelector('.mobile-menu__nav-list-item-body');
      if (el.classList.contains('active')) {
        content.style.maxHeight = 0 + 'px';
        el.classList.remove('active');
      } else {
        el.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 100 + 'px';
      }
    })
  );

  toggleOverlayEl.forEach((b) =>
    b.addEventListener('click', () => {
      overlayEl.classList.add('active');
      document.body.classList.add('no-scroll');
    })
  );

  closeOverlayBtnEl.addEventListener('click', () => {
    overlayEl.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });

  window.addEventListener('scroll', (e) => {
    if (window.pageYOffset >= 180) {
      menuEl.classList.remove('active');
      mainEl.classList.remove('active');
      menuEl.style.maxHeight = 0 + 'px';
    } else {
      menuEl.classList.add('active');
      mainEl.classList.add('active');
      menuEl.style.maxHeight = menuEl.scrollHeight + 200 + 'px';
    }
  });
});
