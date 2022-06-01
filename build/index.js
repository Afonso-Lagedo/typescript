"use strict";
const newUser = {
    email: "afonso.ur@gmail.com",
    status: true,
};
console.log(newUser);
function user({ nome, email, status }) {
    console.log(nome);
    console.log(email);
    console.log(status);
}
user({ nome: "Afonso", status: false });
user({ nome: "Afonso Silva", email: "teste@teste.com", status: true });
function userTeste(teste) {
    console.log(teste.nome);
}
userTeste({ nome: "Afonso Silva", email: "teste@teste.com", status: true });
