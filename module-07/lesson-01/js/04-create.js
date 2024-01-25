/*
 * Створення та додавання елементів
 */

/*
 * Створюємо заголовок
 */
const titleEl = document.createElement('h1');
titleEl.textContent = 'Hello from js!'

// const hero = document.querySelector('.hero')
// hero.after(titleEl)

/*
 * Створюємо зображення
 * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
 * valais-alpine-mountains-glacier
 */
const imageEl = document.createElement('img');

imageEl.setAttribute('src', 'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg')

imageEl.setAttribute('alt', 'valais-alpine-mountains-glacier')

const heroEl = document.querySelector('.hero');
heroEl.append(imageEl)

/*
 * Створюємо та додаємо новий пункт меню
 */
const navItemEl = document.createElement('li');
navItemEl.textContent = 'Products'

const menu = document.querySelector('ul.site-nav')
menu.prepend(navItemEl)

