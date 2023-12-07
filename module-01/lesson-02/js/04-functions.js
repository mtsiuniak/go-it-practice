/**
 * Функции
 *
 * - Оголошення та виклик функції
 * - Параметри та аргументи
 * - Повернення значення
 */

// console.log("Before fnA execution");
// fnA();
// console.log("After fnA execution");

// console.log("Before fnB execution");
// fnB();
// console.log("After fnB execution");

// console.log("Before fnC execution");
// fnC();
// console.log("After fnC execution");

/**
 * Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 * маси тіла людини. Для цього необхідно розділити вагу на
 * квадрат висоти.
 *
 * Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть
 * бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової
 * частини може бути кома.
 *
 * Індекс маси тіла необхідно округлити до однієї цифри після коми.
 */

function calcBMI(weight, height){
    weight = Number.parseFloat(weight);
    height = Number.parseFloat(height);

    const bmi = weight / (height ** 2);

    return bmi.toFixed(1);
}


const bmi = calcBMI("88,3", "1.75");
console.log(bmi); // 28.8



// function sayHello(){
//     console.log("Hello world!")
//     console.log("Hello world!")
//     console.log("Hello world!")
// }



// function summa(num1, num2, num3){
//     const result = num1 + num2 + num3;
//     console.log(result);
// }


// function calcP(a, b){
//     const p = (a + b) * 2;
//     console.log(p);
// }


// calcP(213, 652)
// calcP(210, 327)



// return example

// const a = 123;

// function calcP(a, b){
//     const p = (a + b) * 2;
//     return p;
// }

// const b = calcP(1, 2)
// console.log(b);

// console.log(p);