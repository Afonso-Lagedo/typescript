"use strict";
function cadastro(email, senha, nome = "Aluno") {
    let data = { email, senha, nome };
    console.log(data);
}
cadastro("teste@teste.com", "123");
cadastro("teste@teste.com", "123", "Afonso");
