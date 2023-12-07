/**
 * Арифметичні функції
 *
 * - Number.parseInt
 * - Number.parseFloat
 * - Math
 */

let elementWidth = "50px";
console.log("elementWidth: ", elementWidth);

let elementHeight = "200.499999px";
console.log("elementHeight: ", elementHeight);

/**
 * Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д.
 * значення змінної value. Використовуй методи Math.floor(), Math.ceil()
 * та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.
 */

// const value = 27.5;


let height = Number.parseFloat(elementHeight);
console.log(height) // 200.74

console.log(Math.floor(height))
console.log(Math.ceil(height))
console.log(Math.round(height))


