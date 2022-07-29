"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mixin_1 = require("./mixin");
class Vehicle {
    on() {
        console.log("car is on");
    }
    off() {
        console.log("car is off");
    }
}
class Specification {
    constructor(description) {
        this.description = description;
    }
}
class Car {
    constructor(name) {
        this.name = name;
    }
}
;
(0, mixin_1.applyMixins)(Car, [Vehicle, Specification]);
const opala = new Car("Opala 4.0");
opala.description = "BEBE PRA P####";
opala.on();
console.log(opala);
opala.off();
