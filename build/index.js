"use strict";
function newUser({ nome, endereco, status }) {
    console.log(`Nome: ${nome}`);
    console.log(`Endereço: ${endereco}`);
    console.log(`Status: ${status}`);
}
newUser({ nome: "Afonso", endereco: "Teste", status: true });
