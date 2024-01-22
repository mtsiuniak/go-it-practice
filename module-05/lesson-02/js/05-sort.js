/**
 * Метод toSorted
 *
 * - Свій порядок сортування чисел
 * - Свій порядок сортування рядків
 * - Сортування об'єктів
 *
 * За замовчуванням:
 * - сортує за зростанням
 * - приводить елементи до рядка і сортує за [Unicode](https://unicode-table.com/en/)
 */

// const numbers = [1, 9, 6, 2, 3];

// const sorted = numbers.sort(
//   (next, current) => {

//     if (current > next){
//       return -1
//     }
//     else {
//       return 1
//     }

//   }
// );
// console.log("sorted ", sorted);

// const letters = ["b", "B", "a", "A"].sort(
//   (next, current) => {
//     if (current > next){
//       return -1
//     }
//     else {
//       return 1
//     }
//   }
// );
// console.log("letters", letters);

/**
 * compareFunction - функція порівняння (callback)
 * Елементи масиву сортуються відповідно до її значення, що повертається
 */

// const numbers = [1, 9, 6, 2, 3];


// console.log(
//   numbers.toSorted((curEl, nextEl) => {
//     return nextEl - curEl;
//   })
// );

// const descSortedNumbers = numbers.toSorted((next, current) => current - next);
// const ascSortedNumbers = numbers.toSorted((next, current) => next - current);
// console.log("descSortedNumbers", descSortedNumbers);
// console.log("ascSortedNumbers", ascSortedNumbers);

/**
 * Сортування масиву об'єктів
 */
const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, online: true },
  { id: "player-3", name: "Aiwi", timePlayed: 230, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
  { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
];

// За ігровим часом
const sortedByBestPlayers = players.toSorted(
  (current, next) => current.timePlayed - next.timePlayed
);
console.table(sortedByBestPlayers);

const sortedByWorstPlayers = players.toSorted(
  (current, next) => next.timePlayed - current.timePlayed
);
console.table(sortedByWorstPlayers);

// По первой букве имени
// const byName = players.toSorted(
//   (current, next) => {
//     if (current.name[0] > next.name[0]){
//       return 1
//     }
//     else {
//       return -1
//     }
//   }
// );


// const byName = players.toSorted(
//   (current, next) => current.name[0] > next.name[0] ? 1 : -1
// );

// console.table(byName);
