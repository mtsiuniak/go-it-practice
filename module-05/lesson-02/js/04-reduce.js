/**
 * Метод reduce
 *
 * - Поелементно перебирає оригінальний масив
 * - Значення, що повертається, залежить від розробника
 */

// const numbers = [5, 10, 15, 20, 25];
// const total = numbers.reduce((accum, value) => accum + value);
// console.log(total);

/**
 * Рахуємо загальну зарплату
 */

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const totalSalary = Object.values(salary).reduce((prev, cur) => prev + cur);
// console.log(totalSalary);

/**
 * Рахуємо загальну кількість годин
 */

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
  { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
];

// const totalTimePlayed = players.reduce(
//   (time, player) => time + player.timePlayed, 0
// );
// console.log(totalTimePlayed);

/**
 * Рахуємо загальну суму товарів кошика
 */
// const cart = [
//   { label: "Apples", price: 100, quantity: 2 },
//   { label: "Bananas", price: 120, quantity: 3 },
//   { label: "Lemons", price: 70, quantity: 4 },
// ];

// const totalAmount = cart.reduce(
//   (totalPrice, product) => totalPrice + product.price * product.quantity, 0
// );
// console.log(totalAmount);


// const names = [
//   'Alex',
//   'Viktor',
//   'Andrew'
// ]

// const result = names.reduce((acc, name) => acc + name[0], 'FirstLetters: ')

// console.log(result)