//External funciton
function promo(price) {
    console.log("Value:".concat(price));
}
var newProduct = {
    id: "1",
    name: "calça",
    price: 20,
    promocao: promo
};
console.log(newProduct.promocao(15));
console.log(newProduct);
console.log("##########");
var newCar = {
    name: "Corsa",
    model: "Sedan",
    calc: function (year) {
        console.log('Idade: ', 2022 - year);
    }
};
console.log(newCar);
console.log(newCar.calc(2002));
console.log("##########");
var sum = function (valor1, valor2) {
    console.log('RESULT: ', valor1 + valor2);
    return valor1 + valor2;
};
sum(2, 3);
