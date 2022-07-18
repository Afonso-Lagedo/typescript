"use strict";
class Store {
    constructor(name, category) {
        this.name = name;
        this.category = category;
    }
}
const bk = new Store("BK", "Burguer");
console.log(bk);
console.log(bk.name);
