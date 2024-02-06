const STORAGE_KEY = "feedback-msg";

const form = document.querySelector(".feedback-form");
// const textarea = form.querySelector("textarea");

function readFormData(form){
    const message = form.message.value;
    const username = form.name.value;
    return {
        message,
        username
    }
}

/*
 * - Скасовуємо стандартну поведінку
 * - Видаляємо повідомлення зі сховища
 * - Очищуємо форму
 */

form.addEventListener('submit', (event) => {
    event.preventDefault();
    // localStorage.clear()
    localStorage.removeItem(STORAGE_KEY)
    form.reset()
})


/*
 * - Отримуємо значення поля
 * - Зберігаємо його у сховище
 */

form.addEventListener('input', (event) => {
    event.preventDefault();
    const data = readFormData(event.currentTarget);
    const jsonData = JSON.stringify(data);
    localStorage.setItem(STORAGE_KEY, jsonData);
})

/*
 * - Отримуємо значення зі сховища
 * - Якщо там щось було, оновлюємо DOM
 */

const rawData = localStorage.getItem(STORAGE_KEY);
if (rawData){
    const data = JSON.parse(rawData);
    form.name.value = data.username;
    form.message.value = data.message;
}
