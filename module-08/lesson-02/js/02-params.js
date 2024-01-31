/**
 * Деструктуризація об'єкта в параметрах функції
 */

// const user = {
//   username: "Jacob name",
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// Без деструктуризації
// function getUserName(obj) {
//   console.log(
//     `Hello my name is ${obj.name}, I know html - ${obj.skills.html}, css - ${obj.skills.css} and js -${obj.skills.js}`
//   );
// }

// З деструктуризацією
// function getUserName({
//   username,
//   skills: {
//     html, css, js
//   }
// }){
//   console.log(
//     `Hello my name is ${username}, I know html - ${html}, css - ${css} and js -${js}`
//   )
// }
// getUserName(user);


// function printInfo({username, age=0, city='error'}){
//   console.log(`Username -> ${username}, age -> ${age}, city -> ${city}`)
// }


// printInfo('Maksim', 34, 'London')
// printInfo('Maksim', undefined, 'London')

// printInfo({
//   username: 'Alex',

//   city: 'London'
// })

// printInfo({city: 'Kyiv'})


function countArray([n1, n2, n3]) {
  // return arr[0] + arr[1] + arr[2]
  return n1 + n2 + n3
}


console.log(countArray([1, 2, 3, 1, 2]))