/**
 * Напиши цикл for, який виводить у консоль браузера
 * числа за зростанням від a до b, але тільки якщо число кратне 5.
 */

const a = 20;
const b = 100;

for (let i = a; i <=  b; i++){

    if (i % 5 !== 0){
        break
    }

    console.log(i);


}

/*
 * Напиши скрипт, який підраховує суму всіх парних чисел,
 * які входять в діапазон чисел у змінних від min до max.
 * Наприклад, якщо min=0 и max=5, то діапазон 0-5, і в ньому два парних числа - 2 і 4, їх сума 6.
 */

// const min = 23;
// const max = 543278;

// let total = 0;


// for(let number = min; number <= max; number++){

//     if (number % 2 === 0){
//         // console.log(number);
//         total += number;
//     }

// }


// console.log(total);