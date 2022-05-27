//Type ENUM

enum Colors{
    white ="#FFF",
    black ="#000"
}

console.log(Colors.black);

//Example two
enum Status{
    ADMIN,
    USER,
    STAFF
}

console.log(Status.ADMIN);
console.log(Status.USER);
console.log(Status.STAFF);

//Example three
enum StatusTwo{
    ADMIN = 2,
    USER = 0,
    STAFF = 1
}

console.log(StatusTwo.ADMIN);
console.log(StatusTwo.USER);
console.log(StatusTwo.STAFF);

//###Type NULL###
let nome: null;
//No input value

//###Undefined###
let example;
console.log(example);

//###Unknown###
let a: unknown;
a=2;
console.log(a);
a="b";
console.log(a);

//###Assertions###
let c: unknown = 1;
let mudaC: number = 2;
console.log(mudaC);

//mudaC = C; IT IS ERROR
mudaC = c as number;//IT IS OK;
console.log(mudaC);