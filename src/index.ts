/*
POO encapsulation-PRIVATE
*/

class Account {
    private limit: number = 450;

    private upLimit (quantity:number){
        if(quantity < 1000){
            this.limit = quantity;
            console.log(`Now, your limit is: ${this.limit}`);
        }
    }
}


class AccountPremium extends Account{
    limitAccount(){
        //return this.upLimit(1500);//it is error, why is private
    }
}

const User1 = new Account();

console.log(User1);
//User1.upLimit;//it is error, why is Private


