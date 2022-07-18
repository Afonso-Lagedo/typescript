/*
POO
*/

class Store{
    name:string;
    category: string;

    constructor(name:string, category:string){
        this.name= name;
        this.category = category;
    }
}

const bk = new Store("BK", "Burguer");

console.log(bk)
console.log(bk.name)