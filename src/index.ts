//#####generics in interfaces 

/*interface NewProduct<V>{
    name:string;
    price:V;
}

const riceA: NewProduct<number> = {
    name:"white rice",
    price:1500
}

const riceB: NewProduct<number | string> = {
    name:"white rice",
    price:"Test"
}*/

//with methods

interface NewProduct<V extends number>{
    name:string;
    price:V;

    format(value: V): string;
}

const riceA: NewProduct<number> = {
    name:"white rice",
    price:1500

    format(value: number):string{
        let valueFormat = value.toLocaleString('pt-BR',{
            style:"currency",
            currency:"BRL"
        })

        return valueFormat
    }
}

console.log(riceA.format(1500));


//console.log(riceA);
//console.log(riceB);

interface NewCar<T extends number>{
    name: string;
    year: T;
}

const Car1: NewCar<number> = { // <string> is error, because extends number
    name: "Corsa",
    year: 2000
}

//console.log(Car1);

//#####generics in Type

type NewPerson <A extends number | string> ={
    name: string;
    year: A;
}

const Afonso: NewPerson<string>={
    name:"Afonso",
    year:"28"
}

console.log(Afonso);