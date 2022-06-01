//Interfaces

//create interface with model of object

/*let user: object;//declarted object 

user = {
    nome:"Afonso",
    endereco:"Oriente",
    status: true
}*/

//and now one interface 

interface UserProps{
    nome:string;
    endereco:string;
    status: boolean;
}

//EXEMPLE 1

/*
const userTest: UserProps = {
    nome:"Afonso",
    endereco:"Oriente",
    status:true,
}

console.log(userTest);*/

//EXEMPLE 2

/*function newUser(nome:string, endereco:string, status:boolean):void{
    console.log(`Nome: ${nome}`);
    console.log(`Endereco: ${endereco}`);
    console.log(`Status: ${status}`);
}

newUser("Afonso", "Oriente", true);*/

//EXEMPLE 2B with interface application

function newUser ({nome,endereco,status}:UserProps):void{
    console.log(`Nome: ${nome}`);
    console.log(`Endereço: ${endereco}`);
    console.log(`Status: ${status}`);
}

newUser({nome:"Afonso", endereco:"Teste",status: true});
