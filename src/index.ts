/*function cadastro (email:string, senha:string, nome:string):void{
    let data = {email, senha, nome}
    console.log(data);
}

cadastro("teste@teste.com","teste", "teste_nome");
*/

/*
//example with value undefined
function cadastro (email:string, senha:string, nome?:string):void{//or undefined
    let data = {email, senha, nome}
    console.log(data);
}

cadastro("teste@teste.com.br", "teste_senha");
*/

//exemple with default value
function cadastro (email:string, senha:string, nome="Aluno"):void{
    let data = {email, senha, nome}
    console.log(data);
}

cadastro("teste@teste.com","123");
cadastro("teste@teste.com","123", "Afonso");

