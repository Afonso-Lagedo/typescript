/*
POO heritage
*/

class User{
    name: string;
    email:string;

    constructor(name:string, email:string){
        this.name = name;
        this.email = email;
    }
}

class Admin extends User{ //heritage of User
    
    position: string;
    level: number;

    constructor(name:string, email:string, position:string, level:number){
        
        super(name, email);

        this.position = position;
        this.level = level;
    }
    
}

const user1 = new Admin("Afonso", "afonso.ur@gmail.com", "DEV", 2);

console.log(user1);
console.log(user1.name);