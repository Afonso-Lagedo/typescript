//Generics: adaptable structure
//use in function, interface, type, class 

/*function repository(){
    let datas: number;

    function getDatas(){
        return datas;
    }

    function setDatas(newDatas:number){
        datas =  newDatas;
    }

    return{setDatas, getDatas};
}


const rep1 = repository();

rep1.setDatas(20);

console.log(rep1.getDatas());
*/

//is error:
//rep1.setDatas("20");


//###With generics

function repository<T>(){ //for strength in one or more types: <T extends string | number>
    let datas: T;

    function getDatas(){
        return datas;
    }

    function setDatas(newDatas:T){
        datas =  newDatas;
    }

    return{setDatas, getDatas};
}


const rep1 = repository();

rep1.setDatas(20);

console.log(rep1.getDatas());

rep1.setDatas("20");

console.log(rep1.getDatas());


//example 2, defined generic

const rep2 = repository<string>();

rep2.setDatas("11");

//is error:
//rep2.setDatas(11);


/*
###Standards

S state
T type
K key
V value
E element
*/