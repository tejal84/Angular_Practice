class Passenger {
    firstName:string;
    lastName: string;
    frequentFlyerno: number
    constructor(firstName: string, lastName:string, flightno:number) 
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerno = flightno;
    }
    display(){
        console.log(this.firstName + " " + this.lastName + " "+ this.frequentFlyerno);
    }
}

var passenger = new Passenger("Jsck", "Sparrow", 102);
passenger.display();
var passenger2 =new passenger2("Harry","potter","479");
passenger2.display();


