"use strict";
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}
class Admin extends User {
    constructor(name, email, position, level) {
        super(name, email);
        this.position = position;
        this.level = level;
    }
}
const user1 = new Admin("Afonso", "afonso.ur@gmail.com", "DEV", 2);
console.log(user1);
console.log(user1.name);
