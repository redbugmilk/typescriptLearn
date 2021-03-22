class Vehicle {
    drive():void{
        console.log("drive drive");
    }
    honk():void{
        console.log("beep");

    }
}

class Car extends Vehicle{
    drive():void{
        console.log("brumm brumm")
    }
}

//instance
const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();

const car = new Car()
car.honk();
car.drive();