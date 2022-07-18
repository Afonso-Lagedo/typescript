/*
POO
*/
type TypeStatus = "OPEN" | "CLOSED";

class Store{
    //attributes
    name:string;
    category: string;

    //constructor
    constructor(name:string, category:string){
        this.name= name;
        this.category = category;
    }

    //method without paramers
    newStore(){
        console.log(`Store: ${this.name}, Category: ${this.category}`);
    }

    //method with paramers
    newRequeset(table:number): string{
        return` Table: ${table}`;
    }

    //method unknown amount of attributes
    products(...products: string[]){
        products.map((products) => {
            console.log(`Item: ${products}`)
        })
    }

    status(status:TypeStatus):void{
        if(status === "OPEN"){
            console.log("STORE OPEN");
        }
        else{
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
