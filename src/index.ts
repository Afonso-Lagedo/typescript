interface ProductProps{
    id: string;
    name: string;
    price: number;

    //set input and output
    promocao: (price:number) => void;
}

//External funciton
function promo(price:number):void{
    console.log(`Value:${price}`)
}

const newProduct:ProductProps = {
    id:"1",
    name:"calça",
    price:20,
    promocao:promo
}

console.log(newProduct.promocao(15));
console.log(newProduct);
console.log("##########");
//Arrow function


interface CarProps{
    name:string;
    model:string;
    calc:(year:number)=>void
}

const newCar:CarProps ={
    name:"Corsa",
    model:"Sedan",
    calc: (year:number):void =>{
        console.log('Idade: ', 2022-year);
    }
}

console.log(newCar);
console.log(newCar.calc(2002));
console.log("##########");

//exemple 3, only function

//create interface
interface SumProps{
    (valor1: number, valor2:number):number;
}

let sum:SumProps = (valor1: number, valor2:number): number => {
    console.log('RESULT: ', valor1+valor2)
    return valor1+valor2;
}

sum(2,3);