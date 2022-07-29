import { applyMixins } from './mixin';

class Vehicle{
    on():void{
        console.log("car is on");
    }
    off():void{
        console.log("car is off");
    }
}

class Specification{
    description:string;

    constructor(description:string){
        this.description=description;
    }
}

class Car{
    name:string;

    constructor(name:string){
        this.name=name;
    }
}

interface Car extends Vehicle, Specification{};

//atributt:(interface and [class])
applyMixins(Car,[Vehicle, Specification]);

const opala = new Car("Opala 4.0");
opala.description = "BEBE PRA P####"

opala.on();
console.log(opala);
opala.off()

