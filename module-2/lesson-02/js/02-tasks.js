/**
 * Форматування посилання (endsWith)
 *
 * Напиши скрипт який перевіряє чи закінчується значення
 *  змінної link символом /. Якщо ні, додай до кінця
 *  значення link цей символ.
 * Використовуй конструкцію if...else.
 */

let link = "https://my-site.com/about";

if (!link.endsWith('/')){
  link += '/'
  // link = link + '/'
}

console.log(link);


/**
 * Форматування посилання (includes та логічне «І»)
 * Напиши скрипт який перевіряє чи закінчується значення
 * змінної link символом /. Якщо ні, додай до кінця
 * значення link цей символ, але тільки в тому випадку,
 * якщо в link є підрядок "my-site".
 * Використовуй конструкцію if...else або тернарний оператор.
 */

// let url = "https://my-site.somesite.com/about";
// console.log(url);

// // if (url.includes('my-site') && !url.endsWith('/')){
// //   url += '/'
// // }

// url = url.includes('my-site') && !url.endsWith('/') ? url + '/' : url;

// console.log(url);

/*
 * Пошук у рядку методом includes()
 */

// const blacklistedWord1 = "spam";
// const blacklistedWord2 = "sale";

// const string1 =
//   "Hello, I'm Prince Abdul, this is not spam, I'm offering you a million!".toLowerCase();
// const string2 = "Biggest SALE this week, don't miss out!".toLowerCase();
// const string3 = "#fatlivesmatter advertising campaign".toLowerCase();


// const result1 = !string1.includes(blacklistedWord1) && !string1.includes(blacklistedWord2);
// const result2 = !string2.includes(blacklistedWord1) && !string2.includes(blacklistedWord2);
// const result3 = !string3.includes(blacklistedWord1) && !string3.includes(blacklistedWord2);

// console.log(string1, result1)
// console.log(string2, result2)
// console.log(string3, result3)