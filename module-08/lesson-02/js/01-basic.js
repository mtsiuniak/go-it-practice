/**
 * Деструктуризація об'єкта
 */



// const user1 = {
//   username: 'Alex',
//   // age: 45,
//   city: 'London'
// }


// const {username, age=0} = user1;

// console.log(username, age)

// const user2 = {
//   username: 'Alex',
//   age: 45,
//   city: 'London'
// }

// const {username: u1, age: a1} = user1;
// const {username: u2, age: a2} = user2;

// console.log(u1, u2)

// let username = user.name;
// let age = user.age;

// let {name, city} = user;

// console.log(name)
// console.log(city)



// const user = {
//   username: "Jacob name",
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// const {username} = user;
// console.log(username)

/**
 * Глибока деструктуризація об'єкта
 */

// const { skills: {html, js, css} } = user;


// console.log("html", html);
// console.log("css", css);
// console.log("js", js);

/**
 * Деструктуризація масива
 */

// const arr = [1, 2, 3, 4, 5];

// const [n1, n2, n3, n4, n5] = arr;
// console.log(n1, n2, n3,n4,n5)

// const [n1, n2, ...other] = arr;
// console.log(n1, n2, other)

// const n1 = arr[0]
// const n2 = arr[1]
// const n3 = arr[2]
// const n4 = arr[3]
// const n5 = arr[4]

