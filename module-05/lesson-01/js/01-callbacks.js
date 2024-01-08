/**
 * Функція зворотнього виклика (callback)
 *
 * - Функція як значення
 * - Колбек-функції
 * - Інлайн-колбеки
 */

// function fnA(message) {
//   console.log(message);
// }

// function fnB(number) {
//   console.log("Log during fnB execution ", number);
// }

// fnA("A message");
// fnB(90)

/**
 * Функція calc(a, b, callback)
 */

// function calc(a, b) {
//   return a + b;
// }

const calc = function(a, b){
  return a + b;
}

calc(2, 3);

calc(10, 8);

/**
 * Напишіть функцію each(array, callback), яка першим параметром очікує масив,
 * а другим - функцію, яка застосовується до кожного елемента масиву. Функція
 * each повинна повернути новий масив, елементами якого будуть
 * результати виклику коллбека.
 */

function each(array, callback) {
  const newArray = [];

  for(let a of array){
    const value = callback(a);
    newArray.push(value);
  }

  return newArray;
}

console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value * 2;
  })
);




console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value - 10;
  })
);

console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return Math.sqrt(value);
  })
);

console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.ceil(value);
  })
);

console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.floor(value);
  })
);
