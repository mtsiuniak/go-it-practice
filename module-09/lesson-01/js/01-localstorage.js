/**
 * LocalStorage
 */

const LS_KEY = "Array of names";
const names = ["Alice", "Kate", "Emma"];

// localStorage.setItem('myKey', 'Hello world from js!')
// const value = localStorage.getItem('myKey');
// console.log(value);
// localStorage.setItem('name', 'Maksim');
// localStorage.setItem('age', 45)
// localStorage.setItem('name', 'Alex');
// localStorage.removeItem('name');
// localStorage.clear();
// console.log(localStorage);


/**
 * Збереження
 * Чому треба використовувати метод JSON.stringify
 */
// const jsonData = JSON.stringify(names)
// localStorage.setItem(LS_KEY, jsonData);

/**
 * Читання
 * Чому треба використовувати метод JSON.parse
 */

// const rawData = localStorage.getItem(LS_KEY);
// const data = JSON.parse(rawData);
// console.log(data);

/**
 * Видалення
 */

// localStorage.removeItem(LS_KEY);

/**
 * LocalStorage не може зберігати функції
 */

// function add(a, b) {
//   return a + b;
// }

// const calculator = {
//   a: 5,
//   b: 10,
//   add() {
//     return this.a + this.b;
//   },
// };



// practice

// const info = {
//   username: 'Alex',
//   city: 'London',
//   points: [1, 2, 3],

//   test(){
//     console.log('Hello world!')
//   }
// }

// const jsonData = JSON.stringify(info);
// console.log(jsonData)


// const jsonData = `{"username":"Alex","city":"London","points":[1,2,3]}`


// const data = JSON.parse(jsonData);
// console.log(data.username);


// const users = [
//   'Alex',
//   'Andrew',
//   'Viktor',
//   null,
//   NaN,
//   undefined
// ];

// console.log(JSON.stringify(users));

// const jsData = `["Alex","Andrew","Viktor",null,null,null]`
// console.log(JSON.parse(jsData))