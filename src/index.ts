/*
//common function
function totalVendas(venda1: number, venda2: number){
    const total = venda1+venda2
    console.log(total);
    return total;
}
totalVendas(10, 35);
*/


//any quantity of parameter
function totalVendas(...vendas:number[]){
    const quantidade = vendas.length;

    console.log(quantidade);
}

totalVendas(10,20);
totalVendas(10,20, 30, 40);

//example two
function mostra(...nomes:string[]){
    nomes.map(nome =>{
        console.log(nome);
    })
}

mostra("Afonso", "Felipe");