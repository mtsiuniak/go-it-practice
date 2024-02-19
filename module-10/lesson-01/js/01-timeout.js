/*
 * Метод window.setTimeout(callback, delay, args)
 */

// console.log("До виклику setTimeout");

// setTimeout(
//   () => console.log("1 - Всередині зворотного виклику для setTimeout"),
//   2000
// )

// setTimeout(
//   () => console.log("2 - Всередині зворотного виклику для setTimeout"),
//   5000
// )

// console.log("Після виклику setTimeout");

/*
 * Очищення таймаута за допомогою clearTimeout(timeoutId)
 */
// const logger = (time) => {
//   console.log(`Лог через ${time} мс, оскільки не скасували таймаут`);
// };

// const timeoutId = setTimeout(
//   logger,
//   5000,
//   5000
// );

// console.log(timeoutId);
// clearTimeout(timeoutId);


/**
 * Можливість передати параметри для колбеку
 */
// const id = setTimeout((name, country) => {
//   console.log(`Hello, my name is ${name}, I'm from ${country}`);
// }, 1000, 'Alex', 'Ukraine');
