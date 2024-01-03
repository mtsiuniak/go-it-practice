/**
 * Перебір об'єкта
 *
 * - Цикл for...in
 * - Метод Object.keys
 * - Метод Object.values
 */

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let totalFeedback = 0;

// for (let key in feedback){
//   // console.log(feedback[i]);
//   totalFeedback += feedback[key];
// }

// console.log("totalFeedback: ", totalFeedback);

/**
 * ---------------------------------
 */

// const keys = Object.keys(feedback);
// console.log(keys);

// console.log("totalFeedback: ", totalFeedback);

// const values = Object.values(feedback);
// console.log(values);

// console.log('totalFeedback: ', totalFeedback);




function makeCopy(objToCopy){
  const obj = {};

  for (let key in objToCopy){
    obj[key] = objToCopy[key]
  }

  return obj;
}

const car1 = {
  color: 'red',
  model: 'BMW'
}

const car2 = makeCopy(car1);
car1.color = 'green';

console.log(car1, car2)