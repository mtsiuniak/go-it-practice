/**
 * Наслідування класів
 *
 *  - extends
 *  - Конструктор дочірнього класу (super)
 *  - Методи дочірнього класу
 */


class Transport {
    color;

    constructor(color){
        this.color = color;
    }

    startEngine(){
        console.log('Engine started!')
    }
}


class Car extends Transport {
    model;

    constructor(color, model){
        super(color)
        this.model = model;
        
    }

}

const car = new Car('green', 'bmw')
console.log(car.color, car.model)
car.startEngine()
