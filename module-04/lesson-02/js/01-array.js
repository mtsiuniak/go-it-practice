/**
 * Масив об'єктів
 *
 * - Перебор масива
 * - Пошук об'єкта за значенням властивості
 * - Колекція значень властивості
 */

const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: false },
  { name: "Ajax", online: true },
];

console.log(friends);

/**
 * Пошук друга за іменем
 */
// function findFriendByName(allFriends, friendName) {

//   for(let friend of allFriends){
//     if (friend.name === friendName){
//       return friend;
//     }
//   }

// }

// console.log(findFriendByName(friends, "Poly"));
// console.log(findFriendByName(friends, "Chelsy"));

/**
 * Отримуємо імена всіх друзів
 */
// function getAllNames(allFriends) {

//   const allNames = [];
//   for (let friend of allFriends){
//     allNames.push(friend.name)
//   }

//   return allNames;
// }

// console.log(getAllNames(friends));

/**
 * Отримуємо імена тільки тих друзів, які зараз онлайн
 */
// function getOnlineFriends(allFriends) {
//   const onlineUsers = [];

//   for (let f of allFriends){
//     if (f.online){
//       onlineUsers.push(f.name)
//     }
//   }

//   return onlineUsers;
// }

// console.log(getOnlineFriends(friends));

/**
 * Напишіть функцію calcTotalPrice(stones, stoneName),
 * яка приймає масив об'єктів та рядок з назвою каменю.
 * Функція рахує і повертає загальну вартість каміння з
 * таким ім'ям, ціною та кількістю з об'єкта
 */

const stones = [
  { name: "Смарагд", price: 1300, quantity: 4 },
  { name: "Діамант", price: 2700, quantity: 3 },
  { name: "Сапфір", price: 400, quantity: 7 },
  { name: "Щебінь", price: 200, quantity: 2 },
];



function calcTotalPrice(stones, stoneName){
    for (let s of stones){

      if (s.name === stoneName){
        return `${s.name}: Amount: ${s.quantity} Result: ${s.quantity * s.price}`
      }

    }
}

console.log(calcTotalPrice(stones, "Діамант"))