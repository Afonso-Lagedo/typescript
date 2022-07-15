
interface ProductProps{
    id:string;
    name: string;
    description: string;
}

let product1: ProductProps = {
    id:"1",
    name: "ps5",
    description:"video game"    
}

console.log(product1);

product1.id = "123";

console.log(product1);

interface NewProductProps{
    readonly id:string;//not to be able to modify
    name: string;
    description: string;
}

let product2 : NewProductProps = {
    id:"2",
    name:"xbox",
    description:"video Game"
}

console.log(product2);

//product2.id="55"; //it is error
console.log(product2.id); //can read 

