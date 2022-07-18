"use strict";
class Store {
    constructor(name, category) {
        this.name = name;
        this.category = category;
    }
    newStore() {
        console.log(`Store: ${this.name}, Category: ${this.category}`);
    }
    newRequeset(table) {
        return ` Table: ${table}`;
    }
    products(...products) {
        products.map((products) => {
            console.log(`Item: ${products}`);
        });
    }
    status(status) {
        if (status === "OPEN") {
            console.log("STORE OPEN");
        }
        else {
            console.log("STORE CLOSED");
        }
    }
}
const bk = new Store("BK", "Burguer");
bk.newStore();
const newRequeset = bk.newRequeset(7);
console.log(newRequeset);
const test = bk.products("Hamburguer", "Juice", "Chocolate");
console.log(test);
bk.status("CLOSED");
