interface IFlight {
    flightNo: number;
    from: string;
    to: string;
}

class Flight implements IFlight {
    flightNo: number;
    from: string;
    to: string;

    constructor(flightNo: number, from: string, to:string) {
        this.flightNo = flightNo;
        this.from = from;
        this.to = to ; 
    }
}


var objFlight = new Flight(123, "Mumbai", "UK");
