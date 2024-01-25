/*
 * Властивість innerHTML
 * - зчитування
 * - запис
 */

const titleEl = document.querySelector('.title');
// titleEl.innerHTML = '<span>hello</span>'

// const p = document.querySelector('p')
// console.log(p.textContent)


/*
 * Вставка розмітки за допомогою insertAdjacentHTML()
 */

titleEl.insertAdjacentHTML('afterEnd', '<span>hello</span>')
