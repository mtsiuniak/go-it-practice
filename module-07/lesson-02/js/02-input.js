/**
 * - Подія input
 * - Подія blur
 *
 * Виводь в консоль все що користувач вводить в input
 */

const userName = document.querySelector(".js-user-name");

/**
 * Користувач вводить в input своє ім'я після втрати
 * фокусу отримує alert з повідомленням-привітанням
 */

function inputHandler(event){
    console.dir(event.target.value)
}

function blurHandler(event){
    const name = event.target.value;
    alert(`Hello, ${name}`);
}

userName.addEventListener('input', inputHandler)
userName.addEventListener('blur', blurHandler)