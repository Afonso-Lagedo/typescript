/*function login(userName:string){//typing of function parameter
    console.log('Bem vindo', userName);
}*/

/*function login(userName:string):void{//return typing 
    let message = "Bem vindo " + userName; 
    console.log(message);
}
login("Afonso");*/

/*function login(userName: string): boolean{
    let text ="Teste: " + userName;

    console.log(text);

    return true;
}

const test = login("teste 123");

console.log(test);//return the type
*/

function login (userName: string|number){
    let message = "Bem vindo" + userName;
    console.log(userName);
}

login("Afonso");
login(123);