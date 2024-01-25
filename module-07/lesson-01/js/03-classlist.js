/*
 * Інтерфейс classList
 * - add
 * - remove
 * - toggle
 * - replace
 * - contains
 */

const currentPageUrl = '/contact';

const linkEl = document.querySelector(
  `.site-nav__link[href="${currentPageUrl}"]`,
);


// linkEl.classList.add('styled-btn')
// linkEl.classList.remove('site-nav__link')
// linkEl.classList.replace('site-nav__link', 'styled-btn')
console.log(linkEl.classList.contains('site-nav__link'))

