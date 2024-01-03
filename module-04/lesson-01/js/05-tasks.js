/**
 * Напиши скрипт, який для об'єкта user, послідовно:
 * - додає поле mood зі значенням 'happy'
 * - замінює значення hobby на 'skydiving'
 * - замінює значення premium на false
 * - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
 */

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = 'happy'
// user['mood'] = 'happy'

user.hobby = 'skydiving'
user.premium = false;

// for (let key in user){
//   console.log(`${key}:${user[key]}`)
// }

// const keys = Object.keys(user);
// const values = Object.values(user);

// for (let index = 0; index < keys.length; index++){
//   console.log(`${keys[index]}:${values[index]}`)
// }


// const keys = Object.keys(user);

// for (let key of keys){
//   console.log(`${key}:${user[key]}`)
// }

/**
 * У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
 * підсумовування всіх зарплат і збережіть результат у змінній sum.
 * Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
 */

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};


let sum = 0;

for (let val of Object.values(salaries)){
  sum += val;
}

console.log(sum);
