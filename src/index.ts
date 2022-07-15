
/* ###VECTOR 
interface TecnologyProps {
    id: string;
    name: string;
    versions: (string | number)[];
}

let tec1: TecnologyProps = {
    id:"1",
    name: "PHP",
    versions: ["php1", "php2", "php3", 7]
}
*/

interface TecnologyProps {
    id:string;
    name: string;
    description?: string; //?optional 
}

interface NamesProps{
    tecnology: TecnologyProps [];//Reusing interface. Property is an array of the mentioned interface
}

let frontend: NamesProps = {
    tecnology: [
        {id:"1", name: "ReactJS"},
        {id:"2", name: "VUE"}
    ]
}

console.log(frontend.tecnology);