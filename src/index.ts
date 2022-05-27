//###boolean###
let exemple: boolean = true;
//console.log(typeof exemple);
//console.log(exemple);

let codeStatus: number = 123;
//conversion of number for boolean
exemple = Boolean(codeStatus);
//console.log(exemple);
//if variable no empty will true

//###array###
//array declaration
let numbers: number[];
//OUTHER FORM: let numbers: Array<number>;
//TWO TYPES: let numbers: <string | number>  OR let numbers: (string |number)[];
//input in array
numbers = [2,4,8,16];
//console.log(numbers);
//add element
numbers.push(32);
//console.log(numbers);

//###tuplas###
let test: [string, number];
test = ['teste', 55];
console.log (test);

test.push("teste2", 110);
console.log(test);

test.push(220, "teste3");
console.log(test);
