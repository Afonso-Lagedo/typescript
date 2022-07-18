//###TYPE ALIAS###

type TypeId = number | string | null;

//function access (id: string | number | null, name: string){//example without type alias
function access (id: TypeId, name: string){//example with type alias
    console.log (`Id: ${id} - Nome: ${name}`)
}

//function log(id: string | number | null){//example without type alias
function log(id:TypeId){//example with type alias
    console.log(`Conta de id: ${id}`)
}

access(123, "Afonso");

access("7", "Rafaela");

log("5");