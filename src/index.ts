interface CadastroProps{
    nome?: string; //? is optional 
    email: string;
    status:boolean;
}

const newUser: CadastroProps = {
    email:"afonso.ur@gmail.com",
    status:true,
}

console.log(newUser); 

//same exemple, with function

interface CadastroDoisProps{
    nome:string;
    email?: string;
    status: boolean;
}

function user({nome, email, status}:CadastroDoisProps){
    console.log(nome);
    console.log(email);
    console.log(status);
}

user({nome:"Afonso", status:false});
user({nome:"Afonso Silva",email:"teste@teste.com", status:true});

function userTeste(teste: CadastroDoisProps){
    console.log(teste.nome);
}

userTeste({nome:"Afonso Silva",email:"teste@teste.com", status:true});