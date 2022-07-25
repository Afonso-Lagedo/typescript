"use strict";
class Account {
    constructor() {
        this.limit = 450;
    }
    upLimit(quantity) {
        if (quantity < 1000) {
            this.limit = quantity;
            console.log(`Now, your limit is: ${this.limit}`);
        }
    }
}
class AccountPremium extends Account {
    limitAccount() {
    }
}
const User1 = new Account();
console.log(User1);
