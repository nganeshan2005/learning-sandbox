class Car {
    constructor(brand, color, type, mileage){
        this.Brand = brand;
        this.color = color,
        this.Type = type,
        this.Mileage = mileage
    }
    Speed(){
        console.log(`${this.Brand} ${this.Mileage}`);
    };
};

var car1 = new Car('Toyota', 'Red', 'Petrol', 23);

// console.log(car1.Speed())

class PremiumCar extends Car {
    constructor(){
    super(brand, color, type, mileage)
    }
    IsPremium(){
        console.log(super.this.Brand);
        console.log(`${this.Brand} is Premium Car`);
        
    };
}

// var car2 = new PremiumCar(Audi)

// console.log (car2.IsPremium(Audi))