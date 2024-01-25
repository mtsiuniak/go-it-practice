/*
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 *
 * Оброби форму та збери відгук користувача в об'єкт
 */

const form = document.querySelector(".js-form");

function formHandler(event){
    event.preventDefault();
    const data = {
        email: event.target.email.value,
        password: event.target.password.value,
        comment: event.target.comment.value
    }

    console.log(data);
}

form.addEventListener('submit', formHandler)

