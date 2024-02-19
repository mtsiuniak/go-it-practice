/**
 * - Показуємо та ховаємо, додаючи/видаляючи клас is-visible
 * - Ховаємо через певний час
 * - Ховаємо при кліці
 * - Не забуваємо чистити таймер
 */

const NOTIFICATION_DELAY = 5000;
let timeoutId = null;
const notification = document.querySelector(".js-alert");

/*
 * Функції
 */
function onNotificationClick() {
  hideNotification()
  clearTimeout(timeoutId);
}


notification.addEventListener('click', onNotificationClick)

function showNotification() {

  notification.classList.add('is-visible')

  console.log(
    "Закриваємо сповіщення автоматично, щоб воно не залишалося відкритим"
  );

  timeoutId = setTimeout(
    hideNotification,
    NOTIFICATION_DELAY
  )

}

function hideNotification() {
  notification.classList.remove('is-visible')
}




// const username = 'Alex';

// try {
//   username = 'Viktor';
// }
// catch {
//   console.log('Error!')
// }
// finally {
//   console.log('Always executes!')
// }




// console.log('End of code!')




