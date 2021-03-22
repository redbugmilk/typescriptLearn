class Vehicle {
    //if no modifier assume public
    
    private honk():void{
        console.log("beep");

    }

    honk2():void{
        console.log("beep");

    }

    protected honk3():void{
        console.log("beep");

    }
}

class Car extends Vehicle{
    private drive():void{
        console.log("brumm brumm")
    }
    startDrivingProcess(): void {
        this.drive();
        this.honk3();
    }
}

//instance
const vehicle = new Vehicle();
//vehicle.drive();
vehicle.honk2();

const car = new Car()
car.honk2();
//car.drive();
car.startDrivingProcess();