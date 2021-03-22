class Vehicle {
    drive():void{
        console.log("drive drive");
    }
    honk():void{
        console.log("beep");

    }
}

//instance
const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();