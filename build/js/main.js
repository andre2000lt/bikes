'use strict';

// Переключатель меню

// var headerNav = document.querySelector('.header__nav');
// var logo = document.querySelector('.logo');

(function () {
  var burger = document.querySelector('.burger');
  var headerTop = document.querySelector('.header__top');
  var header = document.querySelector('.header');
  var menuItem = document.querySelectorAll('.site-nav a');
  var body = document.querySelector('body');

  function toggleBurger(action) { // action = {open, close}
    if (action === 'open') {
      if (!(burger.classList.contains('burger--open'))) {
        burger.classList.add('burger--open');
      }
    }

    if (action === 'close') {
      if (burger.classList.contains('burger--close')) {
        burger.classList.remove('burger--open');
      }
    }
  }

  function toggleMenu(action) { // action = {hide, show}
    if (action === 'hide') {
      if (headerTop.classList.contains('header__top--tablet-visible')) {
        headerTop.classList.remove('header__top--tablet-visible');
        body.classList.remove('menu-opened');
      }
    }

    if (action === 'show') {
      if (!headerTop.classList.contains('header__top--tablet-visible')) {
        headerTop.classList.add('header__top--tablet-visible');
        body.classList.add('menu-opened');
      }
    }
  }

  function hideMenu() {
    toggleMenu('hide');

    toggleBurger('open');
  }


  function showMenu() {
    toggleMenu('show');
    toggleBurger('close');
  }

  if (burger) {
    header.onload = hideMenu();
    headerTop.classList.add('header__top--fullscreen');
    burger.classList.remove('burger--hidden');

    burger.addEventListener('click', function () {
      if (burger.classList.contains('burger--open')) {
        showMenu();
      } else {
        hideMenu();
      }
    });
  }

  menuItem.forEach(function (item) {
    item.addEventListener('click', function () {
      hideMenu();
    });
  });


})();
