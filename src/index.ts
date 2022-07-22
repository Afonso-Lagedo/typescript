/*
POO encapsulation-PUBLIC
public: all can view or modify, only own class, no necess of are declared, is the default
private: nobody can view or modify
protected: son class can view and modify
readonly:  only read
*/

class User{
    public name: string;
    public email:string;

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

    modifyPosition(){// public for default 
        console.log("Position Modified");
    }
    
}

const user1 = new Admin("Afonso", "afonso.ur@gmail.com", "DEV", 2);

console.log(user1);
user1.modifyPosition();

console.log(user1.position);
user1.position = "MANEGER";//Can are modify, why is public