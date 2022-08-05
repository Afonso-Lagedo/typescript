"use strict";
const riceA = {
    name: "white rice",
    price: 1500,
    format(value) {
        let valueFormat = value.toLocaleString('pt-BR', {
            style: "currency",
            currency: "BRL"
        });
        return valueFormat;
    }
};
console.log(riceA.format(1500));
const Car1 = {
    name: "Corsa",
    year: 2000
};
const Afonso = {
    name: "Afonso",
    year: "28"
};
console.log(Afonso);
