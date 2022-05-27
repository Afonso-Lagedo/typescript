"use strict";
var Colors;
(function (Colors) {
    Colors["white"] = "#FFF";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
console.log(Colors.black);
var Status;
(function (Status) {
    Status[Status["ADMIN"] = 0] = "ADMIN";
    Status[Status["USER"] = 1] = "USER";
    Status[Status["STAFF"] = 2] = "STAFF";
})(Status || (Status = {}));
console.log(Status.ADMIN);
console.log(Status.USER);
console.log(Status.STAFF);
var StatusTwo;
(function (StatusTwo) {
    StatusTwo[StatusTwo["ADMIN"] = 2] = "ADMIN";
    StatusTwo[StatusTwo["USER"] = 0] = "USER";
    StatusTwo[StatusTwo["STAFF"] = 1] = "STAFF";
})(StatusTwo || (StatusTwo = {}));
console.log(StatusTwo.ADMIN);
console.log(StatusTwo.USER);
console.log(StatusTwo.STAFF);
let nome;
let example;
console.log(example);
let a;
a = 2;
console.log(a);
a = "b";
console.log(a);
let c = 1;
let mudaC = 2;
console.log(mudaC);
mudaC = c;
console.log(mudaC);
