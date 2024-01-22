/**
 * Класи
 *  - Оголошення класу
 *  - Конструктор класу
 *  - Методи класу
 *  - Прототип екземпляру
 *  - Приватні властивості
 *  - Геттери і сеттери
 *  - Статичні властивості
 */

// class User {

//     constructor(username, age, city){
//         console.log('Created!', username)
//         this.name = username
//         this.age = age
//         this.city = city
//     }

//     sayHello(){
//         console.log('Hello from user!')
//     }

//     login(){
//         console.log('User logged in!')
//     }
// }

// const user1 = new User('Alex', 23, 'Kyiv');
// const user2 = new User('Andrew', 45, 'Lviv');
// const user3 = new User('Viktor', 12, 'Odessa');

// console.log(user1)
// console.log(user2)
// console.log(user3)


class Rectangle {

    #a;
    #b;
    static counter = 0;

    static printAllRectangles(){
        console.log(Rectangle.counter)
    }

    constructor(a, b){
        Rectangle.counter += 1
        this.#a = a;
        this.#b = b;
    }

    getPerimetr(){
        return (this.#a + this.#b) * 2;
    }

    getArea(){
        return this.#a * this.#b;
    }

    // getA(){
    //     return this.#a;
    // }

    // setA(newValue){
    //     this.#a = newValue;
    // }

    get a(){
        return this.#a;
    }

    set a(value){
        this.#a = value;
    }
}

const r1 = new Rectangle(12, 34);
const r2 = new Rectangle(12, 34);
const r3 = new Rectangle(12, 34);
console.log(Rectangle.counter)
Rectangle.printAllRectangles()
// const r2 = new Rectangle(22, 76);
// console.log(r1)
// console.log(r2)
// console.log(r1.getPerimetr())
// console.log(r2.getPerimetr())


// console.log(r1)
// r1.#a = 4000
// console.log(r1)

// console.log(r1.getPerimetr())

// console.log(r1.getA())
// r1.setA(1000)
// console.log(r1.a)
// r1.a = 550
// console.log(r1)