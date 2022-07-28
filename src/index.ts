
type DataAccount = {
    name:string;
    number:string;
    address:string;
}

abstract class AccountBank{ //cannot be instantiated
    abstract newAccount(data:DataAccount):boolean;
}

class PhysicalPerson extends AccountBank{
    newAccount(data: DataAccount): boolean {
        
        console.log(`New account physical person created with success ${data.name}`)

        return true;
    }
}

class LegalPerson extends AccountBank{
    newAccount(data: DataAccount): boolean {
        
        console.log(`New account legal person created with success ${data.name}`)

        return true;
    }
}



const Afonso = new PhysicalPerson();

Afonso.newAccount({
    name:"Afonso",
    number:"123",
    address:"AV Faria Lima"
});



const Dev = new LegalPerson();

Dev.newAccount({
    name:"Dev Afonso",
    number:"456",
    address:"AV PAULISTA"
});



