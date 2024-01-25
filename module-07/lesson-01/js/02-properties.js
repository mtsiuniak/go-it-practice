/*
 * Властивості елемента (hero)
 * - Зображення
 * - Текст та textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */

const imageEl = document.querySelector('.hero__image');
const heroTitleEl = document.querySelector('.hero__title');

/*
 * Атрибути
 * - get(ім'я-атрибута)
 * - set(ім'я-атрибута)
 * - remove(ім'я-атрибута)
 * - has(ім'я-атрибута)
 */

const url = "https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480"



// heroTitleEl.textContent = 'Hello from vs code'
// // imageEl.setAttribute('src', url)
// imageEl.src = url

// console.log(imageEl.getAttribute('alt'))
// console.log(imageEl.removeAttribute('src'))
// console.log(imageEl.hasAttribute('src'))


/*
 * Data-атрибути
 */
const actions = document.querySelectorAll('.actions button');

actions.forEach(el => {
    el.setAttribute('data-hello', 'hi')
    console.log(el.dataset.action)
})