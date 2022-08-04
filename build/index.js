"use strict";
function repository() {
    let datas;
    function getDatas() {
        return datas;
    }
    function setDatas(newDatas) {
        datas = newDatas;
    }
    return { setDatas, getDatas };
}
const rep1 = repository();
rep1.setDatas(20);
console.log(rep1.getDatas());
rep1.setDatas("20");
console.log(rep1.getDatas());
const rep2 = repository();
rep2.setDatas("11");
