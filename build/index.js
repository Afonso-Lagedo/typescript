"use strict";
class Person {
    constructor(name, age) {
        this.id = "123";
        this.name = name;
        this.age = age;
    }
    showId() {
        console.log(`ID: `, this.id);
    }
}
const Afonso = new Person("Afonso", 28);
console.log(Afonso);
Afonso.showId();
console.log(Afonso.id);
