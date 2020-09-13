'use strict';

// Переключатель меню

// var headerNav = document.querySelector('.header__nav');
// var logo = document.querySelector('.logo');

(function () {
  var burger = document.querySelector('.burger');

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

  window.burger = {
    init: function () {
      toggleBurger('close');
      console.log(burger.className);
    }
  };
})();

// function toggleMenu(action) { // action = {hide, show}
//     if (action === 'hide' ) {
//         if (headerNav.classList.contains('header__nav--tablet-visible')) {
//             headerNav.classList.remove('header__nav--tablet-visible')
//         }
//     }

//     if (action === 'show' ) {
//         if (!headerNav.classList.contains('header__nav--tablet-visible')) {
//             headerNav.classList.add('header__nav--tablet-visible')
//         }
//     }
// }

// function toggleLogo(action) { // action = {hide, show}
//     if (action === 'hide' ) {
//         if (!logo.classList.contains('logo--hidden')) {
//             logo.classList.add('logo--hidden')
//         }
//     }

//     if (action === 'show' ) {
//         if (logo.classList.contains('logo--hidden')) {
//             logo.classList.remove('logo--hidden');
//         }
//     }
// }


