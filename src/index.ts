/*
POO encapsulation-READONLY
*/

class Person{
    readonly id:string = "123";//enter ID is automatic, then no passing for constructor
    name: string;
    age: number;

    constructor(name:string, age:number){
        this.name=name;
        this.age=age;
    }

    //READONLY, does not work with function 
    showId(){
        //this.id="99";//it is erro, why id is READONLY 
        console.log(`ID: `, this.id)
    }
}

const Afonso = new Person("Afonso", 28);
console.log(Afonso);

//Afonso.id = "145";//it is erro, why id is READONLY 

Afonso.showId();
//or
console.log(Afonso.id);