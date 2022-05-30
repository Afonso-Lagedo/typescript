"use strict";
function totalVendas(...vendas) {
    const quantidade = vendas.length;
    console.log(quantidade);
}
totalVendas(10, 20);
totalVendas(10, 20, 30, 40);
function mostra(...nomes) {
    nomes.map(nome => {
        console.log(nome);
    });
}
mostra("Afonso", "Felipe");
