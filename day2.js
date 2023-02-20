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

console.log(car1.Speed())
